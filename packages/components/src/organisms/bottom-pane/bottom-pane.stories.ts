import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './bottom-pane.js'
import '../../atoms/icon/icon.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Patterns & Layouts/Bottom Pane',
  component: 'dre-bottom-pane',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Maps to Figma Bottom Pane ${figmaDocLink('12585:36757')} — status bar + console / errors.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

const rowCss = `
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 8px 12px 8px 8px;
    border-bottom: 1px solid #bdc0cf;
    box-sizing: border-box;
    font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
    font-size: 12px;
    color: #13141a;
    background: #ffffff;
  }
  .row:last-child { border-bottom: 0; }
  .grow { flex: 1; min-width: 0; display: inline-flex; align-items: center; gap: 6px; }
  .meta { display: inline-flex; align-items: center; gap: 12px; color: #8c92ac; font-size: 11px; }
  .pill {
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
  }
  .pill-discovery { background: #dfdaf8; color: #8f7ee7; }
  .pill-ln { background: #edf0f7; color: #8c92ac; }
  .pill-ok { background: #e8f7ea; color: #089949; }
  .err-icon { color: #d64333; line-height: 0; }
  .link { color: #0d6dfd; text-decoration: underline; }
  .muted { color: #5d6481; }
`

export const Collapsed: Story = {
  render: () => html`
    <div style="height:120px;display:flex;flex-direction:column;background:#f3f3f6;padding:16px;">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="collapsed"
        error-count="5"
        info-count="1"
        last-edited="Last edited by kamal"
        line-column="Ln15:Col 1 ( 1 Selected)"
        language="Deluge"
      ></dre-bottom-pane>
    </div>
  `,
}

export const ExpandedConsole: Story = {
  name: 'Expanded · Console',
  render: () => html`
    <style>
      ${rowCss}
    </style>
    <div style="height:420px;display:flex;flex-direction:column;background:#f3f3f6;padding:16px;">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="expanded"
        tab="console"
        error-count="5"
        info-count="1"
        status-value="Success"
        execution-time="2.44 sec"
        last-edited="Last edited by kamal"
        line-column="Ln15:Col 1 ( 1 Selected)"
        language="Deluge"
      >
        <div class="row">
          <dre-icon name="chevron-down" size="14"></dre-icon>
          <dre-icon name="info" size="16"></dre-icon>
          <span class="grow">
            <span class="pill pill-discovery">Number</span>
            <span>123</span>
          </span>
          <span class="meta">
            <span>Executed Time : 04:00:47.153 IST</span>
            <span class="pill pill-ln">Ln 3</span>
          </span>
        </div>
        <div class="row">
          <dre-icon name="chevron-down" size="14"></dre-icon>
          <dre-icon name="message" size="16"></dre-icon>
          <span class="grow">Transaction ID : BEJS3949529048</span>
          <span class="meta">
            <span class="pill pill-ok">Mail Submitted</span>
            <dre-icon name="reset" size="14"></dre-icon>
            <span class="pill pill-ln">Ln 4</span>
          </span>
        </div>
        <div class="row">
          <dre-icon name="chevron-down" size="14"></dre-icon>
          <span class="grow">{'{ a: 1, b: { ... } }'}</span>
          <span class="meta"><span class="pill pill-ln">Ln 5</span></span>
        </div>
      </dre-bottom-pane>
    </div>
  `,
}

export const ExpandedErrors: Story = {
  name: 'Expanded · Errors',
  render: () => html`
    <style>
      ${rowCss}
    </style>
    <div style="height:360px;display:flex;flex-direction:column;background:#f3f3f6;padding:16px;">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="expanded"
        tab="errors"
        error-count="5"
        info-count="1"
        last-edited="Last edited by kamal"
        language="Deluge"
      >
        <div slot="errors">
          <div class="row">
            <span class="err-icon"><dre-icon name="error" size="14"></dre-icon></span>
            <span class="grow">Variable 'a' is not defined.</span>
            <span class="meta"
              ><span class="muted">Set variable |</span> <a class="link" href="#">Block 1</a></span
            >
          </div>
          <div class="row">
            <span class="err-icon"><dre-icon name="error" size="14"></dre-icon></span>
            <span class="grow">Not able to find 'cos' function.</span>
            <span class="meta"
              ><span class="muted">Send Mail |</span> <a class="link" href="#">Block 2</a></span
            >
          </div>
        </div>
      </dre-bottom-pane>
    </div>
  `,
}
