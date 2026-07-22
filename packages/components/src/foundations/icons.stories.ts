import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '../atoms/icon/icon.js'
import { DRE_ICON_NAMES } from '../atoms/icon/icons.js'

const meta: Meta = {
  title: 'Foundation/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **🧱 Icons** — 72 SVGs exported from the file (20×20). Use `<dre-icon name="search">`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Gallery: Story = {
  render: () => html`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Icons</h2>
      <p style="margin:0 0 20px;color:var(--dre-color-text-subtle);font-size:13px;">
        ${DRE_ICON_NAMES.length} icons exported from Figma · default size 20px · stroke inherits
        <code>currentColor</code>
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;">
        ${DRE_ICON_NAMES.map(
          (name) => html`
            <div
              style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px 10px;border:1px solid var(--dre-color-border-subtle);border-radius:8px;background:var(--dre-color-background-neutral-default);color:var(--dre-color-icon-default);"
            >
              <dre-icon name=${name} size="20"></dre-icon>
              <span
                style="font-size:10px;text-align:center;color:var(--dre-color-text-subtle);word-break:break-word;"
                >${name}</span
              >
            </div>
          `,
        )}
      </div>
    </div>
  `,
}

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;align-items:flex-end;gap:20px;padding:24px;color:var(--dre-color-icon-default);">
      ${[12, 16, 20, 24, 32].map(
        (size) => html`
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <dre-icon name="sparkles" size=${size}></dre-icon>
            <span style="font-size:11px;color:var(--dre-color-text-subtle);">${size}px</span>
          </div>
        `,
      )}
    </div>
  `,
}
