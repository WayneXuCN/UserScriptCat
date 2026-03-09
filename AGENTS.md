# AGENTS.md - Tampermonkey Userscripts

## Project Overview

This is a collection of **Tampermonkey/Greasemonkey Userscripts** for browser automation and enhancement.

**Structure:**

```
/
├── AGENTS.md              - This file
├── script-name/           - Each script in its own folder
│   ├── script-name.js     - Main userscript file
│   ├── script-name_v1.js  - Versioned history (optional)
│   └── README.md          - Script documentation (optional)
└── ...
```

## Build / Lint / Test Commands

**No build system** - Pure JavaScript userscripts without npm/build tools.

| Command | Usage |
|---------|-------|
| No build required | Copy `.js` file to Tampermonkey dashboard |
| No test runner | Manual testing in browser with Tampermonkey extension |
| No linter | Follow style guidelines below |

## Code Style Guidelines

### File Organization

Each userscript should follow this structure:

```javascript
// ==UserScript==
// Metadata Block
// ==/UserScript==

/* ==UserConfig==
Config Schema (Tampermonkey specific)
==/UserConfig== */

(function() {
    'use strict';

    // 1. CONSTANTS
    // 2. State variables
    // 3. Utility functions
    // 4. Core modules (API, Config, etc.)
    // 5. Feature classes/functions
    // 6. Main entry point

})();
```

### Metadata Block

Reference: <https://www.tampermonkey.net/documentation.php>

```javascript
// ==UserScript==
// @name         Script Name
// @namespace    https://your-domain.com/
// @version      1.0.0
// @description  Script description
// @author       author@example.com
// @match        https://example.com/*
// @icon         https://example.com/favicon.ico
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_info
// @connect      api.example.com
// @run-at       document-end
// ==/UserScript==
```

**Key directives:**

| Directive | Usage |
|-----------|-------|
| `@match` | URL patterns where script runs (use `*` wildcard carefully) |
| `@grant` | Declare GM_* APIs used; use `none` if no GM APIs needed |
| `@connect` | Allow cross-origin requests to specified domains |
| `@run-at` | Timing: `document-start`, `document-body`, `document-end` (default) |

### Naming Conventions

| Pattern | Usage | Example |
|---------|-------|---------|
| `UPPER_SNAKE_CASE` | Constants | `API_BASE_URL`, `DEFAULT_TIMEOUT` |
| `camelCase` | Variables, functions, methods | `getUserConfig()`, `isLoading` |
| `PascalCase` | Classes, constructors | `TaskRunner`, `ApiClient` |
| `GM_*` | Tampermonkey API | `GM_getValue`, `GM_setValue` |

### Module Patterns

#### Constants Definition

```javascript
const CONFIG = Object.freeze({
    VERSION: '1.0.0',
    TIMEOUT_MS: 10000,
    API_BASE: 'https://api.example.com',
    ENDPOINTS: {
        USER: '/user',
        DATA: '/data'
    }
});
```

#### IIFE Wrapper (Required)

Always wrap in IIFE with strict mode to avoid global scope pollution:

```javascript
(function() {
    'use strict';

    // All code here

})();
```

#### Utility Functions

```javascript
const Utils = {
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    formatDate(date = new Date()) {
        return date.toISOString().split('T')[0];
    },

    isPlainObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    },

    safeJSONParse(str, fallback = null) {
        try {
            return JSON.parse(str);
        } catch {
            return fallback;
        }
    }
};
```

#### API Client

`GM_xmlhttpRequest` returns an object with `abort()` method. Use it for cleanup.

```javascript
const ApiClient = {
    async request({ method = 'GET', url, headers = {}, data = null, timeout = 10000 }) {
        return new Promise((resolve, reject) => {
            const controller = GM_xmlhttpRequest({
                method,
                url,
                headers,
                data,
                timeout,
                onload(response) {
                    if (response.status >= 200 && response.status < 300) {
                        resolve(response.responseText);
                    } else {
                        reject(new Error(`HTTP ${response.status}: ${response.statusText}`));
                    }
                },
                onerror(error) {
                    reject(new Error('Network error'));
                },
                ontimeout() {
                    reject(new Error('Request timeout'));
                }
            });

            // Return abort function if needed
            // return () => controller.abort();
        });
    },

    async get(url, headers = {}) {
        return this.request({ url, headers });
    },

    async post(url, data, headers = {}) {
        return this.request({
            method: 'POST',
            url,
            headers: { 'Content-Type': 'application/json', ...headers },
            data: JSON.stringify(data)
        });
    }
};
```

#### Configuration Management

