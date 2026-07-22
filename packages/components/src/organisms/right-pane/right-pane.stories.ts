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
    <div style="height:520px;display:flex;justify-content:flex-end;background:#f3f3f6;">
      <dre-right-pane title="Set Variable">
        <div style="display:flex;flex-direction:column;gap:16px;padding:16px;">
          <dre-input label="Variable name" placeholder="myVar" required></dre-input>
          <dre-dropdown label="Type" placeholder="Select type">
            <dre-dropdown-item label="Text"></dre-dropdown-item>
            <dre-dropdown-item label="Number"></dre-dropdown-item>
            <dre-dropdown-item label="Boolean"></dre-dropdown-item>
          </dre-dropdown>
          <dre-input label="Value" placeholder="Enter value"></dre-input>
        </div>
        <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid #e6e8ed;">
          <dre-button hierarchy="secondary" size="small">Cancel</dre-button>
          <dre-button hierarchy="primary" size="small">Apply</dre-button>
        </div>
      </dre-right-pane>
    </div>
  `,
}

export const Fields: Story = {
  render: () => html`
    <div style="height:520px;display:flex;justify-content:flex-end;background:#f3f3f6;">
      <dre-right-pane title="Fields">
        <div style="padding:14px 16px;border-bottom:1px solid #f3f3f6;font-size:13px;">Actions Details</div>
        <div style="padding:14px 16px;font-size:13px;">Configuration</div>
        <div slot="footer" style="padding:14px 16px;border-top:1px solid #e6e8ed;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <span style="font-size:13px;">Test Action</span>
            <dre-button hierarchy="secondary" size="xsmall">Validate</dre-button>
          </div>
          <p style="margin:0;font-size:11px;line-height:18px;color:#5d6481;">
            Validate this action to confirm its configuration.
          </p>
        </div>
      </dre-right-pane>
    </div>
  `,
}
