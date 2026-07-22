import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreRadioSize = 'small' | 'medium'

/**
 * DRE Radio — Figma Radio Box (`10151:1002`).
 * Small control 8×8 · Medium 14×14 · Selected ring+dot `#0d6dfd`.
 */
@customElement('dre-radio')
export class DreRadio extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        font-size: 14px;
        color: #212126;
        cursor: pointer;
      }

      :host([disabled]) {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      label {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        cursor: inherit;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      :host([helper]) .text {
        padding-top: 4px;
      }

      .label {
        font-size: 14px;
        line-height: 20px;
      }

      :host([size='small']) .label {
        font-size: 12px;
        line-height: 14px;
      }

      .helper {
        font-size: 12px;
        line-height: 16px;
        color: #737380;
      }

      /* Hit target matches Figma: Small 20 · Medium 34 */
      .control {
        display: grid;
        place-content: center;
        flex: 0 0 auto;
      }

      :host([size='small']) .control {
        width: 20px;
        height: 20px;
      }

      :host([size='medium']) .control,
      :host(:not([size])) .control {
        width: 34px;
        height: 34px;
      }

      input {
        appearance: none;
        margin: 0;
        display: grid;
        place-content: center;
        border-style: solid;
        border-radius: 9999px;
        background: #ffffff;
        cursor: inherit;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
        border-width: 1px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        width: 14px;
        height: 14px;
        border-width: 1.5px;
      }

      input {
        border-color: #727999;
      }

      input:hover:not(:disabled):not(:checked) {
        border-color: #0d6dfd;
      }

      input:checked {
        border-color: #0d6dfd;
      }

      input:checked:hover:not(:disabled) {
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled) {
        border-color: #051335;
      }

      input:checked::after {
        content: '';
        border-radius: 9999px;
        background: #0d6dfd;
      }

      :host([size='small']) input:checked::after {
        width: 4px;
        height: 4px;
      }

      :host([size='medium']) input:checked::after,
      :host(:not([size])) input:checked::after {
        width: 6px;
        height: 6px;
      }

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
      }

      input:checked:disabled {
        border-color: #e6e8ed;
      }

      input:checked:disabled::after {
        background: #d6d8e1;
      }

      input:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }
    `,
  ]

  @property({ reflect: true }) size: DreRadioSize = 'medium'
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ reflect: true }) helper = ''
  @property() name = ''
  @property() value = ''

  #onChange(e: Event) {
    const input = e.target as HTMLInputElement
    this.checked = input.checked
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    return html`
      <label>
        <span class="control">
          <input
            type="radio"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            @change=${this.#onChange}
          />
        </span>
        <span class="text">
          <span class="label"><slot></slot></span>
          ${this.helper ? html`<span class="helper">${this.helper}</span>` : null}
        </span>
      </label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-radio': DreRadio
  }
}
