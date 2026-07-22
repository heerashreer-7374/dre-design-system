import{i as g,a as f,b as d}from"./iframe-GA3ktVQc.js";import{n as c,t as u}from"./property-rkDd5alT.js";import{h as x}from"./styles-_scQb5lY.js";import"./icon-Btw80okq.js";var v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,b=t=>{throw TypeError(t)},s=(t,e,i,a)=>{for(var n=a>1?void 0:a?m(e,i):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(n=(a?l(e,i,n):l(n))||n);return a&&n&&v(e,i,n),n},y=(t,e,i)=>e.has(t)||b("Cannot "+i),_=(t,e,i)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),w=(t,e,i)=>(y(t,e,"access private method"),i),p,h;let r=class extends f{constructor(){super(...arguments),_(this,p),this.tabs=[{id:"1",label:"Settings",active:!0,icon:"settings"}],this.activeTab="",this.brand="DRE"}render(){var e,i;const t=this.activeTab||((e=this.tabs.find(a=>a.active))==null?void 0:e.id)||((i=this.tabs[0])==null?void 0:i.id);return d`
      <header class="bar" part="bar">
        <div class="leading" part="leading">
          <slot name="leading">
            <span class="brand"><span class="brand-mark" aria-hidden="true"></span>${this.brand}</span>
          </slot>
          <span class="divider" aria-hidden="true"></span>
          <div class="tabs" part="tabs" role="tablist">
            ${this.tabs.map(a=>d`
                <button
                  class="tab"
                  type="button"
                  role="tab"
                  aria-selected=${a.id===t?"true":"false"}
                  @click=${()=>w(this,p,h).call(this,a.id)}
                >
                  ${a.icon?d`<span class="tab-icon"><dre-icon name=${a.icon} size="16"></dre-icon></span>`:null}
                  ${a.label}
                  <span
                    class="tab-close"
                    role="button"
                    aria-label="Close ${a.label}"
                    @click=${n=>n.stopPropagation()}
                  >
                    <dre-icon name="x" size="10"></dre-icon>
                  </span>
                </button>
              `)}
            <slot></slot>
          </div>
        </div>
        <div class="trailing" part="trailing">
          <slot name="trailing">
            <button class="icon-btn" type="button" aria-label="Settings">
              <dre-icon name="settings" size="14"></dre-icon>
            </button>
            <button class="icon-btn" type="button" aria-label="More">
              <dre-icon name="more" size="14"></dre-icon>
            </button>
          </slot>
        </div>
      </header>
    `}};p=new WeakSet;h=function(t){this.activeTab=t,this.tabs=this.tabs.map(e=>({...e,active:e.id===t})),this.dispatchEvent(new CustomEvent("dre-tab-change",{detail:{id:t},bubbles:!0,composed:!0}))};r.styles=[x,g`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 42px;
        min-height: 42px;
        padding: 0;
        background: #f3f3f6;
        box-sizing: border-box;
      }

      .leading {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        padding-left: 10px;
        height: 32px;
        flex: 0 0 auto;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 16px;
        color: #13141a;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      .brand-mark {
        width: 18px;
        height: 16px;
        border-radius: 3px;
        background: linear-gradient(135deg, #0d6dfd 0%, #2f82fd 100%);
      }

      .divider {
        width: 1px;
        height: 24px;
        background: #d1d6de;
        flex: 0 0 auto;
      }

      .tabs {
        display: flex;
        align-items: center;
        gap: 4px;
        flex: 1;
        min-width: 0;
        overflow-x: auto;
        padding-inline: 0 8px;
      }

      .tab {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 32px;
        padding: 0 8px 0 12px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 12px;
        line-height: 14px;
        cursor: pointer;
        white-space: nowrap;
      }

      .tab:hover {
        color: #13141a;
        background: rgb(255 255 255 / 55%);
      }

      .tab[aria-selected='true'] {
        background: #ffffff;
        color: #333842;
      }

      .tab-icon {
        display: inline-flex;
        color: inherit;
        line-height: 0;
      }

      .tab-close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        line-height: 0;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        height: 36px;
        padding: 8px 12px 8px 8px;
        flex: 0 0 auto;
        box-sizing: border-box;
      }

      .icon-btn {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #383c4d;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        border-radius: 2px;
      }

      .icon-btn:hover {
        background: rgb(0 0 0 / 4%);
      }
    `];s([c({attribute:!1})],r.prototype,"tabs",2);s([c({attribute:"active-tab"})],r.prototype,"activeTab",2);s([c()],r.prototype,"brand",2);r=s([u("dre-top-bar")],r);
