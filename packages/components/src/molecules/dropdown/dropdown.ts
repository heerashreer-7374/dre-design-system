import { LitElement, css, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import './dropdown-item.js'

export type DreDropdownType = 'single' | 'multiple'
export type DreSelectVariant = 'default' | 'icon-leading' | 'search'

/**
 * DRE Dropdown — combines Figma Input Dropdown (`10280:148`) + Dropdown menu (`10289:952`).
 *
 * @slot - Menu items (`dre-dropdown-item` or custom)
 * @slot leading - Leading icon for icon-leading / search variants
 * @fires dre-change - Fired when selection changes
 * @fires dre-open-change - Fired when open state changes
 */
@customElement('dre-dropdown')
export class DreDropdown extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: var(--dre-spacer-4);
        width: 100%;
        max-width: 280px;
        position: relative;
      }

      .label {
        font-size: var(--dre-typography-label3-font-size, 12px);
        font-weight: var(--dre-font-weight-medium, 500);
        color: var(--dre-color-text-label);
      }

      .trigger {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 34px;
        min-height: 34px;
        padding: 0 12px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #ffffff;
        color: #13141a;
        font: inherit;
        font-size: 14px;
        text-align: start;
        cursor: pointer;
        box-sizing: border-box;
      }

      :host([size='small']) .trigger {
        height: 24px;
        min-height: 24px;
        font-size: 12px;
      }

      .trigger:hover:not(:disabled) {
        border-color: #8c92ac;
      }

      .trigger:focus-visible,
      :host([open]) .trigger {
        outline: none;
        border-color: #0d6dfd;
        box-shadow: 0 0 0 1px #0d6dfd;
      }

      .trigger:disabled {
        background: #f3f3f6;
        color: #9ca1b7;
        border-color: #e6e8ed;
        cursor: not-allowed;
      }

      .value {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .value.placeholder {
        color: var(--dre-color-text-placeholder);
      }

      .chevron {
        color: var(--dre-color-icon-subtle);
        font-size: 10px;
        line-height: 1;
        transition: transform 120ms ease;
      }

      :host([open]) .chevron {
        transform: rotate(180deg);
      }

      .menu {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 20;
        display: none;
        flex-direction: column;
        gap: var(--dre-spacer-2);
        max-height: 260px;
        overflow: auto;
        padding: var(--dre-spacer-6);
        border: 1px solid var(--dre-color-border-subtle);
        border-radius: var(--dre-radius-medium);
        background: var(--dre-color-background-elevated);
        box-shadow: 0 8px 24px color-mix(in srgb, var(--dre-color-shadow-medium) 18%, transparent);
      }

      :host([open]) .menu {
        display: flex;
      }

      .menu-title {
        padding: var(--dre-spacer-4) var(--dre-spacer-10);
        font-size: var(--dre-typography-caption1-font-size, 10px);
        font-weight: var(--dre-font-weight-medium, 500);
        color: var(--dre-color-text-subtle);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .leading {
        display: inline-flex;
        color: var(--dre-color-icon-subtle);
        line-height: 0;
      }
    `,
  ]

  @property() label = ''
  @property() placeholder = 'Add Value'
  @property() value = ''
  @property({ attribute: 'display-value' }) displayValue = ''
  @property({ attribute: 'menu-title' }) menuTitle = ''
  @property({ reflect: true }) type: DreDropdownType = 'single'
  @property({ reflect: true }) variant: DreSelectVariant = 'default'
  @property({ reflect: true }) size: 'small' | 'medium' = 'medium'
  @property({ type: Boolean, reflect: true }) open = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) searchable = false

  @state() private filter = ''

  #toggle() {
    if (this.disabled) return
    this.open = !this.open
    this.dispatchEvent(
      new CustomEvent('dre-open-change', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #onSelect(e: Event) {
    const detail = (e as CustomEvent).detail as { value: string; selected: boolean }
    if (this.type === 'single') {
      this.value = detail.value
      this.displayValue = detail.value
      this.open = false
    } else {
      const current = this.value ? this.value.split(',').map((v) => v.trim()).filter(Boolean) : []
      const next = detail.selected
        ? [...new Set([...current, detail.value])]
        : current.filter((v) => v !== detail.value)
      this.value = next.join(', ')
      this.displayValue = this.value
    }
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #onDocClick = (e: MouseEvent) => {
    if (!this.open) return
    const path = e.composedPath()
    if (!path.includes(this)) {
      this.open = false
    }
  }

  override connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this.#onDocClick)
  }

  override disconnectedCallback() {
    document.removeEventListener('click', this.#onDocClick)
    super.disconnectedCallback()
  }

  override render() {
    const shown = this.displayValue || this.value
    const isPlaceholder = !shown
    const showLeading = this.variant === 'icon-leading' || this.variant === 'search' || this.searchable

    return html`
      ${this.label ? html`<span class="label">${this.label}</span>` : null}
      <button
        class="trigger"
        type="button"
        part="trigger"
        aria-haspopup="listbox"
        aria-expanded=${this.open ? 'true' : 'false'}
        ?disabled=${this.disabled}
        @click=${this.#toggle}
      >
        ${showLeading ? html`<span class="leading"><slot name="leading">${this.variant === 'search' || this.searchable ? '⌕' : ''}</slot></span>` : null}
        <span class="value ${isPlaceholder ? 'placeholder' : ''}">${shown || this.placeholder}</span>
        <span class="chevron" aria-hidden="true">▾</span>
      </button>
      <div class="menu" part="menu" role="listbox" @dre-select=${this.#onSelect}>
        ${this.menuTitle ? html`<div class="menu-title">${this.menuTitle}</div>` : null}
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-dropdown': DreDropdown
  }
}
