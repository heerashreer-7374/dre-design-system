import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/button/button.js'

export type DreSecondaryTopBarType = 'code-editor' | 'visual-builder'

/**
 * DRE Secondary Top Bar — maps to Figma Secondary Top Bar (`12726:51297`).
 *
 * @slot tools - Custom tool buttons (overrides defaults)
 * @slot trailing - Right-side actions
 * @fires dre-mode-change - Fired when Code/Flow tab changes
 * @fires dre-action - Fired for toolbar icon actions
 */
@customElement('dre-secondary-top-bar')
export class DreSecondaryTopBar extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .bar {
        display: flex;
        align-items: center;
        gap: var(--dre-spacer-12);
        min-height: 36px;
        padding: 0 var(--dre-spacer-12);
        background: var(--dre-color-background-toolbar);
        border-bottom: 1px solid var(--dre-color-border-divider);
      }

      .modes {
        display: inline-flex;
        gap: 2px;
        padding: 2px;
        border-radius: var(--dre-radius-small);
        background: var(--dre-color-background-neutral-subtle);
      }

      .mode {
        border: 0;
        border-radius: var(--dre-radius-xsmall);
        padding: 4px 10px;
        background: transparent;
        color: var(--dre-color-text-subtle);
        font: inherit;
        font-size: var(--dre-typography-label3-font-size, 12px);
        cursor: pointer;
      }

      .mode[aria-pressed='true'] {
        background: var(--dre-color-background-neutral-default);
        color: var(--dre-color-text-default);
        box-shadow: 0 0 0 1px var(--dre-color-border-subtle);
      }

      .tools {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-2);
        flex: 1;
      }

      .tool {
        width: 28px;
        height: 28px;
        border: 0;
        border-radius: var(--dre-radius-small);
        background: transparent;
        color: var(--dre-color-icon-subtle);
        cursor: pointer;
        font-size: 13px;
      }

      .tool:hover {
        background: var(--dre-color-action-ghost-hovered);
        color: var(--dre-color-icon-default);
      }

      .unsaved {
        font-size: var(--dre-typography-caption1-font-size, 10px);
        color: var(--dre-color-text-warning);
        white-space: nowrap;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-8);
        margin-inline-start: auto;
      }
    `,
  ]

  @property({ reflect: true }) type: DreSecondaryTopBarType = 'code-editor'
  @property({ attribute: 'active-mode' }) activeMode: 'code' | 'flow' = 'code'
  @property({ attribute: 'unsaved-text' }) unsavedText = ''
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
    return html`
      <div class="bar" part="bar">
        <div class="modes" part="modes">
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode === 'code' ? 'true' : 'false'}
            @click=${() => this.#setMode('code')}
          >
            ${this.codeTabText}
          </button>
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode === 'flow' ? 'true' : 'false'}
            @click=${() => this.#setMode('flow')}
          >
            ${this.flowTabText}
          </button>
        </div>

        <div class="tools" part="tools">
          <slot name="tools">
            <button class="tool" type="button" title="Undo" @click=${() => this.#action('undo')}>↶</button>
            <button class="tool" type="button" title="Redo" @click=${() => this.#action('redo')}>↷</button>
            <button class="tool" type="button" title="Search" @click=${() => this.#action('search')}>⌕</button>
            <button class="tool" type="button" title="Cut" @click=${() => this.#action('cut')}>✂</button>
            <button class="tool" type="button" title="Copy" @click=${() => this.#action('copy')}>⧉</button>
            <button class="tool" type="button" title="Paste" @click=${() => this.#action('paste')}>▣</button>
            <button class="tool" type="button" title="More" @click=${() => this.#action('more')}>⋯</button>
          </slot>
        </div>

        ${this.unsavedText ? html`<span class="unsaved">${this.unsavedText}</span>` : null}

        <div class="trailing" part="trailing">
          <slot name="trailing">
            <dre-button hierarchy="secondary" size="xsmall">${this.previewText}</dre-button>
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
