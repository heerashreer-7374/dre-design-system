import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './popover.js'
import './popover-slot.js'
import '../../atoms/button/button.js'
import '../../atoms/input/input.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Popover Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma **💠 Popover Group** — composed Single / Multiple Field popovers from ${figmaDocLink('10125:322')}.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const SingleField: Story = {
  name: 'Features / Single Field',
  render: () => html`
    <dre-popover variant="single-field" heading="Enter choice" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      <dre-input slot="body" label="Name" placeholder="Add Value"></dre-input>
    </dre-popover>
  `,
}

export const MultipleField: Story = {
  name: 'Features / Multiple Field',
  render: () => html`
    <dre-popover variant="multiple-field" heading="Criteria Builder" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      <dre-input slot="left" label="Field" placeholder="Add Value"></dre-input>
      <dre-input slot="right" label="Value" placeholder="Add Value"></dre-input>
    </dre-popover>
  `,
}

export const Custom: Story = {
  name: 'Features / Custom',
  render: () => html`
    <dre-popover variant="single-field" heading="Custom" open inline .showToggle=${false}>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Custom</dre-button>
      <dre-popover-slot slot="body" label="Custom body content"></dre-popover-slot>
      <div slot="footer">
        <dre-button hierarchy="primary" size="small">Done</dre-button>
      </div>
    </dre-popover>
  `,
}
