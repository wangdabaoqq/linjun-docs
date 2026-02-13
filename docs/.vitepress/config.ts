import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LinJun',
  description: 'LinJun - Cross-platform AI Proxy Management Tool',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Quick Start', link: '/en/quick-start' },
          { text: 'Guide', link: '/en/install' },
          {
            text: 'More',
            items: [
              { text: 'FAQ', link: '/en/troubleshooting/faq' },
              { text: 'GitHub', link: 'https://github.com/wangdabaoqq/LinJun' },
            ],
          },
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Quick Start', link: '/en/quick-start' },
                { text: 'Installation', link: '/en/install' },
                { text: 'First Run', link: '/en/first-run' },
              ],
            },
            {
              text: 'Providers',
              items: [
                { text: 'Overview', link: '/en/providers/overview' },
                { text: 'OAuth Login', link: '/en/providers/oauth-login' },
                { text: 'Custom Providers', link: '/en/providers/custom-providers' },
                { text: 'Account Model Rules', link: '/en/providers/account-model-rules' },
              ],
            },
            {
              text: 'CLI Agents',
              items: [
                { text: 'Supported Agents', link: '/en/agents/overview' },
                { text: 'Configuration', link: '/en/agents/configuration' },
              ],
            },
            {
              text: 'Dashboard',
              items: [
                { text: 'Overview', link: '/en/dashboard/overview' },
                { text: 'Quota Monitoring', link: '/en/dashboard/quota' },
                { text: 'Logs', link: '/en/dashboard/logs' },
              ],
            },
            {
              text: 'Settings',
              items: [
                { text: 'Basic Settings', link: '/en/settings/basic' },
                { text: 'API Keys', link: '/en/settings/api-key' },
                { text: 'Updates', link: '/en/settings/update' },
              ],
            },
            {
              text: 'Troubleshooting',
              items: [
                { text: 'FAQ', link: '/en/troubleshooting/faq' },
                { text: 'Common Errors', link: '/en/troubleshooting/common-errors' },
              ],
            },
          ],
        },
        outline: {
          label: 'On this page',
        },
        editLink: {
          pattern: 'https://github.com/wangdabaoqq/linjun-docs/edit/main/docs/:path',
          text: 'Edit this page on GitHub',
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '快速开始', link: '/zh/quick-start' },
          { text: '指南', link: '/zh/install' },
          {
            text: '更多',
            items: [
              { text: '常见问题', link: '/zh/troubleshooting/faq' },
              { text: 'GitHub', link: 'https://github.com/wangdabaoqq/LinJun' },
            ],
          },
        ],
        sidebar: {
          '/zh/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/zh/quick-start' },
                { text: '安装', link: '/zh/install' },
                { text: '首次运行', link: '/zh/first-run' },
              ],
            },
            {
              text: '提供商',
              items: [
                { text: '提供商概览', link: '/zh/providers/overview' },
                { text: 'OAuth 登录', link: '/zh/providers/oauth-login' },
                { text: '自定义提供商', link: '/zh/providers/custom-providers' },
                { text: '账号模型规则', link: '/zh/providers/account-model-rules' },
              ],
            },
            {
              text: 'CLI 代理',
              items: [
                { text: '支持的代理', link: '/zh/agents/overview' },
                { text: '配置代理', link: '/zh/agents/configuration' },
              ],
            },
            {
              text: '仪表盘',
              items: [
                { text: '概览', link: '/zh/dashboard/overview' },
                { text: '配额监控', link: '/zh/dashboard/quota' },
                { text: '日志', link: '/zh/dashboard/logs' },
              ],
            },
            {
              text: '设置',
              items: [
                { text: '基本设置', link: '/zh/settings/basic' },
                { text: 'API 密钥', link: '/zh/settings/api-key' },
                { text: '更新管理', link: '/zh/settings/update' },
              ],
            },
            {
              text: '故障排除',
              items: [
                { text: '常见问题', link: '/zh/troubleshooting/faq' },
                { text: '常见错误', link: '/zh/troubleshooting/common-errors' },
              ],
            },
          ],
        },
        outline: {
          label: '目录',
        },
        docFooter: {
          prev: '上一篇',
          next: '下一篇',
        },
        lastUpdated: {
          text: '最后更新',
        },
        editLink: {
          pattern: 'https://github.com/wangdabaoqq/linjun-docs/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页',
        },
      },
    },
  },

  themeConfig: {
    logo: '/logo.webp',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangdabaoqq/LinJun' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present LinJun',
    },

    search: {
      provider: 'local',
    },

    outline: {
      label: 'On this page',
      level: [2, 3],
    },

    editLink: {
      pattern: 'https://github.com/wangdabaoqq/linjun-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },

  markdown: {
    lineNumbers: true,
  },

  lastUpdated: true,
})
