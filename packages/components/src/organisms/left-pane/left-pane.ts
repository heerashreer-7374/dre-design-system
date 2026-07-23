import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'
import '../../molecules/accordion/accordion.js'
import '../../molecules/accordion/accordion-group.js'
import '../../molecules/accordion/block-item.js'

export type DreLeftPaneMode = 'code-editor' | 'visual-builder'
export type DreLeftPaneState = 'extended' | 'collapsed'

/**
 * DRE Left Pane — Figma (`12613:41263`).
 * Always shows 48px icon rail; Extended adds Actions panel beside it.
 */
@customElement('dre-left-pane')
export class DreLeftPane extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: 100%;
        min-height: 0;
        width: auto;
        color: #13141a;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
      }

      .rail {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        width: 48px;
        flex: 0 0 48px;
        padding: 13px 9px;
        background: #ffffff;
        border-radius: 4px;
        box-sizing: border-box;
      }

      .rail-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .rail-spacer {
        flex: 1;
        width: 10px;
        min-height: 8px;
      }

      .rail-divider {
        width: 16px;
        height: 0;
        border-top: 1px solid #e6e8ed;
      }

      .rail-btn {
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #5d6481;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .rail-btn:hover,
      .rail-btn[aria-current='true'] {
        background: #eef5ff;
        color: #0d6dfd;
      }

      .panel {
        display: none;
        flex-direction: column;
        width: 210px;
        flex: 0 0 210px;
        min-height: 0;
        margin-left: 0;
        background: #ffffff;
        border-radius: 4px;
        box-sizing: border-box;
      }

      :host([state='extended']) .panel {
        display: flex;
        /* Figma 12478:5025 — 8px between rail and Actions panel */
        margin-left: 8px;
      }

      :host([separated]) .panel {
        margin-left: 8px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        min-height: 44px;
        padding: 0 12px 0 16px;
        border-bottom: 1px solid #f3f3f6;
        box-sizing: border-box;
      }

      .title {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .header-btn {
        width: 28px;
        height: 28px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .header-btn:hover {
        background: #f3f3f6;
        color: #13141a;
      }

      .body {
        flex: 1;
        overflow: auto;
        padding: 8px;
        min-height: 0;
      }

    `,
  ]

  @property({ reflect: true }) mode: DreLeftPaneMode = 'code-editor'
  @property({ reflect: true }) state: DreLeftPaneState = 'extended'
  @property({ type: Boolean, reflect: true }) separated = false
  @property({ attribute: 'header-title' }) headerTitle = 'Actions'
  /** @deprecated Prefer `railTopIcons` + `railBottomIcons`. */
  @property({ attribute: false }) railIcons: string[] = []
  @property({ attribute: false }) railTopIcons: string[] = ['syntax', 'cable']
  @property({ attribute: false }) railBottomIcons: string[] = ['more', 'layout']

  #toggle() {
    this.state = this.state === 'extended' ? 'collapsed' : 'extended'
    this.dispatchEvent(
      new CustomEvent('dre-collapse-change', {
        detail: { state: this.state },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #railButtons(names: string[], activeFirst = false) {
    return names.map(
      (name, i) => html`
        <button
          class="rail-btn"
          type="button"
          aria-current=${activeFirst && i === 0 ? 'true' : 'false'}
          title=${name}
          @click=${() => {
            if (name === 'layout') this.#toggle()
          }}
        >
          <dre-icon name=${name} size="20"></dre-icon>
        </button>
      `,
    )
  }

  override render() {
    const top = this.railIcons.length ? this.railIcons : this.railTopIcons
    const bottom = this.railIcons.length ? [] : this.railBottomIcons

    return html`
      <nav class="rail" part="rail" aria-label="Left pane tools">
        <div class="rail-group">${this.#railButtons(top, true)}</div>
        <div class="rail-spacer" aria-hidden="true"></div>
        ${bottom.length
          ? html`
              ${this.#railButtons(bottom.slice(0, 1))}
              <div class="rail-divider" aria-hidden="true"></div>
              ${this.#railButtons(bottom.slice(1))}
            `
          : null}
      </nav>

      <aside class="panel" part="panel">
        <div class="header" part="header">
          <slot name="header"><span class="title">${this.headerTitle}</span></slot>
          <button class="header-btn" type="button" aria-label="Search">
            <dre-icon name="search" size="16"></dre-icon>
          </button>
        </div>
        <div class="body" part="body">
          <slot>
            <dre-accordion-group exclusive divided>
              <dre-accordion title="Basics" expanded>
                <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
                <dre-block-item
                  label="Set Variable"
                  description="assign values to fields"
                  icon="code"
                ></dre-block-item>
                <dre-block-item
                  label="Set Field Value"
                  description="assign values to fields"
                  icon="cioption"
                ></dre-block-item>
                <dre-block-item
                  label="Call Function"
                  description="assign values to fields"
                  icon="function-square"
                ></dre-block-item>
              </dre-accordion>
              <dre-accordion title="Ai Task">
                <dre-icon slot="lead" name="sparkles" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Flow Control">
                <dre-icon slot="lead" name="workflow" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Form Control">
                <dre-icon slot="lead" name="edit" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Subform Action">
                <dre-icon slot="lead" name="split" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Notification">
                <dre-icon slot="lead" name="bell" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Debug">
                <dre-icon slot="lead" name="warning" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Data Access">
                <dre-icon slot="lead" name="fetch-record" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Portal User Task">
                <dre-icon slot="lead" name="scan-face" size="14"></dre-icon>
              </dre-accordion>
            </dre-accordion-group>
          </slot>
        </div>
      </aside>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-left-pane': DreLeftPane
  }
}
