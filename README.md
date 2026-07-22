# DRE Design System

Web Components implementation of the **DRE Design System** (Zoho DRE IDE), modeled after [Primer](https://primer.style)’s layered architecture:

| Package | Role | Primer equivalent |
|---|---|---|
| `@dre/tokens` | Design tokens → CSS vars / JSON / JS | `primer/primitives` |
| `@dre/components` | Lit custom elements + Storybook | `primer/react` |

Figma source: [DRE Design System - AI Readable](https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable)

## Quick start

```bash
npm install
npm run build
npm run storybook
```

Storybook: http://localhost:6006

## Usage

```html
<link rel="stylesheet" href="node_modules/@dre/tokens/dist/css/tokens.css" />
<script type="module">
  import '@dre/components'
</script>

<html data-theme="light">
  <dre-button hierarchy="primary">Save</dre-button>
</html>
```

Theme switching:

```html
<html data-theme="dark">
```

## Packages

### `@dre/tokens`

- Source tokens in `packages/tokens/src/tokens/` (`base` + `functional` light/dark)
- Build with Style Dictionary → `--dre-*` CSS custom properties
- Outputs: `dist/css/tokens.css`, `tokens.light.css`, `tokens.dark.css`, JSON + JS

### `@dre/components`

Custom elements (`dre-*`) organized by atomic design:

Storybook sidebar follows **Figma page order**: Foundation → Single Components → Assembled Components → Patterns & Layouts → Blocks → App Layout.

- **Foundation:** Colors, Icons, Elevations, Spacer, Corner Radius
- **Single:** button, radio, checkbox, toggle, modal, toast, popover, input, dropdown, tab, accordion, badge, tooltip, icon
- **Assembled:** button/checkbox/radio/toggle/tab/accordion/toast/input/dropdown groups
- **Patterns:** top-bar, secondary-top-bar, left/right/bottom panes

Each component ships with stories, tests (where applicable), and Figma Code Connect stubs (`*.figma.ts`).

Custom Elements Manifest is generated at build time (`custom-elements.json`).

Optional React wrappers live in `src/react/` (peer `@lit/react`).

## Scripts

| Command | Description |
|---|---|
| `npm run build` | Build tokens + components |
| `npm run storybook` | Dev Storybook |
| `npm run test` | Unit tests |
| `npm run changeset` | Add a changeset for release |

## Roadmap status

- [x] Phase 0 — Figma discovery
- [x] Phase 1 — Monorepo scaffold
- [x] Phase 2 — Tokens package
- [x] Phase 3 — Golden-path `dre-button`
- [x] Phase 4 — Core atoms / molecules / organisms
- [x] Phase 5 — Storybook + a11y
- [x] Phase 6 — CEM + React interop stubs
- [x] Phase 7 — Figma Code Connect stubs
- [x] Phase 8 — Changesets release tooling

See `docs/discovery/inventory.md` for the full Figma inventory.
