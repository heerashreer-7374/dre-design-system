import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './toast.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Toast Message',
  component: 'dre-toast',
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['success', 'warning', 'error', 'info'] },
  },
  args: { type: 'success', message: 'All your changes have been saved' },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Toast Message** ${figmaDocLink('10110:280')} — 314×48 · pad 16 · radius 4 · Success/Warning/Error/Info fills.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`<dre-toast type=${args.type} message=${args.message}></dre-toast>`,
}

export const Types: Story = {
  name: 'Features / Types',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="warning" message="Your quota is almost full"></dre-toast>
      <dre-toast type="error" message="Could not deploy the workflow"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
    </div>
  `,
}