```javascript
const Config = {
    defaults: {
        enabled: true,
        interval: 5000,
        debug: false
    },

    get(key) {
        const value = GM_getValue(key, undefined);
        return value !== undefined ? value : this.defaults[key];
    },

    set(key, value) {
        GM_setValue(key, value);
    },

    reset(key) {
        GM_setValue(key, this.defaults[key]);
    },

    getAll() {
        const config = {};
        Object.keys(this.defaults).forEach(key => {
            config[key] = this.get(key);
        });
        return config;
    }
};
```

#### Feature Class Pattern

```javascript
class TaskRunner {
    #name;
    #completed = false;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get isCompleted() {
        return this.#completed;
    }

    async execute(context) {
        if (this.#completed) {
            return true;
        }

        try {
            const result = await this.run(context);
            this.#completed = true;
            return result;
        } catch (error) {
            console.error(`[${this.#name}] Error:`, error);
            return false;
        }
    }

    async run(context) {
        throw new Error('run() must be implemented by subclass');
    }
}

// Usage
class FetchTask extends TaskRunner {
    constructor() {
        super('FetchTask');
    }

    async run(context) {
        const data = await ApiClient.get(context.url);
        return Utils.safeJSONParse(data);
    }
}
```

### Logging

Use consistent prefix pattern for readability:

```javascript
const Logger = {
    prefix: '[MyScript]',

    info(message, ...args) {
        console.log(`${this.prefix} ${message}`, ...args);
    },

    warn(message, ...args) {
        console.warn(`${this.prefix} ${message}`, ...args);
    },

    error(message, ...args) {
        console.error(`${this.prefix} ${message}`, ...args);
    },

    debug(message, ...args) {
        if (Config.get('debug')) {
            console.debug(`${this.prefix} [DEBUG] ${message}`, ...args);
        }
    }
};
```

### Error Handling

```javascript
async function safeAsync(fn, fallback = null) {
    try {
        return await fn();
    } catch (error) {
        Logger.error(error.message);
        return fallback;
    }
}

// Usage
const data = await safeAsync(
    () => ApiClient.get('https://api.example.com/data'),
    []
);
```

### Notification

```javascript
function notify(message, title = 'Script Notification') {
    GM_notification({
        title,
        text: message,
        onclick: () => GM_openInTab('https://example.com', { active: true })
    });
}
```

### Menu Commands

Add user-accessible controls via Tampermonkey menu:

```javascript
GM_registerMenuCommand('⚙️ Settings', () => {
    // Open settings UI
});

GM_registerMenuCommand('🔄 Reset Config', () => {
    Object.keys(Config.defaults).forEach(key => Config.reset(key));
    Logger.info('Config reset to defaults');
});

GM_registerMenuCommand('📖 View Logs', () => {
    console.log('Recent logs...');
});
```

## Common GM_* APIs

Reference: <https://www.tampermonkey.net/documentation.php>

| API | Return | Description |
|-----|--------|-------------|
| `GM_getValue(key, default?)` | `any` | Get stored value |
| `GM_setValue(key, value)` | `void` | Store value persistently |
| `GM_deleteValue(key)` | `void` | Delete stored value |
| `GM_listValues()` | `string[]` | List all stored keys |
| `GM_xmlhttpRequest(details)` | `object` | Cross-origin HTTP request |
| `GM_notification(details)` | `void` | Show browser notification |
| `GM_openInTab(url, options?)` | `object` | Open URL in new tab |
| `GM_registerMenuCommand(name, callback)` | `number` | Add menu item |
| `GM_unregisterMenuCommand(id)` | `void` | Remove menu item |
| `GM_setClipboard(text)` | `void` | Copy text to clipboard |
| `GM_info` | `object` | Script metadata (read-only) |

## Testing & Debugging

1. **Tampermonkey Editor** - Check syntax errors in the "Editor" tab
2. **Browser DevTools** - F12 → Sources for breakpoints, Console for logs
3. **Menu Commands** - Use `GM_registerMenuCommand` for debug controls
4. **Verbose Logging** - Add debug flag to enable/disable detailed logs

## Security Best Practices

1. **Never commit sensitive data** - Tokens, passwords, API keys should not be in code
2. **Validate inputs** - Sanitize any user-provided or external data
3. **Use `@connect`** - Explicitly declare allowed cross-origin domains
4. **Avoid `innerHTML`** - Use `textContent` or DOM APIs to prevent XSS
5. **Minimal `@grant`** - Only declare GM APIs you actually use
6. **HTTPS only** - Always use secure URLs for API endpoints

## Compatibility Notes

| Engine | Notes |
|--------|-------|
| Tampermonkey | Full feature support, recommended |
| Violentmonkey | Good compatibility, minor API differences |
| Greasemonkey 4+ | Limited GM_* APIs, uses Promise-based API |
| Greasemonkey 3 | Legacy, avoid for new scripts |
