import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './tooltip.js'
import '../button/button.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Tooltip',
  component: 'dre-tooltip',
  tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'select',
      options: [
        'none',
        'bottom-center',
        'bottom-left',
        'bottom-right',
        'top-center',
        'top-left',
        'top-right',
      ],
    },
  },
  args: {
    content: 'This is a tooltip',
    supportingText: '',
    arrow: 'bottom-center',
  },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Tooltip** ${figmaDocLink('12055:2105')} — pad 12×8 · radius 4 · bg \`#1b1b1e\` · optional supporting text + arrow.`,
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

export const WithSupportingText: Story = {
  name: 'Features / Supporting text',
  render: () => html`
    <div style="padding:100px;display:flex;justify-content:center;">
      <dre-tooltip
        content="This is a tooltip"
        supporting-text="Tooltips are used to describe or identify an element. Keep copy short."
        arrow="bottom-center"
        open
      >
        <dre-button hierarchy="secondary">Target</dre-button>
      </dre-tooltip>
    </div>
  `,
}

export const Arrows: Story = {
  name: 'Features / Arrows',
  render: () => html`
    <div style="display:flex;gap:48px;padding:80px;flex-wrap:wrap;justify-content:center;">
      ${(['top-center', 'bottom-center', 'top-left', 'bottom-right'] as const).map(
        (a) => html`
          <dre-tooltip content="This is a tooltip" arrow=${a} open>
            <dre-button hierarchy="ghost" size="small">${a}</dre-button>
          </dre-tooltip>
        `,
      )}
    </div>
  `,
}
