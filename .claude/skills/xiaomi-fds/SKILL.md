---
name: xiaomi-fds-auto-upload
description: Use when the user runs /xiaomi-fds-auto-upload or its subcommands (upload, config). Also use when additionalContext contains "FDS_UPLOAD_REMIND:" — this means a hook just fired after a .html/.png/.jpg/.jpeg/.gif/.webp/.svg file was written, and Claude must immediately tell the user: "需要上传到 FDS 预览吗？可以运行 `/xiaomi-fds-auto-upload` 一键上传。" Also use after any Write tool call that wrote a .html/.png/.jpg/.jpeg/.gif/.webp/.svg file — check if the written file has one of these extensions, and if so tell the user: "需要上传到 FDS 预览吗？可以运行 `/xiaomi-fds-auto-upload` 一键上传。"
user-invocable: true
---

# fds — 小米 FDS 文件上传工具

## Hook 回路说明

当 `additionalContext` 中包含 `FDS_UPLOAD_REMIND:<文件路径>` 时，说明 PostToolUse hook 刚触发（用户刚写了可预览的静态文件）。此时**不走子命令路由，也不做 Hook 自检**，直接向用户说：

> 需要上传到 FDS 预览吗？可以运行 `/xiaomi-fds-auto-upload` 一键上传。

---

## 子命令路由

| 调用方式 | 执行流程 |
|---------|---------|
| `/xiaomi-fds-auto-upload config` | 配置流程 |
| `/xiaomi-fds-auto-upload upload [path]` | 上传流程 |
| `/xiaomi-fds-auto-upload [path]` | 上传流程 |
| `/xiaomi-fds-auto-upload`（无参数） | 上传流程（Step 0 静默检测配置，未配置则自动执行配置流程后继续上传） |

---

## 启动自检（每次调用时静默执行，优先于其他步骤）

**在执行任何子命令之前**，静默用 Bash 工具**一次性**读取 `~/.fds-upload-config.json`，同时检查 hook 状态、FDS 配置完整性、SDK 缓存标记：

```bash
python -c "
import json, os
path = os.path.expanduser('~/.fds-upload-config.json')
if not os.path.exists(path):
    print('NO_HOOK')
    print('NOT_CONFIGURED')
    print('SDK_UNKNOWN')
else:
    with open(path, encoding='utf-8') as f:
        cfg = json.load(f)
    hi = cfg.get('hook_installed')
    print('OK' if hi is True else ('HOOK_FAILED' if hi == 'failed' else 'NO_HOOK'))
    required = ['access_id', 'access_secret', 'endpoint', 'bucket']
    missing = [k for k in required if not cfg.get(k)]
    print('MISSING:' + ','.join(missing) if missing else 'CFG_OK')
    print('SDK_OK' if cfg.get('sdk_installed') else 'SDK_UNKNOWN')
"
```

输出共 3 行，分别对应 hook / 配置 / SDK 状态：

- **行1（hook）**：`OK` → 跳过；`HOOK_FAILED` → 跳过（之前已失败，不重试，继续原子命令）；`NO_HOOK` → 执行自动写入 Hook 流程，完成后继续原子命令。
- **行2（配置）**：`CFG_OK` → 跳过（上传流程 Step 0 直接判定为 OK）；`NOT_CONFIGURED` 或 `MISSING:...` → 上传流程 Step 0 触发配置流程。
- **行3（SDK）**：`SDK_OK` → 跳过 Step 2 SDK 检查；`SDK_UNKNOWN` → 上传流程 Step 2 正常执行检查，安装成功后写入 `sdk_installed: true`。

- 输出 `NO_HOOK`（行1）→ 执行以下自动写入流程，**完成后继续执行原子命令，不需要用户重新输入**：

### 自动写入 Hook

分两步执行：

**Step A** — 用 Write 工具创建 hook 脚本 `~/.claude/fds-upload-hook.py`（如已存在则跳过）：

文件内容：
```python
import sys, json, os
data = json.load(sys.stdin)
fp = data.get('tool_input', {}).get('file_path', '')
ext = os.path.splitext(fp)[1].lower()
if ext in ('.html', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'):
    result = {
        'hookSpecificOutput': {
            'hookEventName': 'PostToolUse',
            'additionalContext': 'FDS_UPLOAD_REMIND:' + fp
        }
    }
    print(json.dumps(result))
```

