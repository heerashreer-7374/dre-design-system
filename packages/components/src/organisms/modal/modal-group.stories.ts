import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './modal.js'
import '../../atoms/button/button.js'
import '../../atoms/input/input.js'

const meta: Meta = {
  title: 'Assembled Components/Modal Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **💠 Modal Group** — Basic Dialog (428×150) · Form Dialog · Custom Dialog via `dre-modal`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

const openModal = (e: Event, sel: string) => {
  const host = (e.currentTarget as HTMLElement).parentElement
  const modal = host?.querySelector(sel) as HTMLElement & { open: boolean }
  if (modal) modal.open = true
}

export const BasicDialog: Story = {
  name: 'Features / Basic Dialog',
  render: () => html`
    <dre-button hierarchy="primary" @dre-click=${(e: Event) => openModal(e, 'dre-modal')}
      >Open basic dialog</dre-button
    >
    <dre-modal heading="Title" open>
      Are you sure you want to change the action. The configuration cannot be undone.
    </dre-modal>
  `,
}

export const FormDialog: Story = {
  name: 'Features / Form Dialog',
  render: () => html`
    <dre-button hierarchy="primary" @dre-click=${(e: Event) => openModal(e, 'dre-modal')}
      >Open form dialog</dre-button
    >
    <dre-modal heading="Title">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-input label="Name" placeholder="Add Value"></dre-input>
        <dre-input label="Description" placeholder="Add Value"></dre-input>
        <dre-input label="Key" placeholder="Add Value"></dre-input>
      </div>
    </dre-modal>
  `,
}

export const CustomDialog: Story = {
  name: 'Features / Custom Dialog',
  render: () => html`
    <dre-button hierarchy="primary" @dre-click=${(e: Event) => openModal(e, 'dre-modal')}
      >Open custom dialog</dre-button
    >
    <dre-modal heading="Title">
      <div style="min-height:200px;border:1px dashed #adb5c7;background:#f5f5fa;border-radius:4px;padding:16px;color:#5d6481;">
        Custom body slot
      </div>
      <div slot="footer">
        <dre-button hierarchy="secondary">Cancel</dre-button>
        <dre-button hierarchy="primary">Save</dre-button>
      </div>
    </dre-modal>
  `,
}
