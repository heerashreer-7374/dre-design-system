import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreBadgeStatus = 'success' | 'warning' | 'error' | 'info'
export type DreBadgeSize = 'small' | 'medium' | 'large'
export type DreBadgeAppearance = 'light' | 'dark'
/** Legacy */
export type DreBadgeTone = DreBadgeStatus | 'neutral' | 'brand' | 'danger'

/**
 * DRE Status Badge — Figma (`12290:8429` / `12301:9489`).
 * Small h20 pad 8×4 fs10 · Medium h27 pad 12×6 fs12 · Large h33 pad 16×8 fs14 · Semibold · Appearance Light/Dark.
 */
@customElement('dre-badge')
export class DreBadge extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 100px;
        font-weight: 600;
        line-height: normal;
        color: #ffffff;
        white-space: nowrap;
      }

      :host([size='small']) span,
      :host(:not([size])) span {
        min-height: 20px;
        padding: 4px 8px;
        font-size: 10px;
      }

      :host([size='medium']) span {
        min-height: 27px;
        padding: 6px 12px;
        font-size: 12px;
      }

      :host([size='large']) span {
        min-height: 33px;
        padding: 8px 16px;
        font-size: 14px;
      }

      /* Legacy tone — only when status is unset */
      :host([tone='success']:not([status])) span {
        background: #55b45a;
      }
      :host([tone='warning']:not([status])) span {
        background: #edb51d;
      }
      :host([tone='error']:not([status])) span,
      :host([tone='danger']:not([status])) span {
        background: #d64333;
      }
      :host([tone='info']:not([status])) span,
      :host([tone='brand']:not([status])) span,
      :host([tone='neutral']:not([status])) span,
      :host(:not([status]):not([tone])) span {
        background: #3187d8;
      }

      :host([status='success']) span {
        background: #55b45a;
      }
      :host([status='warning']) span {
        background: #edb51d;
      }
      :host([status='error']) span {
        background: #d64333;
      }
      :host([status='info']) span {
        background: #3187d8;
      }
    `,
  ]

  @property({ reflect: true }) status: DreBadgeStatus = 'info'
  @property({ reflect: true }) size: DreBadgeSize = 'small'
  /** Figma Appearance — Light/Dark share fills in Status Badge. */
  @property({ reflect: true }) appearance: DreBadgeAppearance = 'light'
  /** Legacy alias mapped to status */
  @property({ reflect: true }) tone: DreBadgeTone = 'info'

  override render() {
    return html`<span part="badge"><slot></slot></span>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-badge': DreBadge
  }
}
