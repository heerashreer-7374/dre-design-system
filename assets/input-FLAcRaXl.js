import{i as f,a as v,b as n}from"./iframe-BfQCnnR_.js";import{n as o,t as b}from"./property-P_7FsvOw.js";import{h as m}from"./styles-Bjo1gRn0.js";var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,u=i=>{throw TypeError(i)},s=(i,e,r,a)=>{for(var l=a>1?void 0:a?x(e,r):e,d=i.length-1,p;d>=0;d--)(p=i[d])&&(l=(a?p(e,r,l):p(l))||l);return a&&l&&y(e,r,l),l},g=(i,e,r)=>e.has(i)||u("Cannot "+r),_=(i,e,r)=>e.has(i)?u("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,r),$=(i,e,r)=>(g(i,e,"access private method"),r),h,c;let t=class extends v{constructor(){super(...arguments),_(this,h),this.size="medium",this.label="",this.placeholder="",this.value="",this.name="",this.type="text",this.hint="",this.disabled=!1,this.required=!1,this.invalid=!1,this.destructive=!1,this.focused=!1}willUpdate(){this.destructive&&(this.invalid=!0)}render(){return n`
      ${this.label?n`<label class="label"
            >${this.label}${this.required?n`<span class="required">*</span>`:null}</label
          >`:null}
      <div class="field" part="field">
        <span class="leading"><slot name="leading"></slot></span>
        <input
          part="input"
          type=${this.type}
          name=${this.name}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.invalid||this.destructive?"true":"false"}
          @input=${$(this,h,c)}
          @focus=${()=>this.focused=!0}
          @blur=${()=>this.focused=!1}
        />
        <span class="trailing"><slot name="trailing"></slot></span>
      </div>
      ${this.hint?n`<div class="hint">${this.hint}</div>`:null}
    `}};h=new WeakSet;c=function(i){const e=i.target;this.value=e.value,this.dispatchEvent(new CustomEvent("dre-input",{detail:{value:this.value},bubbles:!0,composed:!0}))};t.styles=[m,f`
      :host {
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        max-width: 280px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .label {
        font-size: 12px;
        color: #383c4d;
        font-weight: 400;
        line-height: 14px;
      }

      .required {
        color: #d64333;
        margin-inline-start: 2px;
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
        background: #ffffff;
      }

      :host([size='small']) .field {
        height: 24px;
        min-height: 24px;
      }

      :host([size='medium']) .field,
      :host(:not([size])) .field {
        height: 34px;
        min-height: 34px;
      }

      :host(:hover:not([disabled]):not([invalid])) .field {
        border-color: #8c92ac;
      }

      :host([focused]:not([invalid])) .field {
        border-color: #0d6dfd;
        box-shadow: 0 0 0 1px #0d6dfd;
      }

      :host([invalid]) .field {
        border-color: #d64333;
      }

      :host([disabled]) .field {
        background: #f3f3f6;
        border-color: #e6e8ed;
      }

      .leading,
      .trailing {
        display: inline-flex;
        color: #727999;
        line-height: 0;
        flex: 0 0 auto;
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
        outline: none;
      }

      :host([size='small']) input {
        font-size: 12px;
      }

      :host([size='medium']) input,
      :host(:not([size])) input {
        font-size: 14px;
      }

      input::placeholder {
        color: #8c92ac;
      }

      input:disabled {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      .hint {
        font-size: 12px;
        line-height: 14px;
        color: #5d6481;
      }

      :host([invalid]) .hint {
        color: #d64333;
      }
    `];s([o({reflect:!0})],t.prototype,"size",2);s([o()],t.prototype,"label",2);s([o()],t.prototype,"placeholder",2);s([o()],t.prototype,"value",2);s([o()],t.prototype,"name",2);s([o()],t.prototype,"type",2);s([o()],t.prototype,"hint",2);s([o({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([o({type:Boolean,reflect:!0})],t.prototype,"required",2);s([o({type:Boolean,reflect:!0})],t.prototype,"invalid",2);s([o({type:Boolean,reflect:!0})],t.prototype,"destructive",2);s([o({type:Boolean,reflect:!0})],t.prototype,"focused",2);t=s([b("dre-input")],t);
