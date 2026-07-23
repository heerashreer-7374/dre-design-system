import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

let accordionId = 0

/**
 * DRE Accordion — Figma (`12502:7355` / `12502:11281`).
 * Header 12 Regular `#383c4d` · lead gap 6 · chevron 14 · Expanded gap 10 · width 183.
 */
@customElement('dre-accordion')
export class DreAccordion extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: 100%;
        max-width: 183px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([expanded]) {
        gap: 10px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        margin: 0;
        padding: 0;
        min-height: 14px;
        border: 0;
        background: transparent;
        color: #383c4d;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
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

      .left {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        flex: 1;
      }

      .lead {
        display: inline-flex;
        flex: 0 0 auto;
        width: 14px;
        height: 14px;
        color: #727999;
        line-height: 0;
        align-items: center;
        justify-content: center;
      }

      .title {
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .chevron {
        display: inline-flex;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
        transition: transform 150ms ease-out;
      }

      /* Accordion/Panel: collapsed ↓ · expanded ↑ (Console uses →/↓) */
      :host([expanded]) .chevron {
        transform: rotate(180deg);
      }

      .panel {
        display: none;
        flex-direction: column;
        gap: 10px;
        width: 100%;
      }

      :host([expanded]) .panel {
        display: flex;
      }
    `,
  ]

  @property() title = 'Basics'
  @property({ type: Boolean, reflect: true }) expanded = false

  #uid = ++accordionId
  #headerId = `dre-accordion-header-${this.#uid}`
  #panelId = `dre-accordion-panel-${this.#uid}`

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
        id=${this.#headerId}
        class="header"
        type="button"
        part="header"
        aria-expanded=${this.expanded ? 'true' : 'false'}
        aria-controls=${this.#panelId}
        @click=${this.#toggle}
      >
        <span class="left">
          <span class="lead" part="lead">
            <slot name="lead"><dre-icon name="code-1" size="14"></dre-icon></slot>
          </span>
          <span class="title">${this.title}</span>
        </span>
        <span class="chevron" aria-hidden="true">
          <dre-icon name="chevron-down" size="14"></dre-icon>
        </span>
      </button>
      <div
        id=${this.#panelId}
        class="panel"
        part="panel"
        role="region"
        aria-labelledby=${this.#headerId}
      >
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-accordion': DreAccordion
  }
}
