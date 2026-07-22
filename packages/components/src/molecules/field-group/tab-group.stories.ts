import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '../../atoms/tab/tab.js'
import '../../atoms/tab/tab-group.js'

const meta: Meta = {
  title: 'Assembled Components/Tab Group',
  component: 'dre-tab-group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **💠 Tab Group** (`12372:12622`) — Style Default/Enclosed · Count 3/5 · divider `#e0e0e0`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  name: 'Features / Default · 3',
  render: () => html`
    <dre-tab-group value="Tab 1" group-style="default">
      <dre-tab value="Tab 1" active>Tab 1</dre-tab>
      <dre-tab value="Tab 2">Tab 2</dre-tab>
      <dre-tab value="Tab 3">Tab 3</dre-tab>
      <div slot="panel">Default tab group content.</div>
    </dre-tab-group>
  `,
}

export const Count5: Story = {
  name: 'Features / Default · 5',
  render: () => html`
    <dre-tab-group value="Tab 1" group-style="default">
      <dre-tab value="Tab 1" active>Tab 1</dre-tab>
      <dre-tab value="Tab 2">Tab 2</dre-tab>
      <dre-tab value="Tab 3">Tab 3</dre-tab>
      <dre-tab value="Tab 4">Tab 4</dre-tab>
      <dre-tab value="Tab 5">Tab 5</dre-tab>
    </dre-tab-group>
  `,
}

export const Enclosed: Story = {
  name: 'Features / Enclosed',
  render: () => html`
    <dre-tab-group value="Tab 1" group-style="enclosed">
      <dre-tab value="Tab 1" active enclosed>Tab 1</dre-tab>
      <dre-tab value="Tab 2" enclosed>Tab 2</dre-tab>
      <dre-tab value="Tab 3" enclosed>Tab 3</dre-tab>
    </dre-tab-group>
  `,
}
