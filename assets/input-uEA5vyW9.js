import{i as $,a as _,A as c,b as n}from"./iframe-hYZkyXvR.js";import{n as r,t as k}from"./property-BSL9Me-Y.js";import{h as z}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,g=e=>{throw TypeError(e)},a=(e,t,o,p)=>{for(var l=p>1?void 0:p?E(t,o):t,u=e.length-1,b;u>=0;u--)(b=e[u])&&(l=(p?b(t,o,l):b(l))||l);return p&&l&&C(t,o,l),l},m=(e,t,o)=>t.has(e)||g("Cannot "+o),h=(e,t,o)=>(m(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?g("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),f=(e,t,o)=>(m(e,t,"access private method"),o),s,d,y,w,v;let q=0,i=class extends _{constructor(){super(...arguments),x(this,d),this.size="medium",this.appearance="light",this.variant="default",this.label="",this.placeholder="Add Value",this.value="",this.name="",this.type="text",this.hint="",this.prefix="",this.disabled=!1,this.required=!1,this.readonly=!1,this.invalid=!1,this.destructive=!1,this.focused=!1,x(this,s,`dre-input-${++q}`)}willUpdate(){this.destructive&&(this.invalid=!0)}render(){const e=this.variant==="leading-dropdown",t=this.variant==="trailing-dropdown",o=this.invalid||this.destructive;return n`
      <div class="content" part="content">
        ${this.label?n`
              <div class="label-row" part="label-row">
                <label class="label" part="label" for=${h(this,s)}>
                  ${this.label}${this.required?n`<span class="required">*</span>`:c}
                </label>
                <span class="label-icon" part="label-icon">
                  <slot name="label-icon"></slot>
                </span>
              </div>
            `:c}
        <div class="field" part="field">
          ${e?n`
                <span class="prefix" part="prefix">
                  <button
                    class="prefix-btn"
                    type="button"
                    ?disabled=${this.disabled}
                    aria-label=${`${this.prefix||"Prefix"} options`}
                    @click=${()=>f(this,d,v).call(this,"prefix")}
                  >
                    <slot name="prefix">${this.prefix||"USD"}</slot>
                    <dre-icon name="chevron-down" size="14"></dre-icon>
                  </button>
                </span>
              `:n`<span class="leading" part="leading"><slot name="leading"></slot></span>`}
          <input
            id=${h(this,s)}
            part="input"
            type=${this.type}
            name=${this.name}
            .value=${this.value}
            placeholder=${this.placeholder}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            aria-invalid=${o?"true":"false"}
            aria-describedby=${this.hint?`${h(this,s)}-hint`:c}
            @input=${f(this,d,y)}
            @change=${f(this,d,w)}
            @focus=${()=>this.focused=!0}
            @blur=${()=>this.focused=!1}
          />
          ${t?n`
                <button
                  class="affix-chevron"
                  type="button"
                  part="trailing-dropdown"
                  ?disabled=${this.disabled}
                  aria-label="Open options"
                  @click=${()=>f(this,d,v).call(this,"trailing")}
                >
                  <dre-icon name="chevron-down" size="14"></dre-icon>
                </button>
              `:n`<span class="trailing" part="trailing"><slot name="trailing"></slot></span>`}
        </div>
      </div>
      ${this.hint?n`<div id=${`${h(this,s)}-hint`} class="hint" part="hint">${this.hint}</div>`:c}
    `}};s=new WeakMap;d=new WeakSet;y=function(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("dre-input",{detail:{value:this.value},bubbles:!0,composed:!0}))};w=function(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:this.value},bubbles:!0,composed:!0}))};v=function(e){this.dispatchEvent(new CustomEvent("dre-affix-click",{detail:{kind:e},bubbles:!0,composed:!0}))};i.styles=[z,$`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        max-width: 280px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([size='small']) {
        max-width: 208px;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
      }

      .label-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        min-height: 14px;
      }

      .label {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: #383c4d;
      }

      :host([appearance='dark']) .label {
        color: #c5c9d8;
      }

      .required {
        color: #d64333;
        margin-inline-start: 2px;
      }

      .label-icon {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .field {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 12px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
      }

      :host([variant='leading-dropdown']) .field,
      :host([variant='trailing-dropdown']) .field {
        gap: 6px;
      }

      :host([size='small']) .field {
        height: 28px;
        min-height: 28px;
      }

      :host([size='medium']) .field,
      :host(:not([size])) .field {
        height: 34px;
        min-height: 34px;
      }

      :host([appearance='dark']) .field {
        background: #1b1b1e;
        border-color: #3a3a40;
      }

      :host(:hover:not([disabled]):not([invalid]):not([destructive])) .field {
        border-color: #8c92ac;
      }

      :host([appearance='dark']:hover:not([disabled]):not([invalid]):not([destructive])) .field {
        border-color: #727999;
      }

      :host([focused]:not([invalid]):not([destructive])) .field {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 1px #0d6dfd;
      }

      :host([invalid]) .field,
      :host([destructive]) .field {
        border-color: #d64333;
        box-shadow: none;
      }

      :host([invalid][focused]) .field,
      :host([destructive][focused]) .field {
        border-color: #d64333;
        box-shadow: 0 0 0 1px #d64333;
      }

      :host([disabled]) .field {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      :host([appearance='dark'][disabled]) .field {
        background: #2a2a2e;
        border-color: #3a3a40;
      }

      .leading,
      .trailing {
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      .prefix,
      .affix-chevron {
        display: none;
        align-items: center;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      :host([variant='leading-dropdown']) .prefix,
      :host([variant='trailing-dropdown']) .affix-chevron {
        display: inline-flex;
      }

      .prefix {
        gap: 4px;
        font-size: 12px;
        color: #8c92ac;
        white-space: nowrap;
      }

      :host([appearance='dark']) .prefix {
        color: #9ca1b7;
      }

      .prefix-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }

      .prefix-btn:disabled {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      .affix-chevron {
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
        line-height: 0;
      }

      .affix-chevron:disabled {
        cursor: not-allowed;
        color: #9ca1b7;
      }

      input {
        flex: 1;
        min-width: 0;
        height: 100%;
        border: 0;
        padding: 0;
        margin: 0;
        background: transparent;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        outline: none;
      }

      :host([appearance='dark']) input {
        color: #e6e8ed;
      }

      input::placeholder {
        color: #8c92ac;
      }

      :host([appearance='dark']) input::placeholder {
        color: #727999;
      }

      input:disabled {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      .hint {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: #727999;
        width: 100%;
      }

      :host([invalid]) .hint,
      :host([destructive]) .hint {
        color: #d64333;
      }
    `];a([r({reflect:!0})],i.prototype,"size",2);a([r({reflect:!0})],i.prototype,"appearance",2);a([r({reflect:!0})],i.prototype,"variant",2);a([r()],i.prototype,"label",2);a([r()],i.prototype,"placeholder",2);a([r()],i.prototype,"value",2);a([r()],i.prototype,"name",2);a([r()],i.prototype,"type",2);a([r()],i.prototype,"hint",2);a([r()],i.prototype,"prefix",2);a([r({type:Boolean,reflect:!0})],i.prototype,"disabled",2);a([r({type:Boolean,reflect:!0})],i.prototype,"required",2);a([r({type:Boolean,reflect:!0})],i.prototype,"readonly",2);a([r({type:Boolean,reflect:!0})],i.prototype,"invalid",2);a([r({type:Boolean,reflect:!0})],i.prototype,"destructive",2);a([r({type:Boolean,reflect:!0})],i.prototype,"focused",2);i=a([k("dre-input")],i);
