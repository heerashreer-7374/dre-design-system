import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './popover.js'
import '../../atoms/button/button.js'
import '../../atoms/input/input.js'
import '../../atoms/icon/icon.js'

const meta: Meta = {
  title: 'Assembled Components/Popover Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **💠 Popover Group** — Single Field (500) · Multiple Field · Custom compositions.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const SingleField: Story = {
  name: 'Features / Single Field',
  render: () => html`
    <dre-popover heading="Single field" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      <dre-icon slot="icon" name="edit" size="14"></dre-icon>
      <dre-input label="Name" placeholder="Add Value"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Save</dre-button>
      </div>
    </dre-popover>
  `,
}

export const MultipleField: Story = {
  name: 'Features / Multiple Field',
  render: () => html`
    <dre-popover heading="Multiple fields" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      <dre-icon slot="icon" name="settings" size="14"></dre-icon>
      <dre-input label="Key" placeholder="Add Value"></dre-input>
      <dre-input label="Value" placeholder="Add Value"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Apply</dre-button>
      </div>
    </dre-popover>
  `,
}

export const Custom: Story = {
  name: 'Features / Custom',
  render: () => html`
    <dre-popover heading="Custom" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Custom</dre-button>
      <div style="min-height:120px;border:1px dashed #adb5c7;background:#f5f5fa;border-radius:4px;padding:12px;">
        Custom body content
      </div>
      <div slot="footer">
        <dre-button hierarchy="primary" size="xsmall">Done</dre-button>
      </div>
    </dre-popover>
  `,
}
