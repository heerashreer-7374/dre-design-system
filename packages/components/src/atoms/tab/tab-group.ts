import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import './tab.js'

export type DreTabGroupStyle = 'default' | 'enclosed'

/**
 * DRE Tab Group — Figma (`12372:12622`).
 * Style Default (divider `#e0e0e0`) · Enclosed (track `#f5f5f7` pad 4).
 */
@customElement('dre-tab-group')
export class DreTabGroup extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .tabs {
        display: flex;
        align-items: flex-end;
        gap: 0;
      }

      :host([group-style='default']) .bar,
      :host(:not([group-style])) .bar {
        display: flex;
        flex-direction: column;
      }

      :host([group-style='default']) .divider,
      :host(:not([group-style])) .divider {
        height: 1px;
        background: #e0e0e0;
        margin-top: -1px;
      }

      :host([group-style='enclosed']) .tabs {
        background: #f5f5f7;
        padding: 4px;
        border-radius: 4px;
        align-items: center;
      }

      :host([group-style='enclosed']) .divider {
        display: none;
      }

      .panel {
        padding: 16px 0;
        color: #5d6481;
        font-size: 14px;
      }
    `,
  ]

  @property() value = ''
  /** Figma Style: Default | Enclosed */
  @property({ reflect: true, attribute: 'group-style' }) groupStyle: DreTabGroupStyle = 'default'

  override updated(changed: Map<string, unknown>) {
    if (changed.has('groupStyle')) {
      for (const tab of this.querySelectorAll('dre-tab')) {
        ;(tab as HTMLElement & { enclosed: boolean }).enclosed = this.groupStyle === 'enclosed'
      }
    }
  }

  #onSelect(e: Event) {
    const detail = (e as CustomEvent).detail as { value: string }
    this.value = detail.value
    for (const tab of this.querySelectorAll('dre-tab')) {
      ;(tab as HTMLElement & { active: boolean; value: string }).active =
        (tab as HTMLElement & { value: string }).value === this.value ||
        tab.textContent?.trim() === this.value
    }
    this.dispatchEvent(
      new CustomEvent('dre-change', {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    return html`
      <div class="bar" part="bar">
        <div class="tabs" role="tablist" @dre-tab-select=${this.#onSelect}>
          <slot></slot>
        </div>
        <div class="divider" part="divider"></div>
      </div>
      <div class="panel" part="panel"><slot name="panel"></slot></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-tab-group': DreTabGroup
  }
}
