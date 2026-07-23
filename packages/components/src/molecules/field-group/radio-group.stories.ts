import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './named-groups.js'
import '../../atoms/radio/radio.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Radio Button Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Figma **💠 Radio Button Group** ${figmaDocLink('12045:28528')} — title/description · Size · Orientation.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-radio-group label="Radio group label" description="Select one option">
      <dre-radio name="g1" value="a" checked>Option one</dre-radio>
      <dre-radio name="g1" value="b">Option two</dre-radio>
      <dre-radio name="g1" value="c">Option three</dre-radio>
    </dre-radio-group>
  `,
}

export const WithHelpers: Story = {
  name: 'Features / With helper text',
  render: () => html`
    <dre-radio-group label="Radio group label" description="Select one option">
      <dre-radio name="g2" value="a" checked helper="Helper text for this option">Radio label</dre-radio>
      <dre-radio name="g2" value="b" helper="Helper text for this option">Radio label</dre-radio>
      <dre-radio name="g2" value="c" helper="Helper text for this option">Radio label</dre-radio>
    </dre-radio-group>
  `,
}

export const Horizontal: Story = {
  name: 'Features / Horizontal',
  render: () => html`
    <dre-radio-group label="Radio group label" description="Select one option" orientation="horizontal">
      <dre-radio name="g3" value="a" checked>Option one</dre-radio>
      <dre-radio name="g3" value="b">Option two</dre-radio>
      <dre-radio name="g3" value="c">Option three</dre-radio>
    </dre-radio-group>
  `,
}
