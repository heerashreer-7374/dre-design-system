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
    appearance: { control: 'select', options: ['light', 'dark'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    appearance: 'light',
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Radio Button** ${figmaDocLink('10151:1001')} — Light/Dark · Small 20/8 · Medium 34/14 · Selected \`#0d6dfd\`.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
  render: (args) => html`
    <dre-radio
      size=${args.size}
      appearance=${args.appearance}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      name="demo"
    >
      Option
    </dre-radio>
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-radio size="small" name="s" checked>Small</dre-radio>
      <dre-radio size="medium" name="m" checked>Medium</dre-radio>
      <dre-radio size="small" name="s2"></dre-radio>
      <dre-radio size="medium" name="m2"></dre-radio>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;">
      <dre-radio name="st" accessible-label="Default"></dre-radio>
      <dre-radio name="st" checked accessible-label="Selected"></dre-radio>
      <dre-radio name="st-d" disabled accessible-label="Disabled"></dre-radio>
      <dre-radio name="st-d" checked disabled accessible-label="Selected disabled"></dre-radio>
      <dre-radio name="st-p" ?pressed=${true} accessible-label="Pressed"></dre-radio>
      <dre-radio name="st-p" checked ?pressed=${true} accessible-label="Selected pressed"></dre-radio>
    </div>
  `,
}

export const Dark: Story = {
  name: 'Features / Dark',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => html`
    <div
      style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      <dre-radio appearance="dark" name="dk">Off</dre-radio>
      <dre-radio appearance="dark" name="dk" checked>On</dre-radio>
      <dre-radio appearance="dark" name="dk-d" disabled>Disabled</dre-radio>
      <dre-radio appearance="dark" name="dk-d" checked disabled>Selected disabled</dre-radio>
      <dre-radio appearance="dark" name="dk-p" ?pressed=${true}>Pressed</dre-radio>
      <dre-radio appearance="dark" name="dk-p" checked ?pressed=${true}>Selected pressed</dre-radio>
    </div>
  `,
}

export const Labeled: Story = {
  name: 'Features / Labeled',
  render: () => html`
    <div style="display:grid;gap:12px;">
      <dre-radio name="lb" checked>Email notifications</dre-radio>
      <dre-radio name="lb" helper="Optional supporting description">SMS alerts</dre-radio>
      <dre-radio name="lb-s" size="small" checked helper="Compact row">Compact option</dre-radio>
    </div>
  `,
}