写入路径：`~/.claude/fds-upload-hook.py`。

**Step B** — 用 Bash 工具将 hook 注册到 settings.json，并写入 `hook_installed` 标记：

```bash
python -c "
import json, os, sys

settings_path = os.path.expanduser('~/.claude/settings.json')
cfg_path = os.path.expanduser('~/.fds-upload-config.json')
hook_script = os.path.expanduser('~/.claude/fds-upload-hook.py').replace(os.sep, '/')

try:
# 读 settings（兼容 BOM）
    with open(settings_path, encoding='utf-8-sig') as f:
        settings = json.load(f)

    new_entry = {
        'matcher': 'Write',
        'hooks': [{
            'type': 'command',
            'shell': 'bash',
            'command': 'python \"' + hook_script + '\"',
            'statusMessage': '检查是否需要 FDS 上传提示...'
        }]
    }

    if 'hooks' not in settings:
        settings['hooks'] = {}
    if 'PostToolUse' not in settings['hooks']:
        settings['hooks']['PostToolUse'] = []

    already = any(
        any('fds-upload-hook' in h.get('command', '') for h in e.get('hooks', []))
        for e in settings['hooks']['PostToolUse']
    )
    if not already:
        settings['hooks']['PostToolUse'].append(new_entry)

# 写 settings（无 BOM，与读时解码一致）
    with open(settings_path, 'w', encoding='utf-8') as f:
        json.dump(settings, f, indent=2, ensure_ascii=False)

# 写 hook_installed 标记到 fds config（config 不存在则新建）
    fds_cfg = {}
    if os.path.exists(cfg_path):
        with open(cfg_path, encoding='utf-8') as f:
            fds_cfg = json.load(f)
    fds_cfg['hook_installed'] = True
    with open(cfg_path, 'w', encoding='utf-8') as f:
        json.dump(fds_cfg, f, indent=2, ensure_ascii=False)

    print('HOOK_INSTALLED')
except PermissionError as e:
# 写入 failed 标记，避免下次重试
    try:
        fds_cfg = {}
        if os.path.exists(cfg_path):
            with open(cfg_path, encoding='utf-8') as f:
                fds_cfg = json.load(f)
        fds_cfg['hook_installed'] = 'failed'
        with open(cfg_path, 'w', encoding='utf-8') as f:
            json.dump(fds_cfg, f, indent=2, ensure_ascii=False)
    except Exception:
        pass
    print('PERMISSION_ERROR:' + str(e))
except Exception as e:
    try:
        fds_cfg = {}
        if os.path.exists(cfg_path):
            with open(cfg_path, encoding='utf-8') as f:
                fds_cfg = json.load(f)
        fds_cfg['hook_installed'] = 'failed'
        with open(cfg_path, 'w', encoding='utf-8') as f:
            json.dump(fds_cfg, f, indent=2, ensure_ascii=False)
    except Exception:
        pass
    print('ERROR:' + str(e))
"
```

根据输出：

- `HOOK_INSTALLED` → 向用户展示提示：
  > "已自动配置 FDS 上传提醒 hook，之后每次写入 .html/.png 等文件时会自动提醒上传。重启 Claude Code 后完全生效。"
  然后继续执行原子命令。

- `PERMISSION_ERROR:...` 或 `ERROR:...` → 向用户展示以下提示，**然后继续执行原子命令**（hook 不影响上传功能）：

  > ⚠️ 无法自动写入 hook 配置（权限不足）。可手动将以下内容添加到 `~/.claude/settings.json` 的 `hooks.PostToolUse` 数组中，然后重启 Claude Code 即可生效：
  >
  > ```json
  > {
  >   "matcher": "Write",
  >   "hooks": [{
  >     "type": "command",
  >     "shell": "bash",
  >     "command": "python \"~/.claude/fds-upload-hook.py\""
  >   }]
  > }
  > ```
  >
  > 如果 `hooks` 或 `PostToolUse` 字段不存在，需要先创建。手动配置完成后运行 `/xiaomi-fds-auto-upload config` 即可标记为已安装。

---

## 公共 Bucket 默认配置

以下是内置的公共 Bucket 参数，无需用户申请即可直接使用（staging 预览环境）：

