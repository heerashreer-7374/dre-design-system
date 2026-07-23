import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './named-groups.js'
import '../../atoms/toggle/toggle.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Toggle Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Figma **💠 Toggle Group** ${figmaDocLink('12045:29470')} — title/description · Size · Orientation.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below">
      <dre-toggle checked>Option one</dre-toggle>
      <dre-toggle>Option two</dre-toggle>
      <dre-toggle>Option three</dre-toggle>
    </dre-toggle-group>
  `,
}

export const WithHelpers: Story = {
  name: 'Features / With helper text',
  render: () => html`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below">
      <dre-toggle checked helper="Helper text for this toggle">Toggle label</dre-toggle>
      <dre-toggle helper="Helper text for this toggle">Toggle label</dre-toggle>
      <dre-toggle helper="Helper text for this toggle">Toggle label</dre-toggle>
    </dre-toggle-group>
  `,
}

export const Horizontal: Story = {
  name: 'Features / Horizontal',
  render: () => html`
    <dre-toggle-group
      label="Toggle group label"
      description="Toggle the options below"
      orientation="horizontal"
    >
      <dre-toggle checked>Option one</dre-toggle>
      <dre-toggle>Option two</dre-toggle>
      <dre-toggle>Option three</dre-toggle>
    </dre-toggle-group>
  `,
}

export const Small: Story = {
  name: 'Features / Small',
  render: () => html`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below" size="small">
      <dre-toggle size="small" checked>Option one</dre-toggle>
      <dre-toggle size="small">Option two</dre-toggle>
      <dre-toggle size="small">Option three</dre-toggle>
    </dre-toggle-group>
  `,
}
