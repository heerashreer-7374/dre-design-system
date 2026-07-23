import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './dropdown.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Dropdown',
  component: 'dre-dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Maps to Figma Input Dropdown ${figmaDocLink('10280:148')}, Dropdown menu ${figmaDocLink('10289:952')}, and \`_Dropdown list item\` ${figmaDocLink('10261:398')}.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-dropdown label="Field type" placeholder="Choose type" menu-title="Show field type">
      <dre-dropdown-item label="Text"></dre-dropdown-item>
      <dre-dropdown-item label="Number"></dre-dropdown-item>
      <dre-dropdown-item label="Date" supporting-text="ISO or locale format"></dre-dropdown-item>
      <dre-dropdown-item label="Boolean" disabled></dre-dropdown-item>
    </dre-dropdown>
  `,
}

export const WithRadio: Story = {
  name: 'Features / Single with radio',
  render: () => html`
    <dre-dropdown label="Priority" type="single" value="Medium" display-value="Medium">
      <dre-dropdown-item control="radio" label="Low" value="Low"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="Medium" value="Medium" selected></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="High" value="High"></dre-dropdown-item>
    </dre-dropdown>
  `,
}

export const Multiple: Story = {
  name: 'Features / Multiple with checkbox',
  render: () => html`
    <dre-dropdown label="Channels" type="multiple" menu-title="Notify via">
      <dre-dropdown-item control="checkbox" label="Email" value="email"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="SMS" value="sms"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="In-app" value="in-app"></dre-dropdown-item>
    </dre-dropdown>
  `,
}

export const SearchVariant: Story = {
  name: 'Features / Search',
  render: () => html`
    <dre-dropdown variant="search" placeholder="Search actions…" label="Action">
      <dre-dropdown-item label="Send mail"></dre-dropdown-item>
      <dre-dropdown-item label="Create record"></dre-dropdown-item>
      <dre-dropdown-item label="Invoke function"></dre-dropdown-item>
    </dre-dropdown>
  `,
}
