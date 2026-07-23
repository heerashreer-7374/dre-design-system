import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './toggle.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Toggle',
  component: 'dre-toggle',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    appearance: { control: 'select', options: ['light', 'dark'] },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    icon: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    appearance: 'light',
    checked: true,
    disabled: false,
    icon: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Toggle** ${figmaDocLink('10068:197')} — Light/Dark · Small 26×18 · Medium 32×22 · Icon · Focus/Hover/Disabled.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
  render: (args) => html`
    <dre-toggle
      size=${args.size}
      appearance=${args.appearance}
      ?checked=${args.checked}
      ?disabled=${args.disabled}
      ?icon=${args.icon}
    >
      Notifications
    </dre-toggle>
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle size="small" checked>Small</dre-toggle>
      <dre-toggle size="medium" checked>Medium</dre-toggle>
      <dre-toggle size="small"></dre-toggle>
      <dre-toggle size="medium"></dre-toggle>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(4,auto);gap:16px 24px;align-items:center;">
      <dre-toggle checked></dre-toggle>
      <dre-toggle></dre-toggle>
      <dre-toggle checked disabled></dre-toggle>
      <dre-toggle disabled></dre-toggle>
      <span style="font:12px sans-serif;color:#727999;">On</span>
      <span style="font:12px sans-serif;color:#727999;">Off</span>
      <span style="font:12px sans-serif;color:#727999;">Disabled On</span>
      <span style="font:12px sans-serif;color:#727999;">Disabled Off</span>
    </div>
  `,
}

export const WithIcon: Story = {
  name: 'Features / With Icon',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle icon checked></dre-toggle>
      <dre-toggle icon></dre-toggle>
      <dre-toggle icon size="small" checked></dre-toggle>
      <dre-toggle icon size="small"></dre-toggle>
      <dre-toggle icon checked disabled></dre-toggle>
      <dre-toggle icon disabled></dre-toggle>
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
      <dre-toggle appearance="dark" checked>On</dre-toggle>
      <dre-toggle appearance="dark">Off</dre-toggle>
      <dre-toggle appearance="dark" icon checked></dre-toggle>
      <dre-toggle appearance="dark" icon></dre-toggle>
      <dre-toggle appearance="dark" checked disabled>Disabled</dre-toggle>
      <dre-toggle appearance="dark" disabled>Disabled off</dre-toggle>
    </div>
  `,
}

export const Labeled: Story = {
  name: 'Features / Labeled',
  render: () => html`
    <div style="display:grid;gap:12px;">
      <dre-toggle checked>Enable notifications</dre-toggle>
      <dre-toggle helper="Applies immediately">Dark mode</dre-toggle>
      <dre-toggle size="small" checked helper="Compact row">Compact setting</dre-toggle>
    </div>
  `,
}
