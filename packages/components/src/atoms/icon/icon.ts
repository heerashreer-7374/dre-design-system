import { LitElement, css, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'
import { DRE_ICON_SVGS } from './icons.js'

/**
 * DRE Icon — pixel-accurate SVGs exported from Figma 🧱 Icons.
 *
 * @example <dre-icon name="search" size="20"></dre-icon>
 */
@customElement('dre-icon')
export class DreIcon extends LitElement {
  static override styles = css`
    :host {
      display: inline-flex;
      line-height: 0;
      color: currentColor;
      vertical-align: middle;
    }
    svg {
      display: block;
    }
  `

  /** Icon slug from Figma (e.g. search, chevron-down, sparkles). */
  @property({ reflect: true }) name = 'sparkles'

  /** Rendered size in px (Figma icons are 20×20). */
  @property({ type: Number, reflect: true }) size = 20

  /** Accessible label; omit for decorative icons. */
  @property() label = ''

  override render() {
    const icon = DRE_ICON_SVGS[this.name]
    const viewBox = icon?.viewBox ?? '0 0 20 20'
    const inner = icon?.inner ?? ''
    const px = `${this.size}px`

    return html`
      <svg
        viewBox=${viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style=${styleMap({ width: px, height: px })}
        role=${this.label ? 'img' : 'presentation'}
        aria-label=${this.label || nothing}
        aria-hidden=${this.label ? nothing : 'true'}
      >
        ${unsafeSVG(inner)}
      </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-icon': DreIcon
  }
}
