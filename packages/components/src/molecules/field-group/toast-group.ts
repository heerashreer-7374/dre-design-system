import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

/**
 * Toast Group — Figma (`12385:13230`).
 * Width 357 · pad 16 · gap 8 · Position Top-Right / Bottom-Right.
 */
@customElement('dre-toast-group')
export class DreToastGroup extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
        width: 357px;
        max-width: 100%;
        box-sizing: border-box;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .stack {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      :host([position='bottom-right']) .stack {
        flex-direction: column-reverse;
      }
    `,
  ]

  @property({ reflect: true }) position: 'top-right' | 'bottom-right' = 'top-right'

  override render() {
    return html`<div class="stack" part="stack" role="region" aria-label="Notifications"><slot></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-toast-group': DreToastGroup
  }
}
