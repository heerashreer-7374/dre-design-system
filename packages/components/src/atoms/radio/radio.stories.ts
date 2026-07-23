import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './radio.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Radio Button',
  component: 'dre-radio',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { size: 'medium', checked: false, disabled: false },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Radio Button** ${figmaDocLink('10151:1002')} — Small 8×8 · Medium 14×14 · States Default/Hover/Selected/Disabled.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-radio size=${args.size} ?checked=${args.checked} ?disabled=${args.disabled} name="demo"
      >Option</dre-radio
    >
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-radio size="small" name="s" checked>Small 8</dre-radio>
      <dre-radio size="medium" name="m" checked>Medium 14</dre-radio>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:grid;gap:12px;">
      <dre-radio size="medium" name="st1">Default</dre-radio>
      <dre-radio size="medium" name="st2" checked>Selected</dre-radio>
      <dre-radio size="medium" name="st3" disabled>Disabled</dre-radio>
      <dre-radio size="medium" name="st4" checked disabled>Selected Disabled</dre-radio>
    </div>
  `,
}
