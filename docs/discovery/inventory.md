# DRE Design System — Phase 0 Discovery

**Figma file:** [DRE Design System - AI Readable](https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable)  
**File key:** `UnFbmt5yovBqr4tBNjuNx9`  
**Extracted:** 2026-07-22 via Figma Desktop Bridge

## Token collections (613 variables)

| Collection | Modes | Count | Role in code |
|---|---|---|---|
| Color Tokens | Colors | 176 | Base primitives (`primitive/*`) |
| Color Tokens — Semantic | Light / Dark | 157 | Functional colors (`color/*`) |
| Creator Theme | Light / Dark | 104 | Product theme overlay (secondary) |
| Allies token | Light | 105 | Legacy / partner (deferred) |
| Typography | Default | 42 | Type styles + weights |
| Typescale | Mode 1 | 5 | Brand font family + weight names |
| Corner Radius | Default | 7 | Radius scale |
| Spacer | Default | 17 | Spacing scale |

**Types:** COLOR 523 · FLOAT 76 · STRING 14

## Atomic mapping (Figma → code)

### Atoms (Single Components ★)
Button, Radio Box, Checkbox, Toggle, Input Field, Toast Message, Badge (Status/Count/Info Banner), Tooltip, Tab Item, Accordion, Scroll Bar, Dropdown primitives

### Molecules (Assembled Components 💠)
Button Group, Checkbox Group, Radio Group, Toggle Group, Tab Group, Accordion Group, Toast Group, Modal Group, Popover Group, Input Group, Dropdown Group

### Organisms (Patterns & Layouts 🧩)
Top Bar, Secondary Top Bar, Left Pane, Right Pane, Bottom Pane, Modal/Dialog, App Layout Composition

## Button (golden path)

- **Figma node:** `12002:17139` (288 variants)
- **Properties:** Appearance (Light/Dark), Hierarchy (Primary/Secondary/Ghost), Size (XSmall/Small/Medium), State (Default/Hover/Pressed/Disabled), Icon (False/Leading/Trailing/Only), Destructive

## Brand foundations

- **Font:** Zoho Puvi
- **Brand blue:** `#0d6dfd` (`primitive/blue/500`)
- **Radius:** none 0 · xsmall 2 · small 4 · medium 8 · large 12 · xlarge 16 · full 9999
- **Spacer:** 0–48px scale matching token names (`spacer/4` = 4px)

## Implemented in code (expanded)

| Figma | Code |
|---|---|
| Input Dropdown / Dropdown menu / list item | `dre-dropdown`, `dre-dropdown-item` |
| Accordion / Accordion Group | `dre-accordion`, `dre-accordion-group` |
| Top Bar | `dre-top-bar` |
| Secondary Top Bar | `dre-secondary-top-bar` |
| Left Pane | `dre-left-pane` |
| Right Pane | `dre-right-pane` |
| Bottom Pane | `dre-bottom-pane` |

## Implementation notes

1. Primary theme modes: **Light** / **Dark** from Color Tokens — Semantic.
2. CSS custom properties use `--dre-*` prefix (Primer-style).
3. Allies token + Creator Theme deferred from v1 CSS build (available for later themes).
4. Web Components via Lit; Storybook via `@storybook/web-components-vite`.
