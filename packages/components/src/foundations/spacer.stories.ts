import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

/** Figma 🧱 Spacer component sizes (4px grid). */
const FIGMA_SIZES = [4, 8, 12, 16, 24, 32, 48, 64] as const

const meta: Meta = {
  title: 'Foundation/Spacer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **🧱 Spacer** — sizes 4, 8, 12, 16, 24, 32, 48, 64px on a 4px grid. Horizontal / Vertical.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Scale: Story = {
  render: () => html`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Spacer</h2>
      <p style="margin:0 0 20px;color:var(--dre-color-text-subtle);font-size:13px;max-width:560px;">
        Usage: Horizontal between row items · Vertical between column items · Based on 4px grid · Sizes:
        4, 8, 12, 16, 24, 32, 48, 64px
      </p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${FIGMA_SIZES.map(
          (n) => html`
            <div style="display:flex;align-items:center;gap:16px;">
              <code style="width:110px;font-size:12px;color:var(--dre-color-text-subtle);">spacer/${n}</code>
              <div
                style="height:12px;width:var(--dre-spacer-${n});background:var(--dre-color-action-primary-default);border-radius:2px;"
                title="${n}px"
              ></div>
              <span style="font-size:12px;color:var(--dre-color-text-subtlest);">${n}px</span>
            </div>
          `,
        )}
      </div>
    </div>
  `,
}

export const Vertical: Story = {
  name: 'Features / Vertical',
  render: () => html`
    <div style="display:flex;gap:32px;padding:24px;flex-wrap:wrap;">
      ${FIGMA_SIZES.map(
        (n) => html`
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div
              style="width:48px;background:var(--dre-color-background-neutral-subtle);border:1px dashed var(--dre-color-border-subtle);display:flex;flex-direction:column;"
            >
              <div style="height:16px;background:var(--dre-color-background-elevated);"></div>
              <div
                style="height:var(--dre-spacer-${n});background:color-mix(in srgb, var(--dre-color-action-primary-default) 35%, transparent);"
              ></div>
              <div style="height:16px;background:var(--dre-color-background-elevated);"></div>
            </div>
            <span style="font-size:11px;color:var(--dre-color-text-subtle);">${n}</span>
          </div>
        `,
      )}
    </div>
  `,
}

export const Horizontal: Story = {
  name: 'Features / Horizontal',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;padding:24px;">
      ${FIGMA_SIZES.map(
        (n) => html`
          <div style="display:flex;align-items:center;gap:12px;">
            <code style="width:40px;font-size:11px;color:var(--dre-color-text-subtle);">${n}</code>
            <div
              style="height:32px;background:var(--dre-color-background-neutral-subtle);border:1px dashed var(--dre-color-border-subtle);display:inline-flex;align-items:stretch;"
            >
              <div style="width:24px;background:var(--dre-color-background-elevated);"></div>
              <div
                style="width:var(--dre-spacer-${n});background:color-mix(in srgb, var(--dre-color-action-primary-default) 35%, transparent);"
              ></div>
              <div style="width:24px;background:var(--dre-color-background-elevated);"></div>
            </div>
          </div>
        `,
      )}
    </div>
  `,
}
