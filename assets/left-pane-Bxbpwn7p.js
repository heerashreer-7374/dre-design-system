import{i as x,a as m,b as f}from"./iframe-hYZkyXvR.js";import{n,t as g}from"./property-BSL9Me-Y.js";import{h as v}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import"./block-item-DsGoeFwW.js";import"./accordion-group-CHV1697V.js";var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=t=>{throw TypeError(t)},o=(t,e,i,s)=>{for(var a=s>1?void 0:s?w(e,i):e,p=t.length-1,h;p>=0;p--)(h=t[p])&&(a=(s?h(e,i,a):h(a))||a);return s&&a&&y(e,i,a),a},_=(t,e,i)=>e.has(t)||u("Cannot "+i),z=(t,e,i)=>e.has(t)?u("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),d=(t,e,i)=>(_(t,e,"access private method"),i),l,b,c;let r=class extends m{constructor(){super(...arguments),z(this,l),this.mode="code-editor",this.state="extended",this.separated=!1,this.headerTitle="Actions",this.railIcons=[],this.railTopIcons=["syntax","cable"],this.railBottomIcons=["more","layout"]}render(){const t=this.railIcons.length?this.railIcons:this.railTopIcons,e=this.railIcons.length?[]:this.railBottomIcons;return f`
      <nav class="rail" part="rail" aria-label="Left pane tools">
        <div class="rail-group">${d(this,l,c).call(this,t,!0)}</div>
        <div class="rail-spacer" aria-hidden="true"></div>
        ${e.length?f`
              ${d(this,l,c).call(this,e.slice(0,1))}
              <div class="rail-divider" aria-hidden="true"></div>
              ${d(this,l,c).call(this,e.slice(1))}
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
            <dre-accordion-group exclusive divided>
              <dre-accordion title="Basics" expanded>
                <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
                <dre-block-item
                  label="Set Variable"
                  description="assign values to fields"
                  icon="code"
                ></dre-block-item>
                <dre-block-item
                  label="Set Field Value"
                  description="assign values to fields"
                  icon="cioption"
                ></dre-block-item>
                <dre-block-item
                  label="Call Function"
                  description="assign values to fields"
                  icon="function-square"
                ></dre-block-item>
              </dre-accordion>
              <dre-accordion title="Ai Task">
                <dre-icon slot="lead" name="sparkles" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Flow Control">
                <dre-icon slot="lead" name="workflow" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Form Control">
                <dre-icon slot="lead" name="edit" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Subform Action">
                <dre-icon slot="lead" name="split" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Notification">
                <dre-icon slot="lead" name="bell" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Debug">
                <dre-icon slot="lead" name="warning" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Data Access">
                <dre-icon slot="lead" name="fetch-record" size="14"></dre-icon>
              </dre-accordion>
              <dre-accordion title="Portal User Task">
                <dre-icon slot="lead" name="scan-face" size="14"></dre-icon>
              </dre-accordion>
            </dre-accordion-group>
          </slot>
        </div>
      </aside>
    `}};l=new WeakSet;b=function(){this.state=this.state==="extended"?"collapsed":"extended",this.dispatchEvent(new CustomEvent("dre-collapse-change",{detail:{state:this.state},bubbles:!0,composed:!0}))};c=function(t,e=!1){return t.map((i,s)=>f`
        <button
          class="rail-btn"
          type="button"
          aria-current=${e&&s===0?"true":"false"}
          title=${i}
          @click=${()=>{i==="layout"&&d(this,l,b).call(this)}}
        >
          <dre-icon name=${i} size="20"></dre-icon>
        </button>
      `)};r.styles=[v,x`
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

    `];o([n({reflect:!0})],r.prototype,"mode",2);o([n({reflect:!0})],r.prototype,"state",2);o([n({type:Boolean,reflect:!0})],r.prototype,"separated",2);o([n({attribute:"header-title"})],r.prototype,"headerTitle",2);o([n({attribute:!1})],r.prototype,"railIcons",2);o([n({attribute:!1})],r.prototype,"railTopIcons",2);o([n({attribute:!1})],r.prototype,"railBottomIcons",2);r=o([g("dre-left-pane")],r);
