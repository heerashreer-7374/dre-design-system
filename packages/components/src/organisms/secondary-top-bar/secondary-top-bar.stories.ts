import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './secondary-top-bar.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Secondary Top Bar',
  component: 'dre-secondary-top-bar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Maps to Figma Secondary Top Bar (`12726:51297`) — Code/Flow switch + editor tools.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const CodeEditor: Story = {
  render: () => html`
    <dre-secondary-top-bar type="code-editor" unsaved-text="4 Unsaved changes"></dre-secondary-top-bar>
  `,
}

export const VisualBuilder: Story = {
  render: () => html`
    <dre-secondary-top-bar
      type="visual-builder"
      active-mode="flow"
      code-tab-text="Code"
      flow-tab-text="Flow"
    ></dre-secondary-top-bar>
  `,
}
