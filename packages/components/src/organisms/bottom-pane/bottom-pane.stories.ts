import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './bottom-pane.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Bottom Pane',
  component: 'dre-bottom-pane',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Maps to Figma Bottom Pane (`12585:36757`) — status bar + console.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Collapsed: Story = {
  render: () => html`
    <div style="height:120px;display:flex;flex-direction:column;background:var(--dre-color-background-page);">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="collapsed"
        error-count="5"
        info-count="1"
        last-edited="Last edited by kamal"
        line-column="Ln15:Col 1 ( 1 Selected)"
        language="Deluge"
      ></dre-bottom-pane>
    </div>
  `,
}

export const Expanded: Story = {
  render: () => html`
    <div style="height:360px;display:flex;flex-direction:column;background:var(--dre-color-background-page);">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="expanded"
        error-count="0"
        info-count="2"
        status-value="Success"
        execution-time="2.44 sec"
        last-edited="Last edited by kamal"
        language="Deluge"
      >
        info: Workflow started
        info: Set Variable myVar = 42
        success: Completed in 2.44 sec
      </dre-bottom-pane>
    </div>
  `,
}
