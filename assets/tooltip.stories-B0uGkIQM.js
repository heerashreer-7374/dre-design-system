import{i as W,a as L,b as r,A as y}from"./iframe-hYZkyXvR.js";import{n as s,t as j}from"./property-BSL9Me-Y.js";import{h as F}from"./styles-BGRCfbQF.js";import"./button-Du1k3Bj9.js";import{f as z}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";var B=Object.defineProperty,I=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},i=(t,e,o,c)=>{for(var p=c>1?void 0:c?I(e,o):e,x=t.length-1,u;x>=0;x--)(u=t[x])&&(p=(c?u(e,o,p):u(p))||p);return c&&p&&B(e,o,p),p},N=(t,e,o)=>e.has(t)||C("Cannot "+o),U=(t,e,o)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),l=(t,e,o)=>(N(t,e,"access private method"),o),n,w,A,v;let a=class extends L{constructor(){super(...arguments),U(this,n),this.appearance="light",this.content="",this.supportingText="",this.arrow="none",this.placement="bottom",this.open=!1,this.hasSupporting=!1}willUpdate(t){(t.has("supportingText")||t.size===0)&&(this.hasSupporting=this.supportingText.trim().length>0)}render(){const t=l(this,n,w).call(this),e=this.supportingText.trim(),o=r`
      <div class="body" part="body">
        <span class="title" part="title">${this.content}<slot name="content"></slot></span>
        ${e?r`<span class="support" part="support">${e}</span>`:r`<slot name="supporting"></slot>`}
      </div>
    `;return r`
      <slot></slot>
      <div class="tip" part="tip" role="tooltip">
        ${(t==null?void 0:t.side)==="top"?l(this,n,v).call(this):y}
        ${o}
        ${(t==null?void 0:t.side)==="bottom"?l(this,n,v).call(this):y}
      </div>
    `}};n=new WeakSet;w=function(){switch(this.arrow){case"top-left":return{side:"top",align:"left"};case"top-center":return{side:"top",align:"center"};case"top-right":return{side:"top",align:"right"};case"bottom-left":return{side:"bottom",align:"left"};case"bottom-center":return{side:"bottom",align:"center"};case"bottom-right":return{side:"bottom",align:"right"};default:return null}};A=function(t){return r`
      <svg
        class="arrow"
        data-point=${t}
        viewBox="0 0 10.3923 6"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5.19615 0L10.3923 6H0L5.19615 0Z" fill="currentColor" />
      </svg>
    `};v=function(){const t=l(this,n,w).call(this);return t?r`
      <div class="arrow-row" data-side=${t.side} data-align=${t.align} part="arrow">
        ${l(this,n,A).call(this,t.side==="top"?"up":"down")}
      </div>
    `:y};a.styles=[F,W`
      :host {
        position: relative;
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .tip {
        position: absolute;
        z-index: 30;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: max-content;
        max-width: 311px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms ease;
      }

      /* Figma: supporting-text body is fixed 311 · simple title hugs (~108 for default copy) */
      :host([has-supporting]) .tip {
        width: 311px;
        max-width: 311px;
      }

      :host(:hover) .tip,
      :host(:focus-within) .tip,
      :host([open]) .tip {
        opacity: 1;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-sizing: border-box;
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        background: #383c4d;
        box-shadow:
          0 4px 6px -2px rgba(0, 0, 0, 0.08),
          0 8px 24px -4px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      :host([appearance='dark']) .body {
        background: #1b1b1e;
      }

      .title {
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
        color: #f3f3f6;
        white-space: nowrap;
      }

      :host([appearance='dark']) .title {
        color: #ffffff;
      }

      .support {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: #d6d8e1;
        white-space: normal;
        width: 100%;
      }

      :host([appearance='dark']) .support {
        color: #e3e4e6;
      }

      .arrow-row {
        display: flex;
        width: 100%;
        line-height: 0;
      }

      .arrow-row[data-side='bottom'] {
        margin-top: -2px;
      }

      .arrow-row[data-side='top'] {
        margin-bottom: -2px;
      }

      .arrow-row[data-align='left'] {
        justify-content: flex-start;
        padding-left: 16px;
      }

      .arrow-row[data-align='center'] {
        justify-content: center;
      }

      .arrow-row[data-align='right'] {
        justify-content: flex-end;
        padding-right: 16px;
      }

      .arrow {
        width: 12px;
        height: 8px;
        display: block;
        color: #383c4d;
      }

      :host([appearance='dark']) .arrow {
        color: #1b1b1e;
      }

      .arrow[data-point='down'] {
        transform: rotate(180deg);
      }

      /* —— Placement relative to trigger —— */
      :host([arrow='top-center']) .tip,
      :host([arrow='top-left']) .tip,
      :host([arrow='top-right']) .tip,
      :host([placement='bottom']) .tip,
      :host(:not([placement]):not([arrow])) .tip,
      :host([arrow='none']) .tip {
        top: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%);
      }

      :host([arrow='bottom-center']) .tip,
      :host([arrow='bottom-left']) .tip,
      :host([arrow='bottom-right']) .tip,
      :host([placement='top']) .tip {
        bottom: calc(100% + 4px);
        top: auto;
        left: 50%;
        transform: translateX(-50%);
      }

      :host([placement='left']) .tip {
        right: calc(100% + 4px);
        left: auto;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([placement='right']) .tip {
        left: calc(100% + 4px);
        top: 50%;
        transform: translateY(-50%);
      }

      :host([arrow='top-left']) .tip,
      :host([arrow='bottom-left']) .tip {
        left: 0;
        transform: none;
      }

      :host([arrow='top-right']) .tip,
      :host([arrow='bottom-right']) .tip {
        left: auto;
        right: 0;
        transform: none;
      }
    `];i([s({reflect:!0})],a.prototype,"appearance",2);i([s()],a.prototype,"content",2);i([s({attribute:"supporting-text"})],a.prototype,"supportingText",2);i([s({reflect:!0})],a.prototype,"arrow",2);i([s({reflect:!0})],a.prototype,"placement",2);i([s({type:Boolean,reflect:!0})],a.prototype,"open",2);i([s({type:Boolean,reflect:!0,attribute:"has-supporting"})],a.prototype,"hasSupporting",2);a=i([j("dre-tooltip")],a);const d=["none","bottom-left","bottom-center","bottom-right","top-left","top-center","top-right"],b="Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.",Y={title:"Single Components/Tooltip",component:"dre-tooltip",tags:["autodocs"],argTypes:{appearance:{control:"select",options:["light","dark"]},arrow:{control:"select",options:[...d]}},args:{appearance:"light",content:"This is a tooltip",supportingText:"",arrow:"none"},parameters:{docs:{description:{component:`Figma **⭐ Tooltip** ${z("12055:2105")} — Appearance Light/Dark · Arrow None/Top/Bottom · Supporting text · width hug / 311 · pad 12×8 · radius 4.`}}}},h={render:t=>r`
    <div style="padding:80px;display:flex;justify-content:center;">
      <dre-tooltip
        appearance=${t.appearance}
        content=${t.content}
        supporting-text=${t.supportingText}
        arrow=${t.arrow}
        open
      >
        <dre-button hierarchy="secondary">Hover target</dre-button>
      </dre-tooltip>
    </div>
  `},g=(t,e,o="")=>r`
  <div
    style="
      position:relative;
      min-width:${o?"340px":"160px"};
      height:${o?"180px":"96px"};
      display:flex;
      align-items:center;
      justify-content:center;
      border:1px dashed #e6e8ed;
      border-radius:8px;
    "
  >
    <dre-tooltip
      appearance=${t}
      content="This is a tooltip"
      supporting-text=${o}
      arrow=${e}
      open
    >
      <span style="font:11px/1 system-ui;color:#727999;">${e}</span>
    </dre-tooltip>
  </div>
`,f={name:"Features / Variants",render:()=>r`
    <div style="display:flex;gap:32px;padding:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Light</div>
        ${d.map(t=>g("light",t))}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Dark</div>
        ${d.map(t=>g("dark",t))}
      </div>
    </div>
  `},m={name:"Features / Supporting text",render:()=>r`
    <div style="display:flex;gap:32px;padding:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Light</div>
        ${d.map(t=>g("light",t,b))}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Dark</div>
        ${d.map(t=>g("dark",t,b))}
      </div>
    </div>
  `};var $,S,T;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div style="padding:80px;display:flex;justify-content:center;">
      <dre-tooltip
        appearance=\${args.appearance}
        content=\${args.content}
        supporting-text=\${args.supportingText}
        arrow=\${args.arrow}
        open
      >
        <dre-button hierarchy="secondary">Hover target</dre-button>
      </dre-tooltip>
    </div>
  \`
}`,...(T=(S=h.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,k,R;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Features / Variants',
  render: () => html\`
    <div style="display:flex;gap:32px;padding:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Light</div>
        \${ARROWS.map(arrow => tipCell('light', arrow))}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Dark</div>
        \${ARROWS.map(arrow => tipCell('dark', arrow))}
      </div>
    </div>
  \`
}`,...(R=(k=f.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var O,D,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Features / Supporting text',
  render: () => html\`
    <div style="display:flex;gap:32px;padding:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Light</div>
        \${ARROWS.map(arrow => tipCell('light', arrow, SUPPORTING))}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <div style="font:600 12px/1 system-ui;color:#383c4d;">Dark</div>
        \${ARROWS.map(arrow => tipCell('dark', arrow, SUPPORTING))}
      </div>
    </div>
  \`
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const Z=["Default","Variants","WithSupportingText"];export{h as Default,f as Variants,m as WithSupportingText,Z as __namedExportsOrder,Y as default};
