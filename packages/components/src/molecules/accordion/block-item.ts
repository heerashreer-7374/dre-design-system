import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

/**
 * DRE Accordion block item — Figma (`12464:180`).
 * Pad 6 · dashed `#e6e8ed` · bg `#f7f7f9` · radius 6 · icon circle 34.
 */
@customElement('dre-block-item')
export class DreBlockItem extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .item {
        display: flex;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        width: 100%;
        padding: 6px;
        border-radius: 6px;
        border: 1px dashed #e6e8ed;
        background: #f7f7f9;
      }

      .icon {
        flex: 0 0 auto;
        width: 34px;
        height: 34px;
        border-radius: 23px;
        background: #e6e8ed;
        color: #727999;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .copy {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .label {
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #383c4d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .desc {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: #8c92ac;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
  ]

  @property() label = ''
  @property() description = ''
  @property() icon = 'cioption'

  override render() {
    return html`
      <div class="item" part="item">
        <span class="icon" part="icon">
          <slot name="icon"><dre-icon name=${this.icon} size="14"></dre-icon></slot>
        </span>
        <span class="copy" part="copy">
          <span class="label" part="label"><slot>${this.label}</slot></span>
          ${this.description
            ? html`<span class="desc" part="description">${this.description}</span>`
            : html`<slot name="description"></slot>`}
        </span>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-block-item': DreBlockItem
  }
}
