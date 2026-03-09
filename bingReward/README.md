# Microsoft Rewards 自动签到脚本

## 一、脚本概述

这是一个油猴（Tampermonkey/ScriptCat）脚本，用于自动完成 Microsoft Rewards（微软积分商城）的每日任务。

- ✅ 移动设备签到（Sign-in）- 需要 OAuth Token
- ✅ Bing 搜索任务

## 二、架构设计

### 类继承关系

```
TaskRunner (基类)
    ├── SignTask
    └── SearchTask

TaskState (状态管理类，由各任务类持有)
```

## 三、文件结构

### 1. 元数据头（第 1-34 行）

Tampermonkey 脚本元信息：名称、版本、匹配域名、API 权限等。

### 2. 用户配置块（第 37-102 行）

Tampermonkey 配置器定义，用户可在脚本管理界面修改。

### 3. CONSTANTS 常量模块

集中管理所有常量配置：

| 属性 | 说明 |
|------|------|
| `REPO_URL` | 项目仓库地址 |
| `BASE_DELAY_MS` | 基础延迟时间（3210ms） |
| `REQUEST_TIMEOUT_MS` | 请求超时时间（15000ms） |
| `USER_AGENTS` | 桌面端/移动端 UA |
| `API_ENDPOINTS` | API 端点配置（OAuth、Rewards、热搜等） |
| `WEBHOOK_TEMPLATES` | 推送服务配置 |
| `TASK_TYPES` | 任务类型常量 |
| `ACTIVITY_TYPES` | 活动类型常量 |
| `LOG_PREFIXES` | 日志前缀 emoji |
| `MAX_RETRY_COUNT` | 最大重试次数（2） |

### 4. Utils 工具模块

通用工具函数：

| 函数 | 说明 |
|------|------|
| `randomInt(max)` | 生成 [0, max) 随机整数 |
| `randomRange(min, max)` | 生成 [min, max] 范围随机数 |
| `shuffleArray(arr)` | 数组随机排序 |
| `generateUUID(uppercase)` | 生成 UUID，可选大写 |
| `getTimestamp()` | 获取当前时间戳 |
| `getDate(asNumber, useSlash)` | 获取日期字符串或数字 |
| `isValidJSON(str)` | JSON 格式校验 |
| `isEdgeBrowser()` | 检测是否为 Edge 浏览器 |
| `log(level, message, notify)` | 日志输出，支持通知 |
| `getRandomSubstring(str, minLen, maxLen)` | 截取随机长度子串 |
| `generateRandomChinese(minLen, maxLen)` | 生成随机汉字组合 |

### 5. Config 配置模块

配置读写封装：

| 方法 | 说明 |
|------|------|
| `getUserConfig()` | 获取用户配置（keepChecking, lockRegion, searchInterval等） |
| `getTaskSwitches()` | 获取任务开关（sign, search） |
| `getSavedTaskDates()` | 获取已保存的任务完成日期 |
| `saveTaskDates(dates)` | 保存任务完成日期 |
| `saveRefreshToken(token)` | 保存刷新令牌 |
| `clearRefreshToken()` | 清除刷新令牌 |
| `getHotSearchApiConfig()` | 获取热搜 API 配置 |
| `setLastHotSearchIndex(index)` | 保存上次使用的热搜分类索引 |
| `getLastHotSearchIndex()` | 获取上次使用的热搜分类索引 |

### 6. ApiClient 请求模块

HTTP 请求封装：

| 方法 | 说明 |
|------|------|
| `request(options, returnFinalUrl)` | 通用请求方法，返回 Promise |
| `getOAuthCode(cookies)` | 获取 OAuth 授权码 |
| `getToken(url)` | 获取/刷新 Access Token |
| `getRewardsDashboard()` | 获取 Rewards 仪表板数据 |
| `checkIpRegion(bingHost)` | 检查 IP 地区 |
| `getIpDetails()` | 获取 IP 详细信息 |

### 7. Notifier 通知模块

消息推送功能，支持以下渠道：

- 企业微信（WeWork）
- 钉钉（DingTalk）
- 飞书（Feishu）
- PushMe
- Bark

### 8. TaskState 状态类

任务状态管理：

```javascript
class TaskState {
    name;              // 任务名称
    retryCount;        // 重试次数
    completed;         // 完成标记
    lastCompletedDate; // 上次完成日期（数字格式 YYYYMMDD）

    shouldSkip(isEnabled, todayDate, keepChecking);  // 是否跳过任务
    markCompleted(todayDate);                        // 标记完成
    incrementRetry();                                // 增加重试次数
    resetRetry();                                    // 重置重试次数
}
```

