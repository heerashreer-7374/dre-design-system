# `@dre/tokens`

Design tokens for the DRE Design System, extracted from Figma and compiled with Style Dictionary.

## Structure

```
src/tokens/
  base/           # primitives (color, size, typography)
  functional/     # semantic light/dark colors
```

## Build

```bash
npm run build -w @dre/tokens
```

CSS variables use the `--dre-` prefix, e.g. `--dre-color-action-primary-default`.
