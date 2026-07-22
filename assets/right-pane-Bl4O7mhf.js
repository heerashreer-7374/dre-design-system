import{i as b,a as m,b as c}from"./iframe-D98_Yrru.js";import{n as d,t as u}from"./property-OxoNfEB1.js";import{h as x}from"./styles-CTqCNxHK.js";import"./icon-B1KlDiLz.js";var v=Object.defineProperty,g=Object.getOwnPropertyDescriptor,h=t=>{throw TypeError(t)},p=(t,e,o,a)=>{for(var i=a>1?void 0:a?g(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=(a?s(e,o,i):s(i))||i);return a&&i&&v(e,o,i),i},y=(t,e,o)=>e.has(t)||h("Cannot "+o),_=(t,e,o)=>e.has(t)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),w=(t,e,o)=>(y(t,e,"access private method"),o),l,f;let r=class extends m{constructor(){super(...arguments),_(this,l),this.title="Fields",this.closable=!0}render(){return c`
      <header class="header" part="header">
        <span class="lead" part="lead">
          <slot name="lead"><dre-icon name="function-square" size="20"></dre-icon></slot>
        </span>
        <h2 class="title">${this.title}</h2>
        <div class="actions">
          <slot name="actions">
            <button class="icon-btn" type="button" aria-label="More">
              <dre-icon name="more" size="16"></dre-icon>
            </button>
          </slot>
          ${this.closable?c`
                <button class="icon-btn" type="button" aria-label="Close" @click=${w(this,l,f)}>
                  <dre-icon name="pane-close" size="16"></dre-icon>
                </button>
              `:null}
        </div>
      </header>
      <div class="body" part="body"><slot></slot></div>
      <footer class="footer" part="footer"><slot name="footer"></slot></footer>
    `}};l=new WeakSet;f=function(){this.dispatchEvent(new CustomEvent("dre-close",{bubbles:!0,composed:!0}))};r.styles=[x,b`
      :host {
        display: flex;
        flex-direction: column;
        width: 280px;
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
        font-weight: 400;
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
      }

      .icon-btn:hover {
        color: #13141a;
      }

      .body {
        flex: 1;
        overflow: auto;
        display: flex;
        flex-direction: column;
        min-height: 0;
      }

      .footer {
        border-top: 1px solid #e6e8ed;
      }

      .footer:empty {
        display: none;
      }
    `];p([d()],r.prototype,"title",2);p([d({type:Boolean,reflect:!0})],r.prototype,"closable",2);r=p([u("dre-right-pane")],r);
