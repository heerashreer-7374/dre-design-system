import{i as y,a as _,A as l,b as u}from"./iframe-hYZkyXvR.js";import{n as s,t as w}from"./property-BSL9Me-Y.js";import{r as z}from"./state-BaBndn7-.js";import{h as $}from"./styles-BGRCfbQF.js";var E=Object.defineProperty,L=Object.getOwnPropertyDescriptor,g=e=>{throw TypeError(e)},o=(e,t,a,i)=>{for(var d=i>1?void 0:i?L(t,a):t,p=e.length-1,h;p>=0;p--)(h=e[p])&&(d=(i?h(t,a,d):h(d))||d);return i&&d&&E(t,a,d),d},x=(e,t,a)=>t.has(e)||g("Cannot "+a),b=(e,t,a)=>(x(e,t,"read from private field"),a?a.call(e):t.get(e)),f=(e,t,a)=>t.has(e)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),k=(e,t,a)=>(x(e,t,"access private method"),a),n,c,v,m;let r=class extends _{constructor(){super(...arguments),f(this,c),this.size="medium",this.appearance="light",this.checked=!1,this.disabled=!1,this.pressed=!1,this.helper="",this.name="",this.value="",this.accessibleLabel="",this.hasLabel=!1,f(this,n,`dre-radio-label-${Math.random().toString(36).slice(2,9)}`)}render(){const e=this.accessibleLabel.trim()||"Radio";return u`
      <label>
        <span class="control">
          <input
            type="radio"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            aria-labelledby=${this.hasLabel?b(this,n):l}
            aria-label=${this.hasLabel?l:e}
            @change=${k(this,c,m)}
          />
        </span>
        <span class="text">
          <span class="label" id=${b(this,n)}
            ><slot @slotchange=${k(this,c,v)}></slot
          ></span>
          ${this.helper?u`<span class="helper">${this.helper}</span>`:l}
        </span>
      </label>
    `}};n=new WeakMap;c=new WeakSet;v=function(e){const t=e.target;this.hasLabel=t.assignedNodes({flatten:!0}).some(a=>{var i;return a.nodeType===Node.TEXT_NODE?!!((i=a.textContent)!=null&&i.trim()):a.nodeType===Node.ELEMENT_NODE}),this.hasLabel?this.setAttribute("has-label",""):this.removeAttribute("has-label")};m=function(e){const t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent("dre-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))};r.styles=[$,y`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        font-size: 14px;
        color: #212126;
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

      label {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        cursor: inherit;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      :host([helper]) .text {
        padding-top: 4px;
      }

      .label {
        font-size: 14px;
        line-height: 20px;
        color: inherit;
      }

      :host([size='small']) .label {
        font-size: 12px;
        line-height: 14px;
      }

      .helper {
        font-size: 12px;
        line-height: 16px;
        color: #737380;
      }

      :host([appearance='dark']) .helper {
        color: #9ca1b7;
      }

      .control {
        display: grid;
        place-content: center;
        flex: 0 0 auto;
      }

      :host([size='small']) .control {
        width: 20px;
        height: 20px;
      }

      :host([size='medium']) .control,
      :host(:not([size])) .control {
        width: 34px;
        height: 34px;
      }

      input {
        appearance: none;
        margin: 0;
        display: grid;
        place-content: center;
        border: 1px solid #727999;
        border-radius: 9999px;
        background: transparent;
        cursor: inherit;
        box-sizing: border-box;
        transition:
          border-color 120ms ease,
          box-shadow 120ms ease,
          background-color 120ms ease;
      }

      :host([appearance='light']) input {
        background: #ffffff;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        width: 14px;
        height: 14px;
      }

      input:hover:not(:disabled):not(:checked) {
        border-color: #0d6dfd;
      }

      input:active:not(:disabled):not(:checked),
      :host([pressed]:not([disabled]):not([checked])) input {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 6px rgb(13 109 253 / 40%);
      }

      input:checked,
      :host([appearance='light']) input:checked,
      :host([appearance='dark']) input:checked {
        border-color: #0d6dfd;
        background: transparent;
      }

      :host([appearance='light']) input:checked {
        background: #ffffff;
      }

      input:checked:hover:not(:disabled),
      :host([appearance='light']) input:checked:hover:not(:disabled),
      :host([appearance='dark']) input:checked:hover:not(:disabled) {
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled),
      :host([appearance='light']) input:checked:active:not(:disabled),
      :host([appearance='dark']) input:checked:active:not(:disabled),
      :host([pressed][checked]:not([disabled])) input {
        border-color: #051335;
      }

      input:checked::after {
        content: '';
        border-radius: 9999px;
        background: #0d6dfd;
      }

      :host([size='small']) input:checked::after {
        width: 4px;
        height: 4px;
      }

      :host([size='medium']) input:checked::after,
      :host(:not([size])) input:checked::after {
        width: 6px;
        height: 6px;
      }

      input:checked:hover:not(:disabled)::after,
      :host([appearance='light']) input:checked:hover:not(:disabled)::after,
      :host([appearance='dark']) input:checked:hover:not(:disabled)::after {
        background: #2f82fd;
      }

      input:checked:active:not(:disabled)::after,
      :host([appearance='light']) input:checked:active:not(:disabled)::after,
      :host([appearance='dark']) input:checked:active:not(:disabled)::after,
      :host([pressed][checked]:not([disabled])) input:checked::after,
      :host([appearance='light'][pressed][checked]:not([disabled])) input:checked::after,
      :host([appearance='dark'][pressed][checked]:not([disabled])) input:checked::after {
        background: #051335;
      }

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
        box-shadow: none;
      }

      :host([appearance='dark']) input:disabled {
        border-color: #3a3a40;
        background: transparent;
      }

      input:checked:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
      }

      :host([appearance='dark']) input:checked:disabled {
        border-color: #3a3a40;
        background: transparent;
      }

      input:checked:disabled::after {
        background: #d6d8e1;
      }

      :host([appearance='dark']) input:checked:disabled::after {
        background: #727999;
      }

      input:focus {
        outline: none;
      }

      input:focus-visible {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 6px rgb(13 109 253 / 40%);
      }
    `];o([s({reflect:!0})],r.prototype,"size",2);o([s({reflect:!0})],r.prototype,"appearance",2);o([s({type:Boolean,reflect:!0})],r.prototype,"checked",2);o([s({type:Boolean,reflect:!0})],r.prototype,"disabled",2);o([s({type:Boolean,reflect:!0})],r.prototype,"pressed",2);o([s({reflect:!0})],r.prototype,"helper",2);o([s()],r.prototype,"name",2);o([s()],r.prototype,"value",2);o([s({attribute:"accessible-label"})],r.prototype,"accessibleLabel",2);o([z()],r.prototype,"hasLabel",2);r=o([w("dre-radio")],r);
