import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './accordion.js'
import './accordion-group.js'
import './accordion-panel.js'
import './block-item.js'
import '../../atoms/icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Assembled Components/Accordion Group',
  component: 'dre-accordion-group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Figma **💠 Accordion Group** ${figmaDocLink('12502:11657')} — width 202 · dividers · exclusive expand. Panel chrome via \`dre-accordion-panel\`.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

const blocks = html`
  <dre-block-item label="Set Field Value" description="assign values to fields" icon="cioption"></dre-block-item>
  <dre-block-item label="Set Field Value" description="assign values to fields" icon="cioption"></dre-block-item>
  <dre-block-item label="Set Field Value" description="assign values to fields" icon="cioption"></dre-block-item>
`

function renderGroup(titles: string[], expandedIndex = 0) {
  return html`
    <dre-accordion-panel title="Actions">
      ${titles.map(
        (title, i) => html`
          <dre-accordion title=${title} ?expanded=${i === expandedIndex}>
            <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
            ${i === expandedIndex ? blocks : null}
          </dre-accordion>
        `,
      )}
    </dre-accordion-panel>
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
      'Ai Task',
      'Flow Control',
      'Form Control',
      'Subform Action',
      'Notification',
      'Debug',
      'Data Access',
      'Portal User Task',
    ]),
}
