import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { hostBase } from '../../shared/styles.js'

export type DreFieldGroupSize = 'small' | 'medium'
export type DreFieldGroupOrientation = 'vertical' | 'horizontal'

/**
 * Shared assembled field/control group — Figma Checkbox/Radio/Toggle/Input/Dropdown Groups.
 * Header gap 4 · group gap 8 · items V gap 4 / H gap 12 · title 14/#1a1a1f · description 13/#737380.
 */
@customElement('dre-field-group')
export class DreFieldGroup extends LitElement {
  static override styles = [
    hostBase,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .header {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .legend {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #1a1a1f;
      }

      :host([size='small']) .legend {
        font-size: 12px;
        line-height: 14px;
      }

      .description {
        font-size: 13px;
        line-height: 17px;
        color: #737380;
      }

      :host([size='small']) .description {
        font-size: 11px;
        line-height: 13px;
      }

      .items {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      :host([orientation='horizontal']) .items {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 12px;
        align-items: flex-start;
      }

      /* Input/Dropdown groups use 8px item gap vertically */
      :host([dense-items]) .items {
        gap: 8px;
      }

      :host([dense-items][orientation='horizontal']) .items {
        gap: 12px;
      }
    `,
  ]

  @property() label = ''
  /** Figma Group Description */
  @property() description = ''
  /** Legacy alias */
  @property() hint = ''
  @property({ type: Boolean, attribute: 'show-description', reflect: true }) showDescription = true
  @property({ reflect: true }) size: DreFieldGroupSize = 'medium'
  @property({ reflect: true }) orientation: DreFieldGroupOrientation = 'vertical'
  /** Wider item spacing for input/dropdown stacks */
  @property({ type: Boolean, reflect: true, attribute: 'dense-items' }) denseItems = false

  override render() {
    const desc = this.description || this.hint
    const showDesc = this.showDescription && !!desc

    return html`
      ${this.label || showDesc
        ? html`
            <div class="header" part="header">
              ${this.label ? html`<div class="legend">${this.label}</div>` : null}
              ${showDesc ? html`<div class="description">${desc}</div>` : null}
            </div>
          `
        : null}
      <div class="items" part="items"><slot></slot></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dre-field-group': DreFieldGroup
  }
}
