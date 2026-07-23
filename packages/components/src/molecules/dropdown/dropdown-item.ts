import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

/**
 * DRE Dropdown list item — Figma (`10261:398`).
 * Height ~26 · radio/checkbox 10 · hover/selected `rgba(13,109,253,0.1)`.
 *
 * @fires dre-select - Fired when the item is activated
 */
@customElement('dre-dropdown-item')
export class DreDropdownItem extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([hidden]) {
        display: none !important;
      }

      button {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 0;
        padding: 6px 6px 6px 13px;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        text-align: start;
        cursor: pointer;
        box-sizing: border-box;
      }

      :host([control='radio']) button,
      :host([control='checkbox']) button {
        padding: 6px;
        gap: 6px;
      }

      button:hover:not(:disabled) {
        background: rgba(13, 109, 253, 0.1);
      }

      :host([selected]) button {
        background: rgba(13, 109, 253, 0.1);
      }

      button:disabled {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      button:disabled:hover {
        background: transparent;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: -2px;
      }

      .control {
        width: 10px;
        height: 10px;
        flex: 0 0 auto;
        border: 1px solid #727999;
        background: transparent;
        display: grid;
        place-content: center;
        box-sizing: border-box;
      }

      :host([control='checkbox']) .control {
        border-radius: 2px;
      }

      :host([control='radio']) .control {
        border-radius: 9999px;
      }

      :host([selected]) .control {
        border-color: #0d6dfd;
        background: #0d6dfd;
      }

      :host([control='checkbox'][selected]) .control::after {
        content: '';
        width: 5px;
        height: 3px;
        border-left: 1.5px solid #fff;
        border-bottom: 1.5px solid #fff;
        transform: rotate(-45deg) translate(0.5px, -0.5px);
      }

      :host([control='radio'][selected]) .control::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 9999px;
        background: #fff;
      }

      :host([disabled]) .control {
        border-color: #c5c9d8;
      }

      :host([disabled][selected]) .control {
        background: #c5c9d8;
        border-color: #c5c9d8;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        min-width: 0;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        min-width: 0;
      }

      .label {
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .meta {
        flex: 0 0 auto;
        color: #727999;
        white-space: nowrap;
      }

      .supporting {
        color: #8c92ac;
        font-size: 11px;
        line-height: normal;
      }

      .check {
        display: inline-flex;
        flex: 0 0 auto;
        color: #0d6dfd;
        line-height: 0;
      }

      :host([disabled]) .meta,
      :host([disabled]) .supporting {
        color: #9ca1b7;
      }
    `,
  ]

  @property() label = 'List item'
  @property({ attribute: 'supporting-text' }) supportingText = ''
  /** Right-aligned secondary text (Input Dropdown menu “Sample”). */
  @property() meta = ''
  @property({ reflect: true }) control: 'none' | 'checkbox' | 'radio' = 'none'
  @property({ type: Boolean, reflect: true }) selected = false
  @property({ type: Boolean, reflect: true }) disabled = false
  /** Show trailing check when selected (Input Dropdown single-select). */
  @property({ type: Boolean, attribute: 'show-check' }) showCheck = false
  @property() value = ''

  #onClick() {
    if (this.disabled) return
    const next = this.control === 'none' ? true : !this.selected
    this.dispatchEvent(
      new CustomEvent('dre-select', {
        detail: { value: this.value || this.label, selected: next, label: this.label },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    const showTrailingCheck = this.showCheck && this.selected && this.control === 'none'
    return html`
      <button
        type="button"
        part="item"
        role="option"
        aria-selected=${this.selected ? 'true' : 'false'}
        ?disabled=${this.disabled}
        @click=${this.#onClick}
      >
        ${this.control !== 'none' ? html`<span class="control" aria-hidden="true"></span>` : nothing}
        <span class="body">
          <span class="row">
            <span class="label" part="label"><slot>${this.label}</slot></span>
            ${this.meta ? html`<span class="meta" part="meta">${this.meta}</span>` : nothing}
            ${showTrailingCheck
              ? html`<span class="check" aria-hidden="true"><dre-icon name="check" size="14"></dre-icon></span>`
              : nothing}
          </span>
          ${this.supportingText
            ? html`<span class="supporting" part="supporting">${this.supportingText}</span>`
            : html`<slot name="supporting"></slot>`}
        </span>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-dropdown-item': DreDropdownItem
  }
}