| 字段 | 值 |
|------|---|
| access_id | `AKSHXKIYWCYZFBQUVF` |
| access_secret | `FDVo3SfB37HwpwREDMctVU25YBFdCz3OAwWRDsNv` |
| endpoint | `staging-cnbj2-fds.api.xiaomi.net` |
| bucket | `public` |
| path_prefix | `common/` |

配置文件中用 `"config_type": "public"` 标记公共配置，`"config_type": "custom"` 标记自定义配置。

---

## 配置流程（/fds config）

### Step 1：读取并展示当前配置

用 Bash 工具执行，判断当前是公共配置还是自定义配置：

```bash
python -c "
import json, os
path = os.path.expanduser('~/.fds-upload-config.json')
if os.path.exists(path):
    with open(path, encoding='utf-8') as f:
        cfg = json.load(f)
    config_type = cfg.get('config_type', 'custom')
    masked = cfg.get('access_secret', '')
    masked = '*' * (len(masked) - 4) + masked[-4:] if len(masked) > 4 else '****'
    not_set = '(not set)'
    print('config_type:' + config_type)
    print('  access_id:    ', cfg.get('access_id', not_set))
    print('  access_secret:', masked)
    print('  endpoint:     ', cfg.get('endpoint', not_set))
    print('  bucket:       ', cfg.get('bucket', not_set))
    print('  path_prefix:  ', cfg.get('path_prefix', not_set))
else:
    print('not configured')
"
```

根据输出：
- `not configured` → **直接进入 Step 2**（首次配置，跳过展示）
- `config_type:public` → 向用户展示当前使用**公共 Bucket**，并告知各字段值，然后进入 **Step 2（选择配置类型）**
- `config_type:custom` → 向用户展示当前使用**自定义配置**，并告知各字段值（access_secret 脱敏），然后进入 **Step 2（选择配置类型）**

展示格式示例（public）：
```
当前配置：公共 Bucket（共享，staging 预览用）
  access_id:     AKSHXKIYWCYZFBQUVF
  access_secret: ************************************DsNv
  endpoint:      staging-cnbj2-fds.api.xiaomi.net
  bucket:        public
  path_prefix:   common/
```

展示格式示例（custom）：
```
当前配置：自定义
  access_id:     your-ak
  access_secret: ****abcd
  endpoint:      staging-cnbj2-fds.api.xiaomi.net
  bucket:        my-bucket
  path_prefix:   claude-uploads/
```

### Step 2：选择配置类型

- `not configured`（首次配置）→ **直接执行 Step 3a**，写入公共 Bucket 配置，无需询问。
- 已有配置（`config_type:public` 或 `config_type:custom`）→ 用 `AskUserQuestion` 询问用户：

  **问题**："请选择 FDS 配置方式："

  **选项**：
  - **使用公共 Bucket**（推荐）— 无需申请，直接使用团队共享的 staging Bucket，适合日常预览
  - **使用自定义配置** — 填写自己的 AK/SK 和 Bucket，适合需要隔离或生产环境
  - **保持当前配置不变** — 取消，不做任何修改

### Step 3a：写入公共 Bucket 配置（用户选择"公共 Bucket"）

直接用 Bash 工具写入内置参数，**无需再询问任何值**：

```bash
python -c "
import json, os
path = os.path.expanduser('~/.fds-upload-config.json')
cfg = {}
if os.path.exists(path):
    with open(path, encoding='utf-8') as f:
        cfg = json.load(f)
cfg.update({
    'config_type':   'public',
    'access_id':     'AKSHXKIYWCYZFBQUVF',
    'access_secret': 'FDVo3SfB37HwpwREDMctVU25YBFdCz3OAwWRDsNv',
    'endpoint':      'staging-cnbj2-fds.api.xiaomi.net',
    'bucket':        'public',
    'path_prefix':   'common/',
})
with open(path, 'w', encoding='utf-8') as f:
    json.dump(cfg, f, indent=2, ensure_ascii=False)
print('OK')
"
```

输出 `OK` 后告知用户：
- 首次配置（原为 `not configured`）："已自动配置公共 Bucket，可直接上传。如需使用自定义 Bucket，运行 `/xiaomi-fds-auto-upload config` 切换。"
- 已有配置切换：："已切换为公共 Bucket 配置，可直接运行 `/xiaomi-fds-auto-upload upload` 上传文件。"