### 9. TaskRunner 基类

任务运行器抽象基类：

```javascript
class TaskRunner {
    name;       // 任务名称
    state;      // TaskState 实例
    delay;      // 延迟时间（毫秒）

    async run(context);                    // 执行任务（子类必须实现）
    async start(context, onComplete);      // 启动任务循环，失败自动重试
}
```

### 10. 具体任务类

#### SignTask (移动设备签到任务)

- 调用 Rewards API 完成每日移动设备签入
- 需要 OAuth Access Token
- API 端点: `https://prod.rewardsplatform.microsoft.com/dapi/me/activities`
- 活动类型: `type: 103`
- 记录获得积分

#### SearchTask (Bing 搜索任务)

- 管理搜索词列表（支持热搜 API 或随机汉字）
- 仅支持 PC 端搜索（Microsoft Rewards 已移除移动端搜索任务）
- 上报搜索活动到 Rewards 系统
- 支持配置搜索间隔时间

### 11. TokenManager

OAuth Token 管理：

- 自动获取授权码（从 Cookie 或用户配置）
- Token 刷新续期（使用 Refresh Token）
- 错误处理和重试机制

### 12. ScriptRunner

主运行器：

- 初始化配置和任务实例
- 确定 Bing 主机（cn.bing.com 或 <www.bing.com）>
- 检查 IP 地区（支持锁定中国大陆）
- 管理任务生命周期和完成回调
- 保存任务完成状态

## 四、执行流程

```
ScriptRunner.run()
    │
    ├── init()                    // 初始化
    │   ├── 加载配置
    │   ├── 获取 Cookies
    │   ├── 初始化任务实例（SignTask, SearchTask）
    │   └── 初始化通知器
    │
    ├── determineBingHost()       // 确定 Bing 主机
    │
    ├── checkRegion()             // 检查 IP 地区
    │   └── 如锁定国区且非大陆 IP，设置退出标记
    │
    └── startTasks()              // 启动任务
        ├── 检查 Rewards 登录状态
        ├── 搜索任务（SearchTask）- 延迟启动
        └── 签到任务（SignTask）- 需要 Token
            └── TokenManager.renew()  // 获取/刷新 Token
```

## 五、关键设计模式

### 1. 单一职责原则

每个模块只负责一个功能：

- `Utils` 只做工具函数
- `ApiClient` 只做 HTTP 请求
- `Config` 只做配置读写
- `Notifier` 只做消息推送

### 2. 开闭原则

新增任务只需继承 `TaskRunner`：

```javascript
class NewTask extends TaskRunner {
    constructor() {
        super('新任务', new TaskState('new'));
    }
    async run(context) { /* 具体实现 */ }
}
```

### 3. 依赖注入

`context` 对象在各模块间传递，包含运行所需的所有上下文：

```javascript
context = {
    todayDate,      // 今日日期（数字格式）
    bingHost,       // Bing 主机地址
    region,         // IP 地区代码
    accessToken,    // OAuth Access Token
    cookies,        // 登录 Cookies
    isNonMainland,  // 是否非大陆 IP
    exitCode,       // 退出代码
    keepChecking,   // 是否持续检测
    lockRegion,     // 是否锁定国区
    searchInterval, // 搜索间隔（秒）
    taskSwitches    // 任务开关 {sign, search}
};
```

## 六、配置项说明

### 6.1 Config 配置

| 配置路径 | 说明 | 默认值 | 建议 |
|----------|------|--------|------|
| `Config.keep` | 持续检测 | `true` | 保持开启，脚本会自动轮询直到任务完成 |
| `Config.lock` | 锁定国区 | `true` | 海外用户请关闭，中国大陆用户建议开启 |
| `Config.span` | 搜索间隔 | `30` | 每次搜索间隔秒数，实际为 `span ± 15` 秒随机 |
| `Config.api` | 搜索词接口 | `hot.baiwumm.com` | 可选：`offline`（随机汉字）、`hot.baiwumm.com`、`hot.nntool.cc`、`hot.cnxiaobai.com` |

**详细说明：**

- **持续检测 (`Config.keep`)**：
  - `true`：任务完成后继续检测，直到获取今日积分上限
  - `false`：每个任务完成后不再重复检测

- **锁定国区 (`Config.lock`)**：
  - `true`：检测到非中国大陆 IP 时停止运行（避免风控）
  - `false`：不检查 IP 地区

- **搜索间隔 (`Config.span`)**：
  - 最小值为 30 秒
  - 实际间隔为 `span - 15` 到 `span + 15` 之间的随机值
  - 示例：设置 30，实际间隔为 15-45 秒随机

