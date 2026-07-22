import { css } from 'lit'

/** Shared focus ring + host reset used across DRE atoms. */
export const hostBase = css`
  :host {
    box-sizing: border-box;
    font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
    color: var(--dre-color-text-default);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  :host(:focus-visible) {
    outline: none;
  }
`

export const visuallyHidden = css`
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`
