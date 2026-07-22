import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreInputSize = 'small' | 'medium'

/**
 * DRE Input Field — Figma Input Field (`10209:416`).
 * Small field 24px · Medium 34px · radius 4 · stroke `#bdc0cf` · destructive `#d64333`.
 */
@customElement('dre-input')
export class DreInput extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        max-width: 280px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .label {
        font-size: 12px;
        color: #383c4d;
        font-weight: 400;
        line-height: 14px;
      }

      .required {
        color: #d64333;
        margin-inline-start: 2px;
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
        background: #ffffff;
      }

      :host([size='small']) .field {
        height: 24px;
        min-height: 24px;
      }

      :host([size='medium']) .field,
      :host(:not([size])) .field {
        height: 34px;
        min-height: 34px;
      }

      :host(:hover:not([disabled]):not([invalid])) .field {
        border-color: #8c92ac;
      }

      :host([focused]:not([invalid])) .field {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 1px #0d6dfd;
      }

      :host([invalid]) .field {
        border-color: #d64333;
      }

      :host([disabled]) .field {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      .leading,
      .trailing {
        display: inline-flex;
        color: #727999;
        line-height: 0;
        flex: 0 0 auto;
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
        outline: none;
      }

      :host([size='small']) input {
        font-size: 12px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        font-size: 14px;
      }

      input::placeholder {
        color: #8c92ac;
      }

      input:disabled {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      .hint {
        font-size: 12px;
        line-height: 14px;
        color: #5d6481;
      }

      :host([invalid]) .hint {
        color: #d64333;
      }
    `,
  ]

  @property({ reflect: true }) size: DreInputSize = 'medium'
  @property() label = ''
  @property() placeholder = ''
  @property() value = ''
  @property() name = ''
  @property() type: 'text' | 'email' | 'password' | 'search' | 'number' = 'text'
  @property() hint = ''
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) required = false
  @property({ type: Boolean, reflect: true }) invalid = false
  /** Alias for Figma Destructive */
  @property({ type: Boolean, reflect: true }) destructive = false
  @property({ type: Boolean, reflect: true }) focused = false

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

  override render() {
    return html`
      ${this.label
        ? html`<label class="label"
            >${this.label}${this.required ? html`<span class="required">*</span>` : null}</label
          >`
        : null}
      <div class="field" part="field">
        <span class="leading"><slot name="leading"></slot></span>
        <input
          part="input"
          type=${this.type}
          name=${this.name}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.invalid || this.destructive ? 'true' : 'false'}
          @input=${this.#onInput}
          @focus=${() => (this.focused = true)}
          @blur=${() => (this.focused = false)}
        />
        <span class="trailing"><slot name="trailing"></slot></span>
      </div>
      ${this.hint ? html`<div class="hint">${this.hint}</div>` : null}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-input': DreInput
  }
}
