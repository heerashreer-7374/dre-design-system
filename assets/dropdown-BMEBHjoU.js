import{i as C,a as z,A as h,b as l}from"./iframe-hYZkyXvR.js";import{n as i,t as O}from"./property-BSL9Me-Y.js";import{r as L}from"./state-BaBndn7-.js";import{h as D}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";var M=Object.defineProperty,V=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},u=(e,t,o,a)=>{for(var r=a>1?void 0:a?V(t,o):t,d=e.length-1,b;d>=0;d--)(b=e[d])&&(r=(a?b(t,o,r):b(r))||r);return a&&r&&M(t,o,r),r},A=(e,t,o)=>t.has(e)||E("Cannot "+o),I=(e,t,o)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),q=(e,t,o)=>(A(e,t,"access private method"),o),_,P;let p=class extends z{constructor(){super(...arguments),I(this,_),this.label="List item",this.supportingText="",this.meta="",this.control="none",this.selected=!1,this.disabled=!1,this.showCheck=!1,this.value=""}render(){const e=this.showCheck&&this.selected&&this.control==="none";return l`
      <button
        type="button"
        part="item"
        role="option"
        aria-selected=${this.selected?"true":"false"}
        ?disabled=${this.disabled}
        @click=${q(this,_,P)}
      >
        ${this.control!=="none"?l`<span class="control" aria-hidden="true"></span>`:h}
        <span class="body">
          <span class="row">
            <span class="label" part="label"><slot>${this.label}</slot></span>
            ${this.meta?l`<span class="meta" part="meta">${this.meta}</span>`:h}
            ${e?l`<span class="check" aria-hidden="true"><dre-icon name="check" size="14"></dre-icon></span>`:h}
          </span>
          ${this.supportingText?l`<span class="supporting" part="supporting">${this.supportingText}</span>`:l`<slot name="supporting"></slot>`}
        </span>
      </button>
    `}};_=new WeakSet;P=function(){if(this.disabled)return;const e=this.control==="none"?!0:!this.selected;this.dispatchEvent(new CustomEvent("dre-select",{detail:{value:this.value||this.label,selected:e,label:this.label},bubbles:!0,composed:!0}))};p.styles=[D,C`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([hidden]) {
        display: none !important;
      }

      button {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 0;
        padding: 6px 6px 6px 13px;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        text-align: start;
        cursor: pointer;
        box-sizing: border-box;
      }

      :host([control='radio']) button,
      :host([control='checkbox']) button {
        padding: 6px;
        gap: 6px;
      }

      button:hover:not(:disabled) {
        background: rgba(13, 109, 253, 0.1);
      }

      :host([selected]) button {
        background: rgba(13, 109, 253, 0.1);
      }

      button:disabled {
        color: #9ca1b7;
        cursor: not-allowed;
      }

      button:disabled:hover {
        background: transparent;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: -2px;
      }

      .control {
        width: 10px;
        height: 10px;
        flex: 0 0 auto;
        border: 1px solid #727999;
        background: transparent;
        display: grid;
        place-content: center;
        box-sizing: border-box;
      }

      :host([control='checkbox']) .control {
        border-radius: 2px;
      }

      :host([control='radio']) .control {
        border-radius: 9999px;
      }

      :host([selected]) .control {
        border-color: #0d6dfd;
        background: #0d6dfd;
      }

      :host([control='checkbox'][selected]) .control::after {
        content: '';
        width: 5px;
        height: 3px;
        border-left: 1.5px solid #fff;
        border-bottom: 1.5px solid #fff;
        transform: rotate(-45deg) translate(0.5px, -0.5px);
      }

      :host([control='radio'][selected]) .control::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 9999px;
        background: #fff;
      }

      :host([disabled]) .control {
        border-color: #c5c9d8;
      }

      :host([disabled][selected]) .control {
        background: #c5c9d8;
        border-color: #c5c9d8;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
        min-width: 0;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        min-width: 0;
      }

      .label {
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .meta {
        flex: 0 0 auto;
        color: #727999;
        white-space: nowrap;
      }

      .supporting {
        color: #8c92ac;
        font-size: 11px;
        line-height: normal;
      }

      .check {
        display: inline-flex;
        flex: 0 0 auto;
        color: #0d6dfd;
        line-height: 0;
      }

      :host([disabled]) .meta,
      :host([disabled]) .supporting {
        color: #9ca1b7;
      }
    `];u([i()],p.prototype,"label",2);u([i({attribute:"supporting-text"})],p.prototype,"supportingText",2);u([i()],p.prototype,"meta",2);u([i({reflect:!0})],p.prototype,"control",2);u([i({type:Boolean,reflect:!0})],p.prototype,"selected",2);u([i({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([i({type:Boolean,attribute:"show-check"})],p.prototype,"showCheck",2);u([i()],p.prototype,"value",2);p=u([O("dre-dropdown-item")],p);var Z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},n=(e,t,o,a)=>{for(var r=a>1?void 0:a?G(t,o):t,d=e.length-1,b;d>=0;d--)(b=e[d])&&(r=(a?b(t,o,r):b(r))||r);return a&&r&&Z(t,o,r),r},S=(e,t,o)=>t.has(e)||T("Cannot "+o),c=(e,t,o)=>(S(e,t,"read from private field"),o?o.call(e):t.get(e)),x=(e,t,o)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),g=(e,t,o)=>(S(e,t,"access private method"),o),m,v,y,f,B,$,W,w,k;let s=class extends z{constructor(){super(...arguments),x(this,f),this.label="",this.placeholder="Add Value",this.value="",this.displayValue="",this.menuTitle="",this.type="single",this.variant="default",this.appearance="light",this.size="medium",this.open=!1,this.disabled=!1,this.invalid=!1,this.searchable=!1,this.menuOnly=!1,this.filter="",x(this,m,Math.random().toString(36).slice(2,9)),x(this,v,`dre-dd-${c(this,m)}`),x(this,y,`dre-dd-label-${c(this,m)}`),x(this,w,e=>{!this.open||this.menuOnly||e.composedPath().includes(this)||(this.open=!1)}),x(this,k,e=>{e.key==="Escape"&&this.open&&(this.open=!1,e.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("click",c(this,w)),this.addEventListener("keydown",c(this,k))}disconnectedCallback(){document.removeEventListener("click",c(this,w)),this.removeEventListener("keydown",c(this,k)),super.disconnectedCallback()}updated(e){(e.has("value")||e.has("type")||e.has("open")||e.has("menuOnly")||e.has("filter"))&&g(this,f,$).call(this)}firstUpdated(){g(this,f,$).call(this)}render(){const e=this.displayValue||this.value,t=!e,o=this.variant==="icon-leading"||this.variant==="search"||this.searchable,a=this.searchable||this.variant==="search",r=this.label||this.placeholder||"Dropdown";return l`
      ${this.label&&!this.menuOnly?l`<span id=${c(this,y)} class="label" part="label">${this.label}</span>`:h}
      ${this.menuOnly?h:l`
            <button
              class="trigger"
              type="button"
              part="trigger"
              aria-haspopup="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-controls=${c(this,v)}
              aria-labelledby=${this.label?c(this,y):h}
              aria-label=${this.label?h:r}
              ?disabled=${this.disabled}
              @click=${g(this,f,B)}
            >
              ${o?l`
                    <span class="leading" part="leading">
                      <slot name="leading">
                        <dre-icon
                          name=${this.variant==="search"||this.searchable?"search":"code-1"}
                          size="14"
                        ></dre-icon>
                      </slot>
                    </span>
                  `:h}
              <span class="value ${t?"placeholder":""}" part="value"
                >${e||this.placeholder}</span
              >
              <span class="chevron" aria-hidden="true">
                <dre-icon name="chevron-down" size="14"></dre-icon>
              </span>
            </button>
          `}
      <div
        id=${c(this,v)}
        class="menu"
        part="menu"
        role="listbox"
        aria-label=${this.menuTitle||r}
        aria-multiselectable=${this.type==="multiple"?"true":"false"}
        @dre-select=${g(this,f,W)}
      >
        ${this.menuTitle?l`
              <div class="menu-title" part="menu-title">${this.menuTitle}</div>
              <div class="menu-divider" part="menu-divider" aria-hidden="true"></div>
            `:h}
        ${a&&(this.open||this.menuOnly)?l`
              <div class="search" part="search">
                <dre-icon name="search" size="14"></dre-icon>
                <input
                  type="search"
                  placeholder="Search…"
                  .value=${this.filter}
                  @input=${d=>{this.filter=d.target.value}}
                  @click=${d=>d.stopPropagation()}
                />
              </div>
            `:h}
        <div class="menu-items" part="menu-items">
          <slot></slot>
        </div>
      </div>
    `}};m=new WeakMap;v=new WeakMap;y=new WeakMap;f=new WeakSet;B=function(){this.disabled||this.menuOnly||(this.open=!this.open,this.dispatchEvent(new CustomEvent("dre-open-change",{detail:{open:this.open},bubbles:!0,composed:!0})))};$=function(){const e=this.type==="multiple"?this.value.split(",").map(o=>o.trim()).filter(Boolean):this.value?[this.value]:[],t=this.filter.trim().toLowerCase();for(const o of this.querySelectorAll("dre-dropdown-item")){const a=o,r=a.value||a.label;a.selected=e.includes(r),!this.menuOnly&&this.type==="single"&&a.control==="none"&&(a.showCheck=!0),this.menuOnly&&a.control==="none"&&(a.control=this.type==="multiple"?"checkbox":"radio"),a.hidden=t?!`${a.label} ${a.value}`.toLowerCase().includes(t):!1}};W=function(e){const t=e.detail;if(this.type==="single")this.value=t.value,this.displayValue=t.label||t.value,this.menuOnly||(this.open=!1);else{const o=this.value?this.value.split(",").map(r=>r.trim()).filter(Boolean):[],a=t.selected?[...new Set([...o,t.value])]:o.filter(r=>r!==t.value);this.value=a.join(", "),this.displayValue=this.value}g(this,f,$).call(this),this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:this.value},bubbles:!0,composed:!0}))};w=new WeakMap;k=new WeakMap;s.styles=[D,C`
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        max-width: 280px;
        position: relative;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([appearance='dark']) {
        color-scheme: dark;
      }

      .label {
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        color: #383c4d;
      }

      :host([appearance='dark']) .label {
        color: #c5c9d8;
      }

      .trigger {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        height: 34px;
        min-height: 34px;
        padding: 0 12px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
        color: #383c4d;
        font: inherit;
        font-size: 12px;
        text-align: start;
        cursor: pointer;
        box-sizing: border-box;
        box-shadow:
          0 1px 2px rgba(0, 0, 0, 0.06),
          0 2px 4px rgba(0, 0, 0, 0.04);
      }

      :host([size='small']) .trigger {
        height: 28px;
        min-height: 28px;
      }

      :host([appearance='dark']) .trigger {
        background: #1b1b1e;
        border-color: #3a3a40;
        color: #e6e8ed;
        box-shadow: none;
      }

      .trigger:hover:not(:disabled) {
        border-color: #8c92ac;
      }

      :host([appearance='dark']) .trigger:hover:not(:disabled) {
        border-color: #727999;
      }

      .trigger:focus-visible,
      :host([open]) .trigger {
        outline: none;
        border-color: #0d6dfd;
        box-shadow:
          0 0 0 1px #0d6dfd,
          0 1px 2px rgba(0, 0, 0, 0.06),
          0 2px 4px rgba(0, 0, 0, 0.04);
      }

      .trigger:disabled {
        background: #f3f3f6;
        color: #9ca1b7;
        border-color: #e6e8ed;
        box-shadow: none;
        cursor: not-allowed;
      }

      :host([appearance='dark']) .trigger:disabled {
        background: #2a2a2e;
        border-color: #3a3a40;
        color: #727999;
      }

      :host([invalid]) .trigger {
        border-color: #d64333;
        box-shadow: none;
      }

      :host([invalid][open]) .trigger,
      :host([invalid]) .trigger:focus-visible {
        border-color: #d64333;
        box-shadow: 0 0 0 1px #d64333;
      }

      .value {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .value.placeholder {
        color: #8c92ac;
      }

      :host([appearance='dark']) .value.placeholder {
        color: #727999;
      }

      .leading,
      .chevron {
        display: inline-flex;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      .chevron {
        transition: transform 150ms ease-out;
      }

      :host([open]) .chevron {
        transform: rotate(180deg);
      }

      .menu {
        position: absolute;
        top: calc(100% + 10px);
        left: 0;
        right: 0;
        z-index: 20;
        display: none;
        flex-direction: column;
        gap: 10px;
        max-height: 316px;
        overflow: auto;
        padding: 10px 0;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
        box-shadow:
          0 2px 8px rgba(0, 0, 0, 0.08),
          0 4px 14px rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
      }

      :host([open]) .menu {
        display: flex;
      }

      :host([appearance='dark']) .menu {
        background: #1b1b1e;
        border-color: #3a3a40;
      }

      /* Standalone Dropdown menu (no trigger) */
      :host([menu-only]) {
        max-width: 197px;
      }

      :host([menu-only]) .trigger {
        display: none;
      }

      :host([menu-only]) .menu {
        position: static;
        display: flex;
        width: 197px;
        max-width: 100%;
        padding: 10px;
        border: 0;
        box-shadow: none;
      }

      .menu-title {
        padding: 0;
        font-size: 12px;
        font-weight: 400;
        color: #13141a;
      }

      :host([appearance='dark']) .menu-title {
        color: #e6e8ed;
      }

      .menu-divider {
        width: 100%;
        height: 1px;
        background: #f3f3f6;
      }

      :host([appearance='dark']) .menu-divider {
        background: #3a3a40;
      }

      .menu-items {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
      }

      :host([menu-only]) .menu-items {
        gap: 0;
      }

      .search {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 10px 4px;
        padding: 0 10px;
        height: 28px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #fff;
        box-sizing: border-box;
      }

      .search input {
        flex: 1;
        min-width: 0;
        border: 0;
        padding: 0;
        margin: 0;
        background: transparent;
        font: inherit;
        font-size: 12px;
        color: #13141a;
        outline: none;
      }

      .search input::placeholder {
        color: #8c92ac;
      }
    `];n([i()],s.prototype,"label",2);n([i()],s.prototype,"placeholder",2);n([i()],s.prototype,"value",2);n([i({attribute:"display-value"})],s.prototype,"displayValue",2);n([i({attribute:"menu-title"})],s.prototype,"menuTitle",2);n([i({reflect:!0})],s.prototype,"type",2);n([i({reflect:!0})],s.prototype,"variant",2);n([i({reflect:!0})],s.prototype,"appearance",2);n([i({reflect:!0})],s.prototype,"size",2);n([i({type:Boolean,reflect:!0})],s.prototype,"open",2);n([i({type:Boolean,reflect:!0})],s.prototype,"disabled",2);n([i({type:Boolean,reflect:!0})],s.prototype,"invalid",2);n([i({type:Boolean,reflect:!0})],s.prototype,"searchable",2);n([i({type:Boolean,reflect:!0,attribute:"menu-only"})],s.prototype,"menuOnly",2);n([L()],s.prototype,"filter",2);s=n([O("dre-dropdown")],s);
