import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './named-groups.js'
import '../../atoms/input/input.js'

const meta: Meta = {
  title: 'Assembled Components/Input Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **💠 Input Group** (`12406:14750`) — title/description · Size Medium/Small · Orientation V/H · gap 8/12.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Vertical · Medium',
  render: () => html`
    <dre-input-group
      label="Input field group label"
      description="Fill in the fields below"
      size="medium"
      orientation="vertical"
    >
      <dre-input size="medium" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input size="medium" label="Name" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input size="medium" label="Role" placeholder="Add Value" hint="Add Value"></dre-input>
    </dre-input-group>
  `,
}

export const Horizontal: Story = {
  name: 'Features / Horizontal · Medium',
  render: () => html`
    <dre-input-group
      label="Input field group label"
      description="Fill in the fields below"
      orientation="horizontal"
    >
      <dre-input label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input label="Name" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input label="Role" placeholder="Add Value" hint="Add Value"></dre-input>
    </dre-input-group>
  `,
}

export const Small: Story = {
  name: 'Features / Vertical · Small',
  render: () => html`
    <dre-input-group
      label="Input field group label"
      description="Fill in the fields below"
      size="small"
    >
      <dre-input size="small" label="Email" placeholder="Add Value"></dre-input>
      <dre-input size="small" label="Name" placeholder="Add Value"></dre-input>
      <dre-input size="small" label="Role" placeholder="Add Value"></dre-input>
    </dre-input-group>
  `,
}
