import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import './badge.js'
import './count-badge.js'
import './info-banner.js'
import { figmaDocLink } from '../../shared/figma.js'

const meta: Meta = {
  title: 'Single Components/Badge',
  component: 'dre-badge',
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['success', 'warning', 'error', 'info'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    appearance: { control: 'select', options: ['light', 'dark'] },
  },
  args: { status: 'success', size: 'small', appearance: 'light' },
  parameters: {
    docs: {
      description: {
        component:
          `Figma **⭐ Badge** ${figmaDocLink('12290:8429')} — Status Badge · Count Badge · Info Banner.`,
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Default: Story = {
  render: (args) => html`
    <dre-badge status=${args.status} size=${args.size} appearance=${args.appearance}>
      ${args.status?.[0]?.toUpperCase()}${args.status?.slice(1)}
    </dre-badge>
  `,
}

export const StatusBadge: Story = {
  name: 'Features / Status Badge',
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${(['small', 'medium', 'large'] as const).map(
        (size) => html`
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            <dre-badge status="success" size=${size}>Success</dre-badge>
            <dre-badge status="warning" size=${size}>Warning</dre-badge>
            <dre-badge status="error" size=${size}>Error</dre-badge>
            <dre-badge status="info" size=${size}>Info</dre-badge>
          </div>
        `,
      )}
    </div>
  `,
}

export const CountBadge: Story = {
  name: 'Features / Count Badge',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:flex-end;">
      <div style="display:flex;gap:16px;align-items:flex-end;">
        <dre-count-badge count=${5} size="small" appearance="light"></dre-count-badge>
        <dre-count-badge count=${5} size="medium" appearance="light"></dre-count-badge>
        <dre-count-badge count=${5} size="large" appearance="light"></dre-count-badge>
      </div>
      <div style="display:flex;gap:16px;align-items:flex-end;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-count-badge count=${5} size="small" appearance="dark"></dre-count-badge>
        <dre-count-badge count=${5} size="medium" appearance="dark"></dre-count-badge>
        <dre-count-badge count=${5} size="large" appearance="dark"></dre-count-badge>
      </div>
    </div>
  `,
}

export const InfoBanner: Story = {
  name: 'Features / Info Banner',
  render: () => html`
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-info-banner type="info" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="warning" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="error" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="medium" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="large" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="info" size="small" ?icon=${false} label="Mail Submitted"></dre-info-banner>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-info-banner type="info" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="warning" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="error" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
      </div>
    </div>
  `,
}
