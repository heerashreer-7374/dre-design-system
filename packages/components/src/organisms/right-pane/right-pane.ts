import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

/**
 * DRE Right Pane — Figma (`12726:50864`) / App Layout Composition.
 * Width 280 · header h44 pad 16×12 · title 14/`#13141a`.
 */
@customElement('dre-right-pane')
export class DreRightPane extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 280px;
        height: 100%;
        min-height: 0;
        background: #ffffff;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 44px;
        min-height: 44px;
        padding: 12px 16px;
        border-bottom: 1px solid #f3f3f6;
        box-sizing: border-box;
      }

      .lead {
        display: inline-flex;
        color: #13141a;
        line-height: 0;
      }

      .title {
        flex: 1;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #13141a;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .actions {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .icon-btn {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .icon-btn:hover {
        color: #13141a;
      }

      .body {
        flex: 1;
        overflow: auto;
        display: flex;
        flex-direction: column;
        min-height: 0;
      }

      .footer {
        border-top: 1px solid #e6e8ed;
      }

      .footer:empty {
        display: none;
      }
    `,
  ]

  @property() title = 'Fields'
  @property({ type: Boolean, reflect: true }) closable = true

  #close() {
    this.dispatchEvent(new CustomEvent('dre-close', { bubbles: true, composed: true }))
  }

  override render() {
    return html`
      <header class="header" part="header">
        <span class="lead" part="lead">
          <slot name="lead"><dre-icon name="function-square" size="20"></dre-icon></slot>
        </span>
        <h2 class="title">${this.title}</h2>
        <div class="actions">
          <slot name="actions">
            <button class="icon-btn" type="button" aria-label="More">
              <dre-icon name="more" size="16"></dre-icon>
            </button>
          </slot>
          ${this.closable
            ? html`
                <button class="icon-btn" type="button" aria-label="Close" @click=${this.#close}>
                  <dre-icon name="pane-close" size="16"></dre-icon>
                </button>
              `
            : null}
        </div>
      </header>
      <div class="body" part="body"><slot></slot></div>
      <footer class="footer" part="footer"><slot name="footer"></slot></footer>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-right-pane': DreRightPane
  }
}
