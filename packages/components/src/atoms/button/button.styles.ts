import { css } from 'lit'
import { hostBase } from '../../shared/styles.js'

/**
 * Pixel specs from Figma ⭐ Button (`1267:334303` / `12002:17139`):
 * Medium 30 · Small 26 · XSmall 24 · Icon-only Medium 28 · Small 26 · XSmall 22
 * Radius 4 · pad 10×5 · gap 10 (text) / 6 (with icon)
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
      border-radius: 4px;
      font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      font-weight: 400;
      cursor: pointer;
      white-space: nowrap;
      box-sizing: border-box;
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

    button:focus {
      outline: none;
    }

    button:focus-visible {
      outline: 2px solid #0d6dfd;
      outline-offset: 2px;
    }

    /* —— Sizes —— */
    :host([size='xsmall']) button {
      height: 24px;
      min-height: 24px;
      padding: 0 10px;
      font-size: 10px;
      line-height: 12px;
    }

    :host([size='small']) button {
      height: 26px;
      min-height: 26px;
      padding: 0 10px;
      font-size: 12px;
      line-height: 14px;
    }

    :host([size='medium']) button,
    :host(:not([size])) button {
      height: 30px;
      min-height: 30px;
      padding: 0 10px;
      font-size: 14px;
      line-height: 18px;
    }

    :host([icon='only'][size='xsmall']) button {
      width: 22px;
      height: 22px;
      min-height: 22px;
      padding: 0;
    }

    :host([icon='only'][size='small']) button {
      width: 26px;
      height: 26px;
      min-height: 26px;
      padding: 0;
    }

    :host([icon='only'][size='medium']) button,
    :host([icon='only']:not([size])) button {
      width: 28px;
      height: 28px;
      min-height: 28px;
      padding: 0;
    }

    /* —— Primary (Light + Dark share brand fill) —— */
    :host([hierarchy='primary']) button,
    :host(:not([hierarchy])) button {
      background: #0d6dfd;
      color: #ffffff;
      border-color: rgb(255 255 255 / 20%);
      box-shadow: 0 1px 1px #0d6dfd;
      text-shadow: 0 1px 1px #0d6dfd;
    }

    :host([hierarchy='primary']) button:hover:not(:disabled),
    :host(:not([hierarchy])) button:hover:not(:disabled) {
      background: #2f82fd;
      border-color: rgb(255 255 255 / 20%);
      box-shadow: 0 1px 1px #0d6dfd;
    }

    /* Pressed: brand fill with 1px outer ring (#eef5ff light · #051335 dark) */
    :host([hierarchy='primary']) button:active:not(:disabled),
    :host(:not([hierarchy])) button:active:not(:disabled),
    :host([hierarchy='primary'][pressed]:not([disabled])) button,
    :host(:not([hierarchy])[pressed]:not([disabled])) button {
      background: #0d6dfd;
      border-color: rgb(255 255 255 / 20%);
      box-shadow: 0 0 0 1px #eef5ff;
      text-shadow: 0 1px 1px #0d6dfd;
    }

    :host([appearance='dark'][hierarchy='primary']) button:active:not(:disabled),
    :host([appearance='dark']:not([hierarchy])) button:active:not(:disabled),
    :host([appearance='dark'][hierarchy='primary'][pressed]:not([disabled])) button,
    :host([appearance='dark']:not([hierarchy])[pressed]:not([disabled])) button {
      box-shadow: 0 0 0 1px #051335;
    }

    :host([hierarchy='primary']) button:disabled,
    :host(:not([hierarchy])) button:disabled {
      background: #f3f3f6;
      border-color: #f3f3f6;
      color: #9ca1b7;
      cursor: not-allowed;
      box-shadow: none;
      text-shadow: none;
    }

    :host([appearance='dark'][hierarchy='primary']) button:disabled,
    :host([appearance='dark']:not([hierarchy])) button:disabled {
      background: #212326;
      border-color: #212326;
      color: #696d76;
    }

    /* —— Secondary Light —— */
    :host([hierarchy='secondary']) button {
      background: #eef5ff;
      color: #0d6dfd;
      border-color: #0d6dfd;
      box-shadow: none;
      text-shadow: none;
    }

    :host([hierarchy='secondary']) button:hover:not(:disabled) {
      background: #bdd8fe;
    }

    :host([hierarchy='secondary']) button:active:not(:disabled),
    :host([hierarchy='secondary'][pressed]:not([disabled])) button {
      background: #97c0fe;
    }

    :host([hierarchy='secondary']) button:disabled {
      background: #f3f3f6;
      border-color: #e6e8ed;
      color: #9ca1b7;
      cursor: not-allowed;
    }

    /* —— Secondary Dark —— */
    :host([appearance='dark'][hierarchy='secondary']) button {
      background: #012e71;
      color: #2f82fd;
      border-color: #2f82fd;
      box-shadow: 0 0 2px rgb(56 60 77 / 10%);
    }

    :host([appearance='dark'][hierarchy='secondary']) button:hover:not(:disabled) {
      background: #012e71;
      box-shadow: 0 0 4px rgb(56 60 77 / 10%);
    }

    :host([appearance='dark'][hierarchy='secondary']) button:active:not(:disabled),
    :host([appearance='dark'][hierarchy='secondary'][pressed]:not([disabled])) button {
      background: #13141a;
      border-color: #2f82fd;
      box-shadow: 0 0 0 2px #012e71;
    }

    :host([appearance='dark'][hierarchy='secondary']) button:disabled {
      background: #212326;
      border-color: #575b62;
      color: #696d76;
      box-shadow: none;
    }

    /* —— Ghost Light —— */
    :host([hierarchy='ghost']) button {
      background: transparent;
      color: #0d6dfd;
      border-color: transparent;
      box-shadow: none;
      text-shadow: none;
    }

    :host([hierarchy='ghost']) button:hover:not(:disabled) {
      background: #f3f3f6;
    }

    :host([hierarchy='ghost']) button:active:not(:disabled),
    :host([hierarchy='ghost'][pressed]:not([disabled])) button {
      background: #e6e8ed;
    }

    :host([hierarchy='ghost']) button:disabled {
      background: transparent;
      color: #9ca1b7;
      cursor: not-allowed;
    }

    /* —— Ghost Dark —— */
    :host([appearance='dark'][hierarchy='ghost']) button {
      background: transparent;
      color: #2f82fd;
      border-color: transparent;
    }

    :host([appearance='dark'][hierarchy='ghost']) button:hover:not(:disabled) {
      background: #012e71;
    }

    :host([appearance='dark'][hierarchy='ghost']) button:active:not(:disabled),
    :host([appearance='dark'][hierarchy='ghost'][pressed]:not([disabled])) button {
      background: #051335;
    }

    :host([appearance='dark'][hierarchy='ghost']) button:disabled {
      background: transparent;
      color: #696d76;
    }

    /* —— Destructive (danger) —— */
    :host([destructive]) button,
    :host([danger]) button {
      background: #d64333;
      color: #ffffff;
      border-color: rgb(255 255 255 / 20%);
      box-shadow: 0 1px 1px #d64333;
      text-shadow: none;
    }

    :host([destructive]) button:hover:not(:disabled),
    :host([danger]) button:hover:not(:disabled) {
      background: #be3526;
      border-color: rgb(255 255 255 / 20%);
    }

    :host([destructive]) button:active:not(:disabled),
    :host([danger]) button:active:not(:disabled),
    :host([destructive][pressed]:not([disabled])) button,
    :host([danger][pressed]:not([disabled])) button {
      background: #d64333;
      border-color: rgb(255 255 255 / 20%);
      box-shadow: 0 0 0 1px #f9e4e2;
    }

    :host([destructive]) button:disabled,
    :host([danger]) button:disabled {
      background: #f3f3f6;
      border-color: #f3f3f6;
      color: #9ca1b7;
      box-shadow: none;
    }

    :host([appearance='dark'][destructive]) button:disabled,
    :host([appearance='dark'][danger]) button:disabled {
      background: #212326;
      border-color: #212326;
      color: #696d76;
    }

    :host([destructive][hierarchy='secondary']) button,
    :host([danger][hierarchy='secondary']) button {
      background: #f9e4e2;
      color: #d64333;
      border-color: #d64333;
      box-shadow: none;
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
