import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/badge/badge.js'

export type DreBottomPaneState = 'collapsed' | 'expanded'

/**
 * DRE Bottom Pane — maps to Figma Bottom Pane (`12585:36757`).
 *
 * Status / console strip with expandable output area.
 *
 * @slot - Expanded console / logs content
 * @fires dre-collapse-change - Fired when expanded/collapsed changes
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
        background: var(--dre-color-background-status-bar);
        border-top: 1px solid var(--dre-color-border-divider);
        color: var(--dre-color-text-default);
      }

      :host([state='expanded']) {
        min-height: 220px;
      }

      .status {
        display: flex;
        align-items: center;
        gap: var(--dre-spacer-12);
        min-height: 32px;
        padding: 0 var(--dre-spacer-12);
        background: var(--dre-color-background-status-bar);
      }

      .meta {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-8);
        font-size: var(--dre-typography-caption1-font-size, 10px);
        color: var(--dre-color-text-subtle);
      }

      .spacer {
        flex: 1;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-4);
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: var(--dre-typography-caption1-font-size, 10px);
        cursor: pointer;
        padding: 2px 4px;
        border-radius: var(--dre-radius-xsmall);
      }

      .chip:hover {
        background: var(--dre-color-action-ghost-hovered);
      }

      .toggle {
        width: 24px;
        height: 24px;
        border: 0;
        border-radius: var(--dre-radius-small);
        background: transparent;
        color: var(--dre-color-icon-subtle);
        cursor: pointer;
      }

      .panel {
        display: none;
        flex: 1;
        flex-direction: column;
        min-height: 180px;
        border-top: 1px solid var(--dre-color-border-divider);
        background: var(--dre-color-background-code-default);
      }

      :host([state='expanded']) .panel {
        display: flex;
      }

      .toolbar {
        display: flex;
        align-items: center;
        gap: var(--dre-spacer-8);
        min-height: 36px;
        padding: 0 var(--dre-spacer-12);
        border-bottom: 1px solid var(--dre-color-border-divider);
        background: var(--dre-color-background-toolbar);
      }

      .filter {
        flex: 1;
        min-width: 0;
        height: 28px;
        padding: 0 var(--dre-spacer-8);
        border: 1px solid var(--dre-color-border-input-default);
        border-radius: var(--dre-radius-small);
        background: var(--dre-color-background-input-default);
        color: var(--dre-color-text-default);
        font: inherit;
        font-size: var(--dre-typography-caption1-font-size, 10px);
      }

      .logs {
        flex: 1;
        overflow: auto;
        padding: var(--dre-spacer-12);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 12px;
        color: var(--dre-color-text-subtle);
        white-space: pre-wrap;
      }

      .return {
        padding: var(--dre-spacer-8) var(--dre-spacer-12);
        border-top: 1px solid var(--dre-color-border-divider);
        font-size: var(--dre-typography-caption1-font-size, 10px);
        color: var(--dre-color-text-success);
      }
    `,
  ]

  @property({ reflect: true }) state: DreBottomPaneState = 'collapsed'
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

  #toggle() {
    this.state = this.state === 'expanded' ? 'collapsed' : 'expanded'
    this.dispatchEvent(
      new CustomEvent('dre-collapse-change', {
        detail: { state: this.state },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    return html`
      ${this.showStatusBar
        ? html`
            <div class="status" part="status">
              ${this.showErrors
                ? html`<button class="chip" type="button" @click=${this.#toggle}>
                    <dre-badge tone="danger">${this.errorCount}</dre-badge> Errors
                  </button>`
                : null}
              ${this.showInfo
                ? html`<button class="chip" type="button">
                    <dre-badge tone="brand">${this.infoCount}</dre-badge> Info
                  </button>`
                : null}
              ${this.showConsole
                ? html`<button class="chip" type="button" @click=${this.#toggle}>${this.consoleLabel}</button>`
                : null}
              <span class="spacer"></span>
              <div class="meta">
                ${this.statusValue ? html`<span>${this.statusValue}</span>` : null}
                ${this.executionTime ? html`<span>${this.executionTime}</span>` : null}
                ${this.lastEdited ? html`<span>${this.lastEdited}</span>` : null}
                ${this.lineColumn ? html`<span>${this.lineColumn}</span>` : null}
                ${this.language ? html`<span>${this.language}</span>` : null}
              </div>
              <button
                class="toggle"
                type="button"
                aria-label=${this.state === 'expanded' ? 'Collapse console' : 'Expand console'}
                @click=${this.#toggle}
              >
                ${this.state === 'expanded' ? '▾' : '▴'}
              </button>
            </div>
          `
        : null}

      <div class="panel" part="panel">
        <div class="toolbar" part="toolbar">
          <input class="filter" type="search" placeholder=${this.filterPlaceholder} />
        </div>
        <div class="logs" part="logs"><slot>Ready.</slot></div>
        ${this.statusValue || this.executionTime
          ? html`<div class="return" part="return">
              Return: ${this.statusValue || '—'}${this.executionTime ? ` · ${this.executionTime}` : ''}
            </div>`
          : null}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-bottom-pane': DreBottomPane
  }
}
