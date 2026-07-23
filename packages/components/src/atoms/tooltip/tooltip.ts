import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreTooltipAppearance = 'light' | 'dark'
export type DreTooltipArrow =
  | 'none'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right'
/** @deprecated prefer arrow */
export type DreTooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

/**
 * DRE Tooltip — Figma (`10320:14066` / `12055:2105`).
 * Appearance Light `#383c4d` / Dark `#1b1b1e` · pad 12×8 · radius 4 · Elevation/High · Arrow 7 positions · width hug / 311 with supporting text.
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
        align-items: stretch;
        width: max-content;
        max-width: 311px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms ease;
      }

      /* Figma: supporting-text body is fixed 311 · simple title hugs (~108 for default copy) */
      :host([has-supporting]) .tip {
        width: 311px;
        max-width: 311px;
      }

      :host(:hover) .tip,
      :host(:focus-within) .tip,
      :host([open]) .tip {
        opacity: 1;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        background: #383c4d;
        box-shadow:
          0 4px 6px -2px rgba(0, 0, 0, 0.08),
          0 8px 24px -4px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      :host([appearance='dark']) .body {
        background: #1b1b1e;
      }

      .title {
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #f3f3f6;
        white-space: nowrap;
      }

      :host([appearance='dark']) .title {
        color: #ffffff;
      }

      .support {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: #d6d8e1;
        white-space: normal;
        width: 100%;
      }

      :host([appearance='dark']) .support {
        color: #e3e4e6;
      }

      .arrow-row {
        display: flex;
        width: 100%;
        line-height: 0;
      }

      .arrow-row[data-side='bottom'] {
        margin-top: -2px;
      }

      .arrow-row[data-side='top'] {
        margin-bottom: -2px;
      }

      .arrow-row[data-align='left'] {
        justify-content: flex-start;
        padding-left: 16px;
      }

      .arrow-row[data-align='center'] {
        justify-content: center;
      }

      .arrow-row[data-align='right'] {
        justify-content: flex-end;
        padding-right: 16px;
      }

      .arrow {
        width: 12px;
        height: 8px;
        display: block;
        color: #383c4d;
      }

      :host([appearance='dark']) .arrow {
        color: #1b1b1e;
      }

      .arrow[data-point='down'] {
        transform: rotate(180deg);
      }

      /* —— Placement relative to trigger —— */
      :host([arrow='top-center']) .tip,
      :host([arrow='top-left']) .tip,
      :host([arrow='top-right']) .tip,
      :host([placement='bottom']) .tip,
      :host(:not([placement]):not([arrow])) .tip,
      :host([arrow='none']) .tip {
        top: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%);
      }

      :host([arrow='bottom-center']) .tip,
      :host([arrow='bottom-left']) .tip,
      :host([arrow='bottom-right']) .tip,
      :host([placement='top']) .tip {
        bottom: calc(100% + 4px);
        top: auto;
        left: 50%;
        transform: translateX(-50%);
      }

      :host([placement='left']) .tip {
        right: calc(100% + 4px);
        left: auto;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([placement='right']) .tip {
        left: calc(100% + 4px);
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
    `,
  ]

  /** Figma Appearance: Light `#383c4d` · Dark `#1b1b1e` */
  @property({ reflect: true }) appearance: DreTooltipAppearance = 'light'
  @property() content = ''
  @property({ attribute: 'supporting-text' }) supportingText = ''
  @property({ reflect: true }) arrow: DreTooltipArrow = 'none'
  /** @deprecated prefer arrow */
  @property({ reflect: true }) placement: DreTooltipPlacement = 'bottom'
  @property({ type: Boolean, reflect: true }) open = false
  /** Reflected when supporting text is present — drives fixed 311px width. */
  @property({ type: Boolean, reflect: true, attribute: 'has-supporting' })
  hasSupporting = false

  override willUpdate(changed: Map<string, unknown>) {
    if (changed.has('supportingText') || changed.size === 0) {
      this.hasSupporting = this.supportingText.trim().length > 0
    }
  }

  #arrowMeta(): { side: 'top' | 'bottom'; align: 'left' | 'center' | 'right' } | null {
    switch (this.arrow) {
      case 'top-left':
        return { side: 'top', align: 'left' }
      case 'top-center':
        return { side: 'top', align: 'center' }
      case 'top-right':
        return { side: 'top', align: 'right' }
      case 'bottom-left':
        return { side: 'bottom', align: 'left' }
      case 'bottom-center':
        return { side: 'bottom', align: 'center' }
      case 'bottom-right':
        return { side: 'bottom', align: 'right' }
      default:
        return null
    }
  }

  #arrowSvg(point: 'up' | 'down') {
    return html`
      <svg
        class="arrow"
        data-point=${point}
        viewBox="0 0 10.3923 6"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5.19615 0L10.3923 6H0L5.19615 0Z" fill="currentColor" />
      </svg>
    `
  }

  #arrowRow() {
    const meta = this.#arrowMeta()
    if (!meta) return nothing
    return html`
      <div class="arrow-row" data-side=${meta.side} data-align=${meta.align} part="arrow">
        ${this.#arrowSvg(meta.side === 'top' ? 'up' : 'down')}
      </div>
    `
  }

  override render() {
    const meta = this.#arrowMeta()
    const support = this.supportingText.trim()
    const body = html`
      <div class="body" part="body">
        <span class="title" part="title">${this.content}<slot name="content"></slot></span>
        ${support
          ? html`<span class="support" part="support">${support}</span>`
          : html`<slot name="supporting"></slot>`}
      </div>
    `

    return html`
      <slot></slot>
      <div class="tip" part="tip" role="tooltip">
        ${meta?.side === 'top' ? this.#arrowRow() : nothing}
        ${body}
        ${meta?.side === 'bottom' ? this.#arrowRow() : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-tooltip': DreTooltip
  }
}
