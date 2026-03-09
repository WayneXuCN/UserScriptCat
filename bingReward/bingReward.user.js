// ==UserScript==
// @name            微软积分商城签到
// @name:en         Microsoft Rewards Auto Check-in
// @namespace       https://wenjiexu.site/
// @version         1.0.1
// @description     自动完成 Microsoft Rewards 任务：Bing搜索、移动设备签到
// @description:en  Automatically complete Microsoft Rewards tasks: Bing search, mobile sign-in
// @author          wenjie.xu.cn@outlook.com
// @icon            data:image/png;base64,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
// @homepage        https://github.com/Vncntvx/UserScriptCat
// @homepageURL     https://github.com/Vncntvx/UserScriptCat
// @supportURL      https://github.com/Vncntvx/UserScriptCat/issues
// @updateURL       https://raw.githubusercontent.com/Vncntvx/UserScriptCat/main/bingReward/bingReward.user.js
// @downloadURL     https://raw.githubusercontent.com/Vncntvx/UserScriptCat/main/bingReward/bingReward.user.js
// @crontab         */20 * * * *
// @match           *://*.bing.com/*
// @connect         bing.com
// @connect         login.live.com
// @connect         rewards.bing.com
// @connect         prod.rewardsplatform.microsoft.com
// @connect         hotapi.nntool.cc
// @connect         hot.baiwumm.com
// @connect         cnxiaobai.com
// @connect         disp-qryapi.3g.qq.com
// @connect         qyapi.weixin.qq.com
// @connect         oapi.dingtalk.com
// @connect         open.feishu.cn
// @connect         push.i-i.me
// @connect         api.day.app
// @storageName     bing-rewards-shared
// @grant           unsafeWindow
// @grant           GM_xmlhttpRequest
// @grant           GM_notification
// @grant           GM_openInTab
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_cookie
// @grant           GM_info
// @grant           GM_log
// @grant           GM_registerMenuCommand
// ==/UserScript==


/* ==UserConfig==
Config:
    keep:
        title: 持续检测
        type: checkbox
        default: true
    lock:
        title: 锁定国区
        type: checkbox
        default: true
    span:
        title: 搜索间隔（秒）
        type: number
        default: 30
        min: 30
    api:
        title: 搜索词接口
        type: select
        default: hot.baiwumm.com
        values: [offline, hot.nntool.cc, hot.baiwumm.com, hot.cnxiaobai.com]
Tasks:
    sign:
        title: 移动设备签到
        type: checkbox
        default: true
    read:
        title: 阅读任务
        type: checkbox
        default: true
    promos:
        title: 活动任务
        type: checkbox
        default: true
    search:
        title: Bing 搜索
        type: checkbox
        default: true
OAuth:
    code:
        title: 授权码/链接
        type: textarea
Notice:
    bro:
        title: 浏览器通知
        type: checkbox
        default: true
    wework:
        title: 企业微信机器人Key
        type: text
        password: true
    dingding:
        title: 钉钉机器人Token
        type: text
        password: true
    feishu:
        title: 飞书机器人Key
        type: text
        password: true
    pushme:
        title: PushMe Key
        type: text
        password: true
    bark:
        title: Bark Key
        type: text
        password: true
==/UserConfig== */


