# ScriptCat Userscripts

浏览器自动化脚本集合，基于 [ScriptCat](https://scriptcat.org/) 开发。

## 脚本列表

| 脚本 | 说明 |
|------|------|
| [bingReward](./bingReward) | Microsoft Rewards 自动签到与搜索任务 |

## 使用方法

1. 安装 [ScriptCat](https://scriptcat.org/) 浏览器扩展
2. 导入脚本或通过订阅安装
3. 在 ScriptCat 面板中配置脚本参数

> ScriptCat 完全兼容 Tampermonkey API，也可使用 Tampermonkey 运行基础功能。

## 开发指南

### 环境准备

```bash
# 安装依赖
npm install

# 运行 ESLint 检查
npm run lint

# 自动修复 ESLint 问题
npm run lint:fix
```

### 代码规范

本项目使用 ESLint 进行代码检查，配置基于 ScriptCat 官方推荐的规则：

- 支持 ES2024 最新语法
- 包含 `eslint-plugin-userscripts` 插件检查元数据
- 已预置所有 `GM_*` API 和 ScriptCat 特有全局变量

参见 [AGENTS.md](./AGENTS.md) 了解详细代码规范与最佳实践。

## License

[MIT](./LICENSE)
