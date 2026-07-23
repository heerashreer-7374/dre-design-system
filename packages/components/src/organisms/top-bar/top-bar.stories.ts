import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './top-bar.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Top Bar',
  component: 'dre-top-bar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          `Maps to Figma Top Bar ${figmaDocLink('12422:16587')} — Deluge logo, file tabs, Settings + More. Light appearance; One / Two / Many tabs.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const OneTab: Story = {
  name: 'One Tab',
  render: () => html`
    <dre-top-bar
      .tabs=${[{ id: 'settings', label: 'Settings', active: true, icon: 'settings' }]}
    ></dre-top-bar>
  `,
}

export const TwoTabs: Story = {
  name: 'Two Tabs',
  render: () => html`
    <dre-top-bar
      .tabs=${[
        { id: 'file', label: 'code file.js', icon: 'code' },
        { id: 'settings', label: 'Settings', active: true, icon: 'settings' },
      ]}
    ></dre-top-bar>
  `,
}

export const ManyTabs: Story = {
  name: 'Many Tabs',
  render: () => html`
    <dre-top-bar
      .tabs=${[
        { id: '1', label: 'code file.js', icon: 'code' },
        { id: '2', label: 'function.dg', icon: 'code' },
        { id: '3', label: 'workflow.dg', icon: 'code' },
        { id: 'settings', label: 'Settings', active: true, icon: 'settings' },
      ]}
    ></dre-top-bar>
  `,
}
