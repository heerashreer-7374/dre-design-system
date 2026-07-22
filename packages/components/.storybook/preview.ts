import type { Preview } from '@storybook/web-components-vite'
import '@dre/tokens/css'

/**
 * Sidebar order mirrors Figma pages:
 * Foundation → Single Components → Assembled Components → Patterns & Layouts → Blocks → App Layout
 */
const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Foundation',
          ['Colors', 'Icons', 'Elevations', 'Spacer', 'Corner Radius'],
          'Single Components',
          [
            'Button',
            'Radio Button',
            'Checkbox',
            'Toggle',
            'Modal',
            'Toast Message',
            'Popover',
            'Input Field',
            'Dropdown',
            'Tab',
            'Accordion',
            'Badge',
            'Tooltip',
          ],
          'Assembled Components',
          [
            'Button Group',
            'Checkbox Group',
            'Radio Button Group',
            'Toggle Group',
            'Tab Group',
            'Accordion Group',
            'Toast Group',
            'Modal Group',
            'Popover Group',
            'Input Group',
            'Dropdown Group',
          ],
          'Patterns & Layouts',
          ['Top Bar', 'Secondary Top Bar', 'Left Pane', 'Right Pane', 'Bottom Pane'],
          'Blocks',
          ['If-Else', 'Blocks'],
          'App Layout Composition',
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'DRE color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (story, context) => {
      const theme = (context.globals.theme as string) || 'light'
      document.documentElement.setAttribute('data-theme', theme)
      document.body.style.background = 'var(--dre-color-background-page)'
      document.body.style.color = 'var(--dre-color-text-default)'
      document.body.style.fontFamily =
        "var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif)"
      return story()
    },
  ],
}

export default preview
