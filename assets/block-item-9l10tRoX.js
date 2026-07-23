import{i as w,a as y,b as h}from"./iframe-6U_684zG.js";import{n as p,t as _}from"./property-Bwn_HGw6.js";import{h as b}from"./styles-Cq6U1Hym.js";import"./icon-BCYjMvUl.js";var z=Object.defineProperty,C=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},g=(t,e,i,s)=>{for(var a=s>1?void 0:s?C(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(s?o(e,i,a):o(a))||a);return s&&a&&z(e,i,a),a},P=(t,e,i)=>e.has(t)||$("Cannot "+i),r=(t,e,i)=>(P(t,e,"read from private field"),i?i.call(t):e.get(t)),c=(t,e,i)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),D=(t,e,i)=>(P(t,e,"access private method"),i),f,x,m,v,O;let W=0,d=class extends y{constructor(){super(...arguments),c(this,v),this.title="Basics",this.expanded=!1,c(this,f,++W),c(this,x,`dre-accordion-header-${r(this,f)}`),c(this,m,`dre-accordion-panel-${r(this,f)}`)}render(){return h`
      <button
        id=${r(this,x)}
        class="header"
        type="button"
        part="header"
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls=${r(this,m)}
        @click=${D(this,v,O)}
      >
        <span class="left">
          <span class="lead" part="lead">
            <slot name="lead"><dre-icon name="code-1" size="14"></dre-icon></slot>
          </span>
          <span class="title">${this.title}</span>
        </span>
        <span class="chevron" aria-hidden="true">
          <dre-icon name="chevron-down" size="14"></dre-icon>
        </span>
      </button>
      <div
        id=${r(this,m)}
        class="panel"
        part="panel"
        role="region"
        aria-labelledby=${r(this,x)}
      >
        <slot></slot>
      </div>
    `}};f=new WeakMap;x=new WeakMap;m=new WeakMap;v=new WeakSet;O=function(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("dre-toggle",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))};d.styles=[b,w`
      :host {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: 100%;
        max-width: 183px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      :host([expanded]) {
        gap: 10px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        margin: 0;
        padding: 0;
        min-height: 14px;
        border: 0;
        background: transparent;
        color: #383c4d;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        text-align: start;
        cursor: pointer;
      }

      .header:hover {
        color: #0d6dfd;
      }

      .header:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
        flex: 1;
      }

      .lead {
        display: inline-flex;
        flex: 0 0 auto;
        width: 14px;
        height: 14px;
        color: #727999;
        line-height: 0;
        align-items: center;
        justify-content: center;
      }

      .title {
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .chevron {
        display: inline-flex;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
        transition: transform 150ms ease-out;
      }

      /* Accordion/Panel: collapsed ↓ · expanded ↑ (Console uses →/↓) */
      :host([expanded]) .chevron {
        transform: rotate(180deg);
      }

      .panel {
        display: none;
        flex-direction: column;
        gap: 10px;
        width: 100%;
      }

      :host([expanded]) .panel {
        display: flex;
      }
    `];g([p()],d.prototype,"title",2);g([p({type:Boolean,reflect:!0})],d.prototype,"expanded",2);d=g([_("dre-accordion")],d);var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,u=(t,e,i,s)=>{for(var a=s>1?void 0:s?B(e,i):e,n=t.length-1,o;n>=0;n--)(o=t[n])&&(a=(s?o(e,i,a):o(a))||a);return s&&a&&A(e,i,a),a};let l=class extends y{constructor(){super(...arguments),this.label="",this.description="",this.icon="cioption"}render(){return h`
      <div class="item" part="item">
        <span class="icon" part="icon">
          <slot name="icon"><dre-icon name=${this.icon} size="14"></dre-icon></slot>
        </span>
        <span class="copy" part="copy">
          <span class="label" part="label"><slot>${this.label}</slot></span>
          ${this.description?h`<span class="desc" part="description">${this.description}</span>`:h`<slot name="description"></slot>`}
        </span>
      </div>
    `}};l.styles=[b,w`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .item {
        display: flex;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        width: 100%;
        padding: 6px;
        border-radius: 6px;
        border: 1px dashed #e6e8ed;
        background: #f7f7f9;
      }

      .icon {
        flex: 0 0 auto;
        width: 34px;
        height: 34px;
        border-radius: 23px;
        background: #e6e8ed;
        color: #727999;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .copy {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .label {
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #383c4d;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .desc {
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        color: #8c92ac;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `];u([p()],l.prototype,"label",2);u([p()],l.prototype,"description",2);u([p()],l.prototype,"icon",2);l=u([_("dre-block-item")],l);
