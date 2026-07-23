import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreCountBadgeSize = 'small' | 'medium' | 'large'
export type DreCountBadgeAppearance = 'light' | 'dark'

/**
 * DRE Count Badge — Figma (`12301:9508`).
 * Small 32 · Medium 48 · Large 64 · Light `#f5f5fa` / Dark `#1e2026` · ring + count (99+).
 */
@customElement('dre-count-badge')
export class DreCountBadge extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .badge {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 50%;
        background: #f5f5fa;
        color: #646478;
        font-weight: 600;
        line-height: normal;
      }

      :host([appearance='dark']) .badge {
        background: #1e2026;
        color: #8c919e;
      }

      :host([size='small']) .badge,
      :host(:not([size])) .badge {
        width: 32px;
        height: 32px;
        font-size: 12px;
      }

      :host([size='medium']) .badge {
        width: 48px;
        height: 48px;
        font-size: 18px;
      }

      :host([size='large']) .badge {
        width: 64px;
        height: 64px;
        font-size: 24px;
      }

      .ring {
        position: absolute;
        inset: 4px;
        border-radius: 50%;
        border: 2px solid #c8c8d2;
        pointer-events: none;
        box-sizing: border-box;
      }

      :host([size='medium']) .ring {
        inset: 5px;
        border-width: 3px;
      }

      :host([size='large']) .ring {
        inset: 7px;
        border-width: 3px;
      }

      :host([appearance='dark']) .ring {
        border-color: #5a5f6c;
      }

      .count {
        position: relative;
        z-index: 1;
      }
    `,
  ]

  @property({ type: Number }) count = 0
  @property({ reflect: true }) size: DreCountBadgeSize = 'small'
  @property({ reflect: true }) appearance: DreCountBadgeAppearance = 'light'

  #label() {
    if (this.count > 99) return '99+'
    return String(this.count)
  }

  override render() {
    const label = this.#label()
    return html`
      <span class="badge" part="badge" aria-label=${`${this.count} items`}>
        <span class="ring" part="ring" aria-hidden="true"></span>
        <span class="count" part="count">${label}</span>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-count-badge': DreCountBadge
  }
}
