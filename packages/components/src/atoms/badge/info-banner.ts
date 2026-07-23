import { LitElement, css, html, nothing, svg } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreInfoBannerType = 'info' | 'success' | 'warning' | 'error'
export type DreInfoBannerSize = 'small' | 'medium' | 'large'
export type DreInfoBannerAppearance = 'light' | 'dark'

/**
 * DRE Info Banner — Figma (`12301:9389`).
 * Soft status chip · Type Info/Success/Warning/Error · Size S/M/L · Appearance Light/Dark · optional trailing icon.
 */
@customElement('dre-info-banner')
export class DreInfoBanner extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .banner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        box-sizing: border-box;
        border-radius: 8px;
        font-weight: 500;
        line-height: normal;
        white-space: nowrap;
        background: #ebe9f8;
        color: #6852e0;
      }

      :host([size='small']) .banner,
      :host(:not([size])) .banner {
        min-height: 31px;
        padding: 8px 12px;
        font-size: 12px;
        gap: 8px;
        border-radius: 8px;
      }

      :host([size='medium']) .banner {
        min-height: 38px;
        padding: 10px 16px;
        font-size: 14px;
        gap: 10px;
        border-radius: 10px;
      }

      :host([size='large']) .banner {
        min-height: 44px;
        padding: 12px 20px;
        font-size: 16px;
        gap: 12px;
        border-radius: 12px;
      }

      :host([type='success']) .banner {
        background: #dcfce7;
        color: #166534;
      }
      :host([type='warning']) .banner {
        background: #fef3c7;
        color: #92400e;
      }
      :host([type='error']) .banner {
        background: #fee2e2;
        color: #991b1b;
      }
      :host([type='info']) .banner {
        background: #ebe9f8;
        color: #6852e0;
      }

      :host([appearance='dark']) .banner {
        background: #282a36;
        color: #c8c8dc;
      }

      .icon {
        display: inline-flex;
        flex: 0 0 auto;
        line-height: 0;
        color: currentColor;
      }

      .icon svg {
        display: block;
      }

      :host([size='small']) .icon svg,
      :host(:not([size])) .icon svg {
        width: 14px;
        height: 14px;
      }

      :host([size='medium']) .icon svg {
        width: 18px;
        height: 18px;
      }

      :host([size='large']) .icon svg {
        width: 20px;
        height: 20px;
      }
    `,
  ]

  @property({ reflect: true }) type: DreInfoBannerType = 'info'
  @property({ reflect: true }) size: DreInfoBannerSize = 'small'
  @property({ reflect: true }) appearance: DreInfoBannerAppearance = 'light'
  @property({ type: Boolean, reflect: true }) icon = true
  @property() label = ''

  #statusIcon() {
    const t = this.type
    if (t === 'success') {
      return svg`
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
          <path d="M5.5 8.2L7.2 9.8L10.5 6.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `
    }
    if (t === 'warning') {
      return svg`
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2.5L14 13.5H2L8 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M8 7V9.5M8 11.5V11.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      `
    }
    if (t === 'error') {
      return svg`
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
          <path d="M6 6L10 10M10 6L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      `
    }
    return svg`
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
        <path d="M8 7.2V11M8 5V5.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    `
  }

  override render() {
    const role = this.type === 'error' || this.type === 'warning' ? 'alert' : 'status'
    return html`
      <div class="banner" part="banner" role=${role}>
        <span part="label"><slot>${this.label || nothing}</slot></span>
        ${this.icon
          ? html`<span class="icon" part="icon"><slot name="icon">${this.#statusIcon()}</slot></span>`
          : nothing}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-info-banner': DreInfoBanner
  }
}
