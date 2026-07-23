import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './checkbox.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Checkbox',
  component: 'dre-checkbox',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    appearance: { control: 'select', options: ['light', 'dark'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    appearance: 'light',
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Checkbox** ${figmaDocLink('10036:1134')} — Light/Dark · Small 20/8 · Medium 34/14 · Selected \`#0d6dfd\`.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
  render: (args) => html`
    <dre-checkbox
      size=${args.size}
      appearance=${args.appearance}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?indeterminate=${args.indeterminate}
    >
      Label
    </dre-checkbox>
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-checkbox size="small" checked>Small</dre-checkbox>
      <dre-checkbox size="medium" checked>Medium</dre-checkbox>
      <dre-checkbox size="small"></dre-checkbox>
      <dre-checkbox size="medium"></dre-checkbox>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;">
      <dre-checkbox aria-label="Default"></dre-checkbox>
      <dre-checkbox checked aria-label="Selected"></dre-checkbox>
      <dre-checkbox indeterminate aria-label="Indeterminate"></dre-checkbox>
      <dre-checkbox disabled aria-label="Disabled"></dre-checkbox>
      <dre-checkbox checked disabled aria-label="Selected disabled"></dre-checkbox>
      <dre-checkbox ?pressed=${true} aria-label="Pressed"></dre-checkbox>
      <dre-checkbox checked ?pressed=${true} aria-label="Selected pressed"></dre-checkbox>
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
      <dre-checkbox appearance="dark">Off</dre-checkbox>
      <dre-checkbox appearance="dark" checked>On</dre-checkbox>
      <dre-checkbox appearance="dark" indeterminate>Mixed</dre-checkbox>
      <dre-checkbox appearance="dark" disabled>Disabled</dre-checkbox>
      <dre-checkbox appearance="dark" checked disabled>Selected disabled</dre-checkbox>
    </div>
  `,
}

export const Labeled: Story = {
  name: 'Features / Labeled',
  render: () => html`
    <div style="display:grid;gap:12px;">
      <dre-checkbox checked>I agree to the terms</dre-checkbox>
      <dre-checkbox helper="Optional supporting description">Include analytics</dre-checkbox>
      <dre-checkbox size="small" checked helper="Compact row">Compact option</dre-checkbox>
    </div>
  `,
}
