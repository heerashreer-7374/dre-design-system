import{i as u,a as b,b as p}from"./iframe-GA3ktVQc.js";import{n,t as x}from"./property-rkDd5alT.js";import{h as g}from"./styles-_scQb5lY.js";import"./icon-Btw80okq.js";import"./accordion-83-Z8vEA.js";import"./accordion-group-CQMzXM78.js";var v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},i=(e,t,r,s)=>{for(var o=s>1?void 0:s?m(t,r):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(o=(s?l(t,r,o):l(o))||o);return s&&o&&v(t,r,o),o},y=(e,t,r)=>t.has(e)||h("Cannot "+r),w=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),_=(e,t,r)=>(y(e,t,"access private method"),r),c,f;let a=class extends b{constructor(){super(...arguments),w(this,c),this.mode="code-editor",this.state="extended",this.headerTitle="Actions",this.railIcons=["syntax","cable","code"]}render(){return p`
      <div class="header" part="header">
        <slot name="header"><span class="title">${this.headerTitle}</span></slot>
        <button
          class="toggle"
          type="button"
          aria-label=${this.state==="extended"?"Collapse pane":"Expand pane"}
          @click=${_(this,c,f)}
        >
          <dre-icon name=${this.state==="extended"?"pane-close":"pane-close-1"} size="16"></dre-icon>
        </button>
      </div>

      <div class="rail" part="rail">
        ${this.railIcons.map((e,t)=>p`
            <button
              class="rail-btn"
              type="button"
              aria-current=${t===0?"true":"false"}
              title=${e}
            >
              <dre-icon name=${e} size="20"></dre-icon>
            </button>
          `)}
      </div>

      <div class="body" part="body">
        <slot>
          <dre-accordion-group exclusive>
            <dre-accordion title="Basics" expanded>Core building blocks for this workflow.</dre-accordion>
            <dre-accordion title="Flow control">Branching and wait utilities.</dre-accordion>
            <dre-accordion title="Integrations">Connect Zoho apps and webhooks.</dre-accordion>
          </dre-accordion-group>
        </slot>
      </div>
    `}};c=new WeakSet;f=function(){this.state=this.state==="extended"?"collapsed":"extended",this.dispatchEvent(new CustomEvent("dre-collapse-change",{detail:{state:this.state},bubbles:!0,composed:!0}))};a.styles=[g,u`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
        width: 258px;
        background: #ffffff;
        color: #13141a;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
      }

      :host([state='collapsed']) {
        width: 48px;
        border-radius: 4px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        min-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #e6e8ed;
      }

      .title {
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      :host([state='collapsed']) .header {
        display: none;
      }

      .toggle {
        width: 28px;
        height: 28px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .toggle:hover {
        background: #f3f3f6;
        color: #13141a;
      }

      .body {
        flex: 1;
        overflow: auto;
        padding: 8px;
      }

      :host([state='collapsed']) .body {
        display: none;
      }

      .rail {
        display: none;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        flex: 1;
        padding: 13px 9px;
        box-sizing: border-box;
      }

      :host([state='collapsed']) .rail {
        display: flex;
      }

      .rail-btn {
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #5d6481;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .rail-btn:hover,
      .rail-btn[aria-current='true'] {
        background: #eef5ff;
        color: #0d6dfd;
      }
    `];i([n({reflect:!0})],a.prototype,"mode",2);i([n({reflect:!0})],a.prototype,"state",2);i([n({attribute:"header-title"})],a.prototype,"headerTitle",2);i([n({attribute:!1})],a.prototype,"railIcons",2);a=i([x("dre-left-pane")],a);
