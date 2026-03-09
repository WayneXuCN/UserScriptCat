# AGENTS.md - ScriptCat Userscripts

## Project Overview

ScriptCat userscript collection for browser automation. ScriptCat is fully compatible with Tampermonkey API with extended features.

**Structure:**

```
/script-name/
├── script-name.js     # Main userscript
└── README.md          # Documentation (optional)
```

## Documentation Query Guidelines

**CRITICAL:** Always query Context7 MCP for latest documentation before writing/modifying code.

### Two Documentation Sources (Query Both)

| Library | Context7 ID | Description |
|---------|-------------|-------------|
| 油猴开发指南 | `/websites/learn_scriptcat` | Chinese guide with 1000+ examples |
| ScriptCat Docs | `/scriptscat/scriptcat.org` | Official API reference |

### When to Query

- Using any `GM_*` API → verify parameters & return types
- Writing metadata blocks → check directive syntax
- Implementing ScriptCat features → background/cron/cloud storage
- Encountering errors → verify correct API usage

### Query Example

```
get-library-docs(context7CompatibleLibraryID: "/scriptscat/scriptcat.org", tokens: 10000, topic: "GM_notification")
get-library-docs(context7CompatibleLibraryID: "/websites/learn_scriptcat", tokens: 10000, topic: "hook")
```

## Metadata Directives

### Standard Directives

| Directive | Purpose |
|-----------|---------|
| `@match` / `@include` | URL patterns |
| `@grant` | Declare GM APIs (use `none` if none needed) |
| `@connect` | Cross-origin domains |
| `@run-at` | Timing: `document-start`, `document-end`, `document-idle` |

### ScriptCat-Specific Directives

| Directive | Purpose |
|-----------|---------|
| `@background` | Run as background script |
| `@crontab` | Cron expression for scheduled execution |
| `@storageName` | Shared storage namespace for cross-script communication |
| `@early-start` | Run before page content loads |

### Script Types

- **Foreground**: Standard userscripts running on web pages
- **Background**: Persistent scripts with `@background`
- **Cron**: Scheduled scripts with `@crontab`, use `CATRetryError` for retry

## UserConfig (YAML)

```yaml
/* ==UserConfig==
section:
  key:
    title: Display Name
    type: select|number|checkbox|text|textarea
    default: value
    values: [opt1, opt2]    # for select
    min: 1                  # for number
    max: 100
    password: true          # for sensitive fields
 ==/UserConfig== */

// Access: GM_getValue("section.key", defaultValue)
```

## Code Style

### Naming

- `UPPER_SNAKE_CASE` → constants
- `camelCase` → variables, functions
- `PascalCase` → classes

### Structure

```javascript
// ==UserScript==
// Metadata
// ==/UserScript==

/* ==UserConfig== */
// YAML config
/* ==/UserConfig== */

(function() {
    'use strict';
    // 1. Constants (Object.freeze)
    // 2. Utils
    // 3. Config
    // 4. Core modules
    // 5. Entry point
})();
```

### Best Practices

- Use `Object.freeze()` for constants
- Prefer Promise-based `GM.*` API over callback-style `GM_*`
- Use `GM_notification({ progress: 0-100 })` for progress indication
- Use `CAT_fileStorage` for cloud backup
- Add `GM_registerMenuCommand("Settings", () => CAT_userConfig())`

## API Quick Reference

| Category | Key APIs |
|----------|----------|
| Storage | `GM_getValue`, `GM_setValue`, `GM_addValueChangeListener` |
| Network | `GM_xmlhttpRequest`, `GM_download` |
| UI | `GM_notification`, `GM_registerMenuCommand`, `GM_addStyle`, `GM_addElement` |
| Tab | `GM_openInTab`, `GM_getTab`, `GM_saveTab` |
| Cookie | `GM_cookie('list|set|delete', details, callback)` |
| ScriptCat | `CAT_fileStorage`, `CAT_userConfig`, `CATRetryError` |

**Promise versions available:** `GM.getValue()`, `GM.xmlHttpRequest()`, `GM.cookie.list()`, etc.

## Security

- Never commit tokens/keys
- Declare all cross-origin domains in `@connect`
- Validate external inputs
- Use minimal `@grant` declarations
