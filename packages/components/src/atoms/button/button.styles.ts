import { css } from 'lit'
import { hostBase } from '../../shared/styles.js'

/**
 * Pixel specs from Figma Button `12002:17139`:
 * Medium 30× · Small 26× · XSmall 24× · radius 4 · pad 10×5 · gap 6(icon)/10
 */
export const buttonStyles = [
  hostBase,
  css`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 0;
      border: 1px solid transparent;
      border-radius: var(--dre-radius-small); /* 4px */
      font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      white-space: nowrap;
      transition:
        background-color 120ms ease,
        border-color 120ms ease,
        color 120ms ease,
        box-shadow 120ms ease;
    }

    :host([icon='leading']) button,
    :host([icon='trailing']) button,
    :host([icon='only']) button {
      gap: 6px;
    }

    button:focus-visible {
      outline: 2px solid var(--dre-color-border-focus-ring);
      outline-offset: 2px;
    }

    /* —— Sizes (Figma heights) —— */
    :host([size='xsmall']) button {
      height: 24px;
      min-height: 24px;
      padding: 0 10px;
      font-size: 10px;
    }

    :host([size='small']) button {
      height: 26px;
      min-height: 26px;
      padding: 0 10px;
      font-size: 12px;
    }

    :host([size='medium']) button,
    :host(:not([size])) button {
      height: 30px;
      min-height: 30px;
      padding: 0 10px;
      font-size: 14px;
    }

    :host([icon='only'][size='xsmall']) button {
      width: 24px;
      padding: 0;
    }
    :host([icon='only'][size='small']) button {
      width: 26px;
      padding: 0;
    }
    :host([icon='only'][size='medium']) button,
    :host([icon='only']:not([size])) button {
      width: 28px;
      height: 28px;
      min-height: 28px;
      padding: 0;
    }

    /* —— Primary —— */
    :host([hierarchy='primary']) button,
    :host(:not([hierarchy])) button {
      background: #0d6dfd;
      color: #ffffff;
      border-color: #0d6dfd;
    }

    :host([hierarchy='primary']) button:hover:not(:disabled),
    :host(:not([hierarchy])) button:hover:not(:disabled) {
      background: #2f82fd;
      border-color: #2f82fd;
    }

    /* Pressed = primary fill with brand-subtle 1px halo (Figma outer #eef5ff) */
    :host([hierarchy='primary']) button:active:not(:disabled),
    :host(:not([hierarchy])) button:active:not(:disabled) {
      background: #0d6dfd;
      border-color: #eef5ff;
      box-shadow: 0 0 0 1px #eef5ff;
    }

    :host([hierarchy='primary']) button:disabled,
    :host(:not([hierarchy])) button:disabled {
      background: #f3f3f6;
      border-color: #f3f3f6;
      color: #9ca1b7;
      cursor: not-allowed;
      box-shadow: none;
    }

    /* —— Secondary: blue border, subtle fill, brand text —— */
    :host([hierarchy='secondary']) button {
      background: #eef5ff;
      color: #0d6dfd;
      border-color: #0d6dfd;
    }

    :host([hierarchy='secondary']) button:hover:not(:disabled) {
      background: #bdd8fe;
    }

    :host([hierarchy='secondary']) button:active:not(:disabled) {
      background: #97c0fe;
    }

    :host([hierarchy='secondary']) button:disabled {
      background: #f3f3f6;
      border-color: #e6e8ed;
      color: #9ca1b7;
      cursor: not-allowed;
    }

    /* —— Ghost: transparent, brand text —— */
    :host([hierarchy='ghost']) button {
      background: transparent;
      color: #0d6dfd;
      border-color: transparent;
    }

    :host([hierarchy='ghost']) button:hover:not(:disabled) {
      background: #f3f3f6;
    }

    :host([hierarchy='ghost']) button:active:not(:disabled) {
      background: #e6e8ed;
    }

    :host([hierarchy='ghost']) button:disabled {
      background: transparent;
      color: #9ca1b7;
      cursor: not-allowed;
    }

    /* —— Destructive (danger) —— */
    :host([destructive]) button,
    :host([danger]) button {
      background: #d64333;
      color: #ffffff;
      border-color: #d64333;
    }

    :host([destructive]) button:hover:not(:disabled),
    :host([danger]) button:hover:not(:disabled) {
      background: #be3526;
      border-color: #be3526;
    }

    :host([destructive]) button:active:not(:disabled),
    :host([danger]) button:active:not(:disabled) {
      background: #9e2c1f;
      border-color: #f9e4e2;
      box-shadow: 0 0 0 1px #f9e4e2;
    }

    :host([destructive][hierarchy='secondary']) button,
    :host([danger][hierarchy='secondary']) button {
      background: #f9e4e2;
      color: #d64333;
      border-color: #d64333;
    }

    :host([destructive][hierarchy='ghost']) button,
    :host([danger][hierarchy='ghost']) button {
      background: transparent;
      color: #d64333;
      border-color: transparent;
      box-shadow: none;
    }

    .leading,
    .trailing {
      display: inline-flex;
      align-items: center;
      line-height: 0;
      color: inherit;
    }

    :host([icon='only']) .label {
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
  `,
]
