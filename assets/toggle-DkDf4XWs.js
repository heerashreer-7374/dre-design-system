import{i as z,a as w,A as l,b as u}from"./iframe-hYZkyXvR.js";import{n as s,t as $}from"./property-BSL9Me-Y.js";import{r as E}from"./state-BaBndn7-.js";import{h as L}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";var T=Object.defineProperty,C=Object.getOwnPropertyDescriptor,g=t=>{throw TypeError(t)},r=(t,e,a,i)=>{for(var n=i>1?void 0:i?C(e,a):e,p=t.length-1,b;p>=0;p--)(b=t[p])&&(n=(i?b(e,a,n):b(n))||n);return i&&n&&T(e,a,n),n},x=(t,e,a)=>e.has(t)||g("Cannot "+a),f=(t,e,a)=>(x(t,e,"read from private field"),a?a.call(t):e.get(t)),k=(t,e,a)=>e.has(t)?g("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),c=(t,e,a)=>(x(t,e,"access private method"),a),h,d,m,v,y,_;let o=class extends w{constructor(){super(...arguments),k(this,d),this.size="medium",this.appearance="light",this.icon=!1,this.checked=!1,this.disabled=!1,this.pressed=!1,this.helper="",this.ariaLabel=null,this.hasLabel=!1,k(this,h,`dre-toggle-label-${Math.random().toString(36).slice(2,9)}`)}render(){var e;const t=((e=this.ariaLabel)==null?void 0:e.trim())||"Toggle";return u`
      <button
        type="button"
        role="switch"
        aria-checked=${this.checked?"true":"false"}
        aria-labelledby=${this.hasLabel?f(this,h):l}
        aria-label=${this.hasLabel?l:t}
        ?disabled=${this.disabled}
        @click=${c(this,d,v)}
      >
        <span class="knob" part="knob">
          ${this.icon?u`
                <span class="knob-icon" part="icon">
                  <dre-icon name=${c(this,d,y).call(this)} size=${c(this,d,_).call(this)}></dre-icon>
                </span>
              `:l}
        </span>
      </button>
      <span class="text">
        <span class="label" id=${f(this,h)}
          ><slot @slotchange=${c(this,d,m)}></slot
        ></span>
        ${this.helper?u`<span class="helper">${this.helper}</span>`:l}
      </span>
    `}};h=new WeakMap;d=new WeakSet;m=function(t){const e=t.target;this.hasLabel=e.assignedNodes({flatten:!0}).some(a=>{var i;return a.nodeType===Node.TEXT_NODE?!!((i=a.textContent)!=null&&i.trim()):a.nodeType===Node.ELEMENT_NODE}),this.hasLabel?this.setAttribute("has-label",""):this.removeAttribute("has-label")};v=function(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("dre-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))};y=function(){return this.checked?"check":"x"};_=function(){return this.size==="small"?10:12};o.styles=[L,z`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        font-size: 14px;
        color: #212121;
        cursor: pointer;
      }

      :host([appearance='dark']) {
        color: #e3e4e6;
      }

      :host([disabled]) {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      :host([appearance='dark'][disabled]) {
        color: #727999;
      }

      :host(:not([has-label]):not([helper])) .text {
        display: none;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      :host([helper]) .text {
        padding-top: 3px;
      }

      .label {
        font-size: 14px;
        line-height: 16px;
      }

      :host([size='small']) .label {
        font-size: 12px;
        line-height: 14px;
      }

      .helper {
        font-size: 12px;
        line-height: 14px;
        color: #737373;
      }

      :host([appearance='dark']) .helper {
        color: #9ca1b7;
      }

      button {
        position: relative;
        border: 0;
        border-radius: 12px;
        background: #bdc0cf;
        padding: 2px;
        margin: 0;
        cursor: inherit;
        transition:
          background-color 120ms ease,
          box-shadow 120ms ease;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        box-sizing: border-box;
      }

      :host([appearance='dark']) button {
        background: #46494f;
      }

      :host([size='small']) button {
        width: 26px;
        height: 18px;
        border-radius: 11px;
      }

      :host([size='medium']) button,
      :host(:not([size])) button {
        width: 32px;
        height: 22px;
      }

      button[aria-checked='true'],
      :host([appearance='dark']) button[aria-checked='true'] {
        background: #0d6dfd;
      }

      button:hover:not(:disabled)[aria-checked='false'] {
        background: #adb5c7;
      }

      :host([appearance='dark']) button:hover:not(:disabled)[aria-checked='false'] {
        background: #5a5d64;
      }

      button:hover:not(:disabled)[aria-checked='true'],
      :host([appearance='dark']) button:hover:not(:disabled)[aria-checked='true'] {
        background: #2f82fd;
      }

      button:active:not(:disabled)[aria-checked='true'],
      :host([pressed]:not([disabled])) button[aria-checked='true'],
      :host([appearance='dark']) button:active:not(:disabled)[aria-checked='true'],
      :host([appearance='dark'][pressed]:not([disabled])) button[aria-checked='true'] {
        background: #024cbc;
      }

      button:active:not(:disabled)[aria-checked='false'],
      :host([pressed]:not([disabled])) button[aria-checked='false'] {
        background: #9ca1b7;
      }

      :host([appearance='dark']) button:active:not(:disabled)[aria-checked='false'],
      :host([appearance='dark'][pressed]:not([disabled])) button[aria-checked='false'] {
        background: #3a3d44;
      }

      button:disabled,
      button:disabled[aria-checked='true'] {
        background: #f3f3f6;
      }

      :host([appearance='dark']) button:disabled,
      :host([appearance='dark']) button:disabled[aria-checked='true'] {
        background: #2a2a2e;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        box-shadow: 0 0 0 2px rgb(13 109 253 / 10%);
      }

      .knob {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        background: #ffffff;
        transition: transform 120ms ease;
        box-shadow:
          0 1px 3px rgb(10 13 18 / 10%),
          0 1px 2px rgb(10 13 18 / 6%);
        color: #383c4d;
        line-height: 0;
        flex: 0 0 auto;
      }

      .knob dre-icon {
        color: #383c4d;
      }

      :host([disabled]) .knob,
      :host([disabled]) .knob dre-icon {
        color: #9ca1b7;
      }

      :host([size='small']) .knob {
        width: 14px;
        height: 14px;
        border-radius: 7px;
      }

      :host([size='medium']) .knob,
      :host(:not([size])) .knob {
        width: 18px;
        height: 18px;
        border-radius: 9px;
      }

      /* travel = track − pad×2 − knob */
      :host([size='small']) button[aria-checked='true'] .knob {
        transform: translateX(8px);
      }

      :host([size='medium']) button[aria-checked='true'] .knob,
      :host(:not([size])) button[aria-checked='true'] .knob {
        transform: translateX(10px);
      }

      .knob-icon {
        display: inline-flex;
        line-height: 0;
      }
    `];r([s({reflect:!0})],o.prototype,"size",2);r([s({reflect:!0})],o.prototype,"appearance",2);r([s({type:Boolean,reflect:!0})],o.prototype,"icon",2);r([s({type:Boolean,reflect:!0})],o.prototype,"checked",2);r([s({type:Boolean,reflect:!0})],o.prototype,"disabled",2);r([s({type:Boolean,reflect:!0})],o.prototype,"pressed",2);r([s({reflect:!0})],o.prototype,"helper",2);r([s({attribute:"aria-label"})],o.prototype,"ariaLabel",2);r([E()],o.prototype,"hasLabel",2);o=r([$("dre-toggle")],o);
