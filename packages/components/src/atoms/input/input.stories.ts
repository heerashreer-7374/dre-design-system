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
    appearance: { control: 'select', options: ['light', 'dark'] },
    variant: { control: 'select', options: ['default', 'leading-dropdown', 'trailing-dropdown'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    destructive: { control: 'boolean' },
  },
  args: {
    size: 'medium',
    appearance: 'light',
    variant: 'default',
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
        component: `Figma **⭐ Input Field** ${figmaDocLink('10171:179')} — Default · Leading/Trailing Dropdown · Small 28 · Medium 34 · Light/Dark · Destructive.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
  render: (args) => html`
    <dre-input
      size=${args.size}
      appearance=${args.appearance}
      variant=${args.variant}
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
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <dre-input size="small" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input size="medium" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input label="Email" placeholder="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" value="filled@dre.io"></dre-input>
      <dre-input label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" disabled></dre-input>
      <dre-input label="Email" placeholder="Add Value" required></dre-input>
    </div>
  `,
}

export const WithIcons: Story = {
  name: 'Features / Icons',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input label="Email" placeholder="Add Value">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Email" placeholder="Add Value">
        <dre-icon slot="label-icon" name="chevron-down" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Email" placeholder="Add Value" hint="Add Value">
        <dre-icon slot="leading" name="search" size="14"></dre-icon>
        <dre-icon slot="label-icon" name="chevron-down" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Search" type="search" placeholder="Add Value">
        <dre-icon slot="trailing" name="search" size="14"></dre-icon>
      </dre-input>
    </div>
  `,
}

export const DropdownTypes: Story = {
  name: 'Features / Dropdown Types',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input
        variant="leading-dropdown"
        prefix="USD"
        placeholder="Add Value"
        label="Amount"
      ></dre-input>
      <dre-input variant="trailing-dropdown" placeholder="Add Value" label="Select"></dre-input>
      <dre-input
        variant="leading-dropdown"
        prefix="USD"
        placeholder="Add Value"
        label="Amount"
        hint="Add Value"
      ></dre-input>
      <dre-input
        variant="trailing-dropdown"
        placeholder="Add Value"
        label="Select"
        destructive
        hint="Add Value"
      >
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
    </div>
  `,
}

export const Dark: Story = {
  name: 'Features / Dark',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;padding:16px;background:#1b1b1e;">
      <dre-input appearance="dark" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input appearance="dark" label="Email" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input appearance="dark" label="Email" placeholder="Add Value">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
      <dre-input appearance="dark" variant="leading-dropdown" prefix="USD" label="Amount" placeholder="Add Value"></dre-input>
    </div>
  `,
}
