import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/button/button.js'
import '../../atoms/icon/icon.js'

export type DreSecondaryTopBarType = 'code-editor' | 'visual-builder'

/**
 * DRE Secondary Top Bar — Figma (`12726:51297`).
 * Height 36 · tools left · Code/Flow center · actions right.
 */
@customElement('dre-secondary-top-bar')
export class DreSecondaryTopBar extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .bar {
        display: flex;
        align-items: center;
        height: 36px;
        min-height: 36px;
        padding: 0 8px;
        background: #ffffff;
        border: 1px solid #e6e8ed;
        border-radius: 4px;
        box-sizing: border-box;
      }

      .tools {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        flex: 0 0 auto;
      }

      .tool {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        border-radius: 4px;
        background: transparent;
        color: #5d6481;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .tool:hover {
        background: #f3f3f6;
        color: #13141a;
      }

      .sep {
        width: 1px;
        height: 16px;
        background: #d6d8e1;
        flex: 0 0 auto;
      }

      .spacer {
        flex: 1;
        min-width: 8px;
      }

      .modes {
        display: inline-flex;
        align-items: stretch;
        gap: 0;
        padding: 2px;
        border-radius: 4px;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .mode {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 0;
        border-radius: 2px;
        padding: 4px 6px;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 12px;
        line-height: 14px;
        cursor: pointer;
        white-space: nowrap;
      }

      .mode[aria-pressed='true'] {
        background: #ffffff;
        color: #0d6dfd;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      .unsaved {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: #5d6481;
        white-space: nowrap;
      }
    `,
  ]

  @property({ reflect: true }) type: DreSecondaryTopBarType = 'code-editor'
  @property({ attribute: 'active-mode' }) activeMode: 'code' | 'flow' = 'code'
  @property({ attribute: 'unsaved-text' }) unsavedText = '4 Unsaved changes'
  @property({ attribute: 'code-tab-text' }) codeTabText = 'Code'
  @property({ attribute: 'flow-tab-text' }) flowTabText = 'Flow'
  @property({ attribute: 'preview-text' }) previewText = 'Preview'

  #setMode(mode: 'code' | 'flow') {
    this.activeMode = mode
    this.dispatchEvent(
      new CustomEvent('dre-mode-change', {
        detail: { mode },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #action(name: string) {
    this.dispatchEvent(
      new CustomEvent('dre-action', {
        detail: { name },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    const isCode = this.type === 'code-editor'

    return html`
      <div class="bar" part="bar">
        <div class="tools" part="tools">
          <slot name="tools">
            <button class="tool" type="button" title="Undo" @click=${() => this.#action('undo')}>
              <dre-icon name="undo" size="14"></dre-icon>
            </button>
            <button class="tool" type="button" title="Redo" @click=${() => this.#action('redo')}>
              <dre-icon name="redo" size="14"></dre-icon>
            </button>
            <span class="sep" aria-hidden="true"></span>
            <button class="tool" type="button" title="Search" @click=${() => this.#action('search')}>
              <dre-icon name="search" size="14"></dre-icon>
            </button>
            ${isCode
              ? html`
                  <span class="sep" aria-hidden="true"></span>
                  <button class="tool" type="button" title="Cut" @click=${() => this.#action('cut')}>
                    <dre-icon name="cut" size="14"></dre-icon>
                  </button>
                  <button class="tool" type="button" title="Copy" @click=${() => this.#action('copy')}>
                    <dre-icon name="copy" size="14"></dre-icon>
                  </button>
                  <button class="tool" type="button" title="Paste" @click=${() => this.#action('paste')}>
                    <dre-icon name="cancel-submit" size="14"></dre-icon>
                  </button>
                `
              : null}
            <span class="sep" aria-hidden="true"></span>
            <button class="tool" type="button" title="Structure" @click=${() => this.#action('structure')}>
              <dre-icon name="code" size="14"></dre-icon>
            </button>
          </slot>
        </div>

        <div class="spacer" aria-hidden="true"></div>

        <div class="modes" part="modes">
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode === 'code' ? 'true' : 'false'}
            @click=${() => this.#setMode('code')}
          >
            <dre-icon name="vuesax-linear-code" size="14"></dre-icon>
            ${this.codeTabText}
          </button>
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode === 'flow' ? 'true' : 'false'}
            @click=${() => this.#setMode('flow')}
          >
            <dre-icon name="workflow" size="14"></dre-icon>
            ${this.flowTabText}
          </button>
        </div>

        <div class="spacer" aria-hidden="true"></div>

        <div class="trailing" part="trailing">
          <slot name="trailing">
            ${isCode && this.unsavedText
              ? html`
                  <span class="unsaved">
                    <dre-icon name="cloud-save" size="16"></dre-icon>
                    ${this.unsavedText}
                  </span>
                  <span class="sep" aria-hidden="true"></span>
                  <dre-button
                    hierarchy="ghost"
                    size="xsmall"
                    icon="leading"
                    @click=${() => this.#action('preview')}
                  >
                    <dre-icon slot="leading" name="play" size="14"></dre-icon>
                    ${this.previewText}
                  </dre-button>
                  <dre-button hierarchy="secondary" size="xsmall" @click=${() => this.#action('save-execute')}>
                    Save &amp; Execute
                  </dre-button>
                  <dre-button hierarchy="primary" size="xsmall" @click=${() => this.#action('save')}>
                    Save
                  </dre-button>
                `
              : html`
                  <button class="tool" type="button" title="Share" @click=${() => this.#action('share')}>
                    <dre-icon name="zoom" size="16"></dre-icon>
                  </button>
                  <span class="sep" aria-hidden="true"></span>
                  <button class="tool" type="button" title="Preview" @click=${() => this.#action('preview')}>
                    <dre-icon name="play" size="16"></dre-icon>
                  </button>
                  <button class="tool" type="button" title="More" @click=${() => this.#action('more')}>
                    <dre-icon name="more" size="16"></dre-icon>
                  </button>
                  <dre-button hierarchy="primary" size="xsmall" @click=${() => this.#action('save')}>
                    Save
                  </dre-button>
                `}
          </slot>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-secondary-top-bar': DreSecondaryTopBar
  }
}
