import{i as R,a as M,A as d,b as o}from"./iframe-6U_684zG.js";import"./block-item-9l10tRoX.js";import"./accordion-panel-D8P-7q4e.js";import{n as i,t as N}from"./property-Bwn_HGw6.js";import{h as G}from"./styles-Cq6U1Hym.js";import"./icon-BCYjMvUl.js";import{f as W}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";var V=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},s=(e,n,r,l)=>{for(var t=l>1?void 0:l?Z(n,r):n,c=e.length-1,p;c>=0;c--)(p=e[c])&&(t=(l?p(n,r,t):p(t))||t);return l&&t&&V(n,r,t),t},J=(e,n,r)=>n.has(e)||O("Cannot "+r),u=(e,n,r)=>(J(e,n,"read from private field"),r?r.call(e):n.get(e)),y=(e,n,r)=>n.has(e)?O("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,r),T=(e,n,r)=>(J(e,n,"access private method"),r),m,x,v,q,H;const U={info:"info",transaction:"message",data:"info",api:"cable"};let a=class extends M{constructor(){super(...arguments),y(this,v),this.type="info",this.plain=!1,this.badge="",this.badgeTone="",this.value="",this.time="",this.status="",this.duration="",this.line="",this.reset=!1,this.expanded=!1,y(this,m,`dre-console-row-${Math.random().toString(36).slice(2,9)}`),y(this,x,`${u(this,m)}-header`)}render(){const e=this.type?U[this.type]:"",n=!!(this.status&&this.duration);return o`
      <button
        id=${u(this,x)}
        class="row"
        type="button"
        part="row"
        aria-expanded=${this.expanded?"true":"false"}
        aria-controls=${u(this,m)}
        @click=${T(this,v,H)}
      >
        <span class="chevron" aria-hidden="true">
          <dre-icon name="chevron-down" size="14"></dre-icon>
        </span>
        ${!this.plain&&e?o`
              <span class="type-icon" aria-hidden="true">
                <dre-icon name=${e} size="16"></dre-icon>
              </span>
            `:d}
        <span class="left">
          ${this.badge?o`<span class="badge" data-tone=${T(this,v,q).call(this)} part="badge">${this.badge}</span>`:d}
          ${this.value?o`<span class="value" part="value">${this.value}</span>`:d}
        </span>
        <span class="meta" part="meta">
          ${this.status?o`<span class="badge" data-tone="success" part="status">${this.status}</span>`:d}
          ${this.reset?o`<span class="reset" aria-hidden="true"><dre-icon name="reset" size="14"></dre-icon></span>`:d}
          ${this.time?o`<span class="time" part="time">${this.time}</span>`:d}
          ${n?o`<span class="sep" aria-hidden="true">|</span>`:d}
          ${this.duration?o`<span class="duration" part="duration">${this.duration}</span>`:d}
          ${this.line?o`<span class="badge" data-tone="neutral" part="line">${this.line}</span>`:d}
        </span>
      </button>
      <div
        id=${u(this,m)}
        class="children"
        part="children"
        role="region"
        aria-labelledby=${u(this,x)}
      >
        <slot></slot>
      </div>
    `}};m=new WeakMap;x=new WeakMap;v=new WeakSet;q=function(){return this.badgeTone?this.badgeTone:this.type==="api"?"success":this.type==="info"?"discovery":"success"};H=function(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("dre-toggle",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))};a.styles=[G,R`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
        background: #fff;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 8px;
        box-sizing: border-box;
        width: 100%;
        min-height: 36px;
        padding: 8px 12px 8px 8px;
        border: 0;
        border-bottom: 1px solid #f3f3f6;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: start;
        cursor: pointer;
      }

      :host([plain]) .row {
        min-height: 0;
        padding-block: 6px;
      }

      .row:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: -2px;
      }

      .chevron {
        display: inline-flex;
        flex: 0 0 auto;
        color: #8c92ac;
        line-height: 0;
        transition: transform 150ms ease-out;
        transform: rotate(-90deg);
      }

      :host([expanded]) .chevron {
        transform: rotate(0deg);
      }

      .type-icon {
        display: inline-flex;
        flex: 0 0 auto;
        color: #727999;
        line-height: 0;
      }

      .left {
        display: flex;
        align-items: center;
        gap: 6px;
        flex: 1;
        min-width: 0;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 500;
        line-height: 14px;
        white-space: nowrap;
      }

      .badge[data-tone='discovery'] {
        background: #dfdaf8;
        color: #8f7ee7;
      }

      .badge[data-tone='success'] {
        background: #ceead0;
        color: #55b45a;
      }

      .value {
        font-size: 12px;
        font-weight: 400;
        color: #13141a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .meta {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 0 0 auto;
      }

      :host([type='info']) .meta {
        gap: 12px;
      }

      .time,
      .duration,
      .sep {
        font-size: 11px;
        /* Slightly darker than Figma grey-2 for AA contrast on white */
        color: #727999;
        white-space: nowrap;
      }

      .reset {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .badge[data-tone='neutral'] {
        background: #edf0f7;
        color: #727999;
      }

      .children {
        display: none;
        flex-direction: column;
        width: 100%;
        padding-left: 24px;
        box-sizing: border-box;
      }

      :host([expanded]) .children {
        display: flex;
      }

      ::slotted(dre-console-row) {
        display: block;
      }
    `];s([i({reflect:!0})],a.prototype,"type",2);s([i({type:Boolean,reflect:!0})],a.prototype,"plain",2);s([i()],a.prototype,"badge",2);s([i({attribute:"badge-tone"})],a.prototype,"badgeTone",2);s([i()],a.prototype,"value",2);s([i()],a.prototype,"time",2);s([i()],a.prototype,"status",2);s([i()],a.prototype,"duration",2);s([i()],a.prototype,"line",2);s([i({type:Boolean,reflect:!0})],a.prototype,"reset",2);s([i({type:Boolean,reflect:!0})],a.prototype,"expanded",2);a=s([N("dre-console-row")],a);var Y=Object.getOwnPropertyDescriptor,K=(e,n,r,l)=>{for(var t=l>1?void 0:l?Y(n,r):n,c=e.length-1,p;c>=0;c--)(p=e[c])&&(t=p(t)||t);return t};let b=class extends M{render(){return o`<div class="surface" part="surface"><slot></slot></div>`}};b.styles=[G,R`
      :host {
        display: block;
        width: 100%;
        max-width: 900px;
        background: #f3f3f6;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .surface {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #fff;
      }

      ::slotted(dre-console-row) {
        display: block;
      }
    `];b=K([N("dre-console")],b);const te={title:"Single Components/Accordion",component:"dre-accordion",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **⭐ Accordion** ${W("12502:7355")} — Accordion · Panel · Console · Console Row.`}}}},$=o`
  <dre-block-item
    label="Set Field Value"
    description="assign values to fields"
    icon="cioption"
  ></dre-block-item>
  <dre-block-item
    label="Set Field Value"
    description="assign values to fields"
    icon="cioption"
  ></dre-block-item>
  <dre-block-item
    label="Set Field Value"
    description="assign values to fields"
    icon="cioption"
  ></dre-block-item>
`,S=["Basics","Ai Task","Flow Control","Form Control","Subform Action","Notification","Debug","Data Access","Portal User Task"],w={name:"Features / Accordion",render:()=>o`
    <div style="display:flex;gap:48px;align-items:flex-start;">
      <dre-accordion title="Basics">
        <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
        ${$}
      </dre-accordion>
      <dre-accordion title="Basics" expanded>
        <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
        ${$}
      </dre-accordion>
    </div>
  `},h={name:"Features / Panel",render:()=>o`
    <div style="display:flex;gap:48px;align-items:flex-start;">
      <dre-accordion-panel title="Actions">
        ${S.map(e=>o`
            <dre-accordion title=${e}>
              <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
            </dre-accordion>
          `)}
      </dre-accordion-panel>
      <dre-accordion-panel title="Actions">
        ${S.map((e,n)=>o`
            <dre-accordion title=${e} ?expanded=${n===0}>
              <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
              ${n===0?$:null}
            </dre-accordion>
          `)}
      </dre-accordion-panel>
    </div>
  `},f={name:"Features / Console",render:()=>o`
    <div style="display:flex;flex-direction:column;gap:32px;max-width:900px;">
      <dre-console>
        <dre-console-row
          type="info"
          badge="Number"
          value="123"
          time="Executed Time : 04:00:47.153 IST"
          line="Ln 3"
        ></dre-console-row>
        <dre-console-row
          type="transaction"
          value="Transaction ID : BEJS3949529048"
          status="Mail Submitted"
          line="Ln 4"
          reset
        ></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row type="data" value="{ a:1,b:{ ... }}" line="Ln 6" expanded></dre-console-row>
        <dre-console-row
          type="api"
          badge="GET"
          value="https://g********"
          status="100 Processing only"
          duration="09 ms"
          line="Ln 7"
          expanded
        >
          <dre-console-row plain value="Request" duration="125 kb"></dre-console-row>
          <dre-console-row plain value="Response" duration="125 kb" expanded>
            <dre-console-row plain value="Header" expanded></dre-console-row>
          </dre-console-row>
        </dre-console-row>
      </dre-console>
      <dre-console>
        <dre-console-row
          type="info"
          badge="Number"
          value="123"
          time="Executed Time : 04:00:47.153 IST"
          line="Ln 3"
        ></dre-console-row>
        <dre-console-row
          type="transaction"
          value="Transaction ID : BEJS3949529048"
          status="Mail Submitted"
          line="Ln 4"
          reset
        ></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row
          type="api"
          badge="GET"
          value="https://g********"
          status="100 Processing only"
          duration="09 ms"
          line="Ln 7"
        ></dre-console-row>
      </dre-console>
    </div>
  `},g={name:"Features / Console Row",render:()=>o`
    <div style="width:900px;max-width:100%;border:1px solid #e6e8ed;border-radius:4px;overflow:hidden;background:#fff;">
      <dre-console-row
        type="info"
        badge="Number"
        value="123"
        time="Executed Time : 04:00:47.153 IST"
        line="Ln 3"
      ></dre-console-row>
      <dre-console-row
        type="info"
        badge="Number"
        value="123"
        time="Executed Time : 04:00:47.153 IST"
        line="Ln 3"
        expanded
      ></dre-console-row>
      <dre-console-row
        type="transaction"
        value="Transaction ID : BEJS3949529048"
        status="Mail Submitted"
        line="Ln 4"
        reset
      ></dre-console-row>
      <dre-console-row
        type="transaction"
        value="Transaction ID : BEJS3949529048"
        status="Mail Submitted"
        line="Ln 4"
        reset
        expanded
      ></dre-console-row>
      <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
      <dre-console-row type="data" value="{ a:1,b:{ ... }}" line="Ln 6" expanded></dre-console-row>
      <dre-console-row
        type="api"
        badge="GET"
        value="https://g********"
        status="100 Processing only"
        duration="09 ms"
        line="Ln 7"
      ></dre-console-row>
      <dre-console-row
        type="api"
        badge="GET"
        value="https://g********"
        status="100 Processing only"
        duration="09 ms"
        line="Ln 7"
        expanded
      >
        <dre-console-row plain value="Request" duration="125 kb"></dre-console-row>
        <dre-console-row plain value="Response" duration="125 kb" expanded>
          <dre-console-row plain value="Header" expanded></dre-console-row>
        </dre-console-row>
      </dre-console-row>
    </div>
  `};var L,k,E;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Features / Accordion',
  render: () => html\`
    <div style="display:flex;gap:48px;align-items:flex-start;">
      <dre-accordion title="Basics">
        <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
        \${blocks}
      </dre-accordion>
      <dre-accordion title="Basics" expanded>
        <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
        \${blocks}
      </dre-accordion>
    </div>
  \`
}`,...(E=(k=w.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,D,P;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Features / Panel',
  render: () => html\`
    <div style="display:flex;gap:48px;align-items:flex-start;">
      <dre-accordion-panel title="Actions">
        \${panelSections.map(title => html\`
            <dre-accordion title=\${title}>
              <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
            </dre-accordion>
          \`)}
      </dre-accordion-panel>
      <dre-accordion-panel title="Actions">
        \${panelSections.map((title, i) => html\`
            <dre-accordion title=\${title} ?expanded=\${i === 0}>
              <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
              \${i === 0 ? blocks : null}
            </dre-accordion>
          \`)}
      </dre-accordion-panel>
    </div>
  \`
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var C,B,I;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Features / Console',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:32px;max-width:900px;">
      <dre-console>
        <dre-console-row
          type="info"
          badge="Number"
          value="123"
          time="Executed Time : 04:00:47.153 IST"
          line="Ln 3"
        ></dre-console-row>
        <dre-console-row
          type="transaction"
          value="Transaction ID : BEJS3949529048"
          status="Mail Submitted"
          line="Ln 4"
          reset
        ></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row type="data" value="{ a:1,b:{ ... }}" line="Ln 6" expanded></dre-console-row>
        <dre-console-row
          type="api"
          badge="GET"
          value="https://g********"
          status="100 Processing only"
          duration="09 ms"
          line="Ln 7"
          expanded
        >
          <dre-console-row plain value="Request" duration="125 kb"></dre-console-row>
          <dre-console-row plain value="Response" duration="125 kb" expanded>
            <dre-console-row plain value="Header" expanded></dre-console-row>
          </dre-console-row>
        </dre-console-row>
      </dre-console>
      <dre-console>
        <dre-console-row
          type="info"
          badge="Number"
          value="123"
          time="Executed Time : 04:00:47.153 IST"
          line="Ln 3"
        ></dre-console-row>
        <dre-console-row
          type="transaction"
          value="Transaction ID : BEJS3949529048"
          status="Mail Submitted"
          line="Ln 4"
          reset
        ></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
        <dre-console-row
          type="api"
          badge="GET"
          value="https://g********"
          status="100 Processing only"
          duration="09 ms"
          line="Ln 7"
        ></dre-console-row>
      </dre-console>
    </div>
  \`
}`,...(I=(B=f.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var z,A,F;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Features / Console Row',
  render: () => html\`
    <div style="width:900px;max-width:100%;border:1px solid #e6e8ed;border-radius:4px;overflow:hidden;background:#fff;">
      <dre-console-row
        type="info"
        badge="Number"
        value="123"
        time="Executed Time : 04:00:47.153 IST"
        line="Ln 3"
      ></dre-console-row>
      <dre-console-row
        type="info"
        badge="Number"
        value="123"
        time="Executed Time : 04:00:47.153 IST"
        line="Ln 3"
        expanded
      ></dre-console-row>
      <dre-console-row
        type="transaction"
        value="Transaction ID : BEJS3949529048"
        status="Mail Submitted"
        line="Ln 4"
        reset
      ></dre-console-row>
      <dre-console-row
        type="transaction"
        value="Transaction ID : BEJS3949529048"
        status="Mail Submitted"
        line="Ln 4"
        reset
        expanded
      ></dre-console-row>
      <dre-console-row type="data" value="Deluge" line="Ln 5"></dre-console-row>
      <dre-console-row type="data" value="{ a:1,b:{ ... }}" line="Ln 6" expanded></dre-console-row>
      <dre-console-row
        type="api"
        badge="GET"
        value="https://g********"
        status="100 Processing only"
        duration="09 ms"
        line="Ln 7"
      ></dre-console-row>
      <dre-console-row
        type="api"
        badge="GET"
        value="https://g********"
        status="100 Processing only"
        duration="09 ms"
        line="Ln 7"
        expanded
      >
        <dre-console-row plain value="Request" duration="125 kb"></dre-console-row>
        <dre-console-row plain value="Response" duration="125 kb" expanded>
          <dre-console-row plain value="Header" expanded></dre-console-row>
        </dre-console-row>
      </dre-console-row>
    </div>
  \`
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const se=["Default","Panel","Console","ConsoleRow"];export{f as Console,g as ConsoleRow,w as Default,h as Panel,se as __namedExportsOrder,te as default};
