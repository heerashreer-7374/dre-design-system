import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './checkbox.js'

const meta: Meta = {
  title: 'Single Components/Checkbox',
  component: 'dre-checkbox',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
  args: { size: 'medium', checked: false, disabled: false, indeterminate: false },
  parameters: {
    docs: {
      description: {
        component:
          'Figma **⭐ Checkbox** (`10048:396`) — Small 8×8 r2 · Medium 14×14 r4 · Selected `#0d6dfd`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-checkbox
      size=${args.size}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?indeterminate=${args.indeterminate}
      >Label</dre-checkbox
    >
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-checkbox size="small" checked>Small</dre-checkbox>
      <dre-checkbox size="medium" checked>Medium</dre-checkbox>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:grid;gap:12px;">
      <dre-checkbox>Default</dre-checkbox>
      <dre-checkbox checked>Selected</dre-checkbox>
      <dre-checkbox indeterminate>Indeterminate</dre-checkbox>
      <dre-checkbox disabled>Disabled</dre-checkbox>
      <dre-checkbox checked disabled>Selected Disabled</dre-checkbox>
    </div>
  `,
}
