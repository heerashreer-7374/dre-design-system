import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './top-bar.js'
import '../../atoms/button/button.js'
import '../../atoms/badge/badge.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Top Bar',
  component: 'dre-top-bar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Maps to Figma Top Bar (`12422:16587`) — file tabs + trailing actions.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const OneTab: Story = {
  render: () => html`
    <dre-top-bar .tabs=${[{ id: '1', label: 'code file.js', active: true }]}>
      <dre-badge slot="trailing" tone="brand">Settings</dre-badge>
    </dre-top-bar>
  `,
}

export const ManyTabs: Story = {
  name: 'Features / Many tabs',
  render: () => html`
    <dre-top-bar
      .tabs=${[
        { id: '1', label: 'main.dg', active: true },
        { id: '2', label: 'helpers.dg' },
        { id: '3', label: 'config.json' },
        { id: '4', label: 'README.md' },
      ]}
    >
      <span slot="leading" style="font-size:12px;color:var(--dre-color-text-subtle);">DRE</span>
      <dre-button slot="trailing" hierarchy="ghost" size="xsmall">Share</dre-button>
    </dre-top-bar>
  `,
}
