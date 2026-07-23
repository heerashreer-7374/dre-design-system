import{i as $,a as j,b as r}from"./iframe-BfQCnnR_.js";import{n as p,t as S}from"./property-P_7FsvOw.js";import{h as _}from"./styles-Bjo1gRn0.js";import"./button-Ds7rJm53.js";import"./preload-helper-Dp1pzeXC.js";var A=Object.defineProperty,P=Object.getOwnPropertyDescriptor,n=(t,a,d,s)=>{for(var e=s>1?void 0:s?P(a,d):a,h=t.length-1,m;h>=0;h--)(m=t[h])&&(e=(s?m(a,d,e):m(e))||e);return s&&e&&A(a,d,e),e};let o=class extends j{constructor(){super(...arguments),this.content="",this.supportingText="",this.arrow="none",this.placement="bottom",this.open=!1}render(){return r`
      <slot></slot>
      <span class="tip" part="tip" role="tooltip">
        <span class="title">${this.content}<slot name="content"></slot></span>
        ${this.supportingText?r`<span class="support">${this.supportingText}</span>`:r`<slot name="supporting"></slot>`}
      </span>
    `}};o.styles=[_,$`
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
        gap: 4px;
        padding: 8px 12px;
        border-radius: 4px;
        background: #1b1b1e;
        color: #ffffff;
        font-size: 12px;
        line-height: 14px;
        max-width: 311px;
        pointer-events: none;
        opacity: 0;
        white-space: normal;
        transition: opacity 120ms ease;
      }

      .tip::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        display: none;
      }

      :host([arrow]:not([arrow='none'])) .tip::after {
        display: block;
      }

      .title {
        color: #ffffff;
      }

      .support {
        color: #e3e4e6;
        white-space: normal;
      }

      :host(:hover) .tip,
      :host(:focus-within) .tip,
      :host([open]) .tip {
        opacity: 1;
      }

      /* Placement via arrow / placement */
      :host([arrow='top-center']) .tip,
      :host([arrow='top-left']) .tip,
      :host([arrow='top-right']) .tip,
      :host([placement='bottom']) .tip,
      :host(:not([placement]):not([arrow])) .tip,
      :host([arrow='none']) .tip {
        top: calc(100% + 6px);
        left: 50%;
        transform: translateX(-50%);
      }

      :host([arrow='bottom-center']) .tip,
      :host([arrow='bottom-left']) .tip,
      :host([arrow='bottom-right']) .tip,
      :host([placement='top']) .tip {
        bottom: calc(100% + 6px);
        top: auto;
        left: 50%;
        transform: translateX(-50%);
      }

      :host([placement='left']) .tip {
        right: calc(100% + 6px);
        left: auto;
        top: 50%;
        transform: translateY(-50%);
      }

      :host([placement='right']) .tip {
        left: calc(100% + 6px);
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

      /* Arrow pointing up (tooltip below) */
      :host([arrow^='top']) .tip::after {
        bottom: 100%;
        border-bottom-color: #1b1b1e;
        border-top-width: 0;
      }

      :host([arrow='top-center']) .tip::after {
        left: 50%;
        transform: translateX(-50%);
      }
      :host([arrow='top-left']) .tip::after {
        left: 12px;
      }
      :host([arrow='top-right']) .tip::after {
        right: 12px;
      }

      /* Arrow pointing down (tooltip above) */
      :host([arrow^='bottom']) .tip::after {
        top: 100%;
        border-top-color: #1b1b1e;
        border-bottom-width: 0;
      }

      :host([arrow='bottom-center']) .tip::after {
        left: 50%;
        transform: translateX(-50%);
      }
      :host([arrow='bottom-left']) .tip::after {
        left: 12px;
      }
      :host([arrow='bottom-right']) .tip::after {
        right: 12px;
      }
    `];n([p()],o.prototype,"content",2);n([p({attribute:"supporting-text"})],o.prototype,"supportingText",2);n([p({reflect:!0})],o.prototype,"arrow",2);n([p({reflect:!0})],o.prototype,"placement",2);n([p({type:Boolean,reflect:!0})],o.prototype,"open",2);o=n([S("dre-tooltip")],o);const B={title:"Single Components/Tooltip",component:"dre-tooltip",tags:["autodocs"],argTypes:{arrow:{control:"select",options:["none","bottom-center","bottom-left","bottom-right","top-center","top-left","top-right"]}},args:{content:"This is a tooltip",supportingText:"",arrow:"bottom-center"},parameters:{docs:{description:{component:"Figma **⭐ Tooltip** (`12055:2105`) — pad 12×8 · radius 4 · bg `#1b1b1e` · optional supporting text + arrow."}}}},i={render:t=>r`
    <div style="padding:80px;display:flex;justify-content:center;">
      <dre-tooltip
        content=${t.content}
        supporting-text=${t.supportingText}
        arrow=${t.arrow}
        open
      >
        <dre-button hierarchy="secondary">Hover target</dre-button>
      </dre-tooltip>
    </div>
  `},l={name:"Features / Supporting text",render:()=>r`
    <div style="padding:100px;display:flex;justify-content:center;">
      <dre-tooltip
        content="This is a tooltip"
        supporting-text="Tooltips are used to describe or identify an element. Keep copy short."
        arrow="bottom-center"
        open
      >
        <dre-button hierarchy="secondary">Target</dre-button>
      </dre-tooltip>
    </div>
  `},c={name:"Features / Arrows",render:()=>r`
    <div style="display:flex;gap:48px;padding:80px;flex-wrap:wrap;justify-content:center;">
      ${["top-center","bottom-center","top-left","bottom-right"].map(t=>r`
          <dre-tooltip content="This is a tooltip" arrow=${t} open>
            <dre-button hierarchy="ghost" size="small">${t}</dre-button>
          </dre-tooltip>
        `)}
    </div>
  `};var f,u,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <div style="padding:80px;display:flex;justify-content:center;">
      <dre-tooltip
        content=\${args.content}
        supporting-text=\${args.supportingText}
        arrow=\${args.arrow}
        open
      >
        <dre-button hierarchy="secondary">Hover target</dre-button>
      </dre-tooltip>
    </div>
  \`
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,w,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Features / Supporting text',
  render: () => html\`
    <div style="padding:100px;display:flex;justify-content:center;">
      <dre-tooltip
        content="This is a tooltip"
        supporting-text="Tooltips are used to describe or identify an element. Keep copy short."
        arrow="bottom-center"
        open
      >
        <dre-button hierarchy="secondary">Target</dre-button>
      </dre-tooltip>
    </div>
  \`
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,v,T;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Features / Arrows',
  render: () => html\`
    <div style="display:flex;gap:48px;padding:80px;flex-wrap:wrap;justify-content:center;">
      \${(['top-center', 'bottom-center', 'top-left', 'bottom-right'] as const).map(a => html\`
          <dre-tooltip content="This is a tooltip" arrow=\${a} open>
            <dre-button hierarchy="ghost" size="small">\${a}</dre-button>
          </dre-tooltip>
        \`)}
    </div>
  \`
}`,...(T=(v=c.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};const C=["Default","WithSupportingText","Arrows"];export{c as Arrows,i as Default,l as WithSupportingText,C as __namedExportsOrder,B as default};
