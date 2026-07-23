import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './tab.js'
import './tab-group.js'
import './tab-toggle.js'
import '../icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Tab',
  component: 'dre-tab',
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['default', 'icon', 'badge', 'both'] },
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    mode: 'default',
    active: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Tab** ${figmaDocLink('12267:1598')} — Modes Default / Icon / Badge / Both · Active indicator \`#0d6dfd\` · Tab Toggle Flow/Code.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
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
    <div role="tablist" style="display:flex;gap:8px;align-items:flex-end;">
      <dre-tab active>Default</dre-tab>
      <dre-tab mode="icon" active>
        <dre-icon slot="icon" name="trash-2" size="16"></dre-icon>
        With Icon
      </dre-tab>
      <dre-tab mode="badge" active count="5">Badge</dre-tab>
      <dre-tab mode="both" active count="5">
        <dre-icon slot="icon" name="trash-2" size="16"></dre-icon>
        Both
      </dre-tab>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:20px;">
      ${(['default', 'icon', 'badge', 'both'] as const).map(
        (mode) => html`
          <div role="tablist" style="display:flex;gap:24px;align-items:flex-end;">
            <dre-tab mode=${mode} count=${mode === 'badge' || mode === 'both' ? '5' : ''}>
              ${mode === 'icon' || mode === 'both'
                ? html`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`
                : null}
              Default
            </dre-tab>
            <dre-tab mode=${mode} active count=${mode === 'badge' || mode === 'both' ? '5' : ''}>
              ${mode === 'icon' || mode === 'both'
                ? html`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`
                : null}
              Active
            </dre-tab>
            <dre-tab mode=${mode} disabled count=${mode === 'badge' || mode === 'both' ? '5' : ''}>
              ${mode === 'icon' || mode === 'both'
                ? html`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`
                : null}
              Disabled
            </dre-tab>
            <dre-tab
              mode=${mode}
              ?hovered=${true}
              count=${mode === 'badge' || mode === 'both' ? '5' : ''}
            >
              ${mode === 'icon' || mode === 'both'
                ? html`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`
                : null}
              Hovered
            </dre-tab>
          </div>
        `,
      )}
    </div>
  `,
}

export const TabToggle: Story = {
  name: 'Features / Tab Toggle',
  render: () => html`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-tab-toggle value="flow"></dre-tab-toggle>
      <dre-tab-toggle value="code"></dre-tab-toggle>
    </div>
  `,
}
