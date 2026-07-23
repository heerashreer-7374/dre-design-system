import{i as m,a as y,b as d}from"./iframe-BfQCnnR_.js";import{n as a,t as w}from"./property-P_7FsvOw.js";import{h as _}from"./styles-Bjo1gRn0.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(t){return a({...t,state:!0,attribute:!1})}var T=Object.defineProperty,O=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},h=(t,e,r,i)=>{for(var o=i>1?void 0:i?O(e,r):e,c=t.length-1,p;c>=0;c--)(p=t[c])&&(o=(i?p(e,r,o):p(o))||o);return i&&o&&T(e,r,o),o},B=(t,e,r)=>e.has(t)||$("Cannot "+r),S=(t,e,r)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),V=(t,e,r)=>(B(t,e,"access private method"),r),f,k;let n=class extends y{constructor(){super(...arguments),S(this,f),this.label="List item",this.supportingText="",this.control="none",this.selected=!1,this.disabled=!1,this.value=""}render(){return d`
      <button type="button" role="option" aria-selected=${this.selected} ?disabled=${this.disabled} @click=${V(this,f,k)}>
        ${this.control!=="none"?d`<span class="control" aria-hidden="true"></span>`:null}
        <span class="text">
          <span class="label"><slot>${this.label}</slot></span>
          ${this.supportingText?d`<span class="supporting">${this.supportingText}</span>`:d`<slot name="supporting"></slot>`}
        </span>
      </button>
    `}};f=new WeakSet;k=function(){this.disabled||this.dispatchEvent(new CustomEvent("dre-select",{detail:{value:this.value||this.label,selected:!this.selected},bubbles:!0,composed:!0}))};n.styles=[_,m`
      :host {
        display: block;
      }

      button {
        display: flex;
        align-items: flex-start;
        gap: var(--dre-spacer-8);
        width: 100%;
        margin: 0;
        padding: var(--dre-spacer-6) var(--dre-spacer-10);
        border: 0;
        border-radius: var(--dre-radius-small);
        background: transparent;
        color: var(--dre-color-text-default);
        font: inherit;
        font-size: var(--dre-typography-body3-font-size, 12px);
        text-align: start;
        cursor: pointer;
      }

      button:hover:not(:disabled) {
        background: var(--dre-color-background-neutral-hovered);
      }

      button:active:not(:disabled),
      :host([selected]) button {
        background: var(--dre-color-background-selected);
      }

      button:disabled {
        color: var(--dre-color-text-disabled);
        cursor: not-allowed;
      }

      button:focus-visible {
        outline: 2px solid var(--dre-color-border-focus-ring);
        outline-offset: -2px;
      }

      .control {
        width: 14px;
        height: 14px;
        margin-top: 1px;
        flex: 0 0 auto;
        border: 1.5px solid var(--dre-color-border-control-default);
        background: var(--dre-color-action-control-unchecked);
        display: grid;
        place-content: center;
      }

      :host([control='checkbox']) .control {
        border-radius: var(--dre-radius-xsmall);
      }

      :host([control='radio']) .control {
        border-radius: var(--dre-radius-full);
      }

      :host([selected]) .control {
        border-color: var(--dre-color-action-control-checked);
        background: var(--dre-color-action-control-checked);
      }

      :host([control='checkbox'][selected]) .control::after {
        content: '';
        width: 7px;
        height: 4px;
        border-left: 1.5px solid var(--dre-color-icon-on-bold);
        border-bottom: 1.5px solid var(--dre-color-icon-on-bold);
        transform: rotate(-45deg) translate(0.5px, -0.5px);
      }

      :host([control='radio'][selected]) .control::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: var(--dre-radius-full);
        background: var(--dre-color-icon-on-bold);
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .label {
        font-weight: var(--dre-font-weight-medium, 500);
        line-height: 1.3;
      }

      .supporting {
        color: var(--dre-color-text-subtle);
        font-size: var(--dre-typography-caption1-font-size, 10px);
      }
    `];h([a()],n.prototype,"label",2);h([a({attribute:"supporting-text"})],n.prototype,"supportingText",2);h([a({reflect:!0})],n.prototype,"control",2);h([a({type:Boolean,reflect:!0})],n.prototype,"selected",2);h([a({type:Boolean,reflect:!0})],n.prototype,"disabled",2);h([a()],n.prototype,"value",2);n=h([w("dre-dropdown-item")],n);var W=Object.defineProperty,L=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},l=(t,e,r,i)=>{for(var o=i>1?void 0:i?L(e,r):e,c=t.length-1,p;c>=0;c--)(p=t[c])&&(o=(i?p(e,r,o):p(o))||o);return i&&o&&W(e,r,o),o},z=(t,e,r)=>e.has(t)||C("Cannot "+r),b=(t,e,r)=>(z(t,e,"read from private field"),r?r.call(t):e.get(t)),g=(t,e,r)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),x=(t,e,r)=>(z(t,e,"access private method"),r),u,D,E,v;let s=class extends y{constructor(){super(...arguments),g(this,u),this.label="",this.placeholder="Add Value",this.value="",this.displayValue="",this.menuTitle="",this.type="single",this.variant="default",this.size="medium",this.open=!1,this.disabled=!1,this.searchable=!1,this.filter="",g(this,v,t=>{if(!this.open)return;t.composedPath().includes(this)||(this.open=!1)})}connectedCallback(){super.connectedCallback(),document.addEventListener("click",b(this,v))}disconnectedCallback(){document.removeEventListener("click",b(this,v)),super.disconnectedCallback()}render(){const t=this.displayValue||this.value,e=!t,r=this.variant==="icon-leading"||this.variant==="search"||this.searchable;return d`
      ${this.label?d`<span class="label">${this.label}</span>`:null}
      <button
        class="trigger"
        type="button"
        part="trigger"
        aria-haspopup="listbox"
        aria-expanded=${this.open?"true":"false"}
        ?disabled=${this.disabled}
        @click=${x(this,u,D)}
      >
        ${r?d`<span class="leading"><slot name="leading">${this.variant==="search"||this.searchable?"⌕":""}</slot></span>`:null}
        <span class="value ${e?"placeholder":""}">${t||this.placeholder}</span>
        <span class="chevron" aria-hidden="true">▾</span>
      </button>
      <div class="menu" part="menu" role="listbox" @dre-select=${x(this,u,E)}>
        ${this.menuTitle?d`<div class="menu-title">${this.menuTitle}</div>`:null}
        <slot></slot>
      </div>
    `}};u=new WeakSet;D=function(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("dre-open-change",{detail:{open:this.open},bubbles:!0,composed:!0})))};E=function(t){const e=t.detail;if(this.type==="single")this.value=e.value,this.displayValue=e.value,this.open=!1;else{const r=this.value?this.value.split(",").map(o=>o.trim()).filter(Boolean):[],i=e.selected?[...new Set([...r,e.value])]:r.filter(o=>o!==e.value);this.value=i.join(", "),this.displayValue=this.value}this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:this.value},bubbles:!0,composed:!0}))};v=new WeakMap;s.styles=[_,m`
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: var(--dre-spacer-4);
        width: 100%;
        max-width: 280px;
        position: relative;
      }

      .label {
        font-size: var(--dre-typography-label3-font-size, 12px);
        font-weight: var(--dre-font-weight-medium, 500);
        color: var(--dre-color-text-label);
      }

      .trigger {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 34px;
        min-height: 34px;
        padding: 0 12px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #ffffff;
        color: #13141a;
        font: inherit;
        font-size: 14px;
        text-align: start;
        cursor: pointer;
        box-sizing: border-box;
      }

      :host([size='small']) .trigger {
        height: 24px;
        min-height: 24px;
        font-size: 12px;
      }

      .trigger:hover:not(:disabled) {
        border-color: #8c92ac;
      }

      .trigger:focus-visible,
      :host([open]) .trigger {
        outline: none;
        border-color: #0d6dfd;
        box-shadow: 0 0 0 1px #0d6dfd;
      }

      .trigger:disabled {
        background: #f3f3f6;
        color: #9ca1b7;
        border-color: #e6e8ed;
        cursor: not-allowed;
      }

      .value {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .value.placeholder {
        color: var(--dre-color-text-placeholder);
      }

      .chevron {
        color: var(--dre-color-icon-subtle);
        font-size: 10px;
        line-height: 1;
        transition: transform 120ms ease;
      }

      :host([open]) .chevron {
        transform: rotate(180deg);
      }

      .menu {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 20;
        display: none;
        flex-direction: column;
        gap: var(--dre-spacer-2);
        max-height: 260px;
        overflow: auto;
        padding: var(--dre-spacer-6);
        border: 1px solid var(--dre-color-border-subtle);
        border-radius: var(--dre-radius-medium);
        background: var(--dre-color-background-elevated);
        box-shadow: 0 8px 24px color-mix(in srgb, var(--dre-color-shadow-medium) 18%, transparent);
      }

      :host([open]) .menu {
        display: flex;
      }

      .menu-title {
        padding: var(--dre-spacer-4) var(--dre-spacer-10);
        font-size: var(--dre-typography-caption1-font-size, 10px);
        font-weight: var(--dre-font-weight-medium, 500);
        color: var(--dre-color-text-subtle);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .leading {
        display: inline-flex;
        color: var(--dre-color-icon-subtle);
        line-height: 0;
      }
    `];l([a()],s.prototype,"label",2);l([a()],s.prototype,"placeholder",2);l([a()],s.prototype,"value",2);l([a({attribute:"display-value"})],s.prototype,"displayValue",2);l([a({attribute:"menu-title"})],s.prototype,"menuTitle",2);l([a({reflect:!0})],s.prototype,"type",2);l([a({reflect:!0})],s.prototype,"variant",2);l([a({reflect:!0})],s.prototype,"size",2);l([a({type:Boolean,reflect:!0})],s.prototype,"open",2);l([a({type:Boolean,reflect:!0})],s.prototype,"disabled",2);l([a({type:Boolean,reflect:!0})],s.prototype,"searchable",2);l([P()],s.prototype,"filter",2);s=l([w("dre-dropdown")],s);
