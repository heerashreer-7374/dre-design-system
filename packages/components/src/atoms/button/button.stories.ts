import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './button.js'
import '../icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Button',
  component: 'dre-button',
  tags: ['autodocs'],
  argTypes: {
    hierarchy: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['xsmall', 'small', 'medium'] },
    appearance: { control: 'select', options: ['light', 'dark'] },
    icon: { control: 'select', options: ['false', 'leading', 'trailing', 'only'] },
    disabled: { control: 'boolean' },
    destructive: { control: 'boolean' },
  },
  args: {
    hierarchy: 'primary',
    size: 'medium',
    appearance: 'light',
    icon: 'false',
    disabled: false,
    destructive: false,
    label: 'Button',
  },
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Button** ${figmaDocLink('1267:334303')} — Light/Dark · Primary/Secondary/Ghost · Medium 30 · Small 26 · XSmall 24.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default',
  render: (args) => html`
    <dre-button
      hierarchy=${args.hierarchy}
      size=${args.size}
      appearance=${args.appearance}
      icon=${args.icon}
      ?disabled=${args.disabled}
      ?destructive=${args.destructive}
      accessible-label=${args.icon === 'only' ? args.label : ''}
    >
      ${args.icon === 'leading' || args.icon === 'only'
        ? html`<dre-icon slot="leading" name="sparkles" size="14"></dre-icon>`
        : null}
      ${args.icon === 'only' ? null : args.label}
      ${args.icon === 'trailing'
        ? html`<dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>`
        : null}
    </dre-button>
  `,
}

export const Hierarchy: Story = {
  name: 'Features / Hierarchy',
  render: () => html`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
      <dre-button hierarchy="primary">Primary</dre-button>
      <dre-button hierarchy="secondary">Secondary</dre-button>
      <dre-button hierarchy="ghost">Ghost</dre-button>
      <dre-button hierarchy="primary" destructive>Destructive</dre-button>
    </div>
  `,
}

export const Sizes: Story = {
  name: 'Features / Sizes',
  render: () => html`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button size="xsmall">XSmall 24</dre-button>
      <dre-button size="small">Small 26</dre-button>
      <dre-button size="medium">Medium 30</dre-button>
    </div>
  `,
}

export const Icons: Story = {
  name: 'Features / Icons',
  render: () => html`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button icon="leading">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
        Leading
      </dre-button>
      <dre-button icon="trailing">
        Trailing
        <dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>
      </dre-button>
      <dre-button icon="only" accessible-label="Sparkles">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-button>
    </div>
  `,
}

export const States: Story = {
  name: 'Features / States',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${(['primary', 'secondary', 'ghost'] as const).map(
        (h) => html`
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="width:80px;font-size:12px;color:#575b62;">${h}</span>
            <dre-button hierarchy=${h}>Default</dre-button>
            <dre-button hierarchy=${h} ?pressed=${true}>Pressed</dre-button>
            <dre-button hierarchy=${h} disabled>Disabled</dre-button>
          </div>
        `,
      )}
    </div>
  `,
}

export const Dark: Story = {
  name: 'Features / Dark',
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => html`
    <div
      style="display:flex;flex-direction:column;gap:16px;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      ${(['primary', 'secondary', 'ghost'] as const).map(
        (h) => html`
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
            <span style="width:80px;font-size:12px;color:#c5c7ce;">${h}</span>
            <dre-button appearance="dark" hierarchy=${h}>Default</dre-button>
            <dre-button appearance="dark" hierarchy=${h} ?pressed=${true}>Pressed</dre-button>
            <dre-button appearance="dark" hierarchy=${h} disabled>Disabled</dre-button>
            <dre-button appearance="dark" hierarchy=${h} icon="leading">
              <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
              Icon
            </dre-button>
          </div>
        `,
      )}
    </div>
  `,
}

export const Matrix: Story = {
  name: 'Features / Matrix',
  render: () => html`
    <div style="display:grid;gap:16px;">
      ${(['primary', 'secondary', 'ghost'] as const).map(
        (h) => html`
          <div>
            <div style="font-size:12px;margin-bottom:8px;color:#575b62;">${h}</div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              ${(['xsmall', 'small', 'medium'] as const).map(
                (s) => html`<dre-button hierarchy=${h} size=${s}>${s}</dre-button>`,
              )}
              <dre-button hierarchy=${h} icon="leading" size="medium">
                <dre-icon slot="leading" name="check" size="14"></dre-icon>
                Icon
              </dre-button>
              <dre-button hierarchy=${h} disabled>Disabled</dre-button>
            </div>
          </div>
        `,
      )}
    </div>
  `,
}
