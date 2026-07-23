import{i as p,a as f,b as h}from"./iframe-BIGdDvVp.js";import{n,t as g}from"./property-_7csjOJC.js";import{h as y}from"./styles-DjfhIa7o.js";const m=[y,p`
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
      border-radius: var(--dre-radius-small); /* 4px */
      font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      white-space: nowrap;
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

    button:focus-visible {
      outline: 2px solid var(--dre-color-border-focus-ring);
      outline-offset: 2px;
    }

    /* —— Sizes (Figma heights) —— */
    :host([size='xsmall']) button {
      height: 24px;
      min-height: 24px;
      padding: 0 10px;
      font-size: 10px;
    }

    :host([size='small']) button {
      height: 26px;
      min-height: 26px;
      padding: 0 10px;
      font-size: 12px;
    }

    :host([size='medium']) button,
    :host(:not([size])) button {
      height: 30px;
      min-height: 30px;
      padding: 0 10px;
      font-size: 14px;
    }

    :host([icon='only'][size='xsmall']) button {
      width: 24px;
      padding: 0;
    }
    :host([icon='only'][size='small']) button {
      width: 26px;
      padding: 0;
    }
    :host([icon='only'][size='medium']) button,
    :host([icon='only']:not([size])) button {
      width: 28px;
      height: 28px;
      min-height: 28px;
      padding: 0;
    }

    /* —— Primary —— */
    :host([hierarchy='primary']) button,
    :host(:not([hierarchy])) button {
      background: #0d6dfd;
      color: #ffffff;
      border-color: #0d6dfd;
    }

    :host([hierarchy='primary']) button:hover:not(:disabled),
    :host(:not([hierarchy])) button:hover:not(:disabled) {
      background: #2f82fd;
      border-color: #2f82fd;
    }

    /* Pressed = primary fill with brand-subtle 1px halo (Figma outer #eef5ff) */
    :host([hierarchy='primary']) button:active:not(:disabled),
    :host(:not([hierarchy])) button:active:not(:disabled) {
      background: #0d6dfd;
      border-color: #eef5ff;
      box-shadow: 0 0 0 1px #eef5ff;
    }

    :host([hierarchy='primary']) button:disabled,
    :host(:not([hierarchy])) button:disabled {
      background: #f3f3f6;
      border-color: #f3f3f6;
      color: #9ca1b7;
      cursor: not-allowed;
      box-shadow: none;
    }

    /* —— Secondary: blue border, subtle fill, brand text —— */
    :host([hierarchy='secondary']) button {
      background: #eef5ff;
      color: #0d6dfd;
      border-color: #0d6dfd;
    }

    :host([hierarchy='secondary']) button:hover:not(:disabled) {
      background: #bdd8fe;
    }

    :host([hierarchy='secondary']) button:active:not(:disabled) {
      background: #97c0fe;
    }

    :host([hierarchy='secondary']) button:disabled {
      background: #f3f3f6;
      border-color: #e6e8ed;
      color: #9ca1b7;
      cursor: not-allowed;
    }

    /* —— Ghost: transparent, brand text —— */
    :host([hierarchy='ghost']) button {
      background: transparent;
      color: #0d6dfd;
      border-color: transparent;
    }

    :host([hierarchy='ghost']) button:hover:not(:disabled) {
      background: #f3f3f6;
    }

    :host([hierarchy='ghost']) button:active:not(:disabled) {
      background: #e6e8ed;
    }

    :host([hierarchy='ghost']) button:disabled {
      background: transparent;
      color: #9ca1b7;
      cursor: not-allowed;
    }

    /* —— Destructive (danger) —— */
    :host([destructive]) button,
    :host([danger]) button {
      background: #d64333;
      color: #ffffff;
      border-color: #d64333;
    }

    :host([destructive]) button:hover:not(:disabled),
    :host([danger]) button:hover:not(:disabled) {
      background: #be3526;
      border-color: #be3526;
    }

    :host([destructive]) button:active:not(:disabled),
    :host([danger]) button:active:not(:disabled) {
      background: #9e2c1f;
      border-color: #f9e4e2;
      box-shadow: 0 0 0 1px #f9e4e2;
    }

    :host([destructive][hierarchy='secondary']) button,
    :host([danger][hierarchy='secondary']) button {
      background: #f9e4e2;
      color: #d64333;
      border-color: #d64333;
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
  `];var v=Object.defineProperty,x=Object.getOwnPropertyDescriptor,b=t=>{throw TypeError(t)},a=(t,o,r,s)=>{for(var i=s>1?void 0:s?x(o,r):o,d=t.length-1,l;d>=0;d--)(l=t[d])&&(i=(s?l(o,r,i):l(i))||i);return s&&i&&v(o,r,i),i},w=(t,o,r)=>o.has(t)||b("Cannot "+r),k=(t,o,r)=>o.has(t)?b("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(t):o.set(t,r),_=(t,o,r)=>(w(t,o,"access private method"),r),c,u;let e=class extends f{constructor(){super(...arguments),k(this,c),this.hierarchy="primary",this.size="medium",this.icon="false",this.type="button",this.disabled=!1,this.danger=!1,this.destructive=!1,this.ariaLabel=null}render(){const t=this.icon==="leading"||this.icon==="only",o=this.icon==="trailing";return h`
      <button
        part="button"
        type=${this.type}
        ?disabled=${this.disabled}
        aria-label=${this.ariaLabel??""}
        @click=${_(this,c,u)}
      >
        ${t?h`<span class="leading" part="leading"><slot name="leading"></slot></span>`:null}
        <span class="label" part="label"><slot></slot></span>
        ${o?h`<span class="trailing" part="trailing"><slot name="trailing"></slot></span>`:null}
      </button>
    `}};c=new WeakSet;u=function(t){if(this.disabled){t.preventDefault(),t.stopImmediatePropagation();return}this.dispatchEvent(new CustomEvent("dre-click",{detail:{originalEvent:t},bubbles:!0,composed:!0}))};e.styles=m;a([n({reflect:!0})],e.prototype,"hierarchy",2);a([n({reflect:!0})],e.prototype,"size",2);a([n({reflect:!0})],e.prototype,"icon",2);a([n({reflect:!0})],e.prototype,"type",2);a([n({type:Boolean,reflect:!0})],e.prototype,"disabled",2);a([n({type:Boolean,reflect:!0})],e.prototype,"danger",2);a([n({type:Boolean,reflect:!0})],e.prototype,"destructive",2);a([n({attribute:"aria-label"})],e.prototype,"ariaLabel",2);e=a([g("dre-button")],e);
