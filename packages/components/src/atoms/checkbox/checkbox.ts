import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreCheckboxSize = 'small' | 'medium'

/**
 * DRE Checkbox — Figma Checkbox (`10048:396`).
 * Small 8×8 r2 · Medium 14×14 r4 · Selected fill `#0d6dfd`.
 */
@customElement('dre-checkbox')
export class DreCheckbox extends LitElement {
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
        cursor: not-allowed;
        color: #9ca1b7;
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
        padding-top: 0;
      }

      :host([helper]) .text {
        padding-top: 4px;
      }

      .label {
        font-size: 14px;
        line-height: 20px;
        color: inherit;
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
        border: 1.5px solid #727999;
        background: #ffffff;
        cursor: inherit;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
        border-width: 1px;
        border-radius: 2px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        width: 14px;
        height: 14px;
        border-radius: 4px;
      }

      input:hover:not(:disabled):not(:checked) {
        border-color: #0d6dfd;
      }

      input:checked {
        background: #0d6dfd;
        border-color: #0d6dfd;
      }

      input:checked:hover:not(:disabled) {
        background: #2f82fd;
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled) {
        background: #051335;
        border-color: #051335;
      }

      input:checked::after {
        content: '';
        border-left: 1.5px solid #ffffff;
        border-bottom: 1.5px solid #ffffff;
        transform: rotate(-45deg);
      }

      :host([size='small']) input:checked::after {
        width: 3px;
        height: 1.5px;
        margin-top: -1px;
      }

      :host([size='medium']) input:checked::after,
      :host(:not([size])) input:checked::after {
        width: 5px;
        height: 2.5px;
        margin-top: -1px;
      }

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
      }

      input:checked:disabled {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      input:checked:disabled::after {
        border-color: #d6d8e1;
      }

      input:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      :host([indeterminate]) input {
        background: #0d6dfd;
        border-color: #0d6dfd;
      }

      :host([indeterminate]) input::after {
        content: '';
        width: 6px;
        height: 1.5px;
        background: #ffffff;
        border: 0;
        transform: none;
        margin: 0;
      }
    `,
  ]

  @property({ reflect: true }) size: DreCheckboxSize = 'medium'
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) indeterminate = false
  @property({ reflect: true }) helper = ''
  @property() name = ''
  @property() value = 'on'

  #onChange(e: Event) {
    const input = e.target as HTMLInputElement
    this.checked = input.checked
    this.indeterminate = false
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override updated() {
    const input = this.renderRoot.querySelector('input')
    if (input) input.indeterminate = this.indeterminate
  }

  override render() {
    return html`
      <label>
        <span class="control">
          <input
            type="checkbox"
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
    'dre-checkbox': DreCheckbox
  }
}
