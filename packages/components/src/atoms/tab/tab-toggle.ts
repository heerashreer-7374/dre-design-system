import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../icon/icon.js'

export type DreTabToggleValue = 'flow' | 'code'

/**
 * DRE Tab Toggle — Figma (`12867:926`).
 * Binary Flow/Code switch · height 26 · track `#e6e8ed` · active chip white + brand text.
 */
@customElement('dre-tab-toggle')
export class DreTabToggle extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .track {
        display: inline-flex;
        align-items: flex-start;
        gap: 2px;
        height: 26px;
        padding: 2px;
        box-sizing: border-box;
        border-radius: 2px;
        background: #e6e8ed;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        height: 22px;
        margin: 0;
        padding: 4px;
        border: 0;
        border-radius: 2px;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        box-sizing: border-box;
        white-space: nowrap;
      }

      button[aria-selected='true'] {
        background: #ffffff;
        color: #0d6dfd;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 1px;
      }

      .icon {
        display: inline-flex;
        width: 16px;
        height: 16px;
        align-items: center;
        justify-content: center;
        color: inherit;
        flex-shrink: 0;
      }
    `,
  ]

  @property({ reflect: true }) value: DreTabToggleValue = 'flow'

  #select(value: DreTabToggleValue) {
    if (this.value === value) return
    this.value = value
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault()
      this.#select(this.value === 'flow' ? 'code' : 'flow')
    }
  }

  override render() {
    // Docs: Active=Flow → left side active. Order: Flow | Code.
    return html`
      <div class="track" role="tablist" aria-label="View mode" @keydown=${this.#onKeydown}>
        <button
          type="button"
          role="tab"
          aria-selected=${this.value === 'flow' ? 'true' : 'false'}
          @click=${() => this.#select('flow')}
        >
          <span class="icon"><dre-icon name="workflow" size="16"></dre-icon></span>
          Flow
        </button>
        <button
          type="button"
          role="tab"
          aria-selected=${this.value === 'code' ? 'true' : 'false'}
          @click=${() => this.#select('code')}
        >
          <span class="icon"><dre-icon name="code" size="16"></dre-icon></span>
          Code
        </button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-tab-toggle': DreTabToggle
  }
}
