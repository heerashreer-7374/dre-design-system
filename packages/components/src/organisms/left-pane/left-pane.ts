import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'
import '../../molecules/accordion/accordion.js'
import '../../molecules/accordion/accordion-group.js'

export type DreLeftPaneMode = 'code-editor' | 'visual-builder'
export type DreLeftPaneState = 'extended' | 'collapsed'

/**
 * DRE Left Pane — Figma (`12613:41263`) / App Layout Composition.
 * Collapsed rail 48× · white · r4 · pad 9×13 · icon stack gap 3.
 */
@customElement('dre-left-pane')
export class DreLeftPane extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
        width: 258px;
        background: #ffffff;
        color: #13141a;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
      }

      :host([state='collapsed']) {
        width: 48px;
        border-radius: 4px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        min-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #e6e8ed;
      }

      .title {
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      :host([state='collapsed']) .header {
        display: none;
      }

      .toggle {
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

      .toggle:hover {
        background: #f3f3f6;
        color: #13141a;
      }

      .body {
        flex: 1;
        overflow: auto;
        padding: 8px;
      }

      :host([state='collapsed']) .body {
        display: none;
      }

      .rail {
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        flex: 1;
        padding: 13px 9px;
        box-sizing: border-box;
      }

      :host([state='collapsed']) .rail {
        display: flex;
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
    `,
  ]

  @property({ reflect: true }) mode: DreLeftPaneMode = 'code-editor'
  @property({ reflect: true }) state: DreLeftPaneState = 'extended'
  @property({ attribute: 'header-title' }) headerTitle = 'Actions'
  @property({ attribute: false }) railIcons: string[] = ['syntax', 'cable', 'code']

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

  override render() {
    return html`
      <div class="header" part="header">
        <slot name="header"><span class="title">${this.headerTitle}</span></slot>
        <button
          class="toggle"
          type="button"
          aria-label=${this.state === 'extended' ? 'Collapse pane' : 'Expand pane'}
          @click=${this.#toggle}
        >
          <dre-icon name=${this.state === 'extended' ? 'pane-close' : 'pane-close-1'} size="16"></dre-icon>
        </button>
      </div>

      <div class="rail" part="rail">
        ${this.railIcons.map(
          (name, i) => html`
            <button
              class="rail-btn"
              type="button"
              aria-current=${i === 0 ? 'true' : 'false'}
              title=${name}
            >
              <dre-icon name=${name} size="20"></dre-icon>
            </button>
          `,
        )}
      </div>

      <div class="body" part="body">
        <slot>
          <dre-accordion-group exclusive>
            <dre-accordion title="Basics" expanded>Core building blocks for this workflow.</dre-accordion>
            <dre-accordion title="Flow control">Branching and wait utilities.</dre-accordion>
            <dre-accordion title="Integrations">Connect Zoho apps and webhooks.</dre-accordion>
          </dre-accordion-group>
        </slot>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-left-pane': DreLeftPane
  }
}
