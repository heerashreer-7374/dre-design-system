import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './toast-group.js'
import '../toast/toast.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Toast Group',
  component: 'dre-toast-group',
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top-right', 'bottom-right'] },
  },
  args: { position: 'top-right' },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **💠 Toast Group** ${figmaDocLink('12385:13230')} — pad 16 · gap 8 · width 357 · Position Top-Right/Bottom-Right.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Count 2',
  render: (args) => html`
    <dre-toast-group position=${args.position}>
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
    </dre-toast-group>
  `,
}

export const Count3: Story = {
  name: 'Features / Count 3',
  render: () => html`
    <dre-toast-group position="top-right">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
      <dre-toast type="warning" message="Your quota is almost full"></dre-toast>
    </dre-toast-group>
  `,
}

export const BottomRight: Story = {
  name: 'Features / Bottom-Right',
  render: () => html`
    <dre-toast-group position="bottom-right">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="error" message="Could not deploy the workflow"></dre-toast>
    </dre-toast-group>
  `,
}
