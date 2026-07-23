import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './named-groups.js'
import '../../atoms/checkbox/checkbox.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Checkbox Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Figma **💠 Checkbox Group** ${figmaDocLink('12044:27604')} — title/description · Size · Orientation · item helper text.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-checkbox-group
      label="Checkbox group label"
      description="Select all that apply"
      size="medium"
      orientation="vertical"
    >
      <dre-checkbox size="medium">Option one</dre-checkbox>
      <dre-checkbox size="medium" checked>Option two</dre-checkbox>
      <dre-checkbox size="medium">Option three</dre-checkbox>
    </dre-checkbox-group>
  `,
}

export const WithHelpers: Story = {
  name: 'Features / With helper text',
  render: () => html`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply">
      <dre-checkbox helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox checked helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox disabled helper="Helper text for this option">Checkbox label</dre-checkbox>
    </dre-checkbox-group>
  `,
}

export const Horizontal: Story = {
  name: 'Features / Horizontal',
  render: () => html`
    <dre-checkbox-group
      label="Checkbox group label"
      description="Select all that apply"
      orientation="horizontal"
    >
      <dre-checkbox>Option one</dre-checkbox>
      <dre-checkbox checked>Option two</dre-checkbox>
      <dre-checkbox>Option three</dre-checkbox>
    </dre-checkbox-group>
  `,
}

export const Small: Story = {
  name: 'Features / Small',
  render: () => html`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply" size="small">
      <dre-checkbox size="small">Option one</dre-checkbox>
      <dre-checkbox size="small" checked>Option two</dre-checkbox>
      <dre-checkbox size="small">Option three</dre-checkbox>
    </dre-checkbox-group>
  `,
}
