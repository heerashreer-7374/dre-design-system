import{i as b,a as f,b as p}from"./iframe-BMlSAenk.js";import{n,t as x}from"./property-DjCj8DcD.js";import{h as m}from"./styles-CNCx_--U.js";var g=Object.defineProperty,k=Object.getOwnPropertyDescriptor,c=t=>{throw TypeError(t)},a=(t,e,s,i)=>{for(var o=i>1?void 0:i?k(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&g(e,s,o),o},v=(t,e,s)=>e.has(t)||c("Cannot "+s),y=(t,e,s)=>e.has(t)?c("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),_=(t,e,s)=>(v(t,e,"access private method"),s),h,u;let r=class extends f{constructor(){super(...arguments),y(this,h),this.size="medium",this.checked=!1,this.disabled=!1,this.helper=""}render(){return p`
      <button
        type="button"
        role="switch"
        aria-checked=${this.checked?"true":"false"}
        ?disabled=${this.disabled}
        @click=${_(this,h,u)}
      >
        <span class="knob"></span>
      </button>
      <span class="text">
        <span class="label"><slot></slot></span>
        ${this.helper?p`<span class="helper">${this.helper}</span>`:null}
      </span>
    `}};h=new WeakSet;u=function(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("dre-change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))};r.styles=[m,b`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        font-size: 14px;
        color: #212121;
        cursor: pointer;
      }

      :host([disabled]) {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 2px;
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

      button {
        border: 0;
        border-radius: 12px;
        background: #bdc0cf;
        padding: 2px;
        cursor: inherit;
        transition: background-color 120ms ease;
        display: flex;
        align-items: center;
        flex: 0 0 auto;
      }

      :host([size='small']) button {
        width: 26px;
        height: 18px;
      }

      :host([size='medium']) button,
      :host(:not([size])) button {
        width: 32px;
        height: 22px;
      }

      button[aria-checked='true'] {
        background: #0d6dfd;
      }

      button:hover:not(:disabled)[aria-checked='false'] {
        background: #adb5c7;
      }

      button:hover:not(:disabled)[aria-checked='true'] {
        background: #2f82fd;
      }

      button:disabled {
        background: #f3f3f6;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      .knob {
        display: block;
        border-radius: 9999px;
        background: #ffffff;
        transition: transform 120ms ease;
        box-shadow: 0 1px 2px rgb(0 0 0 / 12%);
      }

      :host([size='small']) .knob {
        width: 14px;
        height: 14px;
      }

      :host([size='medium']) .knob,
      :host(:not([size])) .knob {
        width: 18px;
        height: 18px;
      }

      /* travel = track - pad*2 - knob */
      :host([size='small']) button[aria-checked='true'] .knob {
        transform: translateX(8px);
      }

      :host([size='medium']) button[aria-checked='true'] .knob,
      :host(:not([size])) button[aria-checked='true'] .knob {
        transform: translateX(10px);
      }
    `];a([n({reflect:!0})],r.prototype,"size",2);a([n({type:Boolean,reflect:!0})],r.prototype,"checked",2);a([n({type:Boolean,reflect:!0})],r.prototype,"disabled",2);a([n({reflect:!0})],r.prototype,"helper",2);r=a([x("dre-toggle")],r);
