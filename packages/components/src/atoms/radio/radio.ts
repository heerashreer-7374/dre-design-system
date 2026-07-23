import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreRadioSize = 'small' | 'medium'
export type DreRadioAppearance = 'light' | 'dark'

/**
 * DRE Radio — Figma ⭐ Radio Button (`10151:1001` / Radio Box `10151:1002`).
 * Medium hit 34 · ring 14 · dot 6 · Small hit 20 · ring 8 · dot 4.
 * Border `#727999` · hover/selected `#0d6dfd` · pressed ring `0 0 0 6px rgba(13,109,253,0.4)`.
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

      :host([appearance='dark']) {
        color: #e3e4e6;
      }

      :host([disabled]) {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      :host([appearance='dark'][disabled]) {
        color: #727999;
      }

      :host(:not([has-label]):not([helper])) .text {
        display: none;
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
        min-width: 0;
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

      :host([appearance='dark']) .helper {
        color: #9ca1b7;
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
        border: 1px solid #727999;
        border-radius: 9999px;
        background: transparent;
        cursor: inherit;
        box-sizing: border-box;
        transition:
          border-color 120ms ease,
          box-shadow 120ms ease,
          background-color 120ms ease;
      }

      :host([appearance='light']) input {
        background: #ffffff;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        width: 14px;
        height: 14px;
      }

      input:hover:not(:disabled):not(:checked) {
        border-color: #0d6dfd;
      }

      input:active:not(:disabled):not(:checked),
      :host([pressed]:not([disabled]):not([checked])) input {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 6px rgb(13 109 253 / 40%);
      }

      input:checked,
      :host([appearance='light']) input:checked,
      :host([appearance='dark']) input:checked {
        border-color: #0d6dfd;
        background: transparent;
      }

      :host([appearance='light']) input:checked {
        background: #ffffff;
      }

      input:checked:hover:not(:disabled),
      :host([appearance='light']) input:checked:hover:not(:disabled),
      :host([appearance='dark']) input:checked:hover:not(:disabled) {
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled),
      :host([appearance='light']) input:checked:active:not(:disabled),
      :host([appearance='dark']) input:checked:active:not(:disabled),
      :host([pressed][checked]:not([disabled])) input {
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

      input:checked:hover:not(:disabled)::after,
      :host([appearance='light']) input:checked:hover:not(:disabled)::after,
      :host([appearance='dark']) input:checked:hover:not(:disabled)::after {
        background: #2f82fd;
      }

      input:checked:active:not(:disabled)::after,
      :host([appearance='light']) input:checked:active:not(:disabled)::after,
      :host([appearance='dark']) input:checked:active:not(:disabled)::after,
      :host([pressed][checked]:not([disabled])) input:checked::after,
      :host([appearance='light'][pressed][checked]:not([disabled])) input:checked::after,
      :host([appearance='dark'][pressed][checked]:not([disabled])) input:checked::after {
        background: #051335;
      }

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
        box-shadow: none;
      }

      :host([appearance='dark']) input:disabled {
        border-color: #3a3a40;
        background: transparent;
      }

      input:checked:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
      }

      :host([appearance='dark']) input:checked:disabled {
        border-color: #3a3a40;
        background: transparent;
      }

      input:checked:disabled::after {
        background: #d6d8e1;
      }

      :host([appearance='dark']) input:checked:disabled::after {
        background: #727999;
      }

      input:focus {
        outline: none;
      }

      input:focus-visible {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 6px rgb(13 109 253 / 40%);
      }
    `,
  ]

  @property({ reflect: true }) size: DreRadioSize = 'medium'
  @property({ reflect: true }) appearance: DreRadioAppearance = 'light'
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  /** Force pressed appearance for Storybook demos. */
  @property({ type: Boolean, reflect: true }) pressed = false
  @property({ reflect: true }) helper = ''
  @property() name = ''
  @property() value = ''
  /** Accessible name when no visible label is slotted (avoids host aria-label). */
  @property({ attribute: 'accessible-label' }) accessibleLabel = ''
  @state() private hasLabel = false

  #labelId = `dre-radio-label-${Math.random().toString(36).slice(2, 9)}`

  #onSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement
    this.hasLabel = slot.assignedNodes({ flatten: true }).some((n) => {
      if (n.nodeType === Node.TEXT_NODE) return Boolean(n.textContent?.trim())
      if (n.nodeType === Node.ELEMENT_NODE) return true
      return false
    })
    if (this.hasLabel) this.setAttribute('has-label', '')
    else this.removeAttribute('has-label')
  }

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
    const name = this.accessibleLabel.trim() || 'Radio'
    return html`
      <label>
        <span class="control">
          <input
            type="radio"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            aria-labelledby=${this.hasLabel ? this.#labelId : nothing}
            aria-label=${this.hasLabel ? nothing : name}
            @change=${this.#onChange}
          />
        </span>
        <span class="text">
          <span class="label" id=${this.#labelId}
            ><slot @slotchange=${this.#onSlotChange}></slot
          ></span>
          ${this.helper ? html`<span class="helper">${this.helper}</span>` : nothing}
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
