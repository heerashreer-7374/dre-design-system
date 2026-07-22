import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

/**
 * DRE Dropdown list item — maps to Figma `_Dropdown list item` (`10261:398`).
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
      }

      button {
        display: flex;
        align-items: flex-start;
        gap: var(--dre-spacer-8);
        width: 100%;
        margin: 0;
        padding: var(--dre-spacer-6) var(--dre-spacer-10);
        border: 0;
        border-radius: var(--dre-radius-small);
        background: transparent;
        color: var(--dre-color-text-default);
        font: inherit;
        font-size: var(--dre-typography-body3-font-size, 12px);
        text-align: start;
        cursor: pointer;
      }

      button:hover:not(:disabled) {
        background: var(--dre-color-background-neutral-hovered);
      }

      button:active:not(:disabled),
      :host([selected]) button {
        background: var(--dre-color-background-selected);
      }

      button:disabled {
        color: var(--dre-color-text-disabled);
        cursor: not-allowed;
      }

      button:focus-visible {
        outline: 2px solid var(--dre-color-border-focus-ring);
        outline-offset: -2px;
      }

      .control {
        width: 14px;
        height: 14px;
        margin-top: 1px;
        flex: 0 0 auto;
        border: 1.5px solid var(--dre-color-border-control-default);
        background: var(--dre-color-action-control-unchecked);
        display: grid;
        place-content: center;
      }

      :host([control='checkbox']) .control {
        border-radius: var(--dre-radius-xsmall);
      }

      :host([control='radio']) .control {
        border-radius: var(--dre-radius-full);
      }

      :host([selected]) .control {
        border-color: var(--dre-color-action-control-checked);
        background: var(--dre-color-action-control-checked);
      }

      :host([control='checkbox'][selected]) .control::after {
        content: '';
        width: 7px;
        height: 4px;
        border-left: 1.5px solid var(--dre-color-icon-on-bold);
        border-bottom: 1.5px solid var(--dre-color-icon-on-bold);
        transform: rotate(-45deg) translate(0.5px, -0.5px);
      }

      :host([control='radio'][selected]) .control::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: var(--dre-radius-full);
        background: var(--dre-color-icon-on-bold);
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .label {
        font-weight: var(--dre-font-weight-medium, 500);
        line-height: 1.3;
      }

      .supporting {
        color: var(--dre-color-text-subtle);
        font-size: var(--dre-typography-caption1-font-size, 10px);
      }
    `,
  ]

  @property() label = 'List item'
  @property({ attribute: 'supporting-text' }) supportingText = ''
  @property({ reflect: true }) control: 'none' | 'checkbox' | 'radio' = 'none'
  @property({ type: Boolean, reflect: true }) selected = false
  @property({ type: Boolean, reflect: true }) disabled = false
  @property() value = ''

  #onClick() {
    if (this.disabled) return
    this.dispatchEvent(
      new CustomEvent('dre-select', {
        detail: { value: this.value || this.label, selected: !this.selected },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    return html`
      <button type="button" role="option" aria-selected=${this.selected} ?disabled=${this.disabled} @click=${this.#onClick}>
        ${this.control !== 'none' ? html`<span class="control" aria-hidden="true"></span>` : null}
        <span class="text">
          <span class="label"><slot>${this.label}</slot></span>
          ${this.supportingText
            ? html`<span class="supporting">${this.supportingText}</span>`
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
