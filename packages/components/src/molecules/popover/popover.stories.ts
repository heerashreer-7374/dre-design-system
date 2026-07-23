import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './popover.js'
import './popover-slot.js'
import '../../atoms/button/button.js'
import '../../atoms/input/input.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Popover',
  component: 'dre-popover',
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['light', 'dark'] },
    variant: { control: 'select', options: ['single-field', 'multiple-field'] },
    open: { control: 'boolean' },
    inline: { control: 'boolean' },
  },
  args: {
    appearance: 'light',
    variant: 'single-field',
    heading: 'Enter choice',
    open: true,
    inline: true,
  },
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Popover** ${figmaDocLink('10125:322')} — Single Field · Multiple Field · Light/Dark · Field Slots.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
  render: (args) => html`
    <dre-popover
      appearance=${args.appearance}
      variant=${args.variant}
      heading=${args.heading}
      ?open=${args.open}
      ?inline=${args.inline}
    >
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
    </dre-popover>
  `,
}

export const SingleField: Story = {
  name: 'Features / Single Field',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-popover variant="single-field" appearance="light" heading="Enter choice" open inline>
        <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      </dre-popover>
      <dre-popover variant="single-field" appearance="dark" heading="Enter choice" open inline>
        <dre-button slot="trigger" hierarchy="secondary" size="small">Single dark</dre-button>
      </dre-popover>
    </div>
  `,
}

export const MultipleField: Story = {
  name: 'Features / Multiple Field',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-popover
        variant="multiple-field"
        appearance="light"
        heading="Criteria Builder"
        open
        inline
      >
        <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      </dre-popover>
      <dre-popover
        variant="multiple-field"
        appearance="dark"
        heading="Criteria Builder"
        open
        inline
      >
        <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple dark</dre-button>
      </dre-popover>
    </div>
  `,
}

export const FieldSlots: Story = {
  name: 'Features / Field Slots',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dre-popover-slot kind="single" appearance="light"></dre-popover-slot>
      <div style="display:flex;gap:12px;">
        <dre-popover-slot kind="multiple" appearance="light"></dre-popover-slot>
        <dre-popover-slot kind="multiple" appearance="light"></dre-popover-slot>
      </div>
      <dre-popover-slot kind="single" appearance="dark"></dre-popover-slot>
    </div>
  `,
}

export const WithContent: Story = {
  name: 'Features / With Content',
  render: () => html`
    <dre-popover variant="single-field" heading="Rename field" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open</dre-button>
      <dre-input slot="body" label="Field name" placeholder="Add Value"></dre-input>
    </dre-popover>
  `,
}

export const Interactive: Story = {
  name: 'Features / Interactive',
  render: () => html`
    <dre-popover variant="single-field" heading="Enter choice">
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
      <dre-input slot="body" label="Choice" placeholder="Add Value"></dre-input>
    </dre-popover>
  `,
}
