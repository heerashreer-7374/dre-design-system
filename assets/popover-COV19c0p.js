import{i as C,a as E,b as d,A as v}from"./iframe-hYZkyXvR.js";import{n as s,t as P}from"./property-BSL9Me-Y.js";import{h as z}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import"./button-Du1k3Bj9.js";import"./toggle-DkDf4XWs.js";var T=Object.defineProperty,q=Object.getOwnPropertyDescriptor,_=(e,t,o,l)=>{for(var a=l>1?void 0:l?q(t,o):t,c=e.length-1,h;c>=0;c--)(h=e[c])&&(a=(l?h(t,o,a):h(a))||a);return l&&a&&T(t,o,a),a};let g=class extends E{constructor(){super(...arguments),this.appearance="light",this.kind="single",this.label=""}render(){const e=this.label||(this.kind==="multiple"?"Multiple Field Slot":"Single Field Slot");return d`<span class="label" part="label"><slot>${e}</slot></span>`}};g.styles=[z,C`
      :host {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        min-height: 97px;
        align-items: center;
        justify-content: center;
        border: 1.5px dashed #adb5c7;
        border-radius: 6px;
        background: #f5f5fa;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        color: #8c94a6;
        font-size: 11px;
        font-weight: 400;
        line-height: normal;
        text-align: center;
      }

      :host([appearance='dark']) {
        background: #212326;
        border-color: #46494f;
        color: #7a7f89;
      }

      :host([kind='multiple']) {
        min-height: 99px;
        flex: 1 1 0;
        min-width: 0;
      }

      .label {
        padding: 0 10px;
      }
    `];_([s({reflect:!0})],g.prototype,"appearance",2);_([s({reflect:!0})],g.prototype,"kind",2);_([s()],g.prototype,"label",2);g=_([P("dre-popover-slot")],g);var F=Object.defineProperty,W=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},p=(e,t,o,l)=>{for(var a=l>1?void 0:l?W(t,o):t,c=e.length-1,h;c>=0;c--)(h=e[c])&&(a=(l?h(t,o,a):h(a))||a);return l&&a&&F(t,o,a),a},B=(e,t,o)=>t.has(e)||S("Cannot "+o),f=(e,t,o)=>(B(e,t,"read from private field"),o?o.call(e):t.get(e)),b=(e,t,o)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),r=(e,t,o)=>(B(e,t,"access private method"),o),x,m,y,i,w,$,u,O,A,k,D,M;let n=class extends E{constructor(){super(...arguments),b(this,i),this.appearance="light",this.variant="single-field",this.heading="Enter choice",this.open=!1,this.inline=!1,this.showToggle=!0,this.showExpand=!0,this.showClose=!0,this.showFooter=!0,this.checked=!1,b(this,x,`dre-popover-title-${Math.random().toString(36).slice(2,9)}`),b(this,m,e=>{!this.open||this.inline||e.composedPath().includes(this)||r(this,i,u).call(this,!1)}),b(this,y,e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),r(this,i,u).call(this,!1))})}connectedCallback(){super.connectedCallback(),document.addEventListener("click",f(this,m)),this.addEventListener("keydown",f(this,y))}disconnectedCallback(){document.removeEventListener("click",f(this,m)),this.removeEventListener("keydown",f(this,y)),super.disconnectedCallback()}updated(e){queueMicrotask(()=>{(e.has("open")||e.has("inline"))&&r(this,i,w).call(this),r(this,i,$).call(this)})}firstUpdated(){queueMicrotask(()=>{r(this,i,w).call(this),r(this,i,$).call(this)})}render(){return d`
      <span class="trigger" @click=${r(this,i,O)}>
        <slot name="trigger" @slotchange=${()=>r(this,i,w).call(this)}></slot>
      </span>
      <div
        class="panel"
        part="panel"
        role="dialog"
        aria-labelledby=${`${f(this,x)}`}
      >
        <div class="content" part="content">
          <div class="header-wrap">
            <div class="header" part="header">
              <h2 class="title" part="title" id=${f(this,x)}>${this.heading}</h2>
              <div class="header-actions" part="header-actions">
                ${this.showToggle?d`
                      <dre-toggle
                        size="small"
                        ?checked=${this.checked}
                        @dre-change=${r(this,i,A)}
                        @click=${e=>e.stopPropagation()}
                      ></dre-toggle>
                    `:v}
                ${this.showExpand?d`
                      <button
                        class="icon-btn"
                        type="button"
                        aria-label="Expand"
                        @click=${()=>r(this,i,k).call(this,"dre-expand")}
                      >
                        <dre-icon name="arrow-expand" size="16"></dre-icon>
                      </button>
                    `:v}
                ${this.showClose?d`
                      <button
                        class="icon-btn"
                        type="button"
                        aria-label="Close"
                        @click=${()=>r(this,i,u).call(this,!1)}
                      >
                        <dre-icon name="x" size="16"></dre-icon>
                      </button>
                    `:v}
              </div>
            </div>
          </div>
          <hr class="divider" />
          <div class="body" part="body">${r(this,i,D).call(this)}</div>
          <hr class="divider" />
          ${this.showFooter?d`
                <div class="footer-wrap">
                  <div class="footer" part="footer">
                    <slot name="footer">${r(this,i,M).call(this)}</slot>
                  </div>
                </div>
              `:v}
        </div>
      </div>
    `}};x=new WeakMap;m=new WeakMap;y=new WeakMap;i=new WeakSet;w=function(){var l;const e=this.renderRoot.querySelector('slot[name="trigger"]'),t=e==null?void 0:e.assignedElements({flatten:!0})[0];if(!t)return;t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded");const o=((l=t.shadowRoot)==null?void 0:l.querySelector('button, [role="button"]'))??(t.matches('button,[role="button"]')?t:null);o&&(o.setAttribute("aria-haspopup","dialog"),o.setAttribute("aria-expanded",this.open?"true":"false"))};$=function(){var o;const e=this.renderRoot.querySelector("dre-toggle"),t=(o=e==null?void 0:e.shadowRoot)==null?void 0:o.querySelector("button");t==null||t.setAttribute("aria-label","Toggle option")};u=function(e){this.open!==e&&(this.open=e,this.dispatchEvent(new CustomEvent(e?"dre-open":"dre-close",{bubbles:!0,composed:!0})))};O=function(e){e.stopPropagation(),r(this,i,u).call(this,!this.open)};A=function(e){const t=e.detail;this.checked=!!(t!=null&&t.checked)};k=function(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0})),e==="dre-cancel"&&r(this,i,u).call(this,!1)};D=function(){return this.variant==="multiple-field"?d`
        <div class="body-col">
          <slot name="left">
            <dre-popover-slot
              kind="multiple"
              appearance=${this.appearance}
            ></dre-popover-slot>
          </slot>
        </div>
        <div class="body-col">
          <slot name="right">
            <dre-popover-slot
              kind="multiple"
              appearance=${this.appearance}
            ></dre-popover-slot>
          </slot>
        </div>
      `:d`
      <slot name="body">
        <dre-popover-slot kind="single" appearance=${this.appearance}></dre-popover-slot>
      </slot>
    `};M=function(){return d`
      <dre-button
        hierarchy="secondary"
        size="small"
        @dre-click=${()=>r(this,i,k).call(this,"dre-cancel")}
      >
        Cancel
      </dre-button>
      <dre-button hierarchy="primary" size="small" @dre-click=${()=>r(this,i,k).call(this,"dre-save")}>
        Save
      </dre-button>
    `};n.styles=[z,C`
      :host {
        position: relative;
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .trigger {
        display: inline-flex;
        line-height: 0;
      }

      .panel {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        z-index: 25;
        display: none;
        box-sizing: border-box;
        width: 500px;
        min-width: 362px;
        max-width: min(500px, calc(100vw - 24px));
        padding: 10px 0;
        border-radius: 4px;
        background: #ffffff;
        box-shadow:
          0 4px 14px rgb(0 0 0 / 12%),
          0 2px 8px rgb(0 0 0 / 8%);
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
      }

      :host([appearance='dark']) .panel {
        background: #252834;
      }

      :host([open]) .panel {
        display: flex;
      }

      :host([inline]) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      :host([inline]) .panel {
        position: relative;
        top: auto;
        left: auto;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
      }

      :host([variant='multiple-field']) .content {
        gap: 12px;
      }

      .header-wrap,
      .footer-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        width: 100%;
        min-height: 20px;
      }

      .title {
        flex: 1 1 auto;
        min-width: 0;
        margin: 0;
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #13141a;
      }

      :host([appearance='dark']) .title {
        color: #e3e4e6;
      }

      .header-actions {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        flex: 0 0 auto;
        color: #727999;
      }

      :host([appearance='dark']) .header-actions {
        color: #9ca1b7;
      }

      .icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 0;
        width: 20px;
        height: 20px;
      }

      .icon-btn:hover {
        color: #383c4d;
      }

      :host([appearance='dark']) .icon-btn:hover {
        color: #e3e4e6;
      }

      .header-actions dre-toggle {
        flex: 0 0 auto;
      }

      .divider {
        height: 0;
        border: 0;
        border-top: 1px solid #e6e8ed;
        margin: 0;
        width: 100%;
      }

      :host([appearance='dark']) .divider {
        border-top-color: #3a3a40;
      }

      .body {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 10px;
        box-sizing: border-box;
      }

      :host([variant='multiple-field']) .body {
        flex-direction: row;
        align-items: stretch;
        gap: 12px;
        min-height: 99px;
      }

      .body-col {
        display: flex;
        flex: 1 1 0;
        min-width: 0;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        width: 100%;
        min-height: 26px;
      }

      .footer:empty {
        display: none;
      }
    `];p([s({reflect:!0})],n.prototype,"appearance",2);p([s({reflect:!0})],n.prototype,"variant",2);p([s()],n.prototype,"heading",2);p([s({type:Boolean,reflect:!0})],n.prototype,"open",2);p([s({type:Boolean,reflect:!0})],n.prototype,"inline",2);p([s({type:Boolean,attribute:"show-toggle"})],n.prototype,"showToggle",2);p([s({type:Boolean,attribute:"show-expand"})],n.prototype,"showExpand",2);p([s({type:Boolean,attribute:"show-close"})],n.prototype,"showClose",2);p([s({type:Boolean,attribute:"show-footer"})],n.prototype,"showFooter",2);p([s({type:Boolean})],n.prototype,"checked",2);n=p([P("dre-popover")],n);
