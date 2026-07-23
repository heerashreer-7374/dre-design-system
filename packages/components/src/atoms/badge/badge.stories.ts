import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './badge.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Badge',
  component: 'dre-badge',
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['success', 'warning', 'error', 'info'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { status: 'success', size: 'small' },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Badge** Status Badge ${figmaDocLink('12301:9489')} — Success \`#55b45a\` · Warning \`#edb51d\` · Error \`#d64333\` · Info \`#3187d8\`.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`<dre-badge status=${args.status} size=${args.size}>Success</dre-badge>`,
}

export const Status: Story = {
  name: 'Features / Status',
  render: () => html`
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <dre-badge status="success">Success</dre-badge>
      <dre-badge status="warning">Warning</dre-badge>
      <dre-badge status="error">Error</dre-badge>
      <dre-badge status="info">Info</dre-badge>
    </div>
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:8px;align-items:center;">
      <dre-badge status="success" size="small">Success</dre-badge>
      <dre-badge status="success" size="medium">Success</dre-badge>
      <dre-badge status="success" size="large">Success</dre-badge>
    </div>
  `,
}
