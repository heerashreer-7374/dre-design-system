import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreTooltipArrow =
  | 'none'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right'
export type DreTooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

/**
 * DRE Tooltip — Figma (`12055:2105`).
 * Body pad 12×8 · radius 4 · bg `#1b1b1e` · title 12px white · supporting `#e3e4e6`.
 */
@customElement('dre-tooltip')
export class DreTooltip extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        position: relative;
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .tip {
        position: absolute;
        z-index: 30;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 12px;
        border-radius: 4px;
        background: #1b1b1e;
        color: #ffffff;
        font-size: 12px;
        line-height: 14px;
        max-width: 311px;
        pointer-events: none;
        opacity: 0;
        white-space: normal;
        transition: opacity 120ms ease;
      }

      .tip::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        display: none;
      }

      :host([arrow]:not([arrow='none'])) .tip::after {
        display: block;
      }

      .title {
        color: #ffffff;
      }

      .support {
        color: #e3e4e6;
        white-space: normal;
      }

      :host(:hover) .tip,
      :host(:focus-within) .tip,
      :host([open]) .tip {
        opacity: 1;
      }

      /* Placement via arrow / placement */
      :host([arrow='top-center']) .tip,
      :host([arrow='top-left']) .tip,
      :host([arrow='top-right']) .tip,
      :host([placement='bottom']) .tip,
      :host(:not([placement]):not([arrow])) .tip,
      :host([arrow='none']) .tip {
        top: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
      }

      :host([arrow='bottom-center']) .tip,
      :host([arrow='bottom-left']) .tip,
      :host([arrow='bottom-right']) .tip,
      :host([placement='top']) .tip {
        bottom: calc(100% + 6px);
        top: auto;
        left: 50%;
        transform: translateX(-50%);
      }

      :host([placement='left']) .tip {
        right: calc(100% + 6px);
        left: auto;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([placement='right']) .tip {
        left: calc(100% + 6px);
        top: 50%;
        transform: translateY(-50%);
      }

      :host([arrow='top-left']) .tip,
      :host([arrow='bottom-left']) .tip {
        left: 0;
        transform: none;
      }

      :host([arrow='top-right']) .tip,
      :host([arrow='bottom-right']) .tip {
        left: auto;
        right: 0;
        transform: none;
      }

      /* Arrow pointing up (tooltip below) */
      :host([arrow^='top']) .tip::after {
        bottom: 100%;
        border-bottom-color: #1b1b1e;
        border-top-width: 0;
      }

      :host([arrow='top-center']) .tip::after {
        left: 50%;
        transform: translateX(-50%);
      }
      :host([arrow='top-left']) .tip::after {
        left: 12px;
      }
      :host([arrow='top-right']) .tip::after {
        right: 12px;
      }

      /* Arrow pointing down (tooltip above) */
      :host([arrow^='bottom']) .tip::after {
        top: 100%;
        border-top-color: #1b1b1e;
        border-bottom-width: 0;
      }

      :host([arrow='bottom-center']) .tip::after {
        left: 50%;
        transform: translateX(-50%);
      }
      :host([arrow='bottom-left']) .tip::after {
        left: 12px;
      }
      :host([arrow='bottom-right']) .tip::after {
        right: 12px;
      }
    `,
  ]

  @property() content = ''
  @property({ attribute: 'supporting-text' }) supportingText = ''
  @property({ reflect: true }) arrow: DreTooltipArrow = 'none'
  @property({ reflect: true }) placement: DreTooltipPlacement = 'bottom'
  @property({ type: Boolean, reflect: true }) open = false

  override render() {
    return html`
      <slot></slot>
      <span class="tip" part="tip" role="tooltip">
        <span class="title">${this.content}<slot name="content"></slot></span>
        ${this.supportingText
          ? html`<span class="support">${this.supportingText}</span>`
          : html`<slot name="supporting"></slot>`}
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-tooltip': DreTooltip
  }
}
