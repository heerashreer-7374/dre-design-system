import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../icon/icon.js'

export type DreInputSize = 'small' | 'medium'
export type DreInputAppearance = 'light' | 'dark'
export type DreInputVariant = 'default' | 'leading-dropdown' | 'trailing-dropdown'

let inputId = 0

/**
 * DRE Input Field — Figma (`10171:179` / `10209:416`).
 * Small 28 · Medium 34 · radius 4 · border `#bdc0cf` · focus `#0d6dfd` · danger `#d64333`.
 *
 * @slot leading - Leading icon (Default type)
 * @slot trailing - Trailing icon
 * @slot label-icon - Top icon beside the label (Top Icon=True)
 * @slot prefix - Leading dropdown label (e.g. USD)
 * @fires dre-input - Fired on value change
 * @fires dre-change - Fired on commit (change)
 */
@customElement('dre-input')
export class DreInput extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        max-width: 280px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([size='small']) {
        max-width: 208px;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
      }

      .label-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        min-height: 14px;
      }

      .label {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: #383c4d;
      }

      :host([appearance='dark']) .label {
        color: #c5c9d8;
      }

      .required {
        color: #d64333;
        margin-inline-start: 2px;
      }

      .label-icon {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .field {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 12px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
      }

      :host([variant='leading-dropdown']) .field,
      :host([variant='trailing-dropdown']) .field {
        gap: 6px;
      }

      :host([size='small']) .field {
        height: 28px;
        min-height: 28px;
      }

      :host([size='medium']) .field,
      :host(:not([size])) .field {
        height: 34px;
        min-height: 34px;
      }

      :host([appearance='dark']) .field {
        background: #1b1b1e;
        border-color: #3a3a40;
      }

      :host(:hover:not([disabled]):not([invalid]):not([destructive])) .field {
        border-color: #8c92ac;
      }

      :host([appearance='dark']:hover:not([disabled]):not([invalid]):not([destructive])) .field {
        border-color: #727999;
      }

      :host([focused]:not([invalid]):not([destructive])) .field {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 1px #0d6dfd;
      }

      :host([invalid]) .field,
      :host([destructive]) .field {
        border-color: #d64333;
        box-shadow: none;
      }

      :host([invalid][focused]) .field,
      :host([destructive][focused]) .field {
        border-color: #d64333;
        box-shadow: 0 0 0 1px #d64333;
      }

      :host([disabled]) .field {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      :host([appearance='dark'][disabled]) .field {
        background: #2a2a2e;
        border-color: #3a3a40;
      }

      .leading,
      .trailing {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      .prefix,
      .affix-chevron {
        display: none;
        align-items: center;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      :host([variant='leading-dropdown']) .prefix,
      :host([variant='trailing-dropdown']) .affix-chevron {
        display: inline-flex;
      }

      .prefix {
        gap: 4px;
        font-size: 12px;
        color: #8c92ac;
        white-space: nowrap;
      }

      :host([appearance='dark']) .prefix {
        color: #9ca1b7;
      }

      .prefix-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }

      .prefix-btn:disabled {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      .affix-chevron {
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
        line-height: 0;
      }

      .affix-chevron:disabled {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      input {
        flex: 1;
        min-width: 0;
        height: 100%;
        border: 0;
        padding: 0;
        margin: 0;
        background: transparent;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        outline: none;
      }

      :host([appearance='dark']) input {
        color: #e6e8ed;
      }

      input::placeholder {
        color: #8c92ac;
      }

      :host([appearance='dark']) input::placeholder {
        color: #727999;
      }

      input:disabled {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      .hint {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: #727999;
        width: 100%;
      }

      :host([invalid]) .hint,
      :host([destructive]) .hint {
        color: #d64333;
      }
    `,
  ]

  @property({ reflect: true }) size: DreInputSize = 'medium'
  @property({ reflect: true }) appearance: DreInputAppearance = 'light'
  @property({ reflect: true }) variant: DreInputVariant = 'default'
  @property() label = ''
  @property() placeholder = 'Add Value'
  @property() value = ''
  @property() name = ''
  @property() type: 'text' | 'email' | 'password' | 'search' | 'number' = 'text'
  @property() hint = ''
  /** Prefix label for Leading Dropdown (e.g. USD). */
  @property() prefix = ''
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) invalid = false
  /** Alias for Figma Destructive */
  @property({ type: Boolean, reflect: true }) destructive = false
  @property({ type: Boolean, reflect: true }) focused = false

  #id = `dre-input-${++inputId}`

  override willUpdate() {
    if (this.destructive) this.invalid = true
  }

  #onInput(e: Event) {
    const input = e.target as HTMLInputElement
    this.value = input.value
    this.dispatchEvent(
      new CustomEvent('dre-input', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #onChange(e: Event) {
    const input = e.target as HTMLInputElement
    this.value = input.value
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #emitAffix(kind: 'prefix' | 'trailing') {
    this.dispatchEvent(
      new CustomEvent('dre-affix-click', {
        detail: { kind },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    const showLeadingDropdown = this.variant === 'leading-dropdown'
    const showTrailingDropdown = this.variant === 'trailing-dropdown'
    const isInvalid = this.invalid || this.destructive

    return html`
      <div class="content" part="content">
        ${this.label
          ? html`
              <div class="label-row" part="label-row">
                <label class="label" part="label" for=${this.#id}>
                  ${this.label}${this.required ? html`<span class="required">*</span>` : nothing}
                </label>
                <span class="label-icon" part="label-icon">
                  <slot name="label-icon"></slot>
                </span>
              </div>
            `
          : nothing}
        <div class="field" part="field">
          ${showLeadingDropdown
            ? html`
                <span class="prefix" part="prefix">
                  <button
                    class="prefix-btn"
                    type="button"
                    ?disabled=${this.disabled}
                    aria-label=${`${this.prefix || 'Prefix'} options`}
                    @click=${() => this.#emitAffix('prefix')}
                  >
                    <slot name="prefix">${this.prefix || 'USD'}</slot>
                    <dre-icon name="chevron-down" size="14"></dre-icon>
                  </button>
                </span>
              `
            : html`<span class="leading" part="leading"><slot name="leading"></slot></span>`}
          <input
            id=${this.#id}
            part="input"
            type=${this.type}
            name=${this.name}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            aria-invalid=${isInvalid ? 'true' : 'false'}
            aria-describedby=${this.hint ? `${this.#id}-hint` : nothing}
            @input=${this.#onInput}
            @change=${this.#onChange}
            @focus=${() => (this.focused = true)}
            @blur=${() => (this.focused = false)}
          />
          ${showTrailingDropdown
            ? html`
                <button
                  class="affix-chevron"
                  type="button"
                  part="trailing-dropdown"
                  ?disabled=${this.disabled}
                  aria-label="Open options"
                  @click=${() => this.#emitAffix('trailing')}
                >
                  <dre-icon name="chevron-down" size="14"></dre-icon>
                </button>
              `
            : html`<span class="trailing" part="trailing"><slot name="trailing"></slot></span>`}
        </div>
      </div>
      ${this.hint
        ? html`<div id=${`${this.#id}-hint`} class="hint" part="hint">${this.hint}</div>`
        : nothing}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-input': DreInput
  }
}
