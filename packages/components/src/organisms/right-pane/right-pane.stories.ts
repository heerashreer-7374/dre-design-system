import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './right-pane.js'
import '../../atoms/input/input.js'
import '../../atoms/button/button.js'
import '../../molecules/dropdown/dropdown.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Right Pane',
  component: 'dre-right-pane',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Maps to Figma Right Pane (`12726:50864`) — property inspector.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <div style="height:520px;display:flex;justify-content:flex-end;background:var(--dre-color-background-page);">
      <dre-right-pane title="Set Variable">
        <span slot="lead" aria-hidden="true">◈</span>
        <dre-input label="Variable name" placeholder="myVar" required></dre-input>
        <dre-dropdown label="Type" placeholder="Select type">
          <dre-dropdown-item label="Text"></dre-dropdown-item>
          <dre-dropdown-item label="Number"></dre-dropdown-item>
          <dre-dropdown-item label="Boolean"></dre-dropdown-item>
        </dre-dropdown>
        <dre-input label="Value" placeholder="Enter value"></dre-input>
        <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end;">
          <dre-button hierarchy="secondary" size="small">Cancel</dre-button>
          <dre-button hierarchy="primary" size="small">Apply</dre-button>
        </div>
      </dre-right-pane>
    </div>
  `,
}
