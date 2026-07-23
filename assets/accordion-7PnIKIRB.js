import{i as f,a as x,b as v}from"./iframe-C1mRIqdo.js";import{n as p,t as u}from"./property-COYYN49D.js";import{h as m}from"./styles-DmOKkkRH.js";import"./icon-DLOWPnC1.js";var g=Object.defineProperty,y=Object.getOwnPropertyDescriptor,h=t=>{throw TypeError(t)},l=(t,e,a,s)=>{for(var r=s>1?void 0:s?y(e,a):e,i=t.length-1,o;i>=0;i--)(o=t[i])&&(r=(s?o(e,a,r):o(r))||r);return s&&r&&g(e,a,r),r},_=(t,e,a)=>e.has(t)||h("Cannot "+a),w=(t,e,a)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),b=(t,e,a)=>(_(t,e,"access private method"),a),d,c;let n=class extends x{constructor(){super(...arguments),w(this,d),this.title="Basics",this.expanded=!1}render(){return v`
      <button
        class="header"
        type="button"
        part="header"
        aria-expanded=${this.expanded?"true":"false"}
        @click=${b(this,d,c)}
      >
        <span class="lead" part="lead"><slot name="lead"></slot></span>
        <span class="title">${this.title}</span>
        <span class="chevron" aria-hidden="true">
          <dre-icon name="chevron-down" size="14"></dre-icon>
        </span>
      </button>
      <div class="panel" part="panel"><slot></slot></div>
    `}};d=new WeakSet;c=function(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("dre-toggle",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))};n.styles=[m,f`
      :host {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        max-width: 202px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 0;
        padding: 0;
        min-height: 14px;
        border: 0;
        background: transparent;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
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

      .lead {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .title {
        flex: 1;
        min-width: 0;
      }

      .chevron {
        display: inline-flex;
        color: #727999;
        line-height: 0;
        transition: transform 120ms ease;
      }

      :host([expanded]) .chevron {
        transform: rotate(180deg);
      }

      .panel {
        display: none;
        flex-direction: column;
        gap: 10px;
      }

      :host([expanded]) .panel {
        display: flex;
      }

      ::slotted(*) {
        display: block;
      }
    `];l([p()],n.prototype,"title",2);l([p({type:Boolean,reflect:!0})],n.prototype,"expanded",2);n=l([u("dre-accordion")],n);
