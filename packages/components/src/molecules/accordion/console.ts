import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import './console-row.js'

/**
 * DRE Accordion/Console — Figma (`12510:12551`).
 * Stacked console rows on `#f3f3f6` surface.
 *
 * @slot - `dre-console-row` children
 */
@customElement('dre-console')
export class DreConsole extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        max-width: 900px;
        background: #f3f3f6;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .surface {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #fff;
      }

      ::slotted(dre-console-row) {
        display: block;
      }
    `,
  ]

  override render() {
    return html`<div class="surface" part="surface"><slot></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-console': DreConsole
  }
}
