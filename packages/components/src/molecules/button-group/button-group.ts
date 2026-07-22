import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/button/button.js'

export type DreButtonGroupSize = 'small' | 'medium'
export type DreButtonGroupOrientation = 'horizontal' | 'vertical'
export type DreButtonGroupStyle = 'uniform' | 'split'

/**
 * DRE Button Group — Figma (`12045:29952`).
 * Gap 8 · Size Medium/Small · Orientation H/V · Style Uniform / Split.
 */
@customElement('dre-button-group')
export class DreButtonGroup extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .group {
        display: inline-flex;
        gap: 8px;
        align-items: center;
      }

      :host([orientation='vertical']) .group {
        flex-direction: column;
        align-items: stretch;
      }

      :host([orientation='vertical']) ::slotted(dre-button) {
        width: 100%;
      }
    `,
  ]

  @property({ reflect: true }) size: DreButtonGroupSize = 'medium'
  @property({ reflect: true }) orientation: DreButtonGroupOrientation = 'horizontal'
  /** Figma Style: Uniform (all secondary) · Split (primary + secondary + ghost) */
  @property({ reflect: true, attribute: 'group-style' })
  groupStyle: DreButtonGroupStyle = 'uniform'

  override updated(changed: Map<string, unknown>) {
    if (
      changed.has('size') ||
      changed.has('groupStyle') ||
      changed.has('orientation') ||
      changed.size === 0
    ) {
      this.#syncChildren()
    }
  }

  override firstUpdated() {
    this.#syncChildren()
  }

  #syncChildren() {
    const buttons = [...this.querySelectorAll('dre-button')] as Array<
      HTMLElement & { hierarchy: string; size: string }
    >
    buttons.forEach((btn, i) => {
      btn.size = this.size
      if (this.groupStyle === 'uniform') {
        btn.hierarchy = 'secondary'
      } else {
        btn.hierarchy = i === 0 ? 'primary' : i === 1 ? 'secondary' : 'ghost'
      }
    })
  }

  override render() {
    return html`<div class="group" part="group" role="group"><slot @slotchange=${this.#syncChildren}></slot></div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-button-group': DreButtonGroup
  }
}