(function () {
    'use strict';

    // ============================================================================
    // CONSTANTS
    // ============================================================================

    const CONSTANTS = Object.freeze({
        REPO_URL: 'https://github.com/Vncntvx/UserScriptCat/',
        AUTHOR: 'wenjie.xu.cn@outlook.com',
        BASE_DELAY_MS: 3210,
        REQUEST_TIMEOUT_MS: 15000,

        USER_AGENTS: Object.freeze({
            DESKTOP: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81',
            MOBILE: 'Mozilla/5.0 (Linux; Android 16; MCE16 Build/BP3A.250905.014; ) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.0.0 Mobile Safari/537.36 EdgA/123.0.2420.102'
        }),

        API_ENDPOINTS: Object.freeze({
            HOT_SEARCH: Object.freeze([
                { name: 'hot.baiwumm.com', url: 'https://hot.baiwumm.com/api/', categories: Object.freeze(['weibo', 'douyin', 'baidu', 'toutiao', 'thepaper', 'qq', 'netease', 'zhihu']) },
                { name: 'hot.cnxiaobai.com', url: 'https://cnxiaobai.com/DailyHotApi/', categories: Object.freeze(['weibo', 'douyin', 'baidu', 'toutiao', 'thepaper', 'qq-news', 'netease-news', 'zhihu']) },
                { name: 'hot.nntool.cc', url: 'https://hotapi.nntool.cc/', categories: Object.freeze(['weibo', 'douyin', 'baidu', 'toutiao', 'thepaper', 'qq-news', 'netease-news', 'zhihu']) }
            ]),
            OAUTH: Object.freeze({
                AUTHORIZE: 'https://login.live.com/oauth20_authorize.srf?client_id=0000000040170455&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&response_type=code&redirect_uri=https://login.live.com/oauth20_desktop.srf',
                TOKEN: 'https://login.live.com/oauth20_token.srf'
            }),
            REWARDS: Object.freeze({
                DASHBOARD: 'https://rewards.bing.com/api/getuserinfo',
                ACTIVITIES: 'https://prod.rewardsplatform.microsoft.com/dapi/me/activities'
            }),
            IP_CHECK: 'https://disp-qryapi.3g.qq.com/v1/dispatch'
        }),

        WEBHOOK_TEMPLATES: Object.freeze({
            WEWORK: Object.freeze({ name: '企业微信', urlPrefix: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=', configKey: 'Notice.wework' }),
            DINGDING: Object.freeze({ name: '钉钉', urlPrefix: 'https://oapi.dingtalk.com/robot/send?access_token=', configKey: 'Notice.dingding' }),
            FEISHU: Object.freeze({ name: '飞书', urlPrefix: 'https://open.feishu.cn/open-apis/bot/v2/hook/', configKey: 'Notice.feishu' }),
            PUSHME: Object.freeze({ name: 'PushMe', urlPrefix: 'https://push.i-i.me/?push_key=', configKey: 'Notice.pushme' }),
            BARK: Object.freeze({ name: 'Bark', urlPrefix: 'https://api.day.app/', configKey: 'Notice.bark' })
        }),

        TASK_TYPES: Object.freeze({ SIGN: 'sign', READ: 'read', PROMOS: 'promos', SEARCH: 'search' }),
        ACTIVITY_TYPES: Object.freeze({ SIGN: 103, READ: 101 }),
        READ_OFFER_ID: 'ENUS_readarticle3_30points',
        MAX_RETRY_COUNT: 2,
        LOG_PREFIXES: Object.freeze({ ERROR: '🔴', WARNING: '🟡', SUCCESS: '🟢', INFO: '🟣', DEBUG: '🔵' })
    });

    // Unicode 汉字范围配置
    const UNICODE_CHINESE = Object.freeze({
        // 基本汉字范围 (Unicode U+4E00 - U+9FA5，约 20,000+ 字)
        MIN: 0x4E00,
        MAX: 0x9FA5
    });

    // ============================================================================
    // Utils
    // ============================================================================

    const Utils = {
        randomInt(max) { return Math.floor(Math.random() * max); },
        randomRange(min, max) { return Math.floor(Math.random() * (max + 1 - min) + min); },
        shuffleArray(arr) { return arr.sort(() => Math.random() - 0.5); },
        generateUUID(uppercase = false) {
            const uuid = crypto.randomUUID();
            return uppercase ? uuid.replace(/-/g, '').toUpperCase() : uuid;
        },
        getTimestamp() { return Date.now(); },
        getDate(asNumber = false, useSlash = true) {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            if (asNumber) return Number(`${year}${month}${day}`);
            return useSlash ? `${month}/${day}/${year}` : `${year}-${month}-${day}`;
        },
        isValidJSON(str) {
            try {
                const parsed = JSON.parse(str);
                return Array.isArray(parsed) || (typeof parsed === 'object' && parsed !== null);
            } catch { return false; }
        },
        isEdgeBrowser() { return /(Edge\/|Edg\/|EdgA\/|EdgiOS\/)/i.test(navigator.userAgent); },
        log(level, message, notify = false) {
            GM_log(level + message + '🔚');
            if (notify && GM_getValue('Notice.bro', true)) {
                GM_notification({
                    text: message,
                    title: GM_info.script.name + level,
                    onclick: () => GM_openInTab(CONSTANTS.REPO_URL, { active: true, insert: true, setParent: true })
                });
            }
        },
        getRandomSubstring(str, minLen = 20, maxLen = 32) {
            if (str.length <= minLen) return str;
            return str.substring(0, Utils.randomRange(minLen, maxLen));
        },
        generateRandomChinese(minLen = 1, maxLen = 10) {
            const length = Utils.randomRange(minLen, maxLen);
            const { MIN, MAX } = UNICODE_CHINESE;
            return Array.from(
                { length },
                () => String.fromCharCode(Utils.randomRange(MIN, MAX))
            ).join('');
        }
    };

    // ============================================================================
    // Config
    // ============================================================================

    const Config = {
        getUserConfig() {
            return {
                keepChecking: GM_getValue('Config.keep', true),
                lockRegion: GM_getValue('Config.lock', true),
                searchInterval: GM_getValue('Config.span', 30),
                hotSearchApi: GM_getValue('Config.api', 'offline'),
                authCode: GM_getValue('OAuth.code', ''),
                refreshToken: GM_getValue('Config.token', false)
            };
        },
        getTaskSwitches() {
            return {
                sign: GM_getValue('Tasks.sign', true),
                read: GM_getValue('Tasks.read', true),
                promos: GM_getValue('Tasks.promos', true),
                search: GM_getValue('Tasks.search', true)
            };
        },
        getSavedTaskDates() {
            return GM_getValue('Config.tasks', false) || { sign: 0, read: 0, promos: 0, search: 0 };
        },
        saveTaskDates(dates) { GM_setValue('Config.tasks', dates); },
        saveRefreshToken(token) { GM_setValue('Config.token', token); },
        clearRefreshToken() { GM_setValue('Config.token', false); },
        getHotSearchApiConfig() {
            const apiName = GM_getValue('Config.api', 'hot.baiwumm.com');
            if (apiName === 'offline') return null;
            return CONSTANTS.API_ENDPOINTS.HOT_SEARCH.find(api => api.name === apiName) || CONSTANTS.API_ENDPOINTS.HOT_SEARCH[0];
        },
        setLastHotSearchIndex(index) { GM_setValue('Config.index', index); },
        getLastHotSearchIndex() { return parseInt(GM_getValue('Config.index', -1)); }
    };

    // ============================================================================
    // ApiClient
    // ============================================================================

    const ApiClient = {
        request(options, returnFinalUrl = false) {
            return new Promise((resolve, reject) => {
                const startTime = Utils.getTimestamp();
                GM_xmlhttpRequest({
                    ...options,
                    timeout: CONSTANTS.REQUEST_TIMEOUT_MS,
                    ontimeout() { reject(new Error(`请求超时！用时 ${(Utils.getTimestamp() - startTime) / 1000} 秒`)); },
                    onload(xhr) {
                        if (xhr.status === 200) {
                            resolve(returnFinalUrl ? xhr.finalUrl : xhr.responseText);
                        } else {
                            const redirectStatuses = [301, 302, 307, 308];
                            if (redirectStatuses.includes(xhr.status)) {
                                const match = xhr.responseHeaders.match(/Location:\s*(.*?)\s*\r?\n/i);
                                resolve(match ? match[1] : false);
                            } else {
                                reject(new Error(`请求失败，状态码：${xhr.status}`));
                            }
                        }
                    },
                    onerror(err) { reject(new Error(`请求发生异常！🔛${err}`)); }
                });
            });
        },

        async getOAuthCode(cookies) {
            try {
                const result = await this.request({
                    url: CONSTANTS.API_ENDPOINTS.OAUTH.AUTHORIZE,
                    redirect: 'manual',
                    headers: { cookie: cookies }
                });
                if (result) {
                    const match = result.match(/M\.[\w+.]+(-\w+){4}/);
                    return match ? match[0] : false;
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Authorize Code 获取出错！🔛${e.message}`);
            }
            return false;
        },

        async getToken(url) {
            try {
                const result = await this.request({ url });
                Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `Token 响应: ${result.substring(0, 200)}...`);
                if (result && Utils.isValidJSON(result)) {
                    const res = JSON.parse(result);
                    if (res.refresh_token && res.access_token) {
                        Config.saveRefreshToken(res.refresh_token);
                        return res.access_token;
                    } else if (res.error) {
                        Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Token 获取失败: ${res.error} - ${res.error_description || '无详细说明'}`);
                    }
                } else {
                    Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Token 响应格式错误: ${result.substring(0, 200)}`);
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Token 获取出错！🔛${e.message}`);
            }
            return false;
        },

        async getRewardsDashboard() {
            try {
                const result = await this.request({
                    url: `${CONSTANTS.API_ENDPOINTS.REWARDS.DASHBOARD}?type=1&X-Requested-With=XMLHttpRequest&_=${Utils.getTimestamp()}`,
                    headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'referer': 'https://rewards.bing.com/' }
                });
                if (result && Utils.isValidJSON(result)) {
                    return JSON.parse(result).dashboard || false;
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Rewards Dashboard 获取出错！🔛${e.message}`);
            }
            return false;
        },

        async checkIpRegion(bingHost) {
            try {
                const result = await this.request({ url: `https://${bingHost}/` });
                if (result) {
                    const match = result.replace(/\s/g, '').match(/Region:"(.*?)"(.*?)RevIpCC:"(.*?)"/);
                    if (match) return { region: match[3].toUpperCase(), isNonMainland: false };
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `IP地区检查出错！🔛${e.message}`);
            }
            return { region: 'CN', isNonMainland: false };
        },

        async getRewardsVerificationToken() {
            try {
                const result = await this.request({
                    url: 'https://rewards.bing.com/',
                    headers: { 'referer': 'https://rewards.bing.com/' }
                });
                const match = result.replace(/\s/g, '').match(/RequestVerificationToken(.*?)value="(.*?)"/);
                if (match) return match[2];
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Request Verification Token 获取出错！🔛${e.message}`);
            }
            return false;
        },

        async getReadProgress(accessToken) {
            try {
                const result = await this.request({
                    url: 'https://prod.rewardsplatform.microsoft.com/dapi/me?channel=SAAndroid&options=613',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'user-agent': CONSTANTS.USER_AGENTS.MOBILE,
                        'authorization': `Bearer ${accessToken}`,
                        'x-rewards-appid': 'SAAndroid/31.4.2110003555',
                        'x-rewards-ismobile': 'true'
                    }
                });
                if (result && Utils.isValidJSON(result)) {
                    const res = JSON.parse(result);
                    const promotions = res.response?.promotions;
                    if (promotions) {
                        for (const promo of promotions) {
                            if (promo.attributes?.offerid === CONSTANTS.READ_OFFER_ID) {
                                return {
                                    max: Number(promo.attributes.max) || 1,
                                    progress: Number(promo.attributes.progress) || 0
                                };
                            }
                        }
                    }
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `阅读进度获取出错！🔛${e.message}`);
            }
            return { max: 1, progress: 0 };
        },

        async getIpDetails() {
            try {
                const result = await this.request({
                    url: CONSTANTS.API_ENDPOINTS.IP_CHECK,
                    headers: { 'referer': 'https://3g.qq.com/' }
                });
                if (result && Utils.isValidJSON(result)) {
                    const res = JSON.parse(result);
                    if (res.code === 0) return { ip: res.extra?.ip || '', info: res.ipInfo || '' };
                }
            } catch {
                // Ignore errors for IP details
            }
            return { ip: '', info: '' };
        }
    };

    // ============================================================================
    // Notifier
    // ============================================================================

    const Notifier = {
        webhooks: [],
        init() {
            const scriptName = GM_info.script.name;
            this.webhooks = [
                { name: '企业微信', urlPrefix: CONSTANTS.WEBHOOK_TEMPLATES.WEWORK.urlPrefix, key: GM_getValue(CONSTANTS.WEBHOOK_TEMPLATES.WEWORK.configKey, false), buildMessage: (content, datetime) => ({ msgtype: 'markdown_v2', markdown_v2: { content: `> ${datetime}\n\n ## ${scriptName}\n ${content}` } }) },
                { name: '钉钉', urlPrefix: CONSTANTS.WEBHOOK_TEMPLATES.DINGDING.urlPrefix, key: GM_getValue(CONSTANTS.WEBHOOK_TEMPLATES.DINGDING.configKey, false), buildMessage: (content, datetime) => ({ msgtype: 'markdown', markdown: { title: scriptName, text: `> ${datetime}\n ### ${scriptName}\n ${content}` } }) },
                { name: '飞书', urlPrefix: CONSTANTS.WEBHOOK_TEMPLATES.FEISHU.urlPrefix, key: GM_getValue(CONSTANTS.WEBHOOK_TEMPLATES.FEISHU.configKey, false), buildMessage: (content, datetime) => ({ msg_type: 'interactive', card: { schema: '2.0', header: { title: { tag: 'plain_text', content: scriptName }, template: 'orange' }, body: { elements: [{ tag: 'markdown', text_align: 'center', content: `#### ${datetime}\n ${content}` }] } } }) },
                { name: 'PushMe', urlPrefix: CONSTANTS.WEBHOOK_TEMPLATES.PUSHME.urlPrefix, key: GM_getValue(CONSTANTS.WEBHOOK_TEMPLATES.PUSHME.configKey, false), buildMessage: (content) => ({ type: 'markdown', title: `${scriptName}[#rewards!https://rewards.bing.com/rewards.png]`, content: `\n ${content}` }) },
                { name: 'Bark', urlPrefix: CONSTANTS.WEBHOOK_TEMPLATES.BARK.urlPrefix, key: GM_getValue(CONSTANTS.WEBHOOK_TEMPLATES.BARK.configKey, false), buildMessage: (content) => ({ group: 'rewards', icon: 'https://rewards.bing.com/rewards.png', title: GM_info.script.name, markdown: `\n ${content}` }) }
            ];
        },
        async send(message) {
            const datetime = new Date().toLocaleString();
            await Promise.all(this.webhooks.map(async (webhook) => {
                if (!webhook.key) return;
                try {
                    await ApiClient.request({
                        method: 'POST',
                        url: webhook.urlPrefix + webhook.key,
                        headers: { 'content-type': 'application/json; charset=UTF-8' },
                        data: JSON.stringify(webhook.buildMessage(message, datetime))
                    });
                } catch (e) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `消息推送出错！🔛${e.message}`);
                }
            }));
        }
    };

    // ============================================================================
    // TaskState
    // ============================================================================

    class TaskState {
        constructor(name) {
            this.name = name;
            this.retryCount = 0;
            this.completed = false;
            this.lastCompletedDate = 0;
            this.notifiedDate = 0; // 记录上次通知日期，避免重复通知
        }
        shouldSkip(isEnabled, todayDate, keepChecking) {
            if (!isEnabled) return true;
            if (this.retryCount > CONSTANTS.MAX_RETRY_COUNT) return true;
            if (this.completed && !keepChecking && this.lastCompletedDate === todayDate) return true;
            return false;
        }
        markCompleted(todayDate) {
            this.completed = true; 
            this.lastCompletedDate = todayDate;
        }
        hasNotifiedToday(todayDate) {
            return this.notifiedDate === todayDate;
        }
        markNotified(todayDate) {
            this.notifiedDate = todayDate;
        }
        incrementRetry() { this.retryCount++; }
        resetRetry() { this.retryCount = 0; }
    }

    // ============================================================================
    // TaskRunner
    // ============================================================================

    class TaskRunner {
        constructor(name, state) {
            this.name = name;
            this.state = state;
            this.delay = CONSTANTS.BASE_DELAY_MS;
        }
        // eslint-disable-next-line no-unused-vars
        async run(_context) { throw new Error('TaskRunner.run() must be implemented by subclass'); }
        async start(context, onComplete) {
            const result = await this.run(context);
            if (!result) {
                setTimeout(() => this.start(context, onComplete), this.delay);
            } else {
                onComplete();
            }
        }
    }

    // ============================================================================
    // SignTask - 移动设备签到
    // ============================================================================

    class SignTask extends TaskRunner {
        constructor() {
            super('移动设备签到', new TaskState(CONSTANTS.TASK_TYPES.SIGN));
            this.points = -1;
        }

        async run(context) {
            const { taskSwitches, todayDate, accessToken, region, lockRegion, isNonMainland } = context;

            if (!taskSwitches.sign) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '签到任务已禁用，跳过');
                this.state.completed = true;
                return true;
            }

            if (this.state.retryCount > CONSTANTS.MAX_RETRY_COUNT) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '签到任务重试次数超限，跳过');
                this.state.completed = true;
                return true;
            }

            if (this.state.completed) {
                Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, '签到任务已完成');
                return true;
            }

            if (this.state.lastCompletedDate === todayDate) {
                Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, '今日签到任务已完成');
                this.state.completed = true;
                return true;
            }

            if (this.points >= 0) {
                this.state.markCompleted(todayDate);
                const message = this.points > 0
                    ? `移动设备签到完成！\n✨今日签到奖励：${this.points} 积分`
                    : '移动设备签到完成！\n🚨今日已签到，无法二次签到';
                // 仅在今日未通知过时才发送浏览器通知
                if (!this.state.hasNotifiedToday(todayDate)) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message, true);
                    this.state.markNotified(todayDate);
                } else {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message);
                }
                await Notifier.send(message);
                return true;
            }

            if (!accessToken) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '签到任务需要 OAuth Token，跳过（可在配置中填写授权码）');
                this.state.completed = true;
                return true;
            }

            if (lockRegion && isNonMainland) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '非中国大陆 IP，跳过签到');
                context.exitCode = -1;
                return true;
            }

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '正在执行签到...');

            try {
                const countryCode = lockRegion ? 'cn' : region.toLowerCase();
                const result = await ApiClient.request({
                    method: 'POST',
                    url: CONSTANTS.API_ENDPOINTS.REWARDS.ACTIVITIES,
                    headers: {
                        'content-type': 'application/json; charset=UTF-8',
                        'user-agent': CONSTANTS.USER_AGENTS.MOBILE,
                        'authorization': `Bearer ${accessToken}`,
                        'x-rewards-appid': 'SAAndroid/31.4.2110003555',
                        'x-rewards-ismobile': 'true',
                        'x-rewards-country': countryCode,
                        'x-rewards-partnerid': 'startapp',
                        'x-rewards-flights': 'rwgobig'
                    },
                    data: JSON.stringify({
                        amount: 1, attributes: {}, id: Utils.generateUUID(),
                        type: CONSTANTS.ACTIVITY_TYPES.SIGN, country: countryCode,
                        risk_context: {}, channel: 'SAAndroid'
                    })
                });

                if (result && Utils.isValidJSON(result)) {
                    this.state.resetRetry();
                    this.points = JSON.parse(result).response?.activity?.p || 0;
                } else {
                    this.state.incrementRetry();
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `签到任务出错！🔛${e.message}`);
            }
            return false;
        }
    }

    // ============================================================================
    // ReadTask - 阅读任务
    // ============================================================================

    class ReadTask extends TaskRunner {
        constructor() {
            super('阅读任务', new TaskState(CONSTANTS.TASK_TYPES.READ));
            this.progress = { current: 0, max: 1 };
        }

        async run(context) {
            const { taskSwitches, todayDate, accessToken, region, lockRegion, isNonMainland } = context;

            if (!taskSwitches.read) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '阅读任务已禁用，跳过');
                this.state.completed = true;
                return true;
            }

            if (this.state.retryCount > CONSTANTS.MAX_RETRY_COUNT) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '阅读任务重试次数超限，跳过');
                this.state.completed = true;
                return true;
            }

            if (this.state.completed) {
                Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, '阅读任务已完成');
                return true;
            }

            if (this.state.lastCompletedDate === todayDate) {
                Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, '今日阅读任务已完成');
                this.state.completed = true;
                return true;
            }

            if (!accessToken) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '阅读任务需要 OAuth Token，跳过（可在配置中填写授权码）');
                this.state.completed = true;
                return true;
            }

            // 获取阅读进度
            const readProgress = await ApiClient.getReadProgress(accessToken);
            
            // 更新进度记录
            if (readProgress.progress > this.progress.current) {
                this.state.resetRetry();
                this.progress.current = readProgress.progress;
            } else {
                this.state.incrementRetry();
            }
            this.progress.max = readProgress.max;

            // 检查是否完成
            if (this.progress.current >= this.progress.max) {
                this.state.markCompleted(todayDate);
                const message = `阅读任务完成！\n✨今日阅读奖励：${this.progress.current}/${this.progress.max}`;
                if (!this.state.hasNotifiedToday(todayDate)) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message, true);
                    this.state.markNotified(todayDate);
                } else {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message);
                }
                await Notifier.send(message);
                return true;
            }

            if (lockRegion && isNonMainland) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '非中国大陆 IP，跳过阅读');
                context.exitCode = -1;
                return true;
            }

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `正在执行阅读任务... 当前进度: ${this.progress.current}/${this.progress.max}`);

            try {
                const countryCode = lockRegion ? 'cn' : region.toLowerCase();
                await ApiClient.request({
                    method: 'POST',
                    url: CONSTANTS.API_ENDPOINTS.REWARDS.ACTIVITIES,
                    headers: {
                        'content-type': 'application/json; charset=UTF-8',
                        'user-agent': CONSTANTS.USER_AGENTS.MOBILE,
                        'authorization': `Bearer ${accessToken}`,
                        'x-rewards-appid': 'SAAndroid/31.4.2110003555',
                        'x-rewards-ismobile': 'true',
                        'x-rewards-country': countryCode
                    },
                    data: JSON.stringify({
                        amount: 1,
                        country: countryCode,
                        id: Utils.generateUUID(),
                        type: CONSTANTS.ACTIVITY_TYPES.READ,
                        attributes: { offerid: CONSTANTS.READ_OFFER_ID }
                    })
                });
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `阅读任务出错！🔛${e.message}`);
            }
            return false;
        }
    }

    // ============================================================================
    // PromosTask - 活动任务
    // ============================================================================

    class PromosTask extends TaskRunner {
        constructor() {
            super('活动任务', new TaskState(CONSTANTS.TASK_TYPES.PROMOS));
            this.requestToken = null;
        }

        async run(context) {
            const { taskSwitches, todayDate, keepChecking, lockRegion, isNonMainland } = context;

            if (!taskSwitches.promos) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '活动任务已禁用，跳过');
                this.state.completed = true;
                return true;
            }

            if (this.state.retryCount > CONSTANTS.MAX_RETRY_COUNT) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '活动任务重试次数超限，跳过');
                this.state.completed = true;
                return true;
            }

            if (this.state.completed) {
                Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, '活动任务已完成');
                return true;
            }

            if (!keepChecking && this.state.lastCompletedDate === todayDate) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '今日活动任务已完成（持续检测已关闭）');
                this.state.completed = true;
                return true;
            }

            // 获取dashboard和token
            const dashboard = await ApiClient.getRewardsDashboard();
            if (!dashboard) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, '无法获取 Rewards 仪表板数据');
                this.state.incrementRetry();
                return false;
            }

            const requestToken = await ApiClient.getRewardsVerificationToken();
            if (!requestToken) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, '无法获取 Request Verification Token');
                this.state.incrementRetry();
                return false;
            }
            this.requestToken = requestToken;

            // 收集未完成的活动
            const promosList = this.collectPromos(dashboard);
            
            if (promosList.length === 0) {
                this.state.markCompleted(todayDate);
                const message = '活动任务完成！\n🤡具体以官网数据为准';
                if (!this.state.hasNotifiedToday(todayDate)) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message, true);
                    this.state.markNotified(todayDate);
                } else {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message);
                }
                await Notifier.send(message);
                return true;
            }

            if (lockRegion && isNonMainland) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '非中国大陆 IP，跳过活动');
                context.exitCode = -1;
                return true;
            }

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `发现 ${promosList.length} 个未完成的活动，正在执行...`);

            try {
                await this.completePromos(promosList, context);
                this.state.resetRetry();
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `活动任务出错！🔛${e.message}`);
                this.state.incrementRetry();
            }
            return false;
        }

        collectPromos(dashboard) {
            const promosList = [];
            const morePromos = dashboard.morePromotions || [];
            const dailySetPromos = dashboard.dailySetPromotions?.[Utils.getDate()] || [];
            
            for (const item of [...dailySetPromos, ...morePromos]) {
                if (item.complete === false && item.priority > -2 && item.exclusiveLockedFeatureStatus !== 'locked') {
                    promosList.push({
                        id: item.offerId,
                        hash: item.hash,
                        url: item.destinationUrl
                    });
                }
            }
            return promosList;
        }

        async completePromos(promosList, context) {
            for (const item of promosList) {
                // 上报活动 - 端点1
                ApiClient.request({
                    method: 'POST',
                    url: 'https://rewards.bing.com/api/reportactivity?X-Requested-With=XMLHttpRequest',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'referer': item.url
                    },
                    data: new URLSearchParams({
                        id: item.id,
                        hash: item.hash,
                        timeZone: '480',
                        activityAmount: '1',
                        dbs: '0',
                        form: '',
                        type: '',
                        __RequestVerificationToken: this.requestToken
                    }).toString()
                });

                // 上报活动 - 端点2
                ApiClient.request({
                    method: 'POST',
                    url: `https://${context.bingHost}/msrewards/api/v1/ReportActivity?ajaxreq=1`,
                    headers: {
                        'content-type': 'application/json; charset=UTF-8',
                        'referer': item.url
                    },
                    data: JSON.stringify({
                        ActivitySubType: 'quiz',
                        ActivityType: 'notification',
                        OfferId: item.id,
                        Channel: 'Bing.Com',
                        PartnerId: 'BingTrivia',
                        Timezone: -480
                    })
                });

                // 等待一小段时间
                await new Promise(resolve => setTimeout(resolve, Math.floor(CONSTANTS.BASE_DELAY_MS / 3)));
            }
        }
    }

    // ============================================================================
    // SearchTask - Bing 搜索（仅PC端）
    // ============================================================================

    class SearchTask extends TaskRunner {
        constructor() {
            super('Bing搜索', new TaskState(CONSTANTS.TASK_TYPES.SEARCH));
            this.searchWords = [];
            this.wordIndex = 0;
            this.searchIndex = 0;
            this.searchLimit = 0;
            this.pcProgress = { current: 0, max: 1 };
        }

        async run(context) {
            const { taskSwitches, todayDate, keepChecking, lockRegion, isNonMainland, searchInterval } = context;

            if (this.searchLimit === 0) this.searchLimit = Utils.randomRange(4, 7);

            if (!taskSwitches.search) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '搜索任务已禁用');
                this.state.completed = true;
                return true;
            }

            if (this.state.completed) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '搜索任务已完成');
                return true;
            }

            if (!keepChecking && this.state.lastCompletedDate === todayDate) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '今日搜索任务已完成（持续检测已关闭）');
                this.state.completed = true;
                return true;
            }

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '获取搜索进度...');
            const dashboard = await ApiClient.getRewardsDashboard();
            if (!dashboard) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, '无法获取 Rewards 仪表板数据');
                this.state.incrementRetry();
                return false;
            }

            this.updateProgress(dashboard);
            Utils.log(CONSTANTS.LOG_PREFIXES.INFO,
                `搜索进度 - 电脑: ${this.pcProgress.current}/${this.pcProgress.max}`);

            if (this.pcProgress.max === 0) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '未检测到搜索任务配额');
                this.state.completed = true;
                return true;
            }

            if (this.pcProgress.current >= this.pcProgress.max) {
                this.state.markCompleted(todayDate);
                const message = this.buildCompletionMessage();
                // 仅在今日未通知过时才发送浏览器通知
                if (!this.state.hasNotifiedToday(todayDate)) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message, true);
                    this.state.markNotified(todayDate);
                } else {
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, message);
                }
                await Notifier.send(message);
                return true;
            }

            if (this.state.retryCount > CONSTANTS.MAX_RETRY_COUNT) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, `搜索任务重试次数超限 (${this.state.retryCount}次)`);
                this.state.completed = true;
                const message = this.buildStatusMessage();
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, message);
                await Notifier.send(message);
                return true;
            }

            if (this.searchIndex >= this.searchLimit) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `已达到本次搜索次数限制 (${this.searchLimit}次)`);
                this.state.completed = true;
                const message = this.buildStatusMessage();
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, message);
                await Notifier.send(message);
                return true;
            }

            if (lockRegion && isNonMainland) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '非中国大陆 IP，跳过搜索');
                context.exitCode = -1;
                return true;
            }

            this.state.lastCompletedDate = 0;
            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `开始第 ${this.searchIndex + 1}/${this.searchLimit} 次搜索...`);
            const keyword = await this.getSearchKeyword();
            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `搜索关键词: ${keyword}`);

            try {
                await this.executeSearch(keyword, context);
                this.searchIndex++;
                this.delay = Utils.randomRange((searchInterval - 15) * 1000, (searchInterval + 15) * 1000);
                Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, `第 ${this.searchIndex}/${this.searchLimit} 次搜索完成，关键词: ${keyword}，等待 ${Math.round(this.delay / 1000)} 秒后继续...`);
                return false;
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `搜索任务出错！🔛${e.message}`);
                return false;
            }
        }

        updateProgress(dashboard) {
            const counters = dashboard.userStatus?.counters;
            if (!counters) return;
            if (counters.pcSearch) {
                this.pcProgress.current = counters.pcSearch[0].pointProgress;
                this.pcProgress.max = counters.pcSearch[0].pointProgressMax;
            } else {
                this.pcProgress.max = 0;
            }
        }

        async getSearchKeyword() {
            const apiConfig = Config.getHotSearchApiConfig();
            if (!apiConfig) return Utils.generateRandomChinese();

            if (this.wordIndex < 1 || this.searchWords.length < 1) {
                try {
                    const category = this.selectRandomCategory(apiConfig.categories);
                    const result = await ApiClient.request({ url: apiConfig.url + category });
                    if (result && Utils.isValidJSON(result)) {
                        const res = JSON.parse(result);
                        if (res.code === 200) {
                            this.wordIndex = 1;
                            this.searchWords = Utils.shuffleArray(res.data.map(item => item.title));
                            if (this.searchWords.length > 0) return Utils.getRandomSubstring(this.searchWords[0]);
                        }
                    }
                } catch (e) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `搜索词数据获取出错！🔛${e.message}`);
                }
                return Utils.generateRandomChinese();
            }

            this.wordIndex = (this.wordIndex + 1) % this.searchWords.length;
            return Utils.getRandomSubstring(this.searchWords[this.wordIndex]);
        }

        selectRandomCategory(categories) {
            const lastIndex = Config.getLastHotSearchIndex();
            const filtered = categories.filter((_, idx) => idx !== lastIndex);
            const selectedIdx = Utils.randomInt(filtered.length);
            Config.setLastHotSearchIndex(selectedIdx);
            return filtered[selectedIdx];
        }

        async executeSearch(keyword, context) {
            const { bingHost, lockRegion } = context;

            GM_cookie('delete', { url: 'https://bing.com', name: '_EDGE_S' });
            GM_cookie('delete', { url: 'https://bing.com', name: '_Rwho' });
            GM_cookie('delete', { url: 'https://bing.com', name: '_RwBf' });

            const regionMkt = lockRegion ? '&mkt=zh-CN' : '';
            const params = `q=${encodeURIComponent(keyword)}&form=QBLH${regionMkt}`;
            const queryUrl = `https://${bingHost}/search?${params}`;

            const headers = this.buildHeaders(bingHost, queryUrl);
            const result = await ApiClient.request({
                url: queryUrl,
                headers: { ...headers, 'referer': `https://${bingHost}/?form=QBLH` }
            });

            if (result) await this.reportSearchActivity(result, bingHost, params, headers);
        }

        buildHeaders(bingHost, queryUrl) {
            const todayHyphen = Utils.getDate(false, false);
            return {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'user-agent': CONSTANTS.USER_AGENTS.DESKTOP,
                'cookie': `_Rwho=u=d&ts=${todayHyphen}`,
                'referer': queryUrl
            };
        }

        async reportSearchActivity(result, bingHost, params, headers) {
            const cleaned = result.replace(/\s/g, '');
            const igMatch = cleaned.match(/,IG:"(.*?)",/);
            const guid = igMatch ? igMatch[1] : Utils.generateUUID(true);
            const linkMatch = cleaned.match(/class="b_algo(.*?)href="(.*?)"h="ID=(.*?)">(.*?)<\/h2/);

            const ncheaderUrl = `https://${bingHost}/rewardsapp/ncheader?ver=88888888&IID=SERP.5047&IG=${guid}&ajaxreq=1`;
            const reportUrl = `https://${bingHost}/rewardsapp/reportActivity?IG=${guid}&IID=SERP.5047&${params}&ajaxreq=1`;

            await ApiClient.request({ method: 'POST', url: ncheaderUrl, headers, data: 'wb=1%3bi%3d1%3bv%3d1' });
            await ApiClient.request({ method: 'POST', url: reportUrl, headers, data: `url=${encodeURIComponent(`https://${bingHost}/search?${params}`)}&V=web` });

            if (linkMatch) {
                const clickUrl = `https://${bingHost}/fd/ls/GLinkPingPost.aspx?IG=${guid}&ID=${linkMatch[3]}&url=${linkMatch[2]}`;
                await ApiClient.request({ url: clickUrl, headers });
            }
        }

        buildCompletionMessage() {
            const pcReport = this.pcProgress.max > 0 ? `\n💻电脑搜索：${this.pcProgress.current}/${this.pcProgress.max}` : '';
            return `Bing 搜索任务完成！${pcReport}`;
        }

        buildStatusMessage() {
            const pcReport = this.pcProgress.max > 0 ? `\n💻电脑搜索：${this.pcProgress.current}/${this.pcProgress.max}` : '';
            return `本次运行完成，共搜索 ${this.searchIndex} 次！${pcReport}`;
        }
    }

    // ============================================================================
    // TokenManager (可选)
    // ============================================================================

    const TokenManager = {
        accessToken: false,

        async renew(cookies) {
            const refreshToken = Config.getUserConfig().refreshToken;
            Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `Token 刷新检查: refreshToken=${refreshToken ? '存在' : '不存在'}`);

            try {
                let tokenUrl;

                if (!refreshToken) {
                    // 没有 refresh_token，需要用授权码换取
                    Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '未找到 Refresh Token，尝试获取授权码...');
                    const authCode = await this.getNewAuthCode(cookies);
                    if (!authCode) {
                        Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '无法获取授权码，签到任务将被跳过');
                        return false;
                    }
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, '授权码获取成功！正在换取 Token...');
                    tokenUrl = `${CONSTANTS.API_ENDPOINTS.OAUTH.TOKEN}?client_id=0000000040170455&code=${authCode}&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code`;
                } else {
                    // 有 refresh_token，直接刷新
                    Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '使用 Refresh Token 刷新 Access Token...');
                    tokenUrl = `${CONSTANTS.API_ENDPOINTS.OAUTH.TOKEN}?client_id=0000000040170455&refresh_token=${refreshToken}&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN`;
                }

                const token = await ApiClient.getToken(tokenUrl);
                if (token) {
                    this.accessToken = token;
                    Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, 'Access Token 获取成功！');
                    return true;
                } else {
                    Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, 'Token 接口返回异常，无法获取 Access Token');
                }
            } catch (e) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `Token 获取异常: ${e.message}`);
            }
            return false;
        },

        async getNewAuthCode(cookies) {
            // 1. 首先尝试从 Cookie 自动获取
            let authCode = await ApiClient.getOAuthCode(cookies);
            if (authCode) {
                Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, '从 Cookie 中自动获取到授权码');
                return authCode;
            }
            
            // 2. 从用户配置中获取
            const configCode = Config.getUserConfig().authCode;
            Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `配置中的授权码/链接: ${configCode ? configCode.substring(0, 50) + '...' : '空'}`);
            
            if (!configCode) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '配置中未找到授权码，且无法从 Cookie 自动获取');
                return false;
            }
            
            // 匹配授权码格式: M.xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
            const match = configCode.match(/M\.[\w+.]+(-\w+){4}/);
            if (match) {
                Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, `从配置中提取到授权码: ${match[0].substring(0, 20)}...`);
                return match[0];
            } else {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, `配置内容无法匹配授权码格式，期望格式: M.xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`);
            }
            
            return false;
        }
    };

    // ============================================================================
    // ScriptRunner
    // ============================================================================

    const ScriptRunner = {
        tasks: { sign: null, read: null, promos: null, search: null },
        context: {
            todayDate: 0,
            bingHost: 'www.bing.com',
            region: 'CN',
            accessToken: false,
            cookies: '',
            isNonMainland: false,
            exitCode: 0,
            keepChecking: true,
            lockRegion: true,
            searchInterval: 30,
            taskSwitches: { sign: true, read: true, promos: true, search: true }
        },
        startTime: 0,
        completedCount: 0,
        totalTasks: 4,

        async init() {
            this.startTime = Utils.getTimestamp();
            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '脚本开始初始化...');

            const userConfig = Config.getUserConfig();
            this.context.keepChecking = userConfig.keepChecking;
            this.context.lockRegion = userConfig.lockRegion;
            this.context.searchInterval = userConfig.searchInterval;
            this.context.taskSwitches = Config.getTaskSwitches();
            this.context.todayDate = Utils.getDate(true);

            await this.loadCookies();

            const savedDates = Config.getSavedTaskDates();

            this.tasks.sign = new SignTask();
            this.tasks.sign.state.lastCompletedDate = savedDates.sign;

            this.tasks.read = new ReadTask();
            this.tasks.read.state.lastCompletedDate = savedDates.read;

            this.tasks.promos = new PromosTask();
            this.tasks.promos.state.lastCompletedDate = savedDates.promos;

            this.tasks.search = new SearchTask();
            this.tasks.search.state.lastCompletedDate = savedDates.search;

            Notifier.init();

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '脚本初始化完成');
            return true;
        },

        async loadCookies() {
            return new Promise((resolve) => {
                GM_cookie('list', { url: 'https://login.live.com' }, (result) => {
                    if (result && Array.isArray(result) && result.length > 0) {
                        this.context.cookies = result.map(item => `${item.name}=${item.value}`).join('; ');
                        const cookieNames = result.map(item => item.name).join(', ');
                        Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, `Cookies 加载成功，共 ${result.length} 个: ${cookieNames}`);
                    } else {
                        Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, 'Cookies 加载失败或为空，请确保已登录 login.live.com');
                    }
                    resolve();
                });
            });
        },

        async determineBingHost() {
            if (this.context.lockRegion) {
                this.context.bingHost = 'cn.bing.com';
                return;
            }
            this.context.bingHost = 'www.bing.com';
        },

        async checkRegion() {
            const result = await ApiClient.checkIpRegion(this.context.bingHost);
            this.context.region = result.region;
            this.context.isNonMainland = result.isNonMainland;

            if (this.context.lockRegion && this.context.region !== 'CN') {
                const ipDetails = await ApiClient.getIpDetails();
                this.context.ip = ipDetails.ip;
                this.context.ipInfo = ipDetails.info;
                this.context.isNonMainland = true;
            }
        },

        isAllTasksCompletedToday() {
            const { todayDate } = this.context;
            const savedDates = Config.getSavedTaskDates();
            return (!this.context.keepChecking && 
                savedDates.sign === todayDate && 
                savedDates.read === todayDate &&
                savedDates.promos === todayDate &&
                savedDates.search === todayDate);
        },

        hasNoTasksEnabled() {
            const { taskSwitches } = this.context;
            return !taskSwitches.sign && !taskSwitches.read && !taskSwitches.promos && !taskSwitches.search;
        },

        onTaskComplete() {
            this.completedCount++;
            Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `任务完成回调: ${this.completedCount}/${this.totalTasks}`);

            if (this.context.exitCode < 0) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, `当前 IP 非中国大陆地区，停止运行！\n⛔${this.context.ip}-${this.context.region}\n🌏${this.context.ipInfo}`, true);
                this.finish();
                return;
            }

            if (this.completedCount >= this.totalTasks) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '所有任务处理完成');
                this.saveTaskDates();
                this.finish();
            }
        },

        saveTaskDates() {
            Config.saveTaskDates({
                sign: this.tasks.sign.state.lastCompletedDate,
                read: this.tasks.read.state.lastCompletedDate,
                promos: this.tasks.promos.state.lastCompletedDate,
                search: this.tasks.search.state.lastCompletedDate
            });
        },

        finish() {
            const elapsed = (Utils.getTimestamp() - this.startTime) / 1000;
            const signStatus = this.tasks.sign.state.completed ? '✅已完成' : '⏳未执行';
            const readStatus = this.tasks.read.state.completed ? '✅已完成' : '⏳未执行';
            const promosStatus = this.tasks.promos.state.completed ? '✅已完成' : '⏳未执行';
            const searchStatus = this.tasks.search.state.completed ? '✅已完成' : '⏳未执行';
            Utils.log(CONSTANTS.LOG_PREFIXES.INFO,
                `本次运行结束！用时 ${elapsed} 秒\n` +
                `签到任务: ${signStatus}\n` +
                `阅读任务: ${readStatus}\n` +
                `活动任务: ${promosStatus}\n` +
                `搜索任务: ${searchStatus}`);
        },

        async startTasks() {
            const { taskSwitches } = this.context;

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '检查 rewards.bing.com 登录状态...');
            const dashboard = await ApiClient.getRewardsDashboard();
            if (!dashboard) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, '请确保已在 rewards.bing.com 登录！', true);
                this.finish();
                return;
            }
            Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, '登录状态正常');

            // 启动搜索任务
            if (taskSwitches.search) {
                const delay = Utils.randomRange(5000, 15000);
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `将在 ${Math.round(delay / 1000)} 秒后开始搜索任务...`);
                setTimeout(() => {
                    Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '搜索任务开始执行...');
                    this.tasks.search.start(this.context, () => this.onTaskComplete());
                }, delay);
            } else {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '搜索任务已关闭，跳过');
                this.completedCount++;
            }

            // 启动活动任务
            if (taskSwitches.promos) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '活动任务开始执行...');
                setTimeout(() => {
                    this.tasks.promos.start(this.context, () => this.onTaskComplete());
                }, CONSTANTS.BASE_DELAY_MS);
            } else {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '活动任务已关闭，跳过');
                this.completedCount++;
            }

            // 启动需要OAuth的任务（签到和阅读）
            if (taskSwitches.sign || taskSwitches.read) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '尝试获取 OAuth Token...');
                try {
                    const tokenResult = await TokenManager.renew(this.context.cookies);
                    if (tokenResult) {
                        this.context.accessToken = TokenManager.accessToken;
                        Utils.log(CONSTANTS.LOG_PREFIXES.SUCCESS, 'OAuth Token 获取成功！');
                        
                        // 启动签到任务
                        if (taskSwitches.sign) {
                            setTimeout(() => {
                                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '签到任务开始执行...');
                                this.tasks.sign.start(this.context, () => this.onTaskComplete());
                            }, CONSTANTS.BASE_DELAY_MS);
                        } else {
                            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '签到任务已关闭，跳过');
                            this.completedCount++;
                        }
                        
                        // 启动阅读任务
                        if (taskSwitches.read) {
                            setTimeout(() => {
                                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '阅读任务开始执行...');
                                this.tasks.read.start(this.context, () => this.onTaskComplete());
                            }, CONSTANTS.BASE_DELAY_MS * 2);
                        } else {
                            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '阅读任务已关闭，跳过');
                            this.completedCount++;
                        }
                    } else {
                        Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, 'OAuth Token 获取失败，跳过需要授权的任务');
                        if (taskSwitches.sign) {
                            this.tasks.sign.state.completed = true;
                            this.completedCount++;
                        }
                        if (taskSwitches.read) {
                            this.tasks.read.state.completed = true;
                            this.completedCount++;
                        }
                        this.checkAllTasksComplete();
                    }
                } catch (e) {
                    Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, `OAuth Token 获取异常: ${e.message}`);
                    if (taskSwitches.sign) {
                        this.tasks.sign.state.completed = true;
                        this.completedCount++;
                    }
                    if (taskSwitches.read) {
                        this.tasks.read.state.completed = true;
                        this.completedCount++;
                    }
                    this.checkAllTasksComplete();
                }
            } else {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '签到和阅读任务均已关闭，跳过');
                this.completedCount += 2;
            }

            Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `初始完成计数: ${this.completedCount}/${this.totalTasks}`);
        },

        checkAllTasksComplete() {
            if (this.completedCount >= this.totalTasks) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '所有任务处理完成');
                this.saveTaskDates();
                this.finish();
            }
        },

        async run() {
            const initialized = await this.init();
            if (!initialized) {
                Utils.log(CONSTANTS.LOG_PREFIXES.ERROR, '脚本初始化失败');
                return;
            }

            if (this.isAllTasksCompletedToday()) {
                Utils.log(CONSTANTS.LOG_PREFIXES.INFO, '今日任务已完成，跳过运行');
                return;
            }

            if (this.hasNoTasksEnabled()) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, '没有启用任何任务');
                return;
            }

            await this.determineBingHost();
            Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `Bing 主机: ${this.context.bingHost}`);

            await this.checkRegion();
            Utils.log(CONSTANTS.LOG_PREFIXES.DEBUG, `IP 地区: ${this.context.region}`);

            if (this.context.isNonMainland) {
                Utils.log(CONSTANTS.LOG_PREFIXES.WARNING, `当前 IP 非中国大陆地区 (${this.context.region})，停止运行`);
                this.context.exitCode = -1;
                this.onTaskComplete();
                return;
            }

            Utils.log(CONSTANTS.LOG_PREFIXES.INFO, `开始执行任务...`);
            await this.startTasks();
        }
    };

    ScriptRunner.run();

})();