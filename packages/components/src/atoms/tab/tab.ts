import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreTabMode = 'default' | 'icon' | 'badge' | 'both'

/**
 * DRE Tab Item — Figma ⭐ Tab (`12267:1598` / Tab Item `12290:8325`).
 * Pad 12×10 · gap 6 · Active `#0d6dfd` · Default `#5d6481` · Disabled `#8c92ac`.
 * Hover/Active show 2px indicator (gray / brand).
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

      .tab {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin: 0;
        padding: 10px 12px 0;
        border: 0;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        box-sizing: border-box;
      }

      .content {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-height: 16px;
      }

      .label-group {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }

      .indicator {
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: transparent;
      }

      :host([active]) .tab {
        color: #0d6dfd;
      }

      :host([active]) .indicator {
        background: #0d6dfd;
      }

      :host(:not([active]):not([disabled]):hover) .indicator,
      :host([hovered]:not([active]):not([disabled])) .indicator {
        background: #8c92ac;
      }

      :host([disabled]) .tab {
        color: #8c92ac;
        cursor: not-allowed;
      }

      :host(:focus) {
        outline: none;
      }

      :host(:focus-visible) .tab {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      /* Enclosed track (Tab Group Style=Enclosed) */
      :host([enclosed]) .tab {
        padding: 6px 12px;
        border-radius: 2px;
      }

      :host([enclosed][active]) .tab {
        background: #ffffff;
        color: #0d6dfd;
      }

      :host([enclosed]) .indicator {
        display: none;
      }

      .icon {
        display: inline-flex;
        width: 16px;
        height: 16px;
        align-items: center;
        justify-content: center;
        line-height: 0;
        color: inherit;
        flex-shrink: 0;
      }

      .icon ::slotted(*) {
        width: 16px;
        height: 16px;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border-radius: 34px;
        border: 1px solid #d6d8e1;
        font-size: 12px;
        line-height: normal;
        color: #5d6481;
        flex-shrink: 0;
      }

      :host([active]) .badge {
        border-color: #0d6dfd;
        color: #0d6dfd;
      }

      :host(:not([active]):not([disabled]):hover) .badge,
      :host([hovered]:not([active]):not([disabled])) .badge {
        border-color: #5d6481;
      }

      :host([disabled]) .badge {
        border-color: #8c92ac;
        color: #8c92ac;
      }

      .badge-slot {
        display: inline-flex;
        line-height: 0;
      }
    `,
  ]

  @property() value = ''
  @property({ reflect: true }) mode: DreTabMode = 'default'
  @property({ type: Boolean, reflect: true }) active = false
  @property({ type: Boolean, reflect: true }) disabled = false
  /** Force hovered appearance for Storybook demos. */
  @property({ type: Boolean, reflect: true }) hovered = false
  @property({ type: Boolean, reflect: true }) enclosed = false
  /** Count shown in circular badge (modes badge / both). */
  @property() count = ''

  override connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'tab')
    this.#syncAria()
    this.addEventListener('click', this.#onClick)
    this.addEventListener('keydown', this.#onKeydown)
  }

  override disconnectedCallback() {
    this.removeEventListener('click', this.#onClick)
    this.removeEventListener('keydown', this.#onKeydown)
    super.disconnectedCallback()
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('active') || changed.has('disabled')) this.#syncAria()
  }

  #syncAria() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false')
    if (this.disabled) this.setAttribute('aria-disabled', 'true')
    else this.removeAttribute('aria-disabled')
    this.tabIndex = this.disabled ? -1 : 0
  }

  #onClick = () => {
    if (this.disabled) return
    this.dispatchEvent(
      new CustomEvent('dre-tab-select', {
        detail: { value: this.value || this.textContent?.trim() },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      this.#onClick()
    }
  }

  override render() {
    const showIcon = this.mode === 'icon' || this.mode === 'both'
    const showBadge = this.mode === 'badge' || this.mode === 'both'
    const count = this.count.trim()

    return html`
      <div class="tab" part="tab">
        <span class="content">
          <span class="label-group">
            ${showIcon ? html`<span class="icon"><slot name="icon"></slot></span>` : nothing}
            <slot></slot>
          </span>
          ${showBadge
            ? count
              ? html`<span class="badge">${count}</span>`
              : html`<span class="badge-slot"><slot name="badge"></slot></span>`
            : nothing}
        </span>
        <span class="indicator" part="indicator"></span>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-tab': DreTab
  }
}
