import{i as f,a as x,b as h}from"./iframe-BIGdDvVp.js";import{n as a,t as b}from"./property-_7csjOJC.js";import{h as m}from"./styles-DjfhIa7o.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,c=t=>{throw TypeError(t)},s=(t,e,i,d)=>{for(var o=d>1?void 0:d?v(e,i):e,l=t.length-1,n;l>=0;l--)(n=t[l])&&(o=(d?n(e,i,o):n(o))||o);return d&&o&&g(e,i,o),o},y=(t,e,i)=>e.has(t)||c("Cannot "+i),k=(t,e,i)=>e.has(t)?c("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),_=(t,e,i)=>(y(t,e,"access private method"),i),p,u;let r=class extends x{constructor(){super(...arguments),k(this,p),this.size="medium",this.checked=!1,this.disabled=!1,this.helper="",this.name="",this.value=""}render(){return h`
      <label>
        <span class="control">
          <input
            type="radio"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            @change=${_(this,p,u)}
          />
        </span>
        <span class="text">
          <span class="label"><slot></slot></span>
          ${this.helper?h`<span class="helper">${this.helper}</span>`:null}
        </span>
      </label>
    `}};p=new WeakSet;u=function(t){const e=t.target;this.checked=e.checked,this.dispatchEvent(new CustomEvent("dre-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))};r.styles=[m,f`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        font-size: 14px;
        color: #212126;
        cursor: pointer;
      }

      :host([disabled]) {
        color: #9ca1b7;
        cursor: not-allowed;
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
      }

      :host([helper]) .text {
        padding-top: 4px;
      }

      .label {
        font-size: 14px;
        line-height: 20px;
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

      /* Hit target matches Figma: Small 20 · Medium 34 */
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
        border-style: solid;
        border-radius: 9999px;
        background: #ffffff;
        cursor: inherit;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
        border-width: 1px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        width: 14px;
        height: 14px;
        border-width: 1.5px;
      }

      input {
        border-color: #727999;
      }

      input:hover:not(:disabled):not(:checked) {
        border-color: #0d6dfd;
      }

      input:checked {
        border-color: #0d6dfd;
      }

      input:checked:hover:not(:disabled) {
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled) {
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

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
      }

      input:checked:disabled {
        border-color: #e6e8ed;
      }

      input:checked:disabled::after {
        background: #d6d8e1;
      }

      input:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }
    `];s([a({reflect:!0})],r.prototype,"size",2);s([a({type:Boolean,reflect:!0})],r.prototype,"checked",2);s([a({type:Boolean,reflect:!0})],r.prototype,"disabled",2);s([a({reflect:!0})],r.prototype,"helper",2);s([a()],r.prototype,"name",2);s([a()],r.prototype,"value",2);r=s([b("dre-radio")],r);
