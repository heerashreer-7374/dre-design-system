import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './accordion.js'
import './accordion-panel.js'
import './block-item.js'
import './console.js'
import './console-row.js'
import '../../atoms/icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Accordion',
  component: 'dre-accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma **⭐ Accordion** ${figmaDocLink('12502:7355')} — Accordion · Panel · Console · Console Row.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

const blocks = html`
  <dre-block-item
    label="Set Field Value"
    description="assign values to fields"
    icon="cioption"
  ></dre-block-item>
  <dre-block-item
    label="Set Field Value"
    description="assign values to fields"
    icon="cioption"
  ></dre-block-item>
  <dre-block-item
    label="Set Field Value"
    description="assign values to fields"
    icon="cioption"
  ></dre-block-item>
`

const panelSections = [
  'Basics',
  'Ai Task',
  'Flow Control',
  'Form Control',
  'Subform Action',
  'Notification',
  'Debug',
  'Data Access',
  'Portal User Task',
] as const

export const Default: Story = {
  name: 'Features / Accordion',
  render: () => html`
    <div style="display:flex;gap:48px;align-items:flex-start;">
      <dre-accordion title="Basics">
        <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
        ${blocks}
      </dre-accordion>
      <dre-accordion title="Basics" expanded>
        <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
        ${blocks}
      </dre-accordion>
    </div>
  `,
}

export const Panel: Story = {
  name: 'Features / Panel',
  render: () => html`
    <div style="display:flex;gap:48px;align-items:flex-start;">
      <dre-accordion-panel title="Actions">
        ${panelSections.map(
          (title) => html`
            <dre-accordion title=${title}>
              <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
            </dre-accordion>
          `,
        )}
      </dre-accordion-panel>
      <dre-accordion-panel title="Actions">
        ${panelSections.map(
          (title, i) => html`
            <dre-accordion title=${title} ?expanded=${i === 0}>
              <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
              ${i === 0 ? blocks : null}
            </dre-accordion>
          `,
        )}
      </dre-accordion-panel>
    </div>
  `,
}

export const Console: Story = {
  name: 'Features / Console',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:32px;max-width:900px;">
      <dre-console>
        <dre-console-row
          type="info"
          badge="Number"
          value="123"
          time="Executed Time : 04:00:47.153 IST"
          line="Ln 3"
        ></dre-console-row>
        <dre-console-row
          type="transaction"
          value="Transaction ID : BEJS3949529048"
          status="Mail Submitted"
          line="Ln 4"
          reset
        ></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row type="data" value="{ a:1,b:{ ... }}" line="Ln 6" expanded></dre-console-row>
        <dre-console-row
          type="api"
          badge="GET"
          value="https://g********"
          status="100 Processing only"
          duration="09 ms"
          line="Ln 7"
          expanded
        >
          <dre-console-row plain value="Request" duration="125 kb"></dre-console-row>
          <dre-console-row plain value="Response" duration="125 kb" expanded>
            <dre-console-row plain value="Header" expanded></dre-console-row>
          </dre-console-row>
        </dre-console-row>
      </dre-console>
      <dre-console>
        <dre-console-row
          type="info"
          badge="Number"
          value="123"
          time="Executed Time : 04:00:47.153 IST"
          line="Ln 3"
        ></dre-console-row>
        <dre-console-row
          type="transaction"
          value="Transaction ID : BEJS3949529048"
          status="Mail Submitted"
          line="Ln 4"
          reset
        ></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row
          type="api"
          badge="GET"
          value="https://g********"
          status="100 Processing only"
          duration="09 ms"
          line="Ln 7"
        ></dre-console-row>
      </dre-console>
    </div>
  `,
}

export const ConsoleRow: Story = {
  name: 'Features / Console Row',
  render: () => html`
    <div style="width:900px;max-width:100%;border:1px solid #e6e8ed;border-radius:4px;overflow:hidden;background:#fff;">
      <dre-console-row
        type="info"
        badge="Number"
        value="123"
        time="Executed Time : 04:00:47.153 IST"
        line="Ln 3"
      ></dre-console-row>
      <dre-console-row
        type="info"
        badge="Number"
        value="123"
        time="Executed Time : 04:00:47.153 IST"
        line="Ln 3"
        expanded
      ></dre-console-row>
      <dre-console-row
        type="transaction"
        value="Transaction ID : BEJS3949529048"
        status="Mail Submitted"
        line="Ln 4"
        reset
      ></dre-console-row>
      <dre-console-row
        type="transaction"
        value="Transaction ID : BEJS3949529048"
        status="Mail Submitted"
        line="Ln 4"
        reset
        expanded
      ></dre-console-row>
      <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
      <dre-console-row type="data" value="{ a:1,b:{ ... }}" line="Ln 6" expanded></dre-console-row>
      <dre-console-row
        type="api"
        badge="GET"
        value="https://g********"
        status="100 Processing only"
        duration="09 ms"
        line="Ln 7"
      ></dre-console-row>
      <dre-console-row
        type="api"
        badge="GET"
        value="https://g********"
        status="100 Processing only"
        duration="09 ms"
        line="Ln 7"
        expanded
      >
        <dre-console-row plain value="Request" duration="125 kb"></dre-console-row>
        <dre-console-row plain value="Response" duration="125 kb" expanded>
          <dre-console-row plain value="Header" expanded></dre-console-row>
        </dre-console-row>
      </dre-console-row>
    </div>
  `,
}
