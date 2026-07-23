import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'
import './dropdown-item.js'

export type DreDropdownType = 'single' | 'multiple'
export type DreSelectVariant = 'default' | 'icon-leading' | 'search'
export type DreDropdownAppearance = 'light' | 'dark'
export type DreDropdownSize = 'small' | 'medium'

/**
 * DRE Dropdown — Figma Input Dropdown (`10280:148`) + Dropdown menu (`10289:952`).
 *
 * @slot - Menu items (`dre-dropdown-item`)
 * @slot leading - Leading icon (icon-leading / search)
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
        gap: 6px;
        width: 100%;
        max-width: 280px;
        position: relative;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([appearance='dark']) {
        color-scheme: dark;
      }

      .label {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: #383c4d;
      }

      :host([appearance='dark']) .label {
        color: #c5c9d8;
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
        background: #fff;
        color: #383c4d;
        font: inherit;
        font-size: 12px;
        text-align: start;
        cursor: pointer;
        box-sizing: border-box;
        box-shadow:
          0 1px 2px rgba(0, 0, 0, 0.06),
          0 2px 4px rgba(0, 0, 0, 0.04);
      }

      :host([size='small']) .trigger {
        height: 28px;
        min-height: 28px;
      }

      :host([appearance='dark']) .trigger {
        background: #1b1b1e;
        border-color: #3a3a40;
        color: #e6e8ed;
        box-shadow: none;
      }

      .trigger:hover:not(:disabled) {
        border-color: #8c92ac;
      }

      :host([appearance='dark']) .trigger:hover:not(:disabled) {
        border-color: #727999;
      }

      .trigger:focus-visible,
      :host([open]) .trigger {
        outline: none;
        border-color: #0d6dfd;
        box-shadow:
          0 0 0 1px #0d6dfd,
          0 1px 2px rgba(0, 0, 0, 0.06),
          0 2px 4px rgba(0, 0, 0, 0.04);
      }

      .trigger:disabled {
        background: #f3f3f6;
        color: #9ca1b7;
        border-color: #e6e8ed;
        box-shadow: none;
        cursor: not-allowed;
      }

      :host([appearance='dark']) .trigger:disabled {
        background: #2a2a2e;
        border-color: #3a3a40;
        color: #727999;
      }

      :host([invalid]) .trigger {
        border-color: #d64333;
        box-shadow: none;
      }

      :host([invalid][open]) .trigger,
      :host([invalid]) .trigger:focus-visible {
        border-color: #d64333;
        box-shadow: 0 0 0 1px #d64333;
      }

      .value {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .value.placeholder {
        color: #8c92ac;
      }

      :host([appearance='dark']) .value.placeholder {
        color: #727999;
      }

      .leading,
      .chevron {
        display: inline-flex;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      .chevron {
        transition: transform 150ms ease-out;
      }

      :host([open]) .chevron {
        transform: rotate(180deg);
      }

      .menu {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        right: 0;
        z-index: 20;
        display: none;
        flex-direction: column;
        gap: 10px;
        max-height: 316px;
        overflow: auto;
        padding: 10px 0;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
        box-shadow:
          0 2px 8px rgba(0, 0, 0, 0.08),
          0 4px 14px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
      }

      :host([open]) .menu {
        display: flex;
      }

      :host([appearance='dark']) .menu {
        background: #1b1b1e;
        border-color: #3a3a40;
      }

      /* Standalone Dropdown menu (no trigger) */
      :host([menu-only]) {
        max-width: 197px;
      }

      :host([menu-only]) .trigger {
        display: none;
      }

      :host([menu-only]) .menu {
        position: static;
        display: flex;
        width: 197px;
        max-width: 100%;
        padding: 10px;
        border: 0;
        box-shadow: none;
      }

      .menu-title {
        padding: 0;
        font-size: 12px;
        font-weight: 400;
        color: #13141a;
      }

      :host([appearance='dark']) .menu-title {
        color: #e6e8ed;
      }

      .menu-divider {
        width: 100%;
        height: 1px;
        background: #f3f3f6;
      }

      :host([appearance='dark']) .menu-divider {
        background: #3a3a40;
      }

      .menu-items {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }

      :host([menu-only]) .menu-items {
        gap: 0;
      }

      .search {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 10px 4px;
        padding: 0 10px;
        height: 28px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
        box-sizing: border-box;
      }

      .search input {
        flex: 1;
        min-width: 0;
        border: 0;
        padding: 0;
        margin: 0;
        background: transparent;
        font: inherit;
        font-size: 12px;
        color: #13141a;
        outline: none;
      }

      .search input::placeholder {
        color: #8c92ac;
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
  @property({ reflect: true }) appearance: DreDropdownAppearance = 'light'
  @property({ reflect: true }) size: DreDropdownSize = 'medium'
  @property({ type: Boolean, reflect: true }) open = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) invalid = false
  @property({ type: Boolean, reflect: true }) searchable = false
  /** Render as standalone Dropdown menu (no input trigger). */
  @property({ type: Boolean, reflect: true, attribute: 'menu-only' }) menuOnly = false

  @state() private filter = ''

  #uid = Math.random().toString(36).slice(2, 9)
  #listboxId = `dre-dd-${this.#uid}`
  #labelId = `dre-dd-label-${this.#uid}`

  #toggle() {
    if (this.disabled || this.menuOnly) return
    this.open = !this.open
    this.dispatchEvent(
      new CustomEvent('dre-open-change', {
        detail: { open: this.open },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #syncItemSelection() {
    const values =
      this.type === 'multiple'
        ? this.value
            .split(',')
            .map((v) => v.trim())
            .filter(Boolean)
        : this.value
          ? [this.value]
          : []
    const q = this.filter.trim().toLowerCase()
    for (const item of this.querySelectorAll('dre-dropdown-item')) {
      const el = item as HTMLElement & {
        value: string
        label: string
        selected: boolean
        control: 'none' | 'checkbox' | 'radio'
        showCheck: boolean
        hidden: boolean
      }
      const key = el.value || el.label
      el.selected = values.includes(key)
      // Input Dropdown: trailing check. Menu / multiple: radio or checkbox.
      if (!this.menuOnly && this.type === 'single' && el.control === 'none') {
        el.showCheck = true
      }
      if (this.menuOnly && el.control === 'none') {
        el.control = this.type === 'multiple' ? 'checkbox' : 'radio'
      }
      el.hidden = q ? !`${el.label} ${el.value}`.toLowerCase().includes(q) : false
    }
  }

  #onSelect(e: Event) {
    const detail = (e as CustomEvent).detail as { value: string; selected: boolean; label?: string }
    if (this.type === 'single') {
      this.value = detail.value
      this.displayValue = detail.label || detail.value
      if (!this.menuOnly) this.open = false
    } else {
      const current = this.value
        ? this.value
            .split(',')
            .map((v) => v.trim())
            .filter(Boolean)
        : []
      const next = detail.selected
        ? [...new Set([...current, detail.value])]
        : current.filter((v) => v !== detail.value)
      this.value = next.join(', ')
      this.displayValue = this.value
    }
    this.#syncItemSelection()
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #onDocClick = (e: MouseEvent) => {
    if (!this.open || this.menuOnly) return
    if (!e.composedPath().includes(this)) this.open = false
  }

  #onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.open) {
      this.open = false
      e.stopPropagation()
    }
  }

  override connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this.#onDocClick)
    this.addEventListener('keydown', this.#onKeydown)
  }

  override disconnectedCallback() {
    document.removeEventListener('click', this.#onDocClick)
    this.removeEventListener('keydown', this.#onKeydown)
    super.disconnectedCallback()
  }

  override updated(changed: Map<string, unknown>) {
    if (
      changed.has('value') ||
      changed.has('type') ||
      changed.has('open') ||
      changed.has('menuOnly') ||
      changed.has('filter')
    ) {
      this.#syncItemSelection()
    }
  }

  override firstUpdated() {
    this.#syncItemSelection()
  }

  override render() {
    const shown = this.displayValue || this.value
    const isPlaceholder = !shown
    const showLeading = this.variant === 'icon-leading' || this.variant === 'search' || this.searchable
    const showSearch = this.searchable || this.variant === 'search'

    const labelText = this.label || this.placeholder || 'Dropdown'
    return html`
      ${this.label && !this.menuOnly
        ? html`<span id=${this.#labelId} class="label" part="label">${this.label}</span>`
        : nothing}
      ${this.menuOnly
        ? nothing
        : html`
            <button
              class="trigger"
              type="button"
              part="trigger"
              aria-haspopup="listbox"
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-controls=${this.#listboxId}
              aria-labelledby=${this.label ? this.#labelId : nothing}
              aria-label=${this.label ? nothing : labelText}
              ?disabled=${this.disabled}
              @click=${this.#toggle}
            >
              ${showLeading
                ? html`
                    <span class="leading" part="leading">
                      <slot name="leading">
                        <dre-icon
                          name=${this.variant === 'search' || this.searchable ? 'search' : 'code-1'}
                          size="14"
                        ></dre-icon>
                      </slot>
                    </span>
                  `
                : nothing}
              <span class="value ${isPlaceholder ? 'placeholder' : ''}" part="value"
                >${shown || this.placeholder}</span
              >
              <span class="chevron" aria-hidden="true">
                <dre-icon name="chevron-down" size="14"></dre-icon>
              </span>
            </button>
          `}
      <div
        id=${this.#listboxId}
        class="menu"
        part="menu"
        role="listbox"
        aria-label=${this.menuTitle || labelText}
        aria-multiselectable=${this.type === 'multiple' ? 'true' : 'false'}
        @dre-select=${this.#onSelect}
      >
        ${this.menuTitle
          ? html`
              <div class="menu-title" part="menu-title">${this.menuTitle}</div>
              <div class="menu-divider" part="menu-divider" aria-hidden="true"></div>
            `
          : nothing}
        ${showSearch && (this.open || this.menuOnly)
          ? html`
              <div class="search" part="search">
                <dre-icon name="search" size="14"></dre-icon>
                <input
                  type="search"
                  placeholder="Search…"
                  .value=${this.filter}
                  @input=${(e: Event) => {
                    this.filter = (e.target as HTMLInputElement).value
                  }}
                  @click=${(e: Event) => e.stopPropagation()}
                />
              </div>
            `
          : nothing}
        <div class="menu-items" part="menu-items">
          <slot></slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-dropdown': DreDropdown
  }
}
