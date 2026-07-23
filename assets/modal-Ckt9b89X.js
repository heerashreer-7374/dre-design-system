import{i as g,a as u,b as x}from"./iframe-6U_684zG.js";import{n as h,t as v}from"./property-Bwn_HGw6.js";import{h as m}from"./styles-Cq6U1Hym.js";import"./button-B6s0iw6d.js";import"./icon-BCYjMvUl.js";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=o=>{throw TypeError(o)},c=(o,e,t,n)=>{for(var r=n>1?void 0:n?b(e,t):e,d=o.length-1,p;d>=0;d--)(p=o[d])&&(r=(n?p(e,t,r):p(r))||r);return n&&r&&y(e,t,r),r},_=(o,e,t)=>e.has(o)||f("Cannot "+t),w=(o,e,t)=>e.has(o)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t),l=(o,e,t)=>(_(o,e,"access private method"),t),i,s;let a=class extends u{constructor(){super(...arguments),w(this,i),this.open=!1,this.heading="Dialog"}updated(o){if(o.has("open")){const e=this.renderRoot.querySelector("dialog");if(!e)return;this.open&&!e.open&&e.showModal(),!this.open&&e.open&&e.close()}}render(){return x`
      <dialog @close=${l(this,i,s)}>
        <div class="panel" part="panel">
          <header>
            <h2>${this.heading}</h2>
            <button class="close" type="button" aria-label="Close" @click=${l(this,i,s)}>
              <dre-icon name="x" size="12"></dre-icon>
            </button>
          </header>
          <hr class="divider" />
          <div class="body"><slot></slot></div>
          <footer>
            <slot name="footer">
              <dre-button hierarchy="secondary" @dre-click=${l(this,i,s)}>Cancel</dre-button>
              <dre-button hierarchy="primary">Confirm</dre-button>
            </slot>
          </footer>
        </div>
      </dialog>
    `}};i=new WeakSet;s=function(){this.open=!1,this.dispatchEvent(new CustomEvent("dre-close",{bubbles:!0,composed:!0}))};a.styles=[m,g`
      :host {
        display: contents;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      dialog {
        border: 0;
        padding: 12px;
        border-radius: 8px;
        background: #ffffff;
        color: #13141a;
        box-shadow: 0 8px 32px rgb(19 20 26 / 18%);
        width: min(428px, calc(100vw - 32px));
        max-height: calc(100vh - 48px);
      }

      dialog::backdrop {
        background: rgb(19 20 26 / 45%);
      }

      .panel {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 20px;
      }

      h2 {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        color: #13141a;
      }

      .divider {
        height: 0;
        border: 0;
        border-top: 1px solid #e6e8ed;
        margin: 0;
      }

      .body {
        font-size: 14px;
        line-height: 20px;
        color: #5d6481;
      }

      footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding-top: 4px;
      }

      .close {
        border: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        padding: 0;
        width: 16px;
        height: 16px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .close:hover {
        color: #383c4d;
      }
    `];c([h({type:Boolean,reflect:!0})],a.prototype,"open",2);c([h()],a.prototype,"heading",2);a=c([v("dre-modal")],a);
