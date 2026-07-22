import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './left-pane.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Left Pane',
  component: 'dre-left-pane',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Maps to Figma Left Pane (`12613:41263`) — Actions library rail.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Extended: Story = {
  render: () => html`
    <div style="height:480px;display:flex;background:var(--dre-color-background-page);">
      <dre-left-pane header-title="Actions" mode="code-editor" state="extended"></dre-left-pane>
      <div style="flex:1;padding:16px;color:var(--dre-color-text-subtle);font-size:12px;">Editor canvas</div>
    </div>
  `,
}

export const Collapsed: Story = {
  render: () => html`
    <div style="height:480px;display:flex;background:var(--dre-color-background-page);">
      <dre-left-pane state="collapsed"></dre-left-pane>
      <div style="flex:1;padding:16px;color:var(--dre-color-text-subtle);font-size:12px;">Editor canvas</div>
    </div>
  `,
}
