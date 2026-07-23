import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'
import './accordion.js'

/**
 * DRE Accordion/Panel — Figma (`12502:11657`).
 * Actions-style panel: title + icon, divider, divided accordion stack.
 *
 * @slot - `dre-accordion` children
 * @slot header-icon - Trailing header icon
 */
@customElement('dre-accordion-panel')
export class DreAccordionPanel extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 11px;
        width: 202px;
        max-width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-top: 10px;
        box-sizing: border-box;
      }

      .title {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        color: #383c4d;
      }

      .header-icon {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .divider {
        width: 100%;
        height: 1px;
        background: #f3f3f6;
      }

      .group {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: 100%;
      }

      ::slotted(dre-accordion) {
        max-width: 100%;
        padding-block: 10px 0;
      }

      ::slotted(dre-accordion:not(:last-child)) {
        border-bottom: 1px solid #f3f3f6;
        padding-bottom: 10px;
      }
    `,
  ]

  @property() title = 'Actions'
  @property({ attribute: 'header-icon' }) headerIcon = 'code-1'
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
    return html`
      <div class="panel-header" part="header">
        <p class="title" part="title">${this.title}</p>
        <span class="header-icon" part="header-icon">
          <slot name="header-icon">
            <dre-icon name=${this.headerIcon} size="18"></dre-icon>
          </slot>
        </span>
      </div>
      <div class="divider" part="divider" aria-hidden="true"></div>
      <div class="group" part="group" @dre-toggle=${this.#onToggle}>
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-accordion-panel': DreAccordionPanel
  }
}
