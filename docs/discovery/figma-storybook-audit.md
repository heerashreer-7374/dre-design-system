# Figma ↔ Storybook audit

**Figma order** is the source of truth for Storybook sidebar order.

## Status legend

- ✅ Implemented + Storybook story
- 🟡 Partial (story or simplified API)
- ❌ Missing

## Foundation (`🧱`) — pixel/spec-exact

| Figma page | Storybook | Status |
|---|---|---|
| Colors | Foundation/Colors | ✅ Exact hex + WCAG labels from Figma page (Blue→Teal) |
| Icons | Foundation/Icons | ✅ 72 SVGs exported from Figma (`dre-icon`) |
| Elevations | Foundation/Elevations | ✅ Exact shadow CSS from Figma usage labels |
| Spacer | Foundation/Spacer | ✅ Figma sizes 4–64 + H/V demos |
| Corner Radius | Foundation/Corner Radius | ✅ 0 / 2 / 4 / 8 / 12 / 16 / full |

## Single Components (`⭐`)

| Figma | Code | Status |
|---|---|---|
| Button | `dre-button` | ✅ |
| Radio Button | `dre-radio` | ✅ |
| Checkbox | `dre-checkbox` | ✅ |
| Toggle | `dre-toggle` | ✅ |
| Modal | `dre-modal` | ✅ |
| Toast Message | `dre-toast` | ✅ |
| Popover | `dre-popover` | ✅ |
| Input Field | `dre-input` | ✅ |
| Dropdown | `dre-dropdown` | ✅ |
| Tab | `dre-tab` / `dre-tab-group` | ✅ |
| Accordion | `dre-accordion` | ✅ |
| Badge | `dre-badge` | ✅ |
| Tooltip | `dre-tooltip` | ✅ |

## Assembled Components (`💠`)

| Figma | Code | Status |
|---|---|---|
| Button Group | `dre-button-group` | ✅ |
| Checkbox Group | `dre-checkbox-group` | ✅ |
| Radio Button Group | `dre-radio-group` | ✅ |
| Toggle Group | `dre-toggle-group` | ✅ |
| Tab Group | `dre-tab-group` | ✅ |
| Accordion Group | `dre-accordion-group` | ✅ |
| Toast Group | `dre-toast-group` | ✅ |
| Modal Group | `dre-modal` (variants) | 🟡 |
| Popover Group | `dre-popover` | 🟡 |
| Input Group | `dre-input-group` | ✅ |
| Dropdown Group | `dre-dropdown-group` | ✅ |

## Patterns & Layouts (`🧩`)

| Figma | Code | Status |
|---|---|---|
| Top Bar | `dre-top-bar` | ✅ |
| Secondary Top Bar | `dre-secondary-top-bar` | ✅ |
| Left Pane | `dre-left-pane` | ✅ |
| Right Pane | `dre-right-pane` | ✅ |
| Bottom Pane | `dre-bottom-pane` | ✅ |

## Blocks

| Figma | Code | Status |
|---|---|---|
| If-Else | — | 🟡 placeholder story |
| Blocks | — | 🟡 placeholder story |
| App Layout Composition | App Shell story | ✅ |
