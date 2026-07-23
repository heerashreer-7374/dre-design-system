import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './input.js'
import '../icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Input Field',
  component: 'dre-input',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    destructive: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    label: 'Email',
    placeholder: 'Add Value',
    hint: '',
    disabled: false,
    invalid: false,
    destructive: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Input Field** ${figmaDocLink('10209:416')} — Small h24 · Medium h34 · radius 4 · stroke \`#bdc0cf\`.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-input
      size=${args.size}
      label=${args.label}
      placeholder=${args.placeholder}
      hint=${args.hint}
      ?disabled=${args.disabled}
      ?invalid=${args.invalid}
      ?destructive=${args.destructive}
    ></dre-input>
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dre-input size="small" label="Small" placeholder="Add Value"></dre-input>
      <dre-input size="medium" label="Medium" placeholder="Add Value"></dre-input>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dre-input label="Default" placeholder="Add Value"></dre-input>
      <dre-input label="With hint" placeholder="Add Value" hint="Helper text"></dre-input>
      <dre-input label="Destructive" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input label="Disabled" placeholder="Add Value" disabled></dre-input>
      <dre-input label="Leading icon" placeholder="Search">
        <dre-icon slot="leading" name="search" size="14"></dre-icon>
      </dre-input>
    </div>
  `,
}
