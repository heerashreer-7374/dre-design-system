import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './accordion.js'
import './accordion-group.js'
import '../../atoms/icon/icon.js'

const meta: Meta = {
  title: 'Assembled Components/Accordion Group',
  component: 'dre-accordion-group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **💠 Accordion Group** (`12502:12082`) — Count 3/5/9 · gap 11 · width 202 · exclusive expand.',
      },
    },
  },
}
export default meta
type Story = StoryObj

const block = (label: string) => html`
  <div
    style="
      background:#f7f7f9;border:1px solid #e6e8ed;border-radius:6px;
      padding:6px;min-height:46px;box-sizing:border-box;font-size:12px;color:#13141a;
    "
  >
    ${label}
  </div>
`

function renderGroup(titles: string[], expandedIndex = 0) {
  return html`
    <dre-accordion-group exclusive>
      ${titles.map(
        (title, i) => html`
          <dre-accordion title=${title} ?expanded=${i === expandedIndex}>
            <dre-icon slot="lead" name="settings" size="14"></dre-icon>
            ${i === expandedIndex
              ? html`${block('Item 1')}${block('Item 2')}${block('Item 3')}`
              : null}
          </dre-accordion>
          ${i < titles.length - 1
            ? html`<div style="height:1px;background:#f3f3f6;width:100%;"></div>`
            : null}
        `,
      )}
    </dre-accordion-group>
  `
}

export const Count3: Story = {
  name: 'Features / Count 3',
  render: () => renderGroup(['Basics', 'Advanced', 'Permissions']),
}

export const Count5: Story = {
  name: 'Features / Count 5',
  render: () =>
    renderGroup(['Basics', 'Advanced', 'Permissions', 'Integrations', 'Audit']),
}

export const Count9: Story = {
  name: 'Features / Count 9',
  render: () =>
    renderGroup([
      'Basics',
      'Advanced',
      'Permissions',
      'Integrations',
      'Audit',
      'Webhooks',
      'Logs',
      'Billing',
      'Danger zone',
    ]),
}
