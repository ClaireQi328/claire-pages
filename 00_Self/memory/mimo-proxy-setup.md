---
created: 2026-07-13
updated: 2026-07-27
tags: [Self, 系统]
---

# Mimo 代理配置

模型：`xiaomi/mimo-v2.5-pro`（注意：不是 `xiaomi/mimo-2.5`，代理会报 Unsupported model）
代理：`http://model.mify.ai.srv/anthropic`（全局统一，已不用 `127.0.0.1:15721`）
认证：`ANTHROPIC_AUTH_TOKEN`（sk- 开头）+ `ANTHROPIC_API_KEY` 必须设为同一个 sk- 值（`mify-proxy` 不被代理接受）

关键环境变量（必须全部设为同一模型 ID）：
- `ANTHROPIC_MODEL`
- `ANTHROPIC_DEFAULT_HAIKU_MODEL` / `_NAME`
- `ANTHROPIC_DEFAULT_OPUS_MODEL` / `_NAME`
- `ANTHROPIC_DEFAULT_SONNET_MODEL` / `_NAME`
- `ANTHROPIC_DEFAULT_FABLE_MODEL` / `_NAME`
- `ANTHROPIC_CUSTOM_MODEL_OPTION` / `_NAME`

**Why:** 用显式模型 ID 而非别名（haiku/opus/sonnet），避免别名映射丢失版本号。
**How to apply:** 改模型时只改 source of truth，然后跑 sync 脚本。不要在插件 UI 里选模型。
