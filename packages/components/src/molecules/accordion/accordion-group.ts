import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import './accordion.js'

/**
 * DRE Accordion Group — Figma (`12502:12082`).
 * Width 202 · gap 11 · dividers `#f3f3f6` · Count 3/5/9 compositions.
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

      ::slotted(dre-accordion) {
        max-width: 100%;
      }

      /* Dividers between slotted accordions via adjacent sibling in light DOM —
         use ::slotted can't style between; inject via CSS on host children wrapper */
    `,
  ]

  /** When true, only one accordion may be expanded at a time. */
  @property({ type: Boolean, reflect: true }) exclusive = true

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
