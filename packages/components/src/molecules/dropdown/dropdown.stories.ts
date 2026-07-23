import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './dropdown.js'
import './dropdown-item.js'
import '../../atoms/icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Dropdown',
  component: 'dre-dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Dropdown** ${figmaDocLink('10219:552')} — Input Dropdown · Dropdown Menu · List Item.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

const options = [
  { label: 'Opt 1', value: 'opt-1' },
  { label: 'Opt 2', value: 'opt-2' },
  { label: 'Opt 3', value: 'opt-3' },
  { label: 'Opt 4', value: 'opt-4' },
  { label: 'Opt 5', value: 'opt-5' },
  { label: 'Opt 6', value: 'opt-6' },
]

export const Default: Story = {
  name: 'Features / Input Dropdown',
  render: () => html`
    <div style="display:flex;gap:48px;align-items:flex-start;flex-wrap:wrap;">
      <dre-dropdown label="Title" placeholder="Add Value"></dre-dropdown>
      <dre-dropdown label="Title" value="opt-2" display-value="Opt 2">
        ${options.map(
          (o) => html`<dre-dropdown-item label=${o.label} value=${o.value} meta="Sample"></dre-dropdown-item>`,
        )}
      </dre-dropdown>
      <dre-dropdown label="Title" value="opt-2" display-value="Opt 2" open>
        ${options.map(
          (o) => html`<dre-dropdown-item label=${o.label} value=${o.value} meta="Sample"></dre-dropdown-item>`,
        )}
      </dre-dropdown>
    </div>
  `,
}

export const Variants: Story = {
  name: 'Features / Variants',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;">
      <dre-dropdown label="Default" placeholder="Add Value" variant="default">
        ${options.slice(0, 4).map(
          (o) => html`<dre-dropdown-item label=${o.label} value=${o.value} meta="Sample"></dre-dropdown-item>`,
        )}
      </dre-dropdown>
      <dre-dropdown label="Icon Leading" placeholder="Add Value" variant="icon-leading">
        <dre-icon slot="leading" name="code-1" size="14"></dre-icon>
        ${options.slice(0, 4).map(
          (o) => html`<dre-dropdown-item label=${o.label} value=${o.value} meta="Sample"></dre-dropdown-item>`,
        )}
      </dre-dropdown>
      <dre-dropdown label="Search" placeholder="Search…" variant="search" searchable>
        ${options.map(
          (o) => html`<dre-dropdown-item label=${o.label} value=${o.value} meta="Sample"></dre-dropdown-item>`,
        )}
      </dre-dropdown>
      <dre-dropdown label="Disabled" placeholder="Add Value" disabled></dre-dropdown>
      <dre-dropdown label="Error" placeholder="Add Value" invalid></dre-dropdown>
    </div>
  `,
}

export const MenuSingle: Story = {
  name: 'Features / Menu Single',
  render: () => html`
    <dre-dropdown menu-only type="single" menu-title="Show field type">
      <dre-dropdown-item control="radio" label="List item" value="1"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="2"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="3"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="4"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="5"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="6"></dre-dropdown-item>
    </dre-dropdown>
  `,
}

export const MenuMultiple: Story = {
  name: 'Features / Menu Multiple',
  render: () => html`
    <dre-dropdown menu-only type="multiple" menu-title="Show field type" value="1,3">
      <dre-dropdown-item control="checkbox" label="List item" value="1"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="2"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="3"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="4"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="5"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="6"></dre-dropdown-item>
    </dre-dropdown>
  `,
}

export const ListItem: Story = {
  name: 'Features / List Item',
  render: () => html`
    <div style="display:grid;grid-template-columns:repeat(3,200px);gap:24px;width:max-content;">
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item label="List item"></dre-dropdown-item>
        <dre-dropdown-item label="List item"></dre-dropdown-item>
        <dre-dropdown-item label="List item" selected show-check></dre-dropdown-item>
        <dre-dropdown-item label="List item" disabled></dre-dropdown-item>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item control="radio" label="List item"></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" selected></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" supporting-text="Supporting text"></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" disabled></dre-dropdown-item>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item control="checkbox" label="List item"></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" selected></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" supporting-text="Supporting text"></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" disabled></dre-dropdown-item>
      </div>
    </div>
  `,
}
