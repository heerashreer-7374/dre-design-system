import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

const meta: Meta = {
  title: 'Blocks/If-Else',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Figma **🖍 If-Else** / **Blocks** — IDE canvas block primitives. Placeholder until full block authoring lands.',
      },
    },
  },
}
export default meta
type Story = StoryObj

export const Placeholder: Story = {
  render: () => html`
    <div
      style="max-width:360px;padding:16px;border:1px dashed var(--dre-color-border-brand);border-radius:var(--dre-radius-medium);background:var(--dre-color-background-brand-subtle);color:var(--dre-color-text-brand);font-size:13px;"
    >
      If / Else block component — planned next. Spec lives in Figma pages <strong>🖍 If-Else</strong> and
      <strong>🖍 Blocks</strong>.
    </div>
  `,
}
