import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreToggleSize = 'small' | 'medium'

/**
 * DRE Toggle — Figma Toggle (`10070:229`).
 * Small 26×18 (knob 14) · Medium 32×22 (knob 18) · On `#0d6dfd` · Off `#bdc0cf`.
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

      :host([disabled]) {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
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

      button {
        border: 0;
        border-radius: 12px;
        background: #bdc0cf;
        padding: 2px;
        cursor: inherit;
        transition: background-color 120ms ease;
        display: flex;
        align-items: center;
        flex: 0 0 auto;
      }

      :host([size='small']) button {
        width: 26px;
        height: 18px;
      }

      :host([size='medium']) button,
      :host(:not([size])) button {
        width: 32px;
        height: 22px;
      }

      button[aria-checked='true'] {
        background: #0d6dfd;
      }

      button:hover:not(:disabled)[aria-checked='false'] {
        background: #adb5c7;
      }

      button:hover:not(:disabled)[aria-checked='true'] {
        background: #2f82fd;
      }

      button:disabled {
        background: #f3f3f6;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      .knob {
        display: block;
        border-radius: 9999px;
        background: #ffffff;
        transition: transform 120ms ease;
        box-shadow: 0 1px 2px rgb(0 0 0 / 12%);
      }

      :host([size='small']) .knob {
        width: 14px;
        height: 14px;
      }

      :host([size='medium']) .knob,
      :host(:not([size])) .knob {
        width: 18px;
        height: 18px;
      }

      /* travel = track - pad*2 - knob */
      :host([size='small']) button[aria-checked='true'] .knob {
        transform: translateX(8px);
      }

      :host([size='medium']) button[aria-checked='true'] .knob,
      :host(:not([size])) button[aria-checked='true'] .knob {
        transform: translateX(10px);
      }
    `,
  ]

  @property({ reflect: true }) size: DreToggleSize = 'medium'
  @property({ type: Boolean, reflect: true }) checked = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property({ reflect: true }) helper = ''

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

  override render() {
    return html`
      <button
        type="button"
        role="switch"
        aria-checked=${this.checked ? 'true' : 'false'}
        ?disabled=${this.disabled}
        @click=${this.#toggle}
      >
        <span class="knob"></span>
      </button>
      <span class="text">
        <span class="label"><slot></slot></span>
        ${this.helper ? html`<span class="helper">${this.helper}</span>` : null}
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-toggle': DreToggle
  }
}
