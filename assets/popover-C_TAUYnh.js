import{i as m,a as b,b as c}from"./iframe-C1mRIqdo.js";import{n as v,t as y}from"./property-COYYN49D.js";import{h as _}from"./styles-DmOKkkRH.js";import"./icon-DLOWPnC1.js";var k=Object.defineProperty,w=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},p=(e,t,o,s)=>{for(var i=s>1?void 0:s?w(t,o):t,r=e.length-1,d;r>=0;r--)(d=e[r])&&(i=(s?d(t,o,i):d(i))||i);return s&&i&&k(t,o,i),i},g=(e,t,o)=>t.has(e)||x("Cannot "+o),h=(e,t,o)=>(g(e,t,"read from private field"),o?o.call(e):t.get(e)),f=(e,t,o)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),C=(e,t,o)=>(g(e,t,"access private method"),o),l,u,n;let a=class extends b{constructor(){super(...arguments),f(this,l),this.open=!1,this.heading="",f(this,n,e=>{this.open&&(e.composedPath().includes(this)||(this.open=!1))})}connectedCallback(){super.connectedCallback(),document.addEventListener("click",h(this,n))}disconnectedCallback(){document.removeEventListener("click",h(this,n)),super.disconnectedCallback()}render(){return c`
      <span @click=${C(this,l,u)}><slot name="trigger"></slot></span>
      <div class="panel" part="panel" role="dialog">
        ${this.heading?c`
              <div class="header">
                <span class="lead"><slot name="icon"></slot></span>
                <div class="title">${this.heading}</div>
                <button
                  class="close"
                  type="button"
                  aria-label="Close"
                  @click=${()=>this.open=!1}
                >
                  <dre-icon name="x" size="12"></dre-icon>
                </button>
              </div>
              <hr class="divider" />
            `:null}
        <div class="body">
          <slot>
            <div class="slot-box">Body content</div>
          </slot>
        </div>
        <hr class="divider" />
        <div class="footer"><slot name="footer"></slot></div>
      </div>
    `}};l=new WeakSet;u=function(){this.open=!this.open};n=new WeakMap;a.styles=[_,m`
      :host {
        position: relative;
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .panel {
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        z-index: 25;
        display: none;
        width: 500px;
        max-width: min(500px, calc(100vw - 24px));
        padding: 10px 0;
        border-radius: 4px;
        background: #ffffff;
        box-shadow: 0 8px 24px rgb(19 20 26 / 16%);
        flex-direction: column;
        gap: 10px;
      }

      :host([open]) .panel {
        display: flex;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 15px;
        min-height: 20px;
      }

      .title {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
        color: #13141a;
      }

      .divider {
        height: 0;
        border: 0;
        border-top: 1px solid #e6e8ed;
        margin: 0;
      }

      .body {
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #5d6481;
        font-size: 14px;
      }

      .slot-box {
        border: 1px dashed #adb5c7;
        background: #f5f5fa;
        border-radius: 4px;
        min-height: 97px;
        padding: 12px;
        box-sizing: border-box;
      }

      .footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding: 0 15px;
        min-height: 26px;
        align-items: center;
      }

      .footer:empty {
        display: none;
      }

      .close {
        border: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        padding: 0;
        line-height: 0;
      }
    `];p([v({type:Boolean,reflect:!0})],a.prototype,"open",2);p([v()],a.prototype,"heading",2);a=p([y("dre-popover")],a);
