import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './tooltip.js'
import '../button/button.js'
import { figmaDocLink } from '../../shared/figma.js'

const ARROWS = [
  'none',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'top-left',
  'top-center',
  'top-right',
] as const

const SUPPORTING =
  'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.'

const meta: Meta = {
  title: 'Single Components/Tooltip',
  component: 'dre-tooltip',
  tags: ['autodocs'],
  argTypes: {
    appearance: { control: 'select', options: ['light', 'dark'] },
    arrow: { control: 'select', options: [...ARROWS] },
  },
  args: {
    appearance: 'light',
    content: 'This is a tooltip',
    supportingText: '',
    arrow: 'none',
  },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Tooltip** ${figmaDocLink('12055:2105')} — Appearance Light/Dark · Arrow None/Top/Bottom · Supporting text · width hug / 311 · pad 12×8 · radius 4.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <div style="padding:80px;display:flex;justify-content:center;">
      <dre-tooltip
        appearance=${args.appearance}
        content=${args.content}
        supporting-text=${args.supportingText}
        arrow=${args.arrow}
        open
      >
        <dre-button hierarchy="secondary">Hover target</dre-button>
      </dre-tooltip>
    </div>
  `,
}

const tipCell = (
  appearance: 'light' | 'dark',
  arrow: (typeof ARROWS)[number],
  supporting = '',
) => html`
  <div
    style="
      position:relative;
      min-width:${supporting ? '340px' : '160px'};
      height:${supporting ? '180px' : '96px'};
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px dashed #e6e8ed;
      border-radius:8px;
    "
  >
    <dre-tooltip
      appearance=${appearance}
      content="This is a tooltip"
      supporting-text=${supporting}
      arrow=${arrow}
      open
    >
      <span style="font:11px/1 system-ui;color:#727999;">${arrow}</span>
    </dre-tooltip>
  </div>
`

export const Variants: Story = {
  name: 'Features / Variants',
  render: () => html`
    <div style="display:flex;gap:32px;padding:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Light</div>
        ${ARROWS.map((arrow) => tipCell('light', arrow))}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Dark</div>
        ${ARROWS.map((arrow) => tipCell('dark', arrow))}
      </div>
    </div>
  `,
}

export const WithSupportingText: Story = {
  name: 'Features / Supporting text',
  render: () => html`
    <div style="display:flex;gap:32px;padding:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Light</div>
        ${ARROWS.map((arrow) => tipCell('light', arrow, SUPPORTING))}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Dark</div>
        ${ARROWS.map((arrow) => tipCell('dark', arrow, SUPPORTING))}
      </div>
    </div>
  `,
}
