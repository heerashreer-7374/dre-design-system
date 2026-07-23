import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

export type DreConsoleRowType = 'info' | 'transaction' | 'data' | 'api'
export type DreConsoleBadgeTone = 'discovery' | 'success' | 'neutral'

const TYPE_ICON: Record<DreConsoleRowType, string> = {
  info: 'info',
  transaction: 'message',
  data: 'info',
  api: 'cable',
}

/**
 * DRE Accordion/Console Row — Figma (`12510:12394`).
 * Height 36 · Types Info/Transaction/Data/API · nested children indent 24.
 */
@customElement('dre-console-row')
export class DreConsoleRow extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        background: #fff;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        width: 100%;
        min-height: 36px;
        padding: 8px 12px 8px 8px;
        border: 0;
        border-bottom: 1px solid #f3f3f6;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: start;
        cursor: pointer;
      }

      :host([plain]) .row {
        min-height: 0;
        padding-block: 6px;
      }

      .row:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: -2px;
      }

      .chevron {
        display: inline-flex;
        flex: 0 0 auto;
        color: #8c92ac;
        line-height: 0;
        transition: transform 150ms ease-out;
        transform: rotate(-90deg);
      }

      :host([expanded]) .chevron {
        transform: rotate(0deg);
      }

      .type-icon {
        display: inline-flex;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
        min-width: 0;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 500;
        line-height: 14px;
        white-space: nowrap;
      }

      .badge[data-tone='discovery'] {
        background: #dfdaf8;
        color: #8f7ee7;
      }

      .badge[data-tone='success'] {
        background: #ceead0;
        color: #55b45a;
      }

      .value {
        font-size: 12px;
        font-weight: 400;
        color: #13141a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .meta {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      :host([type='info']) .meta {
        gap: 12px;
      }

      .time,
      .duration,
      .sep {
        font-size: 11px;
        /* Slightly darker than Figma grey-2 for AA contrast on white */
        color: #727999;
        white-space: nowrap;
      }

      .reset {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .badge[data-tone='neutral'] {
        background: #edf0f7;
        color: #727999;
      }

      .children {
        display: none;
        flex-direction: column;
        width: 100%;
        padding-left: 24px;
        box-sizing: border-box;
      }

      :host([expanded]) .children {
        display: flex;
      }

      ::slotted(dre-console-row) {
        display: block;
      }
    `,
  ]

  @property({ reflect: true }) type: DreConsoleRowType | '' = 'info'
  /** Nested tree rows (Request/Response) — no type icon. */
  @property({ type: Boolean, reflect: true }) plain = false
  /** Left badge label (e.g. Number, GET). */
  @property() badge = ''
  @property({ attribute: 'badge-tone' }) badgeTone: DreConsoleBadgeTone | '' = ''
  @property() value = ''
  @property() time = ''
  /** Right status badge (e.g. Mail Submitted, 100 Processing only). */
  @property() status = ''
  @property() duration = ''
  @property() line = ''
  @property({ type: Boolean, reflect: true }) reset = false
  @property({ type: Boolean, reflect: true }) expanded = false

  #panelId = `dre-console-row-${Math.random().toString(36).slice(2, 9)}`
  #headerId = `${this.#panelId}-header`

  #resolvedBadgeTone(): DreConsoleBadgeTone {
    if (this.badgeTone) return this.badgeTone
    if (this.type === 'api') return 'success'
    if (this.type === 'info') return 'discovery'
    return 'success'
  }

  #toggle() {
    this.expanded = !this.expanded
    this.dispatchEvent(
      new CustomEvent('dre-toggle', {
        detail: { expanded: this.expanded },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    const icon = this.type ? TYPE_ICON[this.type] : ''
    const showPipe = Boolean(this.status && this.duration)
    return html`
      <button
        id=${this.#headerId}
        class="row"
        type="button"
        part="row"
        aria-expanded=${this.expanded ? 'true' : 'false'}
        aria-controls=${this.#panelId}
        @click=${this.#toggle}
      >
        <span class="chevron" aria-hidden="true">
          <dre-icon name="chevron-down" size="14"></dre-icon>
        </span>
        ${!this.plain && icon
          ? html`
              <span class="type-icon" aria-hidden="true">
                <dre-icon name=${icon} size="16"></dre-icon>
              </span>
            `
          : nothing}
        <span class="left">
          ${this.badge
            ? html`<span class="badge" data-tone=${this.#resolvedBadgeTone()} part="badge">${this.badge}</span>`
            : nothing}
          ${this.value ? html`<span class="value" part="value">${this.value}</span>` : nothing}
        </span>
        <span class="meta" part="meta">
          ${this.status
            ? html`<span class="badge" data-tone="success" part="status">${this.status}</span>`
            : nothing}
          ${this.reset
            ? html`<span class="reset" aria-hidden="true"><dre-icon name="reset" size="14"></dre-icon></span>`
            : nothing}
          ${this.time ? html`<span class="time" part="time">${this.time}</span>` : nothing}
          ${showPipe ? html`<span class="sep" aria-hidden="true">|</span>` : nothing}
          ${this.duration ? html`<span class="duration" part="duration">${this.duration}</span>` : nothing}
          ${this.line
            ? html`<span class="badge" data-tone="neutral" part="line">${this.line}</span>`
            : nothing}
        </span>
      </button>
      <div
        id=${this.#panelId}
        class="children"
        part="children"
        role="region"
        aria-labelledby=${this.#headerId}
      >
        <slot></slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-console-row': DreConsoleRow
  }
}
