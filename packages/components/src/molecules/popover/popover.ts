import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'
import '../../atoms/button/button.js'
import '../../atoms/toggle/toggle.js'
import './popover-slot.js'

export type DrePopoverAppearance = 'light' | 'dark'
export type DrePopoverVariant = 'single-field' | 'multiple-field'

/**
 * DRE Popover — Figma ⭐ Popover (`10125:322`).
 * Single Field · Multiple Field · Light/Dark · width 500 · radius 4 · elevation medium.
 *
 * @slot trigger - Element that toggles the popover
 * @slot body - Body content (Single Field)
 * @slot left - Left body column (Multiple Field)
 * @slot right - Right body column (Multiple Field)
 * @slot footer - Footer actions (defaults to Cancel / Save)
 * @fires dre-open - Fired when opened
 * @fires dre-close - Fired when closed
 * @fires dre-cancel - Fired when Cancel is pressed
 * @fires dre-save - Fired when Save is pressed
 * @fires dre-expand - Fired when expand is pressed
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

      .trigger {
        display: inline-flex;
        line-height: 0;
      }

      .panel {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        z-index: 25;
        display: none;
        box-sizing: border-box;
        width: 500px;
        min-width: 362px;
        max-width: min(500px, calc(100vw - 24px));
        padding: 10px 0;
        border-radius: 4px;
        background: #ffffff;
        box-shadow:
          0 4px 14px rgb(0 0 0 / 12%),
          0 2px 8px rgb(0 0 0 / 8%);
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
      }

      :host([appearance='dark']) .panel {
        background: #252834;
      }

      :host([open]) .panel {
        display: flex;
      }

      :host([inline]) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      :host([inline]) .panel {
        position: relative;
        top: auto;
        left: auto;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
      }

      :host([variant='multiple-field']) .content {
        gap: 12px;
      }

      .header-wrap,
      .footer-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        width: 100%;
        min-height: 20px;
      }

      .title {
        flex: 1 1 auto;
        min-width: 0;
        margin: 0;
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #13141a;
      }

      :host([appearance='dark']) .title {
        color: #e3e4e6;
      }

      .header-actions {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        flex: 0 0 auto;
        color: #727999;
      }

      :host([appearance='dark']) .header-actions {
        color: #9ca1b7;
      }

      .icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 0;
        width: 20px;
        height: 20px;
      }

      .icon-btn:hover {
        color: #383c4d;
      }

      :host([appearance='dark']) .icon-btn:hover {
        color: #e3e4e6;
      }

      .header-actions dre-toggle {
        flex: 0 0 auto;
      }

      .divider {
        height: 0;
        border: 0;
        border-top: 1px solid #e6e8ed;
        margin: 0;
        width: 100%;
      }

      :host([appearance='dark']) .divider {
        border-top-color: #3a3a40;
      }

      .body {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
      }

      :host([variant='multiple-field']) .body {
        flex-direction: row;
        align-items: stretch;
        gap: 12px;
        min-height: 99px;
      }

      .body-col {
        display: flex;
        flex: 1 1 0;
        min-width: 0;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        width: 100%;
        min-height: 26px;
      }

      .footer:empty {
        display: none;
      }
    `,
  ]

  @property({ reflect: true }) appearance: DrePopoverAppearance = 'light'
  @property({ reflect: true }) variant: DrePopoverVariant = 'single-field'
  @property() heading = 'Enter choice'
  @property({ type: Boolean, reflect: true }) open = false
  /** Render panel in document flow (Storybook / static demos). */
  @property({ type: Boolean, reflect: true }) inline = false
  @property({ type: Boolean, attribute: 'show-toggle' }) showToggle = true
  @property({ type: Boolean, attribute: 'show-expand' }) showExpand = true
  @property({ type: Boolean, attribute: 'show-close' }) showClose = true
  @property({ type: Boolean, attribute: 'show-footer' }) showFooter = true
  @property({ type: Boolean }) checked = false

  #titleId = `dre-popover-title-${Math.random().toString(36).slice(2, 9)}`

  #onDocClick = (e: MouseEvent) => {
    if (!this.open || this.inline) return
    if (!e.composedPath().includes(this)) this.#setOpen(false)
  }

  #onKeyDown = (e: KeyboardEvent) => {
    if (!this.open) return
    if (e.key === 'Escape') {
      e.stopPropagation()
      this.#setOpen(false)
    }
  }

  override connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this.#onDocClick)
    this.addEventListener('keydown', this.#onKeyDown)
  }

  override disconnectedCallback() {
    document.removeEventListener('click', this.#onDocClick)
    this.removeEventListener('keydown', this.#onKeyDown)
    super.disconnectedCallback()
  }

  override updated(changed: Map<string, unknown>) {
    queueMicrotask(() => {
      if (changed.has('open') || changed.has('inline')) this.#syncTriggerAria()
      this.#syncToggleAria()
    })
  }

  override firstUpdated() {
    queueMicrotask(() => {
      this.#syncTriggerAria()
      this.#syncToggleAria()
    })
  }

  #syncTriggerAria() {
    const slot = this.renderRoot.querySelector('slot[name="trigger"]') as HTMLSlotElement | null
    const el = slot?.assignedElements({ flatten: true })[0] as HTMLElement | undefined
    if (!el) return
    el.removeAttribute('aria-haspopup')
    el.removeAttribute('aria-expanded')
    const target =
      (el.shadowRoot?.querySelector('button, [role="button"]') as HTMLElement | null) ??
      (el.matches('button,[role="button"]') ? el : null)
    if (!target) return
    target.setAttribute('aria-haspopup', 'dialog')
    target.setAttribute('aria-expanded', this.open ? 'true' : 'false')
  }

  #syncToggleAria() {
    const toggle = this.renderRoot.querySelector('dre-toggle')
    const btn = toggle?.shadowRoot?.querySelector('button')
    btn?.setAttribute('aria-label', 'Toggle option')
  }

  #setOpen(next: boolean) {
    if (this.open === next) return
    this.open = next
    this.dispatchEvent(
      new CustomEvent(next ? 'dre-open' : 'dre-close', {
        bubbles: true,
        composed: true,
      }),
    )
  }

  #toggleOpen(e: Event) {
    e.stopPropagation()
    this.#setOpen(!this.open)
  }

  #onToggleChange(e: Event) {
    const detail = (e as CustomEvent).detail as { checked?: boolean } | undefined
    this.checked = Boolean(detail?.checked)
  }

  #emit(name: 'dre-cancel' | 'dre-save' | 'dre-expand') {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true }))
    if (name === 'dre-cancel') this.#setOpen(false)
  }

  #defaultBody() {
    if (this.variant === 'multiple-field') {
      return html`
        <div class="body-col">
          <slot name="left">
            <dre-popover-slot
              kind="multiple"
              appearance=${this.appearance}
            ></dre-popover-slot>
          </slot>
        </div>
        <div class="body-col">
          <slot name="right">
            <dre-popover-slot
              kind="multiple"
              appearance=${this.appearance}
            ></dre-popover-slot>
          </slot>
        </div>
      `
    }
    return html`
      <slot name="body">
        <dre-popover-slot kind="single" appearance=${this.appearance}></dre-popover-slot>
      </slot>
    `
  }

  #defaultFooter() {
    return html`
      <dre-button
        hierarchy="secondary"
        size="small"
        @dre-click=${() => this.#emit('dre-cancel')}
      >
        Cancel
      </dre-button>
      <dre-button hierarchy="primary" size="small" @dre-click=${() => this.#emit('dre-save')}>
        Save
      </dre-button>
    `
  }

  override render() {
    return html`
      <span class="trigger" @click=${this.#toggleOpen}>
        <slot name="trigger" @slotchange=${() => this.#syncTriggerAria()}></slot>
      </span>
      <div
        class="panel"
        part="panel"
        role="dialog"
        aria-labelledby=${`${this.#titleId}`}
      >
        <div class="content" part="content">
          <div class="header-wrap">
            <div class="header" part="header">
              <h2 class="title" part="title" id=${this.#titleId}>${this.heading}</h2>
              <div class="header-actions" part="header-actions">
                ${this.showToggle
                  ? html`
                      <dre-toggle
                        size="small"
                        ?checked=${this.checked}
                        @dre-change=${this.#onToggleChange}
                        @click=${(e: Event) => e.stopPropagation()}
                      ></dre-toggle>
                    `
                  : nothing}
                ${this.showExpand
                  ? html`
                      <button
                        class="icon-btn"
                        type="button"
                        aria-label="Expand"
                        @click=${() => this.#emit('dre-expand')}
                      >
                        <dre-icon name="arrow-expand" size="16"></dre-icon>
                      </button>
                    `
                  : nothing}
                ${this.showClose
                  ? html`
                      <button
                        class="icon-btn"
                        type="button"
                        aria-label="Close"
                        @click=${() => this.#setOpen(false)}
                      >
                        <dre-icon name="x" size="16"></dre-icon>
                      </button>
                    `
                  : nothing}
              </div>
            </div>
          </div>
          <hr class="divider" />
          <div class="body" part="body">${this.#defaultBody()}</div>
          <hr class="divider" />
          ${this.showFooter
            ? html`
                <div class="footer-wrap">
                  <div class="footer" part="footer">
                    <slot name="footer">${this.#defaultFooter()}</slot>
                  </div>
                </div>
              `
            : nothing}
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-popover': DrePopover
  }
}
