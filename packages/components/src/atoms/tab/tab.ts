import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreTabMode = 'default' | 'icon' | 'badge' | 'both'

/**
 * DRE Tab Item — Figma (`12290:8325`).
 * Pad 12×10 · gap 6 · Active indicator 2px `#0d6dfd` · Hover indicator `#8c92ac`.
 */
@customElement('dre-tab')
export class DreTab extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      button {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        margin: 0;
        padding: 10px 12px 0;
        border: 0;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
      }

      .content {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 16px;
      }

      .indicator {
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: transparent;
      }

      :host([active]) button {
        color: #0d6dfd;
      }

      :host([active]) .indicator {
        background: #0d6dfd;
      }

      button:hover:not(:disabled) {
        color: #13141a;
      }

      :host(:not([active])) button:hover:not(:disabled) .indicator {
        background: #8c92ac;
      }

      button:disabled {
        color: #d6d8e1;
        cursor: not-allowed;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      /* Enclosed track (Tab Group Style=Enclosed) */
      :host([enclosed]) button {
        padding: 6px 12px;
        border-radius: 2px;
      }

      :host([enclosed][active]) button {
        background: #ffffff;
        color: #0d6dfd;
      }

      :host([enclosed]) .indicator {
        display: none;
      }

      .icon {
        display: inline-flex;
        line-height: 0;
        color: inherit;
      }

      .badge {
        display: inline-flex;
      }
    `,
  ]

  @property() value = ''
  @property({ reflect: true }) mode: DreTabMode = 'default'
  @property({ type: Boolean, reflect: true }) active = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) enclosed = false

  #onClick() {
    if (this.disabled) return
    this.dispatchEvent(
      new CustomEvent('dre-tab-select', {
        detail: { value: this.value || this.textContent?.trim() },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    return html`
      <button
        type="button"
        role="tab"
        aria-selected=${this.active ? 'true' : 'false'}
        ?disabled=${this.disabled}
        @click=${this.#onClick}
      >
        <span class="content">
          ${this.mode === 'icon' || this.mode === 'both'
            ? html`<span class="icon"><slot name="icon"></slot></span>`
            : null}
          <slot></slot>
          ${this.mode === 'badge' || this.mode === 'both'
            ? html`<span class="badge"><slot name="badge"></slot></span>`
            : null}
        </span>
        <span class="indicator" part="indicator"></span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-tab': DreTab
  }
}
