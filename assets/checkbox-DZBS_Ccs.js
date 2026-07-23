import{i as y,a as _,A as d,b as u}from"./iframe-hYZkyXvR.js";import{n as o,t as w}from"./property-BSL9Me-Y.js";import{r as z}from"./state-BaBndn7-.js";import{h as $}from"./styles-BGRCfbQF.js";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},i=(e,t,a,n)=>{for(var s=n>1?void 0:n?E(t,a):t,l=e.length-1,c;l>=0;l--)(c=e[l])&&(s=(n?c(t,a,s):c(s))||s);return n&&s&&C(t,a,s),s},g=(e,t,a)=>t.has(e)||x("Cannot "+a),f=(e,t,a)=>(g(e,t,"read from private field"),a?a.call(e):t.get(e)),b=(e,t,a)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),m=(e,t,a)=>(g(e,t,"access private method"),a),p,h,k,v;let r=class extends _{constructor(){super(...arguments),b(this,h),this.size="medium",this.appearance="light",this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.pressed=!1,this.helper="",this.name="",this.value="on",this.ariaLabel=null,this.hasLabel=!1,b(this,p,`dre-checkbox-label-${Math.random().toString(36).slice(2,9)}`)}updated(){const e=this.renderRoot.querySelector("input");e&&(e.indeterminate=this.indeterminate)}render(){var t;const e=((t=this.ariaLabel)==null?void 0:t.trim())||"Checkbox";return u`
      <label>
        <span class="control">
          <input
            type="checkbox"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            aria-labelledby=${this.hasLabel?f(this,p):d}
            aria-label=${this.hasLabel?d:e}
            aria-checked=${this.indeterminate?"mixed":d}
            @change=${m(this,h,v)}
          />
        </span>
        <span class="text">
          <span class="label" id=${f(this,p)}
            ><slot @slotchange=${m(this,h,k)}></slot
          ></span>
          ${this.helper?u`<span class="helper">${this.helper}</span>`:d}
        </span>
      </label>
    `}};p=new WeakMap;h=new WeakSet;k=function(e){const t=e.target;this.hasLabel=t.assignedNodes({flatten:!0}).some(a=>{var n;return a.nodeType===Node.TEXT_NODE?!!((n=a.textContent)!=null&&n.trim()):a.nodeType===Node.ELEMENT_NODE}),this.hasLabel?this.setAttribute("has-label",""):this.removeAttribute("has-label")};v=function(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("dre-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))};r.styles=[$,y`
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
        background: transparent;
        cursor: inherit;
        box-sizing: border-box;
        transition:
          background-color 120ms ease,
          border-color 120ms ease,
          box-shadow 120ms ease;
      }

      :host([appearance='light']) input {
        background: #ffffff;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
        border-radius: 2px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        width: 14px;
        height: 14px;
        border-radius: 4px;
      }

      input:hover:not(:disabled):not(:checked) {
        border-color: #0d6dfd;
      }

      input:active:not(:disabled):not(:checked),
      :host([pressed]:not([disabled]):not([checked]):not([indeterminate])) input {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 8px rgb(13 109 253 / 10%);
      }

      input:checked,
      :host([appearance='light']) input:checked,
      :host([appearance='dark']) input:checked,
      :host([indeterminate]) input,
      :host([appearance='light'][indeterminate]) input,
      :host([appearance='dark'][indeterminate]) input {
        background: #0d6dfd;
        border-color: #0d6dfd;
      }

      input:checked:hover:not(:disabled),
      :host([appearance='light']) input:checked:hover:not(:disabled),
      :host([appearance='dark']) input:checked:hover:not(:disabled),
      :host([indeterminate]) input:hover:not(:disabled) {
        background: #2f82fd;
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled),
      :host([appearance='light']) input:checked:active:not(:disabled),
      :host([appearance='dark']) input:checked:active:not(:disabled),
      :host([indeterminate]) input:active:not(:disabled),
      :host([pressed][checked]:not([disabled])) input,
      :host([pressed][indeterminate]:not([disabled])) input {
        background: #051335;
        border-color: #051335;
        box-shadow: 0 0 0 8px rgb(13 109 253 / 10%);
      }

      input:checked::after {
        content: '';
        border-left: 1.5px solid #ffffff;
        border-bottom: 1.5px solid #ffffff;
        transform: rotate(-45deg);
      }

      :host([size='small']) input:checked::after {
        width: 3px;
        height: 1.5px;
        margin-top: -1px;
      }

      :host([size='medium']) input:checked::after,
      :host(:not([size])) input:checked::after {
        width: 5px;
        height: 2.5px;
        margin-top: -1px;
      }

      :host([indeterminate]) input::after {
        content: '';
        width: 6px;
        height: 1.5px;
        background: #ffffff;
        border: 0;
        transform: none;
        margin: 0;
      }

      :host([size='small'][indeterminate]) input::after {
        width: 4px;
        height: 1px;
      }

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
        box-shadow: none;
      }

      :host([appearance='dark']) input:disabled {
        border-color: #3a3a40;
        background: #2a2a2e;
      }

      input:checked:disabled,
      :host([indeterminate][disabled]) input {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      :host([appearance='dark']) input:checked:disabled,
      :host([appearance='dark'][indeterminate][disabled]) input {
        background: #2a2a2e;
        border-color: #3a3a40;
      }

      input:checked:disabled::after,
      :host([indeterminate][disabled]) input::after {
        border-color: #d6d8e1;
        background: #d6d8e1;
      }

      input:focus {
        outline: none;
      }

      input:focus-visible {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 8px rgb(13 109 253 / 10%);
      }
    `];i([o({reflect:!0})],r.prototype,"size",2);i([o({reflect:!0})],r.prototype,"appearance",2);i([o({type:Boolean,reflect:!0})],r.prototype,"checked",2);i([o({type:Boolean,reflect:!0})],r.prototype,"disabled",2);i([o({type:Boolean,reflect:!0})],r.prototype,"indeterminate",2);i([o({type:Boolean,reflect:!0})],r.prototype,"pressed",2);i([o({reflect:!0})],r.prototype,"helper",2);i([o()],r.prototype,"name",2);i([o()],r.prototype,"value",2);i([o({attribute:"aria-label"})],r.prototype,"ariaLabel",2);i([z()],r.prototype,"hasLabel",2);r=i([w("dre-checkbox")],r);
