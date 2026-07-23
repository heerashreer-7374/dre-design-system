import{i as f,a as x,b as d}from"./iframe-6U_684zG.js";import{n as p,t as v}from"./property-Bwn_HGw6.js";import{h as m}from"./styles-Cq6U1Hym.js";import"./icon-BCYjMvUl.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},l=(e,t,i,a)=>{for(var n=a>1?void 0:a?w(t,i):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(n=(a?c(t,i,n):c(n))||n);return a&&n&&y(t,i,n),n},_=(e,t,i)=>t.has(e)||h("Cannot "+i),$=(e,t,i)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),b=(e,t,i)=>(_(e,t,"access private method"),i),o,g,u;let r=class extends x{constructor(){super(...arguments),$(this,o),this.tabs=[{id:"settings",label:"Settings",active:!0,icon:"settings"}],this.activeTab="",this.brand="Deluge"}render(){var t,i;const e=this.activeTab||((t=this.tabs.find(a=>a.active))==null?void 0:t.id)||((i=this.tabs[0])==null?void 0:i.id);return d`
      <header class="bar" part="bar">
        <div class="leading" part="leading">
          <slot name="leading">
            <span class="brand" role="img" aria-label=${this.brand}>
              <img
                class="brand-logo"
                src=${new URL(""+new URL("deluge-logo-BSk3fIo2.svg",import.meta.url).href,import.meta.url).href}
                alt=""
                width="60"
                height="16"
              />
            </span>
          </slot>
          <span class="divider" aria-hidden="true"></span>
          <div class="tabs" part="tabs" role="tablist">
            ${this.tabs.map(a=>{const n=a.id===e;return d`
                <button
                  class="tab"
                  type="button"
                  role="tab"
                  aria-selected=${n?"true":"false"}
                  @click=${()=>b(this,o,g).call(this,a.id)}
                >
                  <span class="tab-icon">
                    <dre-icon name=${b(this,o,u).call(this,a)} size="16"></dre-icon>
                  </span>
                  ${a.label}
                  ${n?d`
                        <span
                          class="tab-close"
                          role="button"
                          aria-label="Close ${a.label}"
                          @click=${s=>s.stopPropagation()}
                        >
                          <dre-icon name="close" size="12"></dre-icon>
                        </span>
                      `:null}
                </button>
              `})}
            <slot></slot>
          </div>
        </div>
        <div class="trailing" part="trailing">
          <slot name="trailing">
            <button class="icon-btn" type="button" aria-label="Settings">
              <dre-icon name="settings" size="16"></dre-icon>
            </button>
            <button class="icon-btn" type="button" aria-label="More">
              <dre-icon name="more" size="16"></dre-icon>
            </button>
          </slot>
        </div>
      </header>
    `}};o=new WeakSet;g=function(e){this.activeTab=e,this.tabs=this.tabs.map(t=>({...t,active:t.id===e})),this.dispatchEvent(new CustomEvent("dre-tab-change",{detail:{id:e},bubbles:!0,composed:!0}))};u=function(e){return e.icon?e.icon:e.label.toLowerCase().includes("setting")?"settings":"code"};r.styles=[m,f`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        color: #333842;
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
        min-width: 0;
        flex: 1;
        overflow: hidden;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        height: 16px;
        line-height: 0;
        flex: 0 0 auto;
      }

      .brand-logo {
        display: block;
        width: 60px;
        height: 16px;
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
        gap: 0;
        flex: 1;
        min-width: 0;
        overflow-x: auto;
      }

      .tab {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        height: 32px;
        padding: 0 12px;
        border: 0;
        border-radius: 4px;
        background: transparent;
        color: #59616e;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        white-space: nowrap;
      }

      .tab:hover {
        color: #333842;
      }

      .tab[aria-selected='true'] {
        background: #ffffff;
        color: #333842;
        font-weight: 500;
        padding: 0 8px 0 12px;
      }

      .tab-icon {
        display: inline-flex;
        color: inherit;
        line-height: 0;
      }

      .tab-close {
        display: none;
        align-items: center;
        justify-content: center;
        width: 12px;
        height: 12px;
        border: 0;
        padding: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        line-height: 0;
        opacity: 0.7;
      }

      .tab[aria-selected='true'] .tab-close {
        display: inline-flex;
      }

      .tab-close:hover {
        opacity: 1;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: 4px;
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
        background: rgb(0 0 0 / 6%);
      }
    `];l([p({attribute:!1})],r.prototype,"tabs",2);l([p({attribute:"active-tab"})],r.prototype,"activeTab",2);l([p()],r.prototype,"brand",2);r=l([v("dre-top-bar")],r);
