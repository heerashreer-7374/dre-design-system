import{i as v,a as b,b as c}from"./iframe-CxxUV_ql.js";import{n as l,t as y}from"./property-BAmm2Bkg.js";import{h as g}from"./styles-DnIXmjyS.js";var w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,m=e=>{throw TypeError(e)},d=(e,t,a,s)=>{for(var o=s>1?void 0:s?C(t,a):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,a,o):n(o))||o);return s&&o&&w(t,a,o),o},S=(e,t,a)=>t.has(e)||m("Cannot "+a),E=(e,t,a)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),P=(e,t,a)=>(S(e,t,"access private method"),a),u,x;let r=class extends b{constructor(){super(...arguments),E(this,u),this.value="",this.mode="default",this.active=!1,this.disabled=!1,this.enclosed=!1}render(){return c`
      <button
        type="button"
        role="tab"
        aria-selected=${this.active?"true":"false"}
        ?disabled=${this.disabled}
        @click=${P(this,u,x)}
      >
        <span class="content">
          ${this.mode==="icon"||this.mode==="both"?c`<span class="icon"><slot name="icon"></slot></span>`:null}
          <slot></slot>
          ${this.mode==="badge"||this.mode==="both"?c`<span class="badge"><slot name="badge"></slot></span>`:null}
        </span>
        <span class="indicator" part="indicator"></span>
      </button>
    `}};u=new WeakSet;x=function(){var e;this.disabled||this.dispatchEvent(new CustomEvent("dre-tab-select",{detail:{value:this.value||((e=this.textContent)==null?void 0:e.trim())},bubbles:!0,composed:!0}))};r.styles=[g,v`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      button {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        margin: 0;
        padding: 10px 12px 0;
        border: 0;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
      }

      .content {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 16px;
      }

      .indicator {
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: transparent;
      }

      :host([active]) button {
        color: #0d6dfd;
      }

      :host([active]) .indicator {
        background: #0d6dfd;
      }

      button:hover:not(:disabled) {
        color: #13141a;
      }

      :host(:not([active])) button:hover:not(:disabled) .indicator {
        background: #8c92ac;
      }

      button:disabled {
        color: #d6d8e1;
        cursor: not-allowed;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      /* Enclosed track (Tab Group Style=Enclosed) */
      :host([enclosed]) button {
        padding: 6px 12px;
        border-radius: 2px;
      }

      :host([enclosed][active]) button {
        background: #ffffff;
        color: #0d6dfd;
      }

      :host([enclosed]) .indicator {
        display: none;
      }

      .icon {
        display: inline-flex;
        line-height: 0;
        color: inherit;
      }

      .badge {
        display: inline-flex;
      }
    `];d([l()],r.prototype,"value",2);d([l({reflect:!0})],r.prototype,"mode",2);d([l({type:Boolean,reflect:!0})],r.prototype,"active",2);d([l({type:Boolean,reflect:!0})],r.prototype,"disabled",2);d([l({type:Boolean,reflect:!0})],r.prototype,"enclosed",2);r=d([y("dre-tab")],r);var D=Object.defineProperty,O=Object.getOwnPropertyDescriptor,_=e=>{throw TypeError(e)},f=(e,t,a,s)=>{for(var o=s>1?void 0:s?O(t,a):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(o=(s?n(t,a,o):n(o))||o);return s&&o&&D(t,a,o),o},k=(e,t,a)=>t.has(e)||_("Cannot "+a),T=(e,t,a)=>t.has(e)?_("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),A=(e,t,a)=>(k(e,t,"access private method"),a),h,$;let p=class extends b{constructor(){super(...arguments),T(this,h),this.value="",this.groupStyle="default"}updated(e){if(e.has("groupStyle"))for(const t of this.querySelectorAll("dre-tab"))t.enclosed=this.groupStyle==="enclosed"}render(){return c`
      <div class="bar" part="bar">
        <div class="tabs" role="tablist" @dre-tab-select=${A(this,h,$)}>
          <slot></slot>
        </div>
        <div class="divider" part="divider"></div>
      </div>
      <div class="panel" part="panel"><slot name="panel"></slot></div>
    `}};h=new WeakSet;$=function(e){var a;const t=e.detail;this.value=t.value;for(const s of this.querySelectorAll("dre-tab"))s.active=s.value===this.value||((a=s.textContent)==null?void 0:a.trim())===this.value;this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:this.value},bubbles:!0,composed:!0}))};p.styles=[g,v`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .tabs {
        display: flex;
        align-items: flex-end;
        gap: 0;
      }

      :host([group-style='default']) .bar,
      :host(:not([group-style])) .bar {
        display: flex;
        flex-direction: column;
      }

      :host([group-style='default']) .divider,
      :host(:not([group-style])) .divider {
        height: 1px;
        background: #e0e0e0;
        margin-top: -1px;
      }

      :host([group-style='enclosed']) .tabs {
        background: #f5f5f7;
        padding: 4px;
        border-radius: 4px;
        align-items: center;
      }

      :host([group-style='enclosed']) .divider {
        display: none;
      }

      .panel {
        padding: 16px 0;
        color: #5d6481;
        font-size: 14px;
      }
    `];f([l()],p.prototype,"value",2);f([l({reflect:!0,attribute:"group-style"})],p.prototype,"groupStyle",2);p=f([y("dre-tab-group")],p);
