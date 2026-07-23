import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DrePopoverSlotAppearance = 'light' | 'dark'
export type DrePopoverSlotKind = 'single' | 'multiple'

/**
 * DRE Popover Field Slot — Figma (`12404:13807` / Multiple Field Slot).
 * Dashed placeholder used inside Single Field / Multiple Field popovers.
 */
@customElement('dre-popover-slot')
export class DrePopoverSlot extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        min-height: 97px;
        align-items: center;
        justify-content: center;
        border: 1.5px dashed #adb5c7;
        border-radius: 6px;
        background: #f5f5fa;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        color: #8c94a6;
        font-size: 11px;
        font-weight: 400;
        line-height: normal;
        text-align: center;
      }

      :host([appearance='dark']) {
        background: #212326;
        border-color: #46494f;
        color: #7a7f89;
      }

      :host([kind='multiple']) {
        min-height: 99px;
        flex: 1 1 0;
        min-width: 0;
      }

      .label {
        padding: 0 10px;
      }
    `,
  ]

  @property({ reflect: true }) appearance: DrePopoverSlotAppearance = 'light'
  @property({ reflect: true }) kind: DrePopoverSlotKind = 'single'
  @property() label = ''

  override render() {
    const text =
      this.label ||
      (this.kind === 'multiple' ? 'Multiple Field Slot' : 'Single Field Slot')
    return html`<span class="label" part="label"><slot>${text}</slot></span>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-popover-slot': DrePopoverSlot
  }
}
