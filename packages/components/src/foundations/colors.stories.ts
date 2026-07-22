import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import palette from './data/colors.palette.json'

const meta: Meta = {
  title: 'Foundation/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Figma **🧱 Colors** — exact hex steps + WCAG contrast labels from the design file.',
      },
    },
  },
}
export default meta
type Story = StoryObj

function swatch(s: { step: string; hex: string; contrast: string }) {
  const isLight = (() => {
    const h = s.hex.replace('#', '')
    if (h.length !== 6) return true
    const r = parseInt(h.slice(0, 2), 16)
    const g = parseInt(h.slice(2, 4), 16)
    const b = parseInt(h.slice(4, 6), 16)
    return (r * 299 + g * 587 + b * 114) / 1000 > 150
  })()
  const fg = isLight ? '#13141A' : '#FFFFFF'
  return html`
    <div style="width:133px;">
      <div
        style="height:64px;border-radius:8px 8px 0 0;background:${s.hex};padding:8px;display:flex;align-items:flex-start;"
      >
        <span style="font-size:11px;font-weight:600;color:${fg};">${s.contrast}</span>
      </div>
      <div
        style="padding:8px 0 0;display:flex;justify-content:space-between;align-items:baseline;gap:8px;"
      >
        <span style="font-size:13px;font-weight:600;color:var(--dre-color-text-default);">${s.step}</span>
        <span style="font-size:12px;color:var(--dre-color-text-subtle);">${s.hex}</span>
      </div>
    </div>
  `
}

export const PrimaryColors: Story = {
  name: 'Primary colors',
  render: () => html`
    <div style="padding:32px 40px;max-width:1200px;">
      <h1 style="margin:0 0 8px;font-size:32px;">Colors</h1>
      <p style="margin:0 0 28px;max-width:900px;color:var(--dre-color-text-subtle);font-size:14px;line-height:1.5;">
        ${palette.intro}
      </p>
      <h2 style="margin:0 0 8px;font-size:20px;">Primary colors</h2>
      <p style="margin:0 0 28px;color:var(--dre-color-text-subtle);font-size:13px;">${palette.primaryNote}</p>
      ${palette.sections[0].scales.map((name) => {
        const scale = palette.scales[name as keyof typeof palette.scales]
        return html`
          <section style="margin-bottom:36px;">
            <h3 style="margin:0 0 4px;font-size:16px;">${name}</h3>
            <p style="margin:0 0 14px;max-width:320px;color:var(--dre-color-text-subtle);font-size:12px;line-height:1.4;">
              ${scale.description}
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              ${scale.swatches.map((s) => swatch(s))}
            </div>
          </section>
        `
      })}
    </div>
  `,
}

export const SecondaryColors: Story = {
  name: 'Secondary colors',
  render: () => html`
    <div style="padding:32px 40px;max-width:1200px;">
      <h2 style="margin:0 0 28px;font-size:20px;">Secondary colors</h2>
      ${palette.sections[1].scales.map((name) => {
        const scale = palette.scales[name as keyof typeof palette.scales]
        return html`
          <section style="margin-bottom:36px;">
            <h3 style="margin:0 0 4px;font-size:16px;">${name}</h3>
            <p style="margin:0 0 14px;max-width:320px;color:var(--dre-color-text-subtle);font-size:12px;line-height:1.4;">
              ${scale.description}
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              ${scale.swatches.map((s) => swatch(s))}
            </div>
          </section>
        `
      })}
    </div>
  `,
}
