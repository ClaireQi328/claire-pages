---
created: 2026-07-16
updated: 2026-05-25
tags:
  - Clippings
  - 采购
source: "https://mi.feishu.cn/wiki/NqVOdkbEdookFUxpk6RcIKqsneh"
status: draft
---
> [!summary] 期望实现效果
> - **核心**：**问题：岗位虾与Garagehub无法打通，咨询是否有解决路径** - 打通CLI与岗位虾，用户与岗位虾对话，实现检索/操作系统内容 <image token="JIzab8VvYoH3Jcxx52



> 
**问题：岗位虾与Garagehub无法打通，咨询是否有解决路径**

# 期望实现效果
- 打通CLI与岗位虾，用户与岗位虾对话，实现检索/操作系统内容
<image token="JIzab8VvYoH3Jcxx520cEInMn5e" width="1366" height="892" align="center"/>
# 当前遇到的问题-岗位虾与garagehub网络不通
## 岗位虾对话记录
<text color="gray">齐岳 2026年5月25日 16:28
</text>EP cli查询博世这家供应商的信息
<text color="gray">
</text><text color="gray">汽车EP进度管理虾 2026年5月25日 16:29</text>
<image token="DGvub7o8toEz9XxEMygc3bGBn8g" width="1154" height="1025" align="center"/>
<text color="gray">
齐岳 2026年5月25日 16:54
</text># PowerShell (当前用户)
[System.Environment]::SetEnvironmentVariable('GARAGEHUB_ACCESS_TOKEN', 'eyJ...', 'User')

# 或写入 ~/.bashrc
echo 'export GARAGEHUB_ACCESS_TOKEN="eyJ..."' >> ~/.bashrc
<text color="gray">
</text><text color="gray">汽车EP进度管理虾 2026年5月25日 16:54</text>
<image token="DKvTbfAqWoCW5LxlgOCcVBgjnkc" width="899" height="231" align="center"/>
<text color="gray">
齐岳 2026年5月25日 16:54
</text>export GARAGEHUB_ACCESS_TOKEN="eyJraWQiOiJCWWMwX1gxYkwwUURZNnc1Y04ycmN3IiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJHYXJhZ2VIdWIiLCJzdWIiOiJxaXl1ZSIsImNsaWVudF9pZCI6ImdoLWNsaS1iMzlhYjk2NTUyNDllMDI2IiwiZGVwdF9pZCI6IkFVMDcwNDAyIiwiaWF0IjoxNzc5Njk2NzM3LCJleHAiOjE3Nzk3MDM5Mzd9.4LjmosuHDDfgr4nfFmEPCQgEPtmLqw28zqFM9zwjvVAN-cQkczT59ZD57WcYw9AuNyR6tuR0aSlc_6Y98yRwvw" && echo "GARAGEHUB_ACCESS_TOKEN set" && echo "Expires at: $(date -d @$((1779703937528/1000)) 2>/dev/null || date -r $((1779703937528/1000)) 2>/dev/null || echo 'check token expiry')"
<text color="gray">
汽车EP进度管理虾 2026年5月25日 16:55
</text>
<image token="PJkXbxGE4obReyxdKxBcRugCnNf" width="974" height="695" align="center"/>
#