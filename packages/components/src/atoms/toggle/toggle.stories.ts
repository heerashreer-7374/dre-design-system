import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './toggle.js'

const meta: Meta = {
  title: 'Single Components/Toggle',
  component: 'dre-toggle',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { size: 'medium', checked: true, disabled: false },
  parameters: {
    docs: {
      description: {
        component:
          'Figma **⭐ Toggle** (`10070:229`) — Small 26×18 · Medium 32×22 · On `#0d6dfd` · Off `#bdc0cf`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-toggle size=${args.size} ?checked=${args.checked} ?disabled=${args.disabled}
      >Notifications</dre-toggle
    >
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle size="small" checked>Small</dre-toggle>
      <dre-toggle size="medium" checked>Medium</dre-toggle>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:grid;gap:12px;">
      <dre-toggle>Off</dre-toggle>
      <dre-toggle checked>On</dre-toggle>
      <dre-toggle disabled>Disabled Off</dre-toggle>
      <dre-toggle checked disabled>Disabled On</dre-toggle>
    </div>
  `,
}
