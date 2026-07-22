import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/badge/badge.js'
import '../../atoms/icon/icon.js'

export type DreBottomPaneState = 'collapsed' | 'expanded'
export type DreBottomPaneTab = 'console' | 'errors'

/**
 * DRE Bottom Pane — Figma (`12585:36757`).
 * Collapsed: 32px status strip. Expanded: tabs + toolbar/logs + status strip.
 */
@customElement('dre-bottom-pane')
export class DreBottomPane extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #ffffff;
        border: 1px solid #d6d8e1;
        border-radius: 4px;
        color: #13141a;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
        overflow: hidden;
      }

      :host([state='expanded']) {
        min-height: 280px;
        background: #f3f3f6;
        border-color: #bdc0cf;
      }

      .panel {
        display: none;
        flex: 1;
        flex-direction: column;
        min-height: 0;
        background: #f3f3f6;
      }

      :host([state='expanded']) .panel {
        display: flex;
      }

      .tabs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 40px;
        padding: 0 12px;
        background: #f3f3f6;
        box-sizing: border-box;
      }

      .tab-list {
        display: flex;
        align-items: stretch;
      }

      .tab {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        border: 0;
        background: transparent;
        padding: 10px 12px 0;
        font: inherit;
        cursor: pointer;
        color: #5d6481;
      }

      .tab-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        line-height: 17px;
      }

      .tab-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        border: 1px solid #d6d8e1;
        border-radius: 34px;
        font-size: 12px;
        line-height: 1;
        color: #5d6481;
        box-sizing: border-box;
      }

      .tab-indicator {
        width: 100%;
        height: 2px;
        background: transparent;
        border-radius: 1px;
      }

      .tab[aria-selected='true'] {
        color: #0d6dfd;
      }

      .tab[aria-selected='true'] .tab-indicator {
        background: #0d6dfd;
      }

      .icon-btn {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        border-radius: 2px;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .icon-btn:hover {
        background: #e6e8ed;
        color: #13141a;
      }

      .divider-h {
        height: 1px;
        width: 100%;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 40px;
        padding: 6px 12px;
        background: #f3f3f6;
        box-sizing: border-box;
      }

      .status-group {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }

      .status-label {
        font-size: 12px;
        color: #383c4d;
      }

      .status-time {
        font-size: 12px;
        color: #5d6481;
      }

      .vsep {
        width: 1px;
        height: 16px;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .filter {
        width: 302px;
        max-width: 40%;
        height: 28px;
        padding: 0 8px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #ffffff;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        box-sizing: border-box;
      }

      .filter::placeholder {
        color: #8c92ac;
      }

      .content {
        flex: 1;
        min-height: 0;
        overflow: auto;
        padding: 8px 12px;
        background: #f3f3f6;
      }

      .logs {
        min-height: 100%;
        border: 1px solid #d6d8e1;
        border-radius: 4px;
        background: #ffffff;
        overflow: hidden;
      }

      .status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 32px;
        height: 32px;
        padding: 0 10px;
        background: #ffffff;
        border-top: 1px solid #d6d8e1;
        box-sizing: border-box;
      }

      :host([state='collapsed']) .status {
        border-top: 0;
      }

      .left,
      .right {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 0;
        background: transparent;
        color: #727999;
        font: inherit;
        font-size: 12px;
        line-height: 14px;
        cursor: pointer;
        padding: 0;
      }

      .chip:hover {
        color: #13141a;
      }

      .chip-label {
        color: #5d6481;
      }

      .chip.errors dre-icon {
        color: #d64333;
      }

      .chip.info dre-icon {
        color: #edb51d;
      }

      .sep {
        width: 1px;
        height: 12px;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .meta {
        font-size: 12px;
        line-height: 14px;
        color: #5d6481;
        white-space: nowrap;
      }

      .lang {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        line-height: 14px;
        color: #5d6481;
      }
    `,
  ]

  @property({ reflect: true }) state: DreBottomPaneState = 'collapsed'
  @property({ reflect: true }) tab: DreBottomPaneTab = 'console'
  @property({ attribute: 'error-count' }) errorCount = '0'
  @property({ attribute: 'info-count' }) infoCount = '0'
  @property({ attribute: 'console-label' }) consoleLabel = 'Console'
  @property({ attribute: 'last-edited' }) lastEdited = ''
  @property({ attribute: 'line-column' }) lineColumn = ''
  @property() language = 'Deluge'
  @property({ attribute: 'status-value' }) statusValue = ''
  @property({ attribute: 'execution-time' }) executionTime = ''
  @property({ attribute: 'filter-placeholder' }) filterPlaceholder =
    'Filter (e.g. text, **/*.ts, !**/node_modules/**)'
  @property({ type: Boolean, attribute: 'show-errors' }) showErrors = true
  @property({ type: Boolean, attribute: 'show-info' }) showInfo = true
  @property({ type: Boolean, attribute: 'show-console' }) showConsole = true
  @property({ type: Boolean, attribute: 'show-status-bar' }) showStatusBar = true

  #setState(next: DreBottomPaneState) {
    this.state = next
    this.dispatchEvent(
      new CustomEvent('dre-collapse-change', {
        detail: { state: this.state },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #toggle() {
    this.#setState(this.state === 'expanded' ? 'collapsed' : 'expanded')
  }

  #openTab(tab: DreBottomPaneTab) {
    this.tab = tab
    if (this.state !== 'expanded') this.#setState('expanded')
  }

  #statusBar() {
    if (!this.showStatusBar) return null
    const expanded = this.state === 'expanded'

    return html`
      <div class="status" part="status">
        <div class="left">
          ${this.showErrors
            ? html`<button class="chip errors" type="button" @click=${() => this.#openTab('errors')}>
                <dre-icon name="error" size="12"></dre-icon>
                <span>${this.errorCount}</span>
              </button>`
            : null}
          ${this.showErrors && (this.showInfo || this.showConsole)
            ? html`<span class="sep" aria-hidden="true"></span>`
            : null}
          ${this.showInfo
            ? html`<button class="chip info" type="button">
                <dre-icon name="warning" size="12"></dre-icon>
                <span>${this.infoCount}</span>
              </button>`
            : null}
          ${this.showInfo && this.showConsole ? html`<span class="sep" aria-hidden="true"></span>` : null}
          ${this.showConsole
            ? html`<button class="chip" type="button" @click=${() => this.#openTab('console')}>
                <span class="chip-label">${this.consoleLabel}</span>
              </button>`
            : null}
        </div>

        <div class="right">
          ${this.lastEdited
            ? html`<span class="sep" aria-hidden="true"></span
                ><span class="meta">${this.lastEdited}</span>`
            : null}
          ${this.lineColumn
            ? html`<span class="sep" aria-hidden="true"></span
                ><span class="meta">${this.lineColumn}</span>`
            : null}
          ${this.language
            ? html`<span class="sep" aria-hidden="true"></span>
                <span class="lang">
                  <dre-icon name="vuesax-linear-code" size="12"></dre-icon>
                  ${this.language}
                </span>`
            : null}
          <span class="sep" aria-hidden="true"></span>
          <button
            class="icon-btn"
            type="button"
            aria-label=${expanded ? 'Collapse console' : 'Expand console'}
            @click=${this.#toggle}
          >
            <dre-icon name="zoom" size="16"></dre-icon>
          </button>
        </div>
      </div>
    `
  }

  override render() {
    const onConsole = this.tab === 'console'

    return html`
      <div class="panel" part="panel">
        <div class="tabs" part="tabs">
          <div class="tab-list">
            <button
              class="tab"
              type="button"
              aria-selected=${onConsole ? 'false' : 'true'}
              @click=${() => this.#openTab('errors')}
            >
              <span class="tab-label">
                Errors
                <span class="tab-count">${this.errorCount}</span>
              </span>
              <span class="tab-indicator" aria-hidden="true"></span>
            </button>
            <button
              class="tab"
              type="button"
              aria-selected=${onConsole ? 'true' : 'false'}
              @click=${() => this.#openTab('console')}
            >
              <span class="tab-label">${this.consoleLabel}</span>
              <span class="tab-indicator" aria-hidden="true"></span>
            </button>
          </div>
          <button
            class="icon-btn"
            type="button"
            aria-label="Close console"
            @click=${() => this.#setState('collapsed')}
          >
            <dre-icon name="close" size="14"></dre-icon>
          </button>
        </div>

        <div class="divider-h"></div>

        ${onConsole
          ? html`
              <div class="toolbar" part="toolbar">
                <div class="status-group">
                  <span class="status-label">Status :</span>
                  ${this.statusValue
                    ? html`<dre-badge status="success" size="small">${this.statusValue}</dre-badge>`
                    : null}
                  ${this.executionTime
                    ? html`<span class="vsep" aria-hidden="true"></span>
                        <span class="status-time">${this.executionTime}</span>`
                    : null}
                </div>
                <input class="filter" type="search" placeholder=${this.filterPlaceholder} />
              </div>
              <div class="divider-h"></div>
            `
          : null}

        <div class="content">
          <div class="logs" part="logs">
            ${onConsole ? html`<slot>Ready.</slot>` : html`<slot name="errors"></slot>`}
          </div>
        </div>
      </div>

      ${this.#statusBar()}
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-bottom-pane': DreBottomPane
  }
}
