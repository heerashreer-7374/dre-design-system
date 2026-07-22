import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'
import '../../atoms/icon/icon.js'

export type DreToastType = 'success' | 'warning' | 'error' | 'info'
/** @deprecated use type */
export type DreToastTone = DreToastType | 'neutral' | 'danger' | 'information'

const TYPE_ICON: Record<DreToastType, string> = {
  success: 'correct',
  warning: 'warning',
  error: 'error',
  info: 'info',
}

/**
 * DRE Toast Message — Figma (`10110:280`).
 * 314×48 · pad 16 · radius 4 · Success `#e7f4e7` · Warning `#fcf4df` · Error `#f9e4e2` · Info `#e2eef9`.
 */
@customElement('dre-toast')
export class DreToast extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: block;
        width: 314px;
        max-width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .toast {
        display: flex;
        align-items: center;
        gap: 10px;
        min-height: 48px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 4px;
        background: #e7f4e7;
      }

      :host([type='success']) .toast,
      :host([tone='success']) .toast {
        background: #e7f4e7;
      }
      :host([type='warning']) .toast,
      :host([tone='warning']) .toast {
        background: #fcf4df;
      }
      :host([type='error']) .toast,
      :host([tone='error']) .toast,
      :host([tone='danger']) .toast {
        background: #f9e4e2;
      }
      :host([type='info']) .toast,
      :host([tone='info']) .toast,
      :host([tone='information']) .toast,
      :host([tone='neutral']) .toast {
        background: #e2eef9;
      }

      .icon {
        flex: 0 0 auto;
        display: inline-flex;
        color: #13141a;
        line-height: 0;
      }

      .message {
        flex: 1;
        min-width: 0;
        font-size: 14px;
        line-height: 16px;
        color: #13141a;
      }

      .close {
        flex: 0 0 auto;
        width: 16px;
        height: 16px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .close:hover {
        color: #383c4d;
      }
    `,
  ]

  /** Figma Type prop */
  @property({ reflect: true }) type: DreToastType = 'success'
  /** Legacy alias */
  @property({ reflect: true }) tone: DreToastTone = 'success'
  @property() title = ''
  @property() message = ''

  #resolvedType(): DreToastType {
    const t = (this.type || this.tone) as string
    if (t === 'danger' || t === 'error') return 'error'
    if (t === 'information' || t === 'neutral' || t === 'info') return 'info'
    if (t === 'warning') return 'warning'
    return 'success'
  }

  #close() {
    this.dispatchEvent(new CustomEvent('dre-close', { bubbles: true, composed: true }))
  }

  override render() {
    const type = this.#resolvedType()
    const icon = TYPE_ICON[type]
    const text = this.message || this.title

    return html`
      <div class="toast" part="toast" role="status">
        <span class="icon" part="icon">
          <slot name="icon"><dre-icon name=${icon} size="16"></dre-icon></slot>
        </span>
        <div class="message" part="message"><slot>${text}</slot></div>
        <button class="close" type="button" aria-label="Dismiss" @click=${this.#close}>
          <dre-icon name="x" size="10"></dre-icon>
        </button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-toast': DreToast
  }
}
