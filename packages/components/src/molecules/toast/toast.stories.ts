import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './toast.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Toast Message',
  component: 'dre-toast',
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['light', 'dark'] },
    type: { control: 'select', options: ['success', 'warning', 'error', 'info'] },
  },
  args: {
    appearance: 'light',
    type: 'success',
    message: 'All your changes have been saved',
  },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Toast Message** ${figmaDocLink('10109:905')} — Appearance Light/Dark · Type Success/Warning/Error/Info · 314×48 · pad 16 · radius 4.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-toast
      appearance=${args.appearance}
      type=${args.type}
      message=${args.message}
    ></dre-toast>
  `,
}

export const Types: Story = {
  name: 'Features / Types',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-toast type="success" message="All your changes have been saved"></dre-toast>
        <dre-toast type="warning" message="All your changes have been saved"></dre-toast>
        <dre-toast type="error" message="All your changes have been saved"></dre-toast>
        <dre-toast type="info" message="All your changes have been saved"></dre-toast>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-toast appearance="dark" type="success" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="warning" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="error" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="info" message="All your changes have been saved"></dre-toast>
      </div>
    </div>
  `,
}
