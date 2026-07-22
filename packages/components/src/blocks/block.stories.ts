import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Blocks/Blocks',
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj

export const Placeholder: Story = {
  render: () => html`
    <div
      style="max-width:360px;padding:16px;border:1px dashed var(--dre-color-border-default);border-radius:var(--dre-radius-medium);background:var(--dre-color-background-neutral-default);color:var(--dre-color-text-subtle);font-size:13px;"
    >
      Generic workflow <strong>Block</strong> component — placeholder aligned to Figma 🖍 Blocks.
    </div>
  `,
}
