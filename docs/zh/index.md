---
layout: home

hero:
  name: 霖君
  text: 跨平台 AI 代理管理工具
  tagline: 统一管理 Claude、Gemini、Codex、Copilot、Qwen 等多个 AI 提供商，一站式配置 CLI 代理工具
  image:
    src: /logo.webp
    alt: 霖君
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/quick-start
    - theme: alt
      text: 安装指南
      link: /zh/install
    - theme: alt
      text: GitHub
      link: https://github.com/wangdabaoqq/LinJun

features:
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg>
    title: 10+ AI 提供商
    details: 支持 Claude、Gemini、Codex、Qwen、Antigravity、iFlow、GitHub Copilot、Kiro、AmpCode 等主流服务
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
    title: 配额与模型监控
    details: 实时追踪账户使用量，查看各提供商可用模型列表，智能配额预警
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    title: 一键配置代理
    details: 自动检测并配置 Claude Code、OpenCode、Gemini CLI、Codex CLI 等 CLI 工具
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    title: 实时仪表盘
    details: 监控请求流量、Token 用量、成功率，可视化分析使用情况
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>
    title: 智能路由
    details: Round Robin 和 Fill First 两种故障转移策略，保障服务高可用
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>
    title: API 密钥管理
    details: 为本地代理生成和管理 API 密钥，方便第三方工具接入
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
    title: 系统托盘集成
    details: 从菜单栏快速访问状态和控制，最小化到托盘运行
  - icon:
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    title: 多语言支持
    details: 支持简体中文和英文界面
---

## 快速导航

- [快速开始](./quick-start.md) - 3 分钟上手
- [安装指南](./install.md) - 各平台安装说明
- [首次运行](./first-run.md) - 必要的初始配置

## 功能模块

### 提供商管理

- [提供商概览](./providers/overview.md) - 支持的 10+ 提供商列表
- [OAuth 登录](./providers/oauth-login.md) - 通过 OAuth 添加账号
- [自定义提供商](./providers/custom-providers.md) - 添加 OpenAI 兼容服务
- [账号模型规则](./providers/account-model-rules.md) - 为账号配置可用模型

### CLI 代理配置

- [支持的代理](./agents/overview.md) - 可自动配置的 CLI 工具
- [配置代理](./agents/configuration.md) - 一键配置 CLI 工具

### 监控与分析

- [仪表盘概览](./dashboard/overview.md) - 实时流量监控
- [配额监控](./dashboard/quota.md) - 账号配额和模型列表
- [请求日志](./dashboard/logs.md) - 调试和分析

### 设置

- [基本设置](./settings/basic.md) - 端口、路由、通知
- [API 密钥](./settings/api-key.md) - 密钥管理
- [更新管理](./settings/update.md) - 应用和代理更新

## 遇到问题？

- [常见问题](./troubleshooting/faq.md)
- [常见错误](./troubleshooting/common-errors.md)
- [GitHub Issues](https://github.com/wangdabaoqq/LinJun/issues)
