/**
 * Figma Code Connect mapping for dre-button.
 * Wire with `@figma/code-connect` once the project is linked to the DRE library.
 *
 * Figma: Button · node 12002:17139
 * File: UnFbmt5yovBqr4tBNjuNx9
 */
export const dreButtonFigmaConnect = {
  figmaNodeUrl:
    'https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable?node-id=12002-17139',
  component: 'dre-button',
  example: `<dre-button hierarchy="primary" size="medium">Label</dre-button>`,
  props: {
    Hierarchy: {
      Primary: 'hierarchy="primary"',
      Secondary: 'hierarchy="secondary"',
      Ghost: 'hierarchy="ghost"',
    },
    Size: {
      XSmall: 'size="xsmall"',
      Small: 'size="small"',
      Medium: 'size="medium"',
    },
    Destructive: {
      False: '',
      True: 'danger',
    },
  },
} as const