- **搜索词接口 (`Config.api`)**：
  - `offline`：使用随机汉字组合（无需网络）
  - `hot.baiwumm.com`：聚合热搜 API（推荐）
  - `hot.nntool.cc`：备选热搜 API
  - `hot.cnxiaobai.com`：备选热搜 API

### 6.2 Tasks 任务开关

| 配置路径 | 说明 | 默认值 |
|----------|------|--------|
| `Tasks.sign` | 移动设备签到 | `true` |
| `Tasks.search` | Bing 搜索 | `true` |

**说明：**

- **移动设备签到**：需要配置 `OAuth.code` 才能执行，完成后可获得移动设备积分
- **Bing 搜索**：自动完成 PC 端搜索任务，获取每日搜索积分
- 建议保持两个任务都开启以获得最大积分收益

### 6.3 OAuth 配置

| 配置路径 | 说明 | 备注 |
|----------|------|------|
| `OAuth.code` | 授权码/链接 | 可选，用于移动设备签到 |

#### OAuth 授权码获取教程

**为什么需要授权码？**
移动设备签到任务需要 OAuth Token 来调用 Microsoft Rewards API。脚本可以通过授权码获取 Access Token 和 Refresh Token。

**获取步骤：**

1. **复制以下链接**，在浏览器新标签页打开：

   ```
   https://login.live.com/oauth20_authorize.srf?client_id=0000000040170455&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&response_type=code&redirect_uri=https://login.live.com/oauth20_desktop.srf
   ```

2. **登录微软账号**（如果未登录）

3. **授权应用**访问权限

4. **页面会跳转**，地址栏会变成类似：

   ```
   https://login.live.com/oauth20_desktop.srf?code=M.C540_BAY.2.U.U.AAAAAAAAAAAAAAAAAAA...
   ```

5. **复制完整URL** 或 只复制 `code=` 后面的部分

**填写方式：**

在 Tampermonkey 脚本配置中找到 `OAuth.code`，填入以下内容之一：

- ✅ 完整URL：`https://login.live.com/oauth20_desktop.srf?code=M.C540...`
- ✅ 仅授权码：`M.C540_BAY.2.U.xxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

**重要提醒：**

- ⏰ 授权码有效期约 **3分钟**，获取后请立即填写
- 🔒 不要分享授权码，以免泄露个人登录凭证  
- 🔄 脚本会自动保存 Refresh Token，**只需填写一次**
- ❌ Microsoft Edge 浏览器不支持自动获取，必须手动填写

### 6.4 Notice 通知配置

配置任务完成后的消息推送渠道。

| 配置路径 | 说明 | 获取方式 |
|----------|------|----------|
| `Notice.bro` | 浏览器通知 | 开启后任务完成会弹出浏览器通知 |
| `Notice.wework` | 企业微信机器人 | 群设置 → 添加群机器人 → 复制 Webhook Key |
| `Notice.dingding` | 钉钉机器人 | 群设置 → 智能群助手 → 添加机器人 → 复制 Token |
| `Notice.feishu` | 飞书机器人 | 群设置 → 添加机器人 → 复制 Webhook Key |
| `Notice.pushme` | PushMe | 访问 <https://push.i-i.me> 获取 Push Key |
| `Notice.bark` | Bark | iOS 安装 Bark App → 复制 Device Key |

**配置说明：**

- **浏览器通知 (`Notice.bro`)**：开启后每次任务完成会在浏览器右下角弹出通知
- **企业微信 (`Notice.wework`)**：格式为 32 位字符串，示例：`xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
- **钉钉 (`Notice.dingding`)**：格式为 32 位以上字符串，机器人安全设置选择「自定义关键词」并填入 `#`
- **飞书 (`Notice.feishu`)**：格式为 UUID，机器人安全设置选择「自定义关键词」并填入 `#`
- **PushMe (`Notice.pushme`)**：支持 Markdown 格式推送，需先在 <https://push.i-i.me> 注册
- **Bark (`Notice.bark`)**：仅支持 iOS，支持 Markdown 格式，可分组显示

**注意：** 消息推送渠道为可选配置，不填则不推送。
| `Notice.bark` | Bark Key | 20位字符串 |

## 七、错误处理机制

1. **重试机制**：每个任务最多重试 2 次（`MAX_RETRY_COUNT`）
2. **Token 过期**：自动使用 Refresh Token 续期
3. **IP 检查**：非大陆 IP 时可选停止运行（`Config.lock`）
4. **日志记录**：统一的错误日志格式，带 emoji 前缀
5. **任务隔离**：单个任务失败不影响其他任务执行
