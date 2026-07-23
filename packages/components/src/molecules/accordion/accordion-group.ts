import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import './accordion.js'

/**
 * DRE Accordion Group — Figma Accordion/Panel composition (`12502:11657`).
 * Width 202 · gap 11 · optional dividers `#f3f3f6` · exclusive expand.
 */
@customElement('dre-accordion-group')
export class DreAccordionGroup extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 202px;
        max-width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .group {
        display: flex;
        flex-direction: column;
        gap: 11px;
      }

      :host([divided]) .group {
        gap: 0;
      }

      :host([divided]) ::slotted(dre-accordion) {
        padding-block: 10px 0;
      }

      :host([divided]) ::slotted(dre-accordion:not(:last-child)) {
        border-bottom: 1px solid #f3f3f6;
        padding-bottom: 10px;
        margin-bottom: 0;
      }

      ::slotted(dre-accordion) {
        max-width: 100%;
      }
    `,
  ]

  /** When true, only one accordion may be expanded at a time. */
  @property({ type: Boolean, reflect: true }) exclusive = true
  /** Figma Accordion/Panel — show `#f3f3f6` dividers between sections. */
  @property({ type: Boolean, reflect: true }) divided = false

  #onToggle(e: Event) {
    if (!this.exclusive) return
    const target = e.target as HTMLElement & { expanded?: boolean }
    if (!target || target.tagName !== 'DRE-ACCORDION') return
    if (!target.expanded) return
    for (const child of this.querySelectorAll('dre-accordion')) {
      if (child !== target) (child as HTMLElement & { expanded: boolean }).expanded = false
    }
  }

  override render() {
    return html`<div class="group" part="group" @dre-toggle=${this.#onToggle}><slot></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-accordion-group': DreAccordionGroup
  }
}
