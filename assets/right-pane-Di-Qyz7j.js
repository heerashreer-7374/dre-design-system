import{i as u,a as b,b as c}from"./iframe-CxxUV_ql.js";import{n as d,t as g}from"./property-BAmm2Bkg.js";import{h as m}from"./styles-DnIXmjyS.js";import"./icon-DJMhDlAD.js";var x=Object.defineProperty,v=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},p=(t,e,o,a)=>{for(var r=a>1?void 0:a?v(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(a?s(e,o,r):s(r))||r);return a&&r&&x(e,o,r),r},y=(t,e,o)=>e.has(t)||f("Cannot "+o),_=(t,e,o)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),w=(t,e,o)=>(y(t,e,"access private method"),o),l,h;let i=class extends b{constructor(){super(...arguments),_(this,l),this.title="Fields",this.closable=!0}render(){return c`
      <header class="header" part="header">
        <span class="lead" part="lead">
          <slot name="lead"><dre-icon name="function-square" size="20"></dre-icon></slot>
        </span>
        <h2 class="title">${this.title}</h2>
        <div class="actions">
          <slot name="actions">
            <button class="icon-btn" type="button" aria-label="More">
              <dre-icon name="more" size="14"></dre-icon>
            </button>
          </slot>
          ${this.closable?c`
                <span class="sep" aria-hidden="true"></span>
                <button class="icon-btn" type="button" aria-label="Collapse pane" @click=${w(this,l,h)}>
                  <dre-icon name="pane-close-1" size="16"></dre-icon>
                </button>
              `:null}
        </div>
      </header>
      <div class="body" part="body"><slot></slot></div>
      <footer class="footer" part="footer"><slot name="footer"></slot></footer>
    `}};l=new WeakSet;h=function(){this.dispatchEvent(new CustomEvent("dre-close",{bubbles:!0,composed:!0}))};i.styles=[m,u`
      :host {
        display: flex;
        flex-direction: column;
        width: 246px;
        height: 100%;
        min-height: 0;
        background: #ffffff;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
      }

      .header {
        display: flex;
        align-items: center;
        gap: 8px;
        height: 44px;
        min-height: 44px;
        padding: 12px 16px;
        border-bottom: 1px solid #f3f3f6;
        box-sizing: border-box;
      }

      .lead {
        display: inline-flex;
        color: #13141a;
        line-height: 0;
      }

      .title {
        flex: 1;
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        color: #13141a;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .actions {
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      .sep {
        width: 1px;
        height: 20px;
        background: #f3f3f6;
      }

      .icon-btn {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        border-radius: 2px;
      }

      .icon-btn:hover {
        color: #13141a;
        background: #f3f3f6;
      }

      .body {
        flex: 1;
        overflow: auto;
        display: flex;
        flex-direction: column;
        min-height: 0;
        background: #ffffff;
      }

      .footer {
        background: #ffffff;
      }

      .footer:empty {
        display: none;
      }
    `];p([d()],i.prototype,"title",2);p([d({type:Boolean,reflect:!0})],i.prototype,"closable",2);i=p([g("dre-right-pane")],i);
