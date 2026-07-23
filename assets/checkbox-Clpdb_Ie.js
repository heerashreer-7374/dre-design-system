import{i as u,a as x,b as c}from"./iframe-BfQCnnR_.js";import{n as s,t as b}from"./property-P_7FsvOw.js";import{h as m}from"./styles-Bjo1gRn0.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},i=(e,t,o,a)=>{for(var n=a>1?void 0:a?v(t,o):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(n=(a?p(t,o,n):p(n))||n);return a&&n&&g(t,o,n),n},k=(e,t,o)=>t.has(e)||h("Cannot "+o),y=(e,t,o)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),_=(e,t,o)=>(k(e,t,"access private method"),o),l,f;let r=class extends x{constructor(){super(...arguments),y(this,l),this.size="medium",this.checked=!1,this.disabled=!1,this.indeterminate=!1,this.helper="",this.name="",this.value="on"}updated(){const e=this.renderRoot.querySelector("input");e&&(e.indeterminate=this.indeterminate)}render(){return c`
      <label>
        <span class="control">
          <input
            type="checkbox"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            name=${this.name}
            value=${this.value}
            @change=${_(this,l,f)}
          />
        </span>
        <span class="text">
          <span class="label"><slot></slot></span>
          ${this.helper?c`<span class="helper">${this.helper}</span>`:null}
        </span>
      </label>
    `}};l=new WeakSet;f=function(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("dre-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))};r.styles=[m,u`
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
        cursor: not-allowed;
        color: #9ca1b7;
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
        padding-top: 0;
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
        border: 1.5px solid #727999;
        background: #ffffff;
        cursor: inherit;
      }

      :host([size='small']) input {
        width: 8px;
        height: 8px;
        border-width: 1px;
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

      input:checked {
        background: #0d6dfd;
        border-color: #0d6dfd;
      }

      input:checked:hover:not(:disabled) {
        background: #2f82fd;
        border-color: #2f82fd;
      }

      input:checked:active:not(:disabled) {
        background: #051335;
        border-color: #051335;
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

      input:disabled {
        border-color: #e6e8ed;
        background: #ffffff;
      }

      input:checked:disabled {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      input:checked:disabled::after {
        border-color: #d6d8e1;
      }

      input:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      :host([indeterminate]) input {
        background: #0d6dfd;
        border-color: #0d6dfd;
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
    `];i([s({reflect:!0})],r.prototype,"size",2);i([s({type:Boolean,reflect:!0})],r.prototype,"checked",2);i([s({type:Boolean,reflect:!0})],r.prototype,"disabled",2);i([s({type:Boolean,reflect:!0})],r.prototype,"indeterminate",2);i([s({reflect:!0})],r.prototype,"helper",2);i([s()],r.prototype,"name",2);i([s()],r.prototype,"value",2);r=i([b("dre-checkbox")],r);
