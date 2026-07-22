import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

/**
 * DRE Popover — Figma Single Field (`10167:770`).
 * Width 500 · radius 4 · pad 10 · bg white · dividers `#e6e8ed`.
 */
@customElement('dre-popover')
export class DrePopover extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        position: relative;
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .panel {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        z-index: 25;
        display: none;
        width: 500px;
        max-width: min(500px, calc(100vw - 24px));
        padding: 10px 0;
        border-radius: 4px;
        background: #ffffff;
        box-shadow: 0 8px 24px rgb(19 20 26 / 16%);
        flex-direction: column;
        gap: 10px;
      }

      :host([open]) .panel {
        display: flex;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 15px;
        min-height: 20px;
      }

      .title {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
        color: #13141a;
      }

      .divider {
        height: 0;
        border: 0;
        border-top: 1px solid #e6e8ed;
        margin: 0;
      }

      .body {
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #5d6481;
        font-size: 14px;
      }

      .slot-box {
        border: 1px dashed #adb5c7;
        background: #f5f5fa;
        border-radius: 4px;
        min-height: 97px;
        padding: 12px;
        box-sizing: border-box;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding: 0 15px;
        min-height: 26px;
        align-items: center;
      }

      .footer:empty {
        display: none;
      }

      .close {
        border: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        padding: 0;
        line-height: 0;
      }
    `,
  ]

  @property({ type: Boolean, reflect: true }) open = false
  @property() heading = ''

  #toggle() {
    this.open = !this.open
  }

  #onDocClick = (e: MouseEvent) => {
    if (!this.open) return
    if (!e.composedPath().includes(this)) this.open = false
  }

  override connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this.#onDocClick)
  }

  override disconnectedCallback() {
    document.removeEventListener('click', this.#onDocClick)
    super.disconnectedCallback()
  }

  override render() {
    return html`
      <span @click=${this.#toggle}><slot name="trigger"></slot></span>
      <div class="panel" part="panel" role="dialog">
        ${this.heading
          ? html`
              <div class="header">
                <span class="lead"><slot name="icon"></slot></span>
                <div class="title">${this.heading}</div>
                <button
                  class="close"
                  type="button"
                  aria-label="Close"
                  @click=${() => (this.open = false)}
                >
                  <dre-icon name="x" size="12"></dre-icon>
                </button>
              </div>
              <hr class="divider" />
            `
          : null}
        <div class="body">
          <slot>
            <div class="slot-box">Body content</div>
          </slot>
        </div>
        <hr class="divider" />
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-popover': DrePopover
  }
}
