import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './modal.js'
import '../../atoms/button/button.js'

const meta: Meta = {
  title: 'Single Components/Modal',
  component: 'dre-modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **⭐ Modal** Basic Dialog (`12306:9560`) — width 428 · radius 8 · pad 12 · divider `#e6e8ed`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-button
      hierarchy="primary"
      @dre-click=${(e: Event) => {
        const host = (e.currentTarget as HTMLElement).parentElement
        const modal = host?.querySelector('dre-modal') as HTMLElement & { open: boolean }
        if (modal) modal.open = true
      }}
      >Open modal</dre-button
    >
    <dre-modal heading="Confirm publish" open>
      Publishing will make this workflow available to end users. Continue?
    </dre-modal>
  `,
}
