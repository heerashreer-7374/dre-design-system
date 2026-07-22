import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './popover.js'
import '../../atoms/button/button.js'
import '../../atoms/input/input.js'

const meta: Meta = {
  title: 'Single Components/Popover',
  component: 'dre-popover',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Figma **⭐ Popover** — Single / Multiple Field patterns.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-popover heading="Rename field">
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
      <dre-input label="Field name" placeholder="Enter name"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Save</dre-button>
      </div>
    </dre-popover>
  `,
}
