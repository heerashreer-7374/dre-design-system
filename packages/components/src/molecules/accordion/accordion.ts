import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

/**
 * DRE Accordion — Figma (`12502:11281`).
 * Header hug 14px · gap 10 · Expanded items `#f7f7f9` stroke `#e6e8ed` radius 6.
 */
@customElement('dre-accordion')
export class DreAccordion extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        max-width: 202px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 0;
        padding: 0;
        min-height: 14px;
        border: 0;
        background: transparent;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        text-align: start;
        cursor: pointer;
      }

      .header:hover {
        color: #0d6dfd;
      }

      .header:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      .lead {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .title {
        flex: 1;
        min-width: 0;
      }

      .chevron {
        display: inline-flex;
        color: #727999;
        line-height: 0;
        transition: transform 120ms ease;
      }

      :host([expanded]) .chevron {
        transform: rotate(180deg);
      }

      .panel {
        display: none;
        flex-direction: column;
        gap: 10px;
      }

      :host([expanded]) .panel {
        display: flex;
      }

      ::slotted(*) {
        display: block;
      }
    `,
  ]

  @property() title = 'Basics'
  @property({ type: Boolean, reflect: true }) expanded = false

  #toggle() {
    this.expanded = !this.expanded
    this.dispatchEvent(
      new CustomEvent('dre-toggle', {
        detail: { expanded: this.expanded },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    return html`
      <button
        class="header"
        type="button"
        part="header"
        aria-expanded=${this.expanded ? 'true' : 'false'}
        @click=${this.#toggle}
      >
        <span class="lead" part="lead"><slot name="lead"></slot></span>
        <span class="title">${this.title}</span>
        <span class="chevron" aria-hidden="true">
          <dre-icon name="chevron-down" size="14"></dre-icon>
        </span>
      </button>
      <div class="panel" part="panel"><slot></slot></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-accordion': DreAccordion
  }
}
