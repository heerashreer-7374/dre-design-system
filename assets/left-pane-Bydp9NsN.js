import{i as b,a as m,b as f}from"./iframe-CxxUV_ql.js";import{n as d,t as v}from"./property-BAmm2Bkg.js";import{h as y}from"./styles-DnIXmjyS.js";import"./icon-DJMhDlAD.js";import"./accordion-m_UYr-Pe.js";import"./accordion-group-B6CadvQW.js";var w=Object.defineProperty,z=Object.getOwnPropertyDescriptor,x=t=>{throw TypeError(t)},o=(t,e,i,l)=>{for(var n=l>1?void 0:l?z(e,i):e,h=t.length-1,u;h>=0;h--)(u=t[h])&&(n=(l?u(e,i,n):u(n))||n);return l&&n&&w(e,i,n),n},_=(t,e,i)=>e.has(t)||x("Cannot "+i),$=(t,e,i)=>e.has(t)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),s=(t,e,i)=>(_(t,e,"access private method"),i),a,g,c,p;let r=class extends m{constructor(){super(...arguments),$(this,a),this.mode="code-editor",this.state="extended",this.separated=!1,this.headerTitle="Actions",this.railIcons=[],this.railTopIcons=["syntax","cable"],this.railBottomIcons=["more","layout"]}render(){const t=this.railIcons.length?this.railIcons:this.railTopIcons,e=this.railIcons.length?[]:this.railBottomIcons;return f`
      <nav class="rail" part="rail" aria-label="Left pane tools">
        <div class="rail-group">${s(this,a,c).call(this,t,!0)}</div>
        <div class="rail-spacer" aria-hidden="true"></div>
        ${e.length?f`
              ${s(this,a,c).call(this,e.slice(0,1))}
              <div class="rail-divider" aria-hidden="true"></div>
              ${s(this,a,c).call(this,e.slice(1))}
            `:null}
      </nav>

      <aside class="panel" part="panel">
        <div class="header" part="header">
          <slot name="header"><span class="title">${this.headerTitle}</span></slot>
          <button class="header-btn" type="button" aria-label="Search">
            <dre-icon name="search" size="16"></dre-icon>
          </button>
        </div>
        <div class="body" part="body">
          <slot>
            <dre-accordion-group exclusive>
              <dre-accordion title="Basics" expanded>
                <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
                <div class="snippet-list">
                  ${s(this,a,p).call(this,"Set Variable","assign values to fields","code")}
                  ${s(this,a,p).call(this,"Set Field Value","assign values to fields","cioption")}
                  ${s(this,a,p).call(this,"Call Function","assign values to fields","function-square")}
                </div>
              </dre-accordion>
              <dre-accordion title="Ai Task">
                <dre-icon slot="lead" name="sparkles" size="14"></dre-icon>
                AI-powered task blocks.
              </dre-accordion>
              <dre-accordion title="Flow Control">
                <dre-icon slot="lead" name="workflow" size="14"></dre-icon>
                Branching and wait utilities.
              </dre-accordion>
              <dre-accordion title="Form Control">
                <dre-icon slot="lead" name="edit" size="14"></dre-icon>
                Show, hide, and set fields.
              </dre-accordion>
              <dre-accordion title="Subform Action">
                <dre-icon slot="lead" name="split" size="14"></dre-icon>
                Subform create and update.
              </dre-accordion>
              <dre-accordion title="Notification">
                <dre-icon slot="lead" name="bell" size="14"></dre-icon>
                Email, SMS, and alerts.
              </dre-accordion>
              <dre-accordion title="Debug">
                <dre-icon slot="lead" name="warning" size="14"></dre-icon>
                Info, alert, and log helpers.
              </dre-accordion>
              <dre-accordion title="Data Access">
                <dre-icon slot="lead" name="fetch-record" size="14"></dre-icon>
                Fetch, create, update, delete.
              </dre-accordion>
              <dre-accordion title="Portal User Task">
                <dre-icon slot="lead" name="scan-face" size="14"></dre-icon>
                Portal user operations.
              </dre-accordion>
            </dre-accordion-group>
          </slot>
        </div>
      </aside>
    `}};a=new WeakSet;g=function(){this.state=this.state==="extended"?"collapsed":"extended",this.dispatchEvent(new CustomEvent("dre-collapse-change",{detail:{state:this.state},bubbles:!0,composed:!0}))};c=function(t,e=!1){return t.map((i,l)=>f`
        <button
          class="rail-btn"
          type="button"
          aria-current=${e&&l===0?"true":"false"}
          title=${i}
          @click=${()=>{i==="layout"&&s(this,a,g).call(this)}}
        >
          <dre-icon name=${i} size="20"></dre-icon>
        </button>
      `)};p=function(t,e,i){return f`
      <div class="snippet">
        <span class="snippet-icon"><dre-icon name=${i} size="14"></dre-icon></span>
        <span class="snippet-copy">
          <span class="snippet-title">${t}</span>
          <span class="snippet-desc">${e}</span>
        </span>
      </div>
    `};r.styles=[y,b`
      :host {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: 100%;
        min-height: 0;
        width: auto;
        color: #13141a;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        box-sizing: border-box;
      }

      .rail {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        width: 48px;
        flex: 0 0 48px;
        padding: 13px 9px;
        background: #ffffff;
        border-radius: 4px;
        box-sizing: border-box;
      }

      .rail-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      .rail-spacer {
        flex: 1;
        width: 10px;
        min-height: 8px;
      }

      .rail-divider {
        width: 16px;
        height: 0;
        border-top: 1px solid #e6e8ed;
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

      .panel {
        display: none;
        flex-direction: column;
        width: 210px;
        flex: 0 0 210px;
        min-height: 0;
        margin-left: 0;
        background: #ffffff;
        border-radius: 4px;
        box-sizing: border-box;
      }

      :host([state='extended']) .panel {
        display: flex;
        /* Figma 12478:5025 — 8px between rail and Actions panel */
        margin-left: 8px;
      }

      :host([separated]) .panel {
        margin-left: 8px;
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        min-height: 44px;
        padding: 0 12px 0 16px;
        border-bottom: 1px solid #f3f3f6;
        box-sizing: border-box;
      }

      .title {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .header-btn {
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

      .header-btn:hover {
        background: #f3f3f6;
        color: #13141a;
      }

      .body {
        flex: 1;
        overflow: auto;
        padding: 8px;
        min-height: 0;
      }

      .snippet-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px;
        border: 1px dashed #d6d8e1;
        border-radius: 6px;
        background: #f9fafc;
      }

      .snippet {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 6px;
        background: #ffffff;
        border: 1px solid #e6e8ed;
      }

      .snippet-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #f3f3f6;
        color: #5d6481;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        line-height: 0;
      }

      .snippet-copy {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .snippet-title {
        font-size: 12px;
        font-weight: 500;
        color: #13141a;
      }

      .snippet-desc {
        font-size: 11px;
        color: #5d6481;
      }
    `];o([d({reflect:!0})],r.prototype,"mode",2);o([d({reflect:!0})],r.prototype,"state",2);o([d({type:Boolean,reflect:!0})],r.prototype,"separated",2);o([d({attribute:"header-title"})],r.prototype,"headerTitle",2);o([d({attribute:!1})],r.prototype,"railIcons",2);o([d({attribute:!1})],r.prototype,"railTopIcons",2);o([d({attribute:!1})],r.prototype,"railBottomIcons",2);r=o([v("dre-left-pane")],r);
