import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './named-groups.js'
import '../dropdown/dropdown.js'

const meta: Meta = {
  title: 'Assembled Components/Dropdown Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **💠 Dropdown Group** (`12411:15623`) — title/description · Orientation Vertical/Horizontal.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Vertical',
  render: () => html`
    <dre-dropdown-group
      label="Dropdown group label"
      description="Select from the options below"
      orientation="vertical"
    >
      <dre-dropdown label="Type" placeholder="Add Value">
        <dre-dropdown-item label="Text"></dre-dropdown-item>
        <dre-dropdown-item label="Number"></dre-dropdown-item>
      </dre-dropdown>
      <dre-dropdown label="Priority" placeholder="Add Value">
        <dre-dropdown-item label="Low"></dre-dropdown-item>
        <dre-dropdown-item label="High"></dre-dropdown-item>
      </dre-dropdown>
      <dre-dropdown label="Status" placeholder="Add Value">
        <dre-dropdown-item label="Open"></dre-dropdown-item>
        <dre-dropdown-item label="Closed"></dre-dropdown-item>
      </dre-dropdown>
    </dre-dropdown-group>
  `,
}

export const Horizontal: Story = {
  name: 'Features / Horizontal',
  render: () => html`
    <dre-dropdown-group
      label="Dropdown group label"
      description="Select from the options below"
      orientation="horizontal"
    >
      <dre-dropdown label="Type" placeholder="Add Value">
        <dre-dropdown-item label="Text"></dre-dropdown-item>
      </dre-dropdown>
      <dre-dropdown label="Priority" placeholder="Add Value">
        <dre-dropdown-item label="Low"></dre-dropdown-item>
      </dre-dropdown>
      <dre-dropdown label="Status" placeholder="Add Value">
        <dre-dropdown-item label="Open"></dre-dropdown-item>
      </dre-dropdown>
    </dre-dropdown-group>
  `,
}
