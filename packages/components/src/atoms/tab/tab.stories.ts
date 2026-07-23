import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './tab.js'
import './tab-group.js'
import '../icon/icon.js'
import '../badge/badge.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Tab',
  component: 'dre-tab',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Tab** Tab Item ${figmaDocLink('12290:8325')} — Modes Default / With Icon / Badge / Both · Active indicator \`#0d6dfd\`.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => html`
    <dre-tab-group value="Design">
      <dre-tab value="Design" active>Design</dre-tab>
      <dre-tab value="Code">Code</dre-tab>
      <dre-tab value="Preview" disabled>Preview</dre-tab>
      <div slot="panel">Tab panel content for the active tab.</div>
    </dre-tab-group>
  `,
}

export const Modes: Story = {
  name: 'Features / Modes',
  render: () => html`
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <dre-tab active>Default</dre-tab>
      <dre-tab mode="icon" active>
        <dre-icon slot="icon" name="code" size="16"></dre-icon>
        With Icon
      </dre-tab>
      <dre-tab mode="badge" active>
        Badge
        <dre-badge slot="badge" status="info" size="small">3</dre-badge>
      </dre-tab>
      <dre-tab mode="both" active>
        <dre-icon slot="icon" name="workflow" size="16"></dre-icon>
        Both
        <dre-badge slot="badge" status="success" size="small">1</dre-badge>
      </dre-tab>
    </div>
  `,
}
