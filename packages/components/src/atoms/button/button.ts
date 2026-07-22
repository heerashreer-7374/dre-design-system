import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { buttonStyles } from './button.styles.js'

export type DreButtonHierarchy = 'primary' | 'secondary' | 'ghost'
export type DreButtonSize = 'xsmall' | 'small' | 'medium'
export type DreButtonIcon = 'false' | 'leading' | 'trailing' | 'only'

/**
 * DRE Button — primary interactive atom.
 *
 * Mirrors Figma Button (`12002:17139`): Hierarchy, Size, State, Icon, Destructive.
 *
 * @slot - Button label
 * @slot leading - Leading icon
 * @slot trailing - Trailing icon
 * @fires dre-click - Fired when the button is activated
 */
@customElement('dre-button')
export class DreButton extends LitElement {
  static override styles = buttonStyles

  /** Visual hierarchy from Figma. */
  @property({ reflect: true })
  hierarchy: DreButtonHierarchy = 'primary'

  /** Control size. */
  @property({ reflect: true })
  size: DreButtonSize = 'medium'

  /** Icon placement pattern. */
  @property({ reflect: true })
  icon: DreButtonIcon = 'false'

  /** Native button type. */
  @property({ reflect: true })
  type: 'button' | 'submit' | 'reset' = 'button'

  /** Disabled state. */
  @property({ type: Boolean, reflect: true })
  disabled = false

  /** Danger / destructive variant. */
  @property({ type: Boolean, reflect: true })
  danger = false

  /** Alias for Figma "Destructive" prop. */
  @property({ type: Boolean, reflect: true })
  destructive = false

  /** Accessible name override (useful for icon-only). */
  @property({ attribute: 'aria-label' })
  override ariaLabel: string | null = null

  #onClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault()
      event.stopImmediatePropagation()
      return
    }
    this.dispatchEvent(
      new CustomEvent('dre-click', {
        detail: { originalEvent: event },
        bubbles: true,
        composed: true,
      }),
    )
  }

  override render() {
    const showLeading = this.icon === 'leading' || this.icon === 'only'
    const showTrailing = this.icon === 'trailing'

    return html`
      <button
        part="button"
        type=${this.type}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel ?? ''}
        @click=${this.#onClick}
      >
        ${showLeading
          ? html`<span class="leading" part="leading"><slot name="leading"></slot></span>`
          : null}
        <span class="label" part="label"><slot></slot></span>
        ${showTrailing
          ? html`<span class="trailing" part="trailing"><slot name="trailing"></slot></span>`
          : null}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-button': DreButton
  }
}
