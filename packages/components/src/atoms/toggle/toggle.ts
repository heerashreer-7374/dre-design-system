import { LitElement, css, html, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../icon/icon.js'

export type DreToggleSize = 'small' | 'medium'
export type DreToggleAppearance = 'light' | 'dark'

/**
 * DRE Toggle — Figma ⭐ Toggle (`10068:197` / `10070:229`).
 * Medium 32×22 (knob 18) · Small 26×18 (knob 14) · On `#0d6dfd` · Off `#bdc0cf` / dark `#46494f`.
 * Icon variant: check (on) · x (off). Focus ring `#0d6dfd` @ 10% opacity, 2px spread.
 */
@customElement('dre-toggle')
export class DreToggle extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        font-size: 14px;
        color: #212121;
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

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      :host([helper]) .text {
        padding-top: 3px;
      }

      .label {
        font-size: 14px;
        line-height: 16px;
      }

      :host([size='small']) .label {
        font-size: 12px;
        line-height: 14px;
      }

      .helper {
        font-size: 12px;
        line-height: 14px;
        color: #737373;
      }

      :host([appearance='dark']) .helper {
        color: #9ca1b7;
      }

      button {
        position: relative;
        border: 0;
        border-radius: 12px;
        background: #bdc0cf;
        padding: 2px;
        margin: 0;
        cursor: inherit;
        transition:
          background-color 120ms ease,
          box-shadow 120ms ease;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        box-sizing: border-box;
      }

      :host([appearance='dark']) button {
        background: #46494f;
      }

      :host([size='small']) button {
        width: 26px;
        height: 18px;
        border-radius: 11px;
      }

      :host([size='medium']) button,
      :host(:not([size])) button {
        width: 32px;
        height: 22px;
      }

      button[aria-checked='true'],
      :host([appearance='dark']) button[aria-checked='true'] {
        background: #0d6dfd;
      }

      button:hover:not(:disabled)[aria-checked='false'] {
        background: #adb5c7;
      }

      :host([appearance='dark']) button:hover:not(:disabled)[aria-checked='false'] {
        background: #5a5d64;
      }

      button:hover:not(:disabled)[aria-checked='true'],
      :host([appearance='dark']) button:hover:not(:disabled)[aria-checked='true'] {
        background: #2f82fd;
      }

      button:active:not(:disabled)[aria-checked='true'],
      :host([pressed]:not([disabled])) button[aria-checked='true'],
      :host([appearance='dark']) button:active:not(:disabled)[aria-checked='true'],
      :host([appearance='dark'][pressed]:not([disabled])) button[aria-checked='true'] {
        background: #024cbc;
      }

      button:active:not(:disabled)[aria-checked='false'],
      :host([pressed]:not([disabled])) button[aria-checked='false'] {
        background: #9ca1b7;
      }

      :host([appearance='dark']) button:active:not(:disabled)[aria-checked='false'],
      :host([appearance='dark'][pressed]:not([disabled])) button[aria-checked='false'] {
        background: #3a3d44;
      }

      button:disabled,
      button:disabled[aria-checked='true'] {
        background: #f3f3f6;
      }

      :host([appearance='dark']) button:disabled,
      :host([appearance='dark']) button:disabled[aria-checked='true'] {
        background: #2a2a2e;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        box-shadow: 0 0 0 2px rgb(13 109 253 / 10%);
      }

      .knob {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background: #ffffff;
        transition: transform 120ms ease;
        box-shadow:
          0 1px 3px rgb(10 13 18 / 10%),
          0 1px 2px rgb(10 13 18 / 6%);
        color: #383c4d;
        line-height: 0;
        flex: 0 0 auto;
      }

      .knob dre-icon {
        color: #383c4d;
      }

      :host([disabled]) .knob,
      :host([disabled]) .knob dre-icon {
        color: #9ca1b7;
      }

      :host([size='small']) .knob {
        width: 14px;
        height: 14px;
        border-radius: 7px;
      }

      :host([size='medium']) .knob,
      :host(:not([size])) .knob {
        width: 18px;
        height: 18px;
        border-radius: 9px;
      }

      /* travel = track − pad×2 − knob */
      :host([size='small']) button[aria-checked='true'] .knob {
        transform: translateX(8px);
      }

      :host([size='medium']) button[aria-checked='true'] .knob,
      :host(:not([size])) button[aria-checked='true'] .knob {
        transform: translateX(10px);
      }

      .knob-icon {
        display: inline-flex;
        line-height: 0;
      }
    `,
  ]

  @property({ reflect: true }) size: DreToggleSize = 'medium'
  @property({ reflect: true }) appearance: DreToggleAppearance = 'light'
  /** Show check/x inside the knob (Figma Icon=True). */
  @property({ type: Boolean, reflect: true }) icon = false
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  /** Force pressed (mousedown) appearance for Storybook demos. */
  @property({ type: Boolean, reflect: true }) pressed = false
  @property({ reflect: true }) helper = ''
  /** Accessible name when no slotted label is provided. */
  @property({ attribute: 'aria-label' }) override ariaLabel: string | null = null
  @state() private hasLabel = false

  #labelId = `dre-toggle-label-${Math.random().toString(36).slice(2, 9)}`

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

  #toggle() {
    if (this.disabled) return
    this.checked = !this.checked
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #iconName() {
    return this.checked ? 'check' : 'x'
  }

  #iconSize() {
    return this.size === 'small' ? 10 : 12
  }

  override render() {
    const name = this.ariaLabel?.trim() || 'Toggle'
    return html`
      <button
        type="button"
        role="switch"
        aria-checked=${this.checked ? 'true' : 'false'}
        aria-labelledby=${this.hasLabel ? this.#labelId : nothing}
        aria-label=${this.hasLabel ? nothing : name}
        ?disabled=${this.disabled}
        @click=${this.#toggle}
      >
        <span class="knob" part="knob">
          ${this.icon
            ? html`
                <span class="knob-icon" part="icon">
                  <dre-icon name=${this.#iconName()} size=${this.#iconSize()}></dre-icon>
                </span>
              `
            : nothing}
        </span>
      </button>
      <span class="text">
        <span class="label" id=${this.#labelId}
          ><slot @slotchange=${this.#onSlotChange}></slot
        ></span>
        ${this.helper ? html`<span class="helper">${this.helper}</span>` : nothing}
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-toggle': DreToggle
  }
}