流程结束。

### Step 3b：自定义配置流程（用户选择"自定义配置"）

#### 引导申请资源（仅当当前无自定义配置，即 `not configured` 或 `config_type:public` 时展示）

**如果你还没有 FDS Bucket 和 AK/SK，请按以下步骤申请：**

**① 申请 Bucket**
访问 [融合云控制台](https://cloud.d.xiaomi.net/) → 对象存储 FDS → 申请 Bucket
填写 Bucket 名称，选择机房（staging 预览用 **北京3（武清测试）**，生产用 **北京2（C3）**），选择所属团队。

**② 获取 AK/SK**
访问 [访问管理平台](https://cloud.mioffice.cn/old-iam/org) → 找到自己所属的用户组 → 从用户组中查询获取 AccessKey ID 和 AccessKey Secret。

**③ 配置 Bucket 用户权限**
融合云控制台 → 对象存储 FDS → 选择你的 Bucket → 权限管理 → 添加用户组权限，赋予读写权限。

#### 逐项询问新值

用纯文本逐项询问，每次展示当前值，告知用户留空表示保留原值：

1. **access_id**（FDS AccessKey）
2. **access_secret**（FDS SecretKey）
3. **endpoint**（默认 `staging-cnbj2-fds.api.xiaomi.net`，prod 用 `cnbj1-fds.api.xiaomi.net`）
4. **bucket**（Bucket 名称）
5. **path_prefix**（文件路径前缀，默认 `claude-uploads/`，末尾需带 `/`）

#### 写入配置文件

收集完所有值后，用 PowerShell 工具执行（将各 `*_VALUE` 替换为用户输入值，留空填 `''`）：

```powershell
$env:FDS_AK = "ACCESS_ID_VALUE"
$env:FDS_SK = "ACCESS_SECRET_VALUE"
$env:FDS_EP = "ENDPOINT_VALUE"
$env:FDS_BK = "BUCKET_VALUE"
$env:FDS_PX = "PATH_PREFIX_VALUE"

python -c "
import json, os

path = os.path.expanduser('~/.fds-upload-config.json')
cfg = {}
if os.path.exists(path):
    with open(path, encoding='utf-8') as f:
        cfg = json.load(f)

updates = {
    'access_id':     os.environ.get('FDS_AK', ''),
    'access_secret': os.environ.get('FDS_SK', ''),
    'endpoint':      os.environ.get('FDS_EP', ''),
    'bucket':        os.environ.get('FDS_BK', ''),
    'path_prefix':   os.environ.get('FDS_PX', ''),
}
for k, v in updates.items():
    if v:
        cfg[k] = v

if cfg.get('path_prefix') and not cfg['path_prefix'].endswith('/'):
    cfg['path_prefix'] += '/'

cfg['config_type'] = 'custom'

with open(path, 'w', encoding='utf-8') as f:
    json.dump(cfg, f, indent=2, ensure_ascii=False)
print('配置已保存到', path)
"

$env:FDS_AK = ""
$env:FDS_SK = ""
$env:FDS_EP = ""
$env:FDS_BK = ""
$env:FDS_PX = ""
```

输出后告知用户："FDS 自定义配置已更新。可以用 `/xiaomi-fds-auto-upload upload` 上传文件了。"

---

## 上传流程（/fds upload [path] 或 /fds）

### Step 0：首次配置检查

直接使用**启动自检**（行2）的结果，无需再次读取文件：

- `NOT_CONFIGURED` 或 `MISSING:...` → 告知用户："检测到尚未完成 FDS 配置，先帮你完成初始化配置。"，然后**直接执行配置流程**（等同于用户运行了 `/xiaomi-fds-auto-upload config`），配置完成后**自动继续执行上传流程**，无需用户重新输入命令。
- `CFG_OK` → 继续后续步骤。

### Step 1：确定上传文件

**有参数**（`/fds upload /path/to/file.html`）：直接使用该路径。

**无参数**（`/fds` 或 `/fds upload`）：
- 搜索本会话所有 `Write` 工具调用的 `file_path` 参数，过滤后缀为 `.html`、`.png`、`.jpg`、`.jpeg`、`.gif`、`.webp`、`.svg` 的路径。
- 有记录 → 用 `AskUserQuestion` 列出让用户选择（选项为各文件路径 + "手动输入路径"）。
- 无记录 → 用纯文本请用户提供文件路径。

### Step 2：检查 SDK

若**启动自检**行3为 `SDK_OK`，**跳过本步骤**直接进入 Step 3。

否则用 PowerShell 工具执行：

```powershell
python -c "import fds; print('ok')" 2>$null
if (-not $?) { python -m pip install galaxy-fds-sdk }
```

安装成功后，用 Bash 工具写入缓存标记（避免下次重复检查）：

```bash
python -c "
import json, os
path = os.path.expanduser('~/.fds-upload-config.json')
cfg = {}
if os.path.exists(path):
    with open(path, encoding='utf-8') as f:
        cfg = json.load(f)
cfg['sdk_installed'] = True
with open(path, 'w', encoding='utf-8') as f:
    json.dump(cfg, f, indent=2, ensure_ascii=False)
"
```

若安装失败，提示用户手动执行 `python -m pip install galaxy-fds-sdk`。

### Step 3：执行上传

**静默执行**——不向用户输出任何脚本内容、中间日志或"正在上传"提示，仅在完成后展示最终结果（成功 URL 或错误信息）。

用 PowerShell 工具执行以下脚本，将 `FILE_PATH_VALUE` 替换为实际文件的绝对路径（注意 Windows 路径中反斜杠需转义为 `\\`）：

```powershell
$cfgRaw = Get-Content "$env:USERPROFILE\.fds-upload-config.json" -Raw
$cfg = $cfgRaw | ConvertFrom-Json
$filePath = "FILE_PATH_VALUE"
$suffix = [System.IO.Path]::GetExtension($filePath)
$objectName = $cfg.path_prefix + [System.Guid]::NewGuid().ToString("N") + $suffix

$env:FDS_CFG = $cfgRaw
$env:FDS_FILE = $filePath
$env:FDS_OBJ = $objectName

python -c "
import sys, json, os, time
from fds import GalaxyFDSClient, FDSClientConfiguration
from fds.model.fds_object_metadata import FDSObjectMetadata

MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.svg':  'image/svg+xml',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif':  'image/gif',
    '.webp': 'image/webp',
}

cfg = json.loads(os.environ['FDS_CFG'])
file_path = os.environ['FDS_FILE']
object_name = os.environ['FDS_OBJ']

if not os.path.exists(file_path):
    print('ERROR: 文件不存在: ' + file_path)
    sys.exit(1)

ext = os.path.splitext(file_path)[1].lower()
metadata = FDSObjectMetadata()
metadata.add_header('content-type', MIME_TYPES.get(ext, 'application/octet-stream'))

client = GalaxyFDSClient(
    access_key=cfg['access_id'],
    access_secret=cfg['access_secret'],
    config=FDSClientConfiguration(
        endpoint=cfg['endpoint'],
        enable_cdn_for_upload=False,
        enable_cdn_for_download=False,
    ),
)
try:
    with open(file_path, 'rb') as f:
        client.put_object(cfg['bucket'], object_name, f, metadata=metadata)
    client.set_public(cfg['bucket'], object_name)
    preview_uri = 'https://' + cfg['endpoint'] + '/' + cfg['bucket'] + '/' + object_name
    print('SUCCESS:' + preview_uri)
except Exception as e:
    print('ERROR: 上传失败 — ' + str(e))
    sys.exit(1)
"

$env:FDS_CFG = ""
$env:FDS_OBJ = ""
```

上传成功时提取 `SUCCESS:<url>` 并展示（根据文件扩展名调整措辞）：

- `.html` / `.svg`：说"可直接在浏览器中预览"
- `.png` / `.jpg` / `.jpeg` / `.gif` / `.webp`：说"可直接在浏览器中查看图片"

示例：
```
已上传到 FDS，可直接在浏览器中预览：
https://mds-preview.staging-cnbj2-fds.api.xiaomi.net/html/abc123.html?GalaxyAccessKeyId=...
```

### 错误处理

| 输出 | 处理方式 |
|------|---------|
| `ERROR: 文件不存在` | 提示确认路径 |
| `ERROR: 上传失败` | 展示错误，提示检查 AK/SK、bucket、内网连通性 |
| Python import 报错 | 提示运行 `python -m pip install galaxy-fds-sdk` |
