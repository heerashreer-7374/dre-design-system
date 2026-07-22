import{i as $,a as C,b as a}from"./iframe-GA3ktVQc.js";import{n as o,t as _}from"./property-rkDd5alT.js";import{h as E}from"./styles-_scQb5lY.js";import"./badge-DJ6c0ziu.js";import"./preload-helper-Dp1pzeXC.js";var S=Object.defineProperty,B=Object.getOwnPropertyDescriptor,k=s=>{throw TypeError(s)},t=(s,r,n,d)=>{for(var l=d>1?void 0:d?B(r,n):r,h=s.length-1,b;h>=0;h--)(b=s[h])&&(l=(d?b(r,n,l):b(l))||l);return d&&l&&S(r,n,l),l},P=(s,r,n)=>r.has(s)||k("Cannot "+n),L=(s,r,n)=>r.has(s)?k("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(s):r.set(s,n),g=(s,r,n)=>(P(s,r,"access private method"),n),i,u;let e=class extends C{constructor(){super(...arguments),L(this,i),this.state="collapsed",this.errorCount="0",this.infoCount="0",this.consoleLabel="Console",this.lastEdited="",this.lineColumn="",this.language="Deluge",this.statusValue="",this.executionTime="",this.filterPlaceholder="Filter (e.g. text, **/*.ts, !**/node_modules/**)",this.showErrors=!0,this.showInfo=!0,this.showConsole=!0,this.showStatusBar=!0}render(){return a`
      ${this.showStatusBar?a`
            <div class="status" part="status">
              ${this.showErrors?a`<button class="chip" type="button" @click=${g(this,i,u)}>
                    <dre-badge tone="danger">${this.errorCount}</dre-badge> Errors
                  </button>`:null}
              ${this.showInfo?a`<button class="chip" type="button">
                    <dre-badge tone="brand">${this.infoCount}</dre-badge> Info
                  </button>`:null}
              ${this.showConsole?a`<button class="chip" type="button" @click=${g(this,i,u)}>${this.consoleLabel}</button>`:null}
              <span class="spacer"></span>
              <div class="meta">
                ${this.statusValue?a`<span>${this.statusValue}</span>`:null}
                ${this.executionTime?a`<span>${this.executionTime}</span>`:null}
                ${this.lastEdited?a`<span>${this.lastEdited}</span>`:null}
                ${this.lineColumn?a`<span>${this.lineColumn}</span>`:null}
                ${this.language?a`<span>${this.language}</span>`:null}
              </div>
              <button
                class="toggle"
                type="button"
                aria-label=${this.state==="expanded"?"Collapse console":"Expand console"}
                @click=${g(this,i,u)}
              >
                ${this.state==="expanded"?"▾":"▴"}
              </button>
            </div>
          `:null}

      <div class="panel" part="panel">
        <div class="toolbar" part="toolbar">
          <input class="filter" type="search" placeholder=${this.filterPlaceholder} />
        </div>
        <div class="logs" part="logs"><slot>Ready.</slot></div>
        ${this.statusValue||this.executionTime?a`<div class="return" part="return">
              Return: ${this.statusValue||"—"}${this.executionTime?` · ${this.executionTime}`:""}
            </div>`:null}
      </div>
    `}};i=new WeakSet;u=function(){this.state=this.state==="expanded"?"collapsed":"expanded",this.dispatchEvent(new CustomEvent("dre-collapse-change",{detail:{state:this.state},bubbles:!0,composed:!0}))};e.styles=[E,$`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--dre-color-background-status-bar);
        border-top: 1px solid var(--dre-color-border-divider);
        color: var(--dre-color-text-default);
      }

      :host([state='expanded']) {
        min-height: 220px;
      }

      .status {
        display: flex;
        align-items: center;
        gap: var(--dre-spacer-12);
        min-height: 32px;
        padding: 0 var(--dre-spacer-12);
        background: var(--dre-color-background-status-bar);
      }

      .meta {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-8);
        font-size: var(--dre-typography-caption1-font-size, 10px);
        color: var(--dre-color-text-subtle);
      }

      .spacer {
        flex: 1;
      }

      .chip {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-4);
        border: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: var(--dre-typography-caption1-font-size, 10px);
        cursor: pointer;
        padding: 2px 4px;
        border-radius: var(--dre-radius-xsmall);
      }

      .chip:hover {
        background: var(--dre-color-action-ghost-hovered);
      }

      .toggle {
        width: 24px;
        height: 24px;
        border: 0;
        border-radius: var(--dre-radius-small);
        background: transparent;
        color: var(--dre-color-icon-subtle);
        cursor: pointer;
      }

      .panel {
        display: none;
        flex: 1;
        flex-direction: column;
        min-height: 180px;
        border-top: 1px solid var(--dre-color-border-divider);
        background: var(--dre-color-background-code-default);
      }

      :host([state='expanded']) .panel {
        display: flex;
      }

      .toolbar {
        display: flex;
        align-items: center;
        gap: var(--dre-spacer-8);
        min-height: 36px;
        padding: 0 var(--dre-spacer-12);
        border-bottom: 1px solid var(--dre-color-border-divider);
        background: var(--dre-color-background-toolbar);
      }

      .filter {
        flex: 1;
        min-width: 0;
        height: 28px;
        padding: 0 var(--dre-spacer-8);
        border: 1px solid var(--dre-color-border-input-default);
        border-radius: var(--dre-radius-small);
        background: var(--dre-color-background-input-default);
        color: var(--dre-color-text-default);
        font: inherit;
        font-size: var(--dre-typography-caption1-font-size, 10px);
      }

      .logs {
        flex: 1;
        overflow: auto;
        padding: var(--dre-spacer-12);
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        font-size: 12px;
        color: var(--dre-color-text-subtle);
        white-space: pre-wrap;
      }

      .return {
        padding: var(--dre-spacer-8) var(--dre-spacer-12);
        border-top: 1px solid var(--dre-color-border-divider);
        font-size: var(--dre-typography-caption1-font-size, 10px);
        color: var(--dre-color-text-success);
      }
    `];t([o({reflect:!0})],e.prototype,"state",2);t([o({attribute:"error-count"})],e.prototype,"errorCount",2);t([o({attribute:"info-count"})],e.prototype,"infoCount",2);t([o({attribute:"console-label"})],e.prototype,"consoleLabel",2);t([o({attribute:"last-edited"})],e.prototype,"lastEdited",2);t([o({attribute:"line-column"})],e.prototype,"lineColumn",2);t([o()],e.prototype,"language",2);t([o({attribute:"status-value"})],e.prototype,"statusValue",2);t([o({attribute:"execution-time"})],e.prototype,"executionTime",2);t([o({attribute:"filter-placeholder"})],e.prototype,"filterPlaceholder",2);t([o({type:Boolean,attribute:"show-errors"})],e.prototype,"showErrors",2);t([o({type:Boolean,attribute:"show-info"})],e.prototype,"showInfo",2);t([o({type:Boolean,attribute:"show-console"})],e.prototype,"showConsole",2);t([o({type:Boolean,attribute:"show-status-bar"})],e.prototype,"showStatusBar",2);e=t([_("dre-bottom-pane")],e);const I={title:"Patterns & Layouts/Bottom Pane",component:"dre-bottom-pane",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Maps to Figma Bottom Pane (`12585:36757`) — status bar + console."}}}},p={render:()=>a`
    <div style="height:120px;display:flex;flex-direction:column;background:var(--dre-color-background-page);">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="collapsed"
        error-count="5"
        info-count="1"
        last-edited="Last edited by kamal"
        line-column="Ln15:Col 1 ( 1 Selected)"
        language="Deluge"
      ></dre-bottom-pane>
    </div>
  `},c={render:()=>a`
    <div style="height:360px;display:flex;flex-direction:column;background:var(--dre-color-background-page);">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="expanded"
        error-count="0"
        info-count="2"
        status-value="Success"
        execution-time="2.44 sec"
        last-edited="Last edited by kamal"
        language="Deluge"
      >
        info: Workflow started
        info: Set Variable myVar = 42
        success: Completed in 2.44 sec
      </dre-bottom-pane>
    </div>
  `};var v,m,f;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height:120px;display:flex;flex-direction:column;background:var(--dre-color-background-page);">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="collapsed"
        error-count="5"
        info-count="1"
        last-edited="Last edited by kamal"
        line-column="Ln15:Col 1 ( 1 Selected)"
        language="Deluge"
      ></dre-bottom-pane>
    </div>
  \`
}`,...(f=(m=p.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,y,w;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height:360px;display:flex;flex-direction:column;background:var(--dre-color-background-page);">
      <div style="flex:1;"></div>
      <dre-bottom-pane
        state="expanded"
        error-count="0"
        info-count="2"
        status-value="Success"
        execution-time="2.44 sec"
        last-edited="Last edited by kamal"
        language="Deluge"
      >
        info: Workflow started
        info: Set Variable myVar = 42
        success: Completed in 2.44 sec
      </dre-bottom-pane>
    </div>
  \`
}`,...(w=(y=c.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const M=["Collapsed","Expanded"];export{p as Collapsed,c as Expanded,M as __namedExportsOrder,I as default};
