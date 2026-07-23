import{i as x,a as f,b as p}from"./iframe-BfQCnnR_.js";import{n as l,t as m}from"./property-P_7FsvOw.js";import{h as y}from"./styles-Bjo1gRn0.js";import"./button-Ds7rJm53.js";import"./icon-CPlX_fkM.js";var g=Object.defineProperty,w=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},c=(e,a,s,d)=>{for(var n=d>1?void 0:d?w(a,s):a,u=e.length-1,h;u>=0;u--)(h=e[u])&&(n=(d?h(a,s,n):h(n))||n);return d&&n&&g(a,s,n),n},$=(e,a,s)=>a.has(e)||v("Cannot "+s),k=(e,a,s)=>a.has(e)?v("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,s),i=(e,a,s)=>($(e,a,"access private method"),s),t,b,o;let r=class extends f{constructor(){super(...arguments),k(this,t),this.type="code-editor",this.activeMode="code",this.unsavedText="4 Unsaved changes",this.codeTabText="Code",this.flowTabText="Flow",this.previewText="Preview"}render(){const e=this.type==="code-editor";return p`
      <div class="bar" part="bar">
        <div class="tools" part="tools">
          <slot name="tools">
            <button class="tool" type="button" title="Undo" @click=${()=>i(this,t,o).call(this,"undo")}>
              <dre-icon name="undo" size="14"></dre-icon>
            </button>
            <button class="tool" type="button" title="Redo" @click=${()=>i(this,t,o).call(this,"redo")}>
              <dre-icon name="redo" size="14"></dre-icon>
            </button>
            <span class="sep" aria-hidden="true"></span>
            <button class="tool" type="button" title="Search" @click=${()=>i(this,t,o).call(this,"search")}>
              <dre-icon name="search" size="14"></dre-icon>
            </button>
            ${e?p`
                  <span class="sep" aria-hidden="true"></span>
                  <button class="tool" type="button" title="Cut" @click=${()=>i(this,t,o).call(this,"cut")}>
                    <dre-icon name="cut" size="14"></dre-icon>
                  </button>
                  <button class="tool" type="button" title="Copy" @click=${()=>i(this,t,o).call(this,"copy")}>
                    <dre-icon name="copy" size="14"></dre-icon>
                  </button>
                  <button class="tool" type="button" title="Paste" @click=${()=>i(this,t,o).call(this,"paste")}>
                    <dre-icon name="cancel-submit" size="14"></dre-icon>
                  </button>
                `:null}
            <span class="sep" aria-hidden="true"></span>
            <button class="tool" type="button" title="Structure" @click=${()=>i(this,t,o).call(this,"structure")}>
              <dre-icon name="code" size="14"></dre-icon>
            </button>
          </slot>
        </div>

        <div class="spacer" aria-hidden="true"></div>

        <div class="modes" part="modes">
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode==="code"?"true":"false"}
            @click=${()=>i(this,t,b).call(this,"code")}
          >
            <dre-icon name="vuesax-linear-code" size="14"></dre-icon>
            ${this.codeTabText}
          </button>
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode==="flow"?"true":"false"}
            @click=${()=>i(this,t,b).call(this,"flow")}
          >
            <dre-icon name="workflow" size="14"></dre-icon>
            ${this.flowTabText}
          </button>
        </div>

        <div class="spacer" aria-hidden="true"></div>

        <div class="trailing" part="trailing">
          <slot name="trailing">
            ${e&&this.unsavedText?p`
                  <span class="unsaved">
                    <dre-icon name="cloud-save" size="16"></dre-icon>
                    ${this.unsavedText}
                  </span>
                  <span class="sep" aria-hidden="true"></span>
                  <dre-button
                    hierarchy="ghost"
                    size="xsmall"
                    icon="leading"
                    @click=${()=>i(this,t,o).call(this,"preview")}
                  >
                    <dre-icon slot="leading" name="play" size="14"></dre-icon>
                    ${this.previewText}
                  </dre-button>
                  <dre-button hierarchy="secondary" size="xsmall" @click=${()=>i(this,t,o).call(this,"save-execute")}>
                    Save &amp; Execute
                  </dre-button>
                  <dre-button hierarchy="primary" size="xsmall" @click=${()=>i(this,t,o).call(this,"save")}>
                    Save
                  </dre-button>
                `:p`
                  <button class="tool" type="button" title="Share" @click=${()=>i(this,t,o).call(this,"share")}>
                    <dre-icon name="zoom" size="16"></dre-icon>
                  </button>
                  <span class="sep" aria-hidden="true"></span>
                  <button class="tool" type="button" title="Preview" @click=${()=>i(this,t,o).call(this,"preview")}>
                    <dre-icon name="play" size="16"></dre-icon>
                  </button>
                  <button class="tool" type="button" title="More" @click=${()=>i(this,t,o).call(this,"more")}>
                    <dre-icon name="more" size="16"></dre-icon>
                  </button>
                  <dre-button hierarchy="primary" size="xsmall" @click=${()=>i(this,t,o).call(this,"save")}>
                    Save
                  </dre-button>
                `}
          </slot>
        </div>
      </div>
    `}};t=new WeakSet;b=function(e){this.activeMode=e,this.dispatchEvent(new CustomEvent("dre-mode-change",{detail:{mode:e},bubbles:!0,composed:!0}))};o=function(e){this.dispatchEvent(new CustomEvent("dre-action",{detail:{name:e},bubbles:!0,composed:!0}))};r.styles=[y,x`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .bar {
        display: flex;
        align-items: center;
        height: 36px;
        min-height: 36px;
        padding: 0 8px;
        background: #ffffff;
        border: 1px solid #e6e8ed;
        border-radius: 4px;
        box-sizing: border-box;
      }

      .tools {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        flex: 0 0 auto;
      }

      .tool {
        width: 20px;
        height: 20px;
        border: 0;
        padding: 0;
        border-radius: 4px;
        background: transparent;
        color: #5d6481;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .tool:hover {
        background: #f3f3f6;
        color: #13141a;
      }

      .sep {
        width: 1px;
        height: 16px;
        background: #d6d8e1;
        flex: 0 0 auto;
      }

      .spacer {
        flex: 1;
        min-width: 8px;
      }

      .modes {
        display: inline-flex;
        align-items: stretch;
        gap: 0;
        padding: 2px;
        border-radius: 4px;
        background: #e6e8ed;
        flex: 0 0 auto;
      }

      .mode {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 0;
        border-radius: 2px;
        padding: 4px 6px;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 12px;
        line-height: 14px;
        cursor: pointer;
        white-space: nowrap;
      }

      .mode[aria-pressed='true'] {
        background: #ffffff;
        color: #0d6dfd;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      .unsaved {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        color: #5d6481;
        white-space: nowrap;
      }
    `];c([l({reflect:!0})],r.prototype,"type",2);c([l({attribute:"active-mode"})],r.prototype,"activeMode",2);c([l({attribute:"unsaved-text"})],r.prototype,"unsavedText",2);c([l({attribute:"code-tab-text"})],r.prototype,"codeTabText",2);c([l({attribute:"flow-tab-text"})],r.prototype,"flowTabText",2);c([l({attribute:"preview-text"})],r.prototype,"previewText",2);r=c([m("dre-secondary-top-bar")],r);
