import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './button-group.js'
import '../../atoms/button/button.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Button Group',
  component: 'dre-button-group',
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium'] },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    groupStyle: { control: 'select', options: ['uniform', 'split'], name: 'group-style' },
  },
  args: { size: 'medium', orientation: 'horizontal', groupStyle: 'uniform' },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **💠 Button Group** ${figmaDocLink('12045:29952')} — Size · Orientation · Style Uniform/Split · gap 8.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-button-group
      size=${args.size}
      orientation=${args.orientation}
      group-style=${args.groupStyle}
    >
      <dre-button>Button</dre-button>
      <dre-button>Button</dre-button>
      <dre-button>Button</dre-button>
    </dre-button-group>
  `,
}

export const Uniform: Story = {
  name: 'Features / Uniform',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-button-group size="medium" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
      <dre-button-group size="small" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
      <dre-button-group size="medium" orientation="vertical" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
    </div>
  `,
}

export const Split: Story = {
  name: 'Features / Split',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-button-group size="medium" group-style="split">
        <dre-button>Primary</dre-button>
        <dre-button>Secondary</dre-button>
        <dre-button>Ghost</dre-button>
      </dre-button-group>
      <dre-button-group size="small" orientation="vertical" group-style="split">
        <dre-button>Primary</dre-button>
        <dre-button>Secondary</dre-button>
        <dre-button>Ghost</dre-button>
      </dre-button-group>
    </div>
  `,
}
