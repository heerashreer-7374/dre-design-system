import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './accordion.js'
import '../../atoms/icon/icon.js'

const meta: Meta = {
  title: 'Single Components/Accordion',
  component: 'dre-accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **⭐ Accordion** (`12502:11281`) — Collapsed/Expanded · header 14px · block items `#f7f7f9` / `#e6e8ed` r6.',
      },
    },
  },
}
export default meta
type Story = StoryObj

const blockItem = (label: string) => html`
  <div
    style="
      background:#f7f7f9;
      border:1px solid #e6e8ed;
      border-radius:6px;
      padding:6px;
      box-sizing:border-box;
      min-height:46px;
      font-size:12px;
      color:#13141a;
    "
  >
    ${label}
  </div>
`

export const Default: Story = {
  render: () => html`
    <dre-accordion title="Basics">
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      ${blockItem('Name')} ${blockItem('Description')} ${blockItem('Entry point')}
    </dre-accordion>
  `,
}

export const Expanded: Story = {
  render: () => html`
    <dre-accordion title="Basics" expanded>
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      ${blockItem('Name')} ${blockItem('Description')} ${blockItem('Entry point')}
    </dre-accordion>
  `,
}
