import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/button/button.js'
import '../../atoms/icon/icon.js'

/**
 * DRE Modal — Figma Basic Dialog (`12306:9560`).
 * Width 428 · radius 8 · pad 12 · gap 10 · divider `#e6e8ed`.
 */
@customElement('dre-modal')
export class DreModal extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: contents;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      dialog {
        border: 0;
        padding: 12px;
        border-radius: 8px;
        background: #ffffff;
        color: #13141a;
        box-shadow: 0 8px 32px rgb(19 20 26 / 18%);
        width: min(428px, calc(100vw - 32px));
        max-height: calc(100vh - 48px);
      }

      dialog::backdrop {
        background: rgb(19 20 26 / 45%);
      }

      .panel {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 20px;
      }

      h2 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #13141a;
      }

      .divider {
        height: 0;
        border: 0;
        border-top: 1px solid #e6e8ed;
        margin: 0;
      }

      .body {
        font-size: 14px;
        line-height: 20px;
        color: #5d6481;
      }

      footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding-top: 4px;
      }

      .close {
        border: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        padding: 0;
        width: 16px;
        height: 16px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .close:hover {
        color: #383c4d;
      }
    `,
  ]

  @property({ type: Boolean, reflect: true }) open = false
  @property() heading = 'Dialog'

  override updated(changed: Map<string, unknown>) {
    if (changed.has('open')) {
      const dialog = this.renderRoot.querySelector('dialog')
      if (!dialog) return
      if (this.open && !dialog.open) dialog.showModal()
      if (!this.open && dialog.open) dialog.close()
    }
  }

  #close() {
    this.open = false
    this.dispatchEvent(new CustomEvent('dre-close', { bubbles: true, composed: true }))
  }

  override render() {
    return html`
      <dialog @close=${this.#close}>
        <div class="panel" part="panel">
          <header>
            <h2>${this.heading}</h2>
            <button class="close" type="button" aria-label="Close" @click=${this.#close}>
              <dre-icon name="x" size="12"></dre-icon>
            </button>
          </header>
          <hr class="divider" />
          <div class="body"><slot></slot></div>
          <footer>
            <slot name="footer">
              <dre-button hierarchy="secondary" @dre-click=${this.#close}>Cancel</dre-button>
              <dre-button hierarchy="primary">Confirm</dre-button>
            </slot>
          </footer>
        </div>
      </dialog>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-modal': DreModal
  }
}
