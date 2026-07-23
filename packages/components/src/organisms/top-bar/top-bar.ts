import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

export type DreTopBarTab = { id: string; label: string; active?: boolean; icon?: string }

/**
 * DRE Top Bar — Figma (`12422:16587`), light appearance.
 * Height 42 · bg `#f3f3f6` · active tab white r4 · trailing Settings + More.
 */
@customElement('dre-top-bar')
export class DreTopBar extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        color: #333842;
      }

      .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 42px;
        min-height: 42px;
        padding: 0;
        background: #f3f3f6;
        box-sizing: border-box;
      }

      .leading {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        padding-left: 10px;
        min-width: 0;
        flex: 1;
        overflow: hidden;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        height: 16px;
        line-height: 0;
        flex: 0 0 auto;
      }

      .brand-logo {
        display: block;
        width: 60px;
        height: 16px;
      }

      .divider {
        width: 1px;
        height: 24px;
        background: #d1d6de;
        flex: 0 0 auto;
      }

      .tabs {
        display: flex;
        align-items: center;
        gap: 0;
        flex: 1;
        min-width: 0;
        overflow-x: auto;
      }

      .tab {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 32px;
        padding: 0 12px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #59616e;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        white-space: nowrap;
      }

      .tab:hover {
        color: #333842;
      }

      .tab[aria-selected='true'] {
        background: #ffffff;
        color: #333842;
        font-weight: 500;
        padding: 0 8px 0 12px;
      }

      .tab-icon {
        display: inline-flex;
        color: inherit;
        line-height: 0;
      }

      .tab-close {
        display: none;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        border: 0;
        padding: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 0;
        opacity: 0.7;
      }

      .tab[aria-selected='true'] .tab-close {
        display: inline-flex;
      }

      .tab-close:hover {
        opacity: 1;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 8px 12px 8px 8px;
        flex: 0 0 auto;
        box-sizing: border-box;
      }

      .icon-btn {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #383c4d;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        border-radius: 2px;
      }

      .icon-btn:hover {
        background: rgb(0 0 0 / 6%);
      }
    `,
  ]

  @property({ attribute: false })
  tabs: DreTopBarTab[] = [{ id: 'settings', label: 'Settings', active: true, icon: 'settings' }]

  @property({ attribute: 'active-tab' })
  activeTab = ''

  /** Brand label used for accessible name; logo is the Deluge mark from Figma. */
  @property() brand = 'Deluge'

  #select(id: string) {
    this.activeTab = id
    this.tabs = this.tabs.map((t) => ({ ...t, active: t.id === id }))
    this.dispatchEvent(
      new CustomEvent('dre-tab-change', {
        detail: { id },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #iconFor(tab: DreTopBarTab) {
    if (tab.icon) return tab.icon
    const label = tab.label.toLowerCase()
    if (label.includes('setting')) return 'settings'
    return 'code'
  }

  override render() {
    const active = this.activeTab || this.tabs.find((t) => t.active)?.id || this.tabs[0]?.id

    return html`
      <header class="bar" part="bar">
        <div class="leading" part="leading">
          <slot name="leading">
            <span class="brand" role="img" aria-label=${this.brand}>
              <img
                class="brand-logo"
                src=${new URL('../../assets/deluge-logo.svg', import.meta.url).href}
                alt=""
                width="60"
                height="16"
              />
            </span>
          </slot>
          <span class="divider" aria-hidden="true"></span>
          <div class="tabs" part="tabs" role="tablist">
            ${this.tabs.map((tab) => {
              const selected = tab.id === active
              return html`
                <button
                  class="tab"
                  type="button"
                  role="tab"
                  aria-selected=${selected ? 'true' : 'false'}
                  @click=${() => this.#select(tab.id)}
                >
                  <span class="tab-icon">
                    <dre-icon name=${this.#iconFor(tab)} size="16"></dre-icon>
                  </span>
                  ${tab.label}
                  ${selected
                    ? html`
                        <span
                          class="tab-close"
                          role="button"
                          aria-label="Close ${tab.label}"
                          @click=${(e: Event) => e.stopPropagation()}
                        >
                          <dre-icon name="close" size="12"></dre-icon>
                        </span>
                      `
                    : null}
                </button>
              `
            })}
            <slot></slot>
          </div>
        </div>
        <div class="trailing" part="trailing">
          <slot name="trailing">
            <button class="icon-btn" type="button" aria-label="Settings">
              <dre-icon name="settings" size="16"></dre-icon>
            </button>
            <button class="icon-btn" type="button" aria-label="More">
              <dre-icon name="more" size="16"></dre-icon>
            </button>
          </slot>
        </div>
      </header>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-top-bar': DreTopBar
  }
}
