import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreCheckboxSize = 'small' | 'medium'
export type DreCheckboxAppearance = 'light' | 'dark'

/**
 * DRE Checkbox — Figma ⭐ Checkbox (`10036:1134` / `10048:396`).
 * Medium hit 34 · box 14 r4 · Small hit 20 · box 8 r2.
 * Border `#727999` · hover/pressed `#0d6dfd` · selected fill `#0d6dfd`.
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
        background: transparent;
        cursor: inherit;
        box-sizing: border-box;
        transition:
          background-color 120ms ease,
          border-color 120ms ease,
          box-shadow 120ms ease;
      }

      :host([appearance='light']) input {
        background: #ffffff;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
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

      input:active:not(:disabled):not(:checked),
      :host([pressed]:not([disabled]):not([checked]):not([indeterminate])) input {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 8px rgb(13 109 253 / 10%);
      }

      input:checked,
      :host([appearance='light']) input:checked,
      :host([appearance='dark']) input:checked,
      :host([indeterminate]) input,
      :host([appearance='light'][indeterminate]) input,
      :host([appearance='dark'][indeterminate]) input {
        background: #0d6dfd;
        border-color: #0d6dfd;
      }

      input:checked:hover:not(:disabled),
      :host([appearance='light']) input:checked:hover:not(:disabled),
      :host([appearance='dark']) input:checked:hover:not(:disabled),
      :host([indeterminate]) input:hover:not(:disabled) {
        background: #2f82fd;
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled),
      :host([appearance='light']) input:checked:active:not(:disabled),
      :host([appearance='dark']) input:checked:active:not(:disabled),
      :host([indeterminate]) input:active:not(:disabled),
      :host([pressed][checked]:not([disabled])) input,
      :host([pressed][indeterminate]:not([disabled])) input {
        background: #051335;
        border-color: #051335;
        box-shadow: 0 0 0 8px rgb(13 109 253 / 10%);
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

      :host([indeterminate]) input::after {
        content: '';
        width: 6px;
        height: 1.5px;
        background: #ffffff;
        border: 0;
        transform: none;
        margin: 0;
      }

      :host([size='small'][indeterminate]) input::after {
        width: 4px;
        height: 1px;
      }

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
        box-shadow: none;
      }

      :host([appearance='dark']) input:disabled {
        border-color: #3a3a40;
        background: #2a2a2e;
      }

      input:checked:disabled,
      :host([indeterminate][disabled]) input {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      :host([appearance='dark']) input:checked:disabled,
      :host([appearance='dark'][indeterminate][disabled]) input {
        background: #2a2a2e;
        border-color: #3a3a40;
      }

      input:checked:disabled::after,
      :host([indeterminate][disabled]) input::after {
        border-color: #d6d8e1;
        background: #d6d8e1;
      }

      input:focus {
        outline: none;
      }

      input:focus-visible {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 8px rgb(13 109 253 / 10%);
      }
    `,
  ]

  @property({ reflect: true }) size: DreCheckboxSize = 'medium'
  @property({ reflect: true }) appearance: DreCheckboxAppearance = 'light'
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ type: Boolean, reflect: true }) indeterminate = false
  /** Force pressed appearance for Storybook demos. */
  @property({ type: Boolean, reflect: true }) pressed = false
  @property({ reflect: true }) helper = ''
  @property() name = ''
  @property() value = 'on'
  @property({ attribute: 'aria-label' }) override ariaLabel: string | null = null
  @state() private hasLabel = false

  #labelId = `dre-checkbox-label-${Math.random().toString(36).slice(2, 9)}`

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
    const name = this.ariaLabel?.trim() || 'Checkbox'
    return html`
      <label>
        <span class="control">
          <input
            type="checkbox"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            aria-labelledby=${this.hasLabel ? this.#labelId : nothing}
            aria-label=${this.hasLabel ? nothing : name}
            aria-checked=${this.indeterminate ? 'mixed' : nothing}
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
    'dre-checkbox': DreCheckbox
  }
}
