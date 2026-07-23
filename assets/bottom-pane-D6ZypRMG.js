import{i as m,a as y,b as a}from"./iframe-BIGdDvVp.js";import{n as i,t as v}from"./property-_7csjOJC.js";import{h as w}from"./styles-DjfhIa7o.js";import"./badge-BtFLPs00.js";import"./icon-BKdMMQwy.js";var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},s=(t,o,r,c)=>{for(var d=c>1?void 0:c?C(o,r):o,u=t.length-1,b;u>=0;u--)(b=t[u])&&(d=(c?b(o,r,d):b(d))||d);return c&&d&&$(o,r,d),d},k=(t,o,r)=>o.has(t)||f("Cannot "+r),z=(t,o,r)=>o.has(t)?f("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(t):o.set(t,r),l=(t,o,r)=>(k(t,o,"access private method"),r),n,h,x,p,g;let e=class extends y{constructor(){super(...arguments),z(this,n),this.state="collapsed",this.tab="console",this.errorCount="0",this.infoCount="0",this.consoleLabel="Console",this.lastEdited="",this.lineColumn="",this.language="Deluge",this.statusValue="",this.executionTime="",this.filterPlaceholder="Filter (e.g. text, **/*.ts, !**/node_modules/**)",this.showErrors=!0,this.showInfo=!0,this.showConsole=!0,this.showStatusBar=!0}render(){const t=this.tab==="console";return a`
      <div class="panel" part="panel">
        <div class="tabs" part="tabs">
          <div class="tab-list">
            <button
              class="tab"
              type="button"
              aria-selected=${t?"false":"true"}
              @click=${()=>l(this,n,p).call(this,"errors")}
            >
              <span class="tab-label">
                Errors
                <span class="tab-count">${this.errorCount}</span>
              </span>
              <span class="tab-indicator" aria-hidden="true"></span>
            </button>
            <button
              class="tab"
              type="button"
              aria-selected=${t?"true":"false"}
              @click=${()=>l(this,n,p).call(this,"console")}
            >
              <span class="tab-label">${this.consoleLabel}</span>
              <span class="tab-indicator" aria-hidden="true"></span>
            </button>
          </div>
          <button
            class="icon-btn"
            type="button"
            aria-label="Close console"
            @click=${()=>l(this,n,h).call(this,"collapsed")}
          >
            <dre-icon name="close" size="14"></dre-icon>
          </button>
        </div>

        <div class="divider-h"></div>

        ${t?a`
              <div class="toolbar" part="toolbar">
                <div class="status-group">
                  <span class="status-label">Status :</span>
                  ${this.statusValue?a`<dre-badge status="success" size="small">${this.statusValue}</dre-badge>`:null}
                  ${this.executionTime?a`<span class="vsep" aria-hidden="true"></span>
                        <span class="status-time">${this.executionTime}</span>`:null}
                </div>
                <input class="filter" type="search" placeholder=${this.filterPlaceholder} />
              </div>
              <div class="divider-h"></div>
            `:null}

        <div class="content">
          <div class="logs" part="logs">
            ${t?a`<slot>Ready.</slot>`:a`<slot name="errors"></slot>`}
          </div>
        </div>
      </div>

      ${l(this,n,g).call(this)}
    `}};n=new WeakSet;h=function(t){this.state=t,this.dispatchEvent(new CustomEvent("dre-collapse-change",{detail:{state:this.state},bubbles:!0,composed:!0}))};x=function(){l(this,n,h).call(this,this.state==="expanded"?"collapsed":"expanded")};p=function(t){this.tab=t,this.state!=="expanded"&&l(this,n,h).call(this,"expanded")};g=function(){if(!this.showStatusBar)return null;const t=this.state==="expanded";return a`
      <div class="status" part="status">
        <div class="left">
          ${this.showErrors?a`<button class="chip errors" type="button" @click=${()=>l(this,n,p).call(this,"errors")}>
                <dre-icon name="error" size="12"></dre-icon>
                <span>${this.errorCount}</span>
              </button>`:null}
          ${this.showErrors&&(this.showInfo||this.showConsole)?a`<span class="sep" aria-hidden="true"></span>`:null}
          ${this.showInfo?a`<button class="chip info" type="button">
                <dre-icon name="warning" size="12"></dre-icon>
                <span>${this.infoCount}</span>
              </button>`:null}
          ${this.showInfo&&this.showConsole?a`<span class="sep" aria-hidden="true"></span>`:null}
          ${this.showConsole?a`<button class="chip" type="button" @click=${()=>l(this,n,p).call(this,"console")}>
                <span class="chip-label">${this.consoleLabel}</span>
              </button>`:null}
        </div>

        <div class="right">
          ${this.lastEdited?a`<span class="sep" aria-hidden="true"></span
                ><span class="meta">${this.lastEdited}</span>`:null}
          ${this.lineColumn?a`<span class="sep" aria-hidden="true"></span
                ><span class="meta">${this.lineColumn}</span>`:null}
          ${this.language?a`<span class="sep" aria-hidden="true"></span>
                <span class="lang">
                  <dre-icon name="vuesax-linear-code" size="12"></dre-icon>
                  ${this.language}
                </span>`:null}
          <span class="sep" aria-hidden="true"></span>
          <button
            class="icon-btn"
            type="button"
            aria-label=${t?"Collapse console":"Expand console"}
            @click=${l(this,n,x)}
          >
            <dre-icon name="zoom" size="16"></dre-icon>
          </button>
        </div>
      </div>
    `};e.styles=[w,m`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #ffffff;
        border: 1px solid #d6d8e1;
        border-radius: 4px;
        color: #13141a;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
        overflow: hidden;
      }

      :host([state='expanded']) {
        min-height: 280px;
        background: #f3f3f6;
        border-color: #bdc0cf;
      }

      .panel {
        display: none;
        flex: 1;
        flex-direction: column;
        min-height: 0;
        background: #f3f3f6;
      }

      :host([state='expanded']) .panel {
        display: flex;
      }

      .tabs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 40px;
        padding: 0 12px;
        background: #f3f3f6;
        box-sizing: border-box;
      }

      .tab-list {
        display: flex;
        align-items: stretch;
      }

      .tab {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        border: 0;
        background: transparent;
        padding: 10px 12px 0;
        font: inherit;
        cursor: pointer;
        color: #5d6481;
      }

      .tab-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        line-height: 17px;
      }

      .tab-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        border: 1px solid #d6d8e1;
        border-radius: 34px;
        font-size: 12px;
        line-height: 1;
        color: #5d6481;
        box-sizing: border-box;
      }

      .tab-indicator {
        width: 100%;
        height: 2px;
        background: transparent;
        border-radius: 1px;
      }

      .tab[aria-selected='true'] {
        color: #0d6dfd;
      }

      .tab[aria-selected='true'] .tab-indicator {
        background: #0d6dfd;
      }

      .icon-btn {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        border-radius: 2px;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .icon-btn:hover {
        background: #e6e8ed;
        color: #13141a;
      }

      .divider-h {
        height: 1px;
        width: 100%;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 40px;
        padding: 6px 12px;
        background: #f3f3f6;
        box-sizing: border-box;
      }

      .status-group {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        white-space: nowrap;
      }

      .status-label {
        font-size: 12px;
        color: #383c4d;
      }

      .status-time {
        font-size: 12px;
        color: #5d6481;
      }

      .vsep {
        width: 1px;
        height: 16px;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .filter {
        width: 302px;
        max-width: 40%;
        height: 28px;
        padding: 0 8px;
        border: 1px solid #bdc0cf;
        border-radius: 4px;
        background: #ffffff;
        color: #13141a;
        font: inherit;
        font-size: 12px;
        box-sizing: border-box;
      }

      .filter::placeholder {
        color: #8c92ac;
      }

      .content {
        flex: 1;
        min-height: 0;
        overflow: auto;
        padding: 8px 12px;
        background: #f3f3f6;
      }

      .logs {
        min-height: 100%;
        border: 1px solid #d6d8e1;
        border-radius: 4px;
        background: #ffffff;
        overflow: hidden;
      }

      .status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-height: 32px;
        height: 32px;
        padding: 0 10px;
        background: #ffffff;
        border-top: 1px solid #d6d8e1;
        box-sizing: border-box;
      }

      :host([state='collapsed']) .status {
        border-top: 0;
      }

      .left,
      .right {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 0;
        background: transparent;
        color: #727999;
        font: inherit;
        font-size: 12px;
        line-height: 14px;
        cursor: pointer;
        padding: 0;
      }

      .chip:hover {
        color: #13141a;
      }

      .chip-label {
        color: #5d6481;
      }

      .chip.errors dre-icon {
        color: #d64333;
      }

      .chip.info dre-icon {
        color: #edb51d;
      }

      .sep {
        width: 1px;
        height: 12px;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .meta {
        font-size: 12px;
        line-height: 14px;
        color: #5d6481;
        white-space: nowrap;
      }

      .lang {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        line-height: 14px;
        color: #5d6481;
      }
    `];s([i({reflect:!0})],e.prototype,"state",2);s([i({reflect:!0})],e.prototype,"tab",2);s([i({attribute:"error-count"})],e.prototype,"errorCount",2);s([i({attribute:"info-count"})],e.prototype,"infoCount",2);s([i({attribute:"console-label"})],e.prototype,"consoleLabel",2);s([i({attribute:"last-edited"})],e.prototype,"lastEdited",2);s([i({attribute:"line-column"})],e.prototype,"lineColumn",2);s([i()],e.prototype,"language",2);s([i({attribute:"status-value"})],e.prototype,"statusValue",2);s([i({attribute:"execution-time"})],e.prototype,"executionTime",2);s([i({attribute:"filter-placeholder"})],e.prototype,"filterPlaceholder",2);s([i({type:Boolean,attribute:"show-errors"})],e.prototype,"showErrors",2);s([i({type:Boolean,attribute:"show-info"})],e.prototype,"showInfo",2);s([i({type:Boolean,attribute:"show-console"})],e.prototype,"showConsole",2);s([i({type:Boolean,attribute:"show-status-bar"})],e.prototype,"showStatusBar",2);e=s([v("dre-bottom-pane")],e);
