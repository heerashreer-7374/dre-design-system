import{i as k,a as $,b}from"./iframe-GA3ktVQc.js";import{n as l,t as C}from"./property-rkDd5alT.js";import{h as E}from"./styles-_scQb5lY.js";import"./button-CFNMCiNm.js";import"./preload-helper-Dp1pzeXC.js";var M=Object.defineProperty,S=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},n=(t,e,r,c)=>{for(var i=c>1?void 0:c?S(e,r):e,v=t.length-1,h;v>=0;v--)(h=t[v])&&(i=(c?h(e,r,i):h(i))||i);return c&&i&&M(e,r,i),i},B=(t,e,r)=>e.has(t)||_("Cannot "+r),P=(t,e,r)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),a=(t,e,r)=>(B(t,e,"access private method"),r),o,y,d;let s=class extends ${constructor(){super(...arguments),P(this,o),this.type="code-editor",this.activeMode="code",this.unsavedText="",this.codeTabText="Code",this.flowTabText="Flow",this.previewText="Preview"}render(){return b`
      <div class="bar" part="bar">
        <div class="modes" part="modes">
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode==="code"?"true":"false"}
            @click=${()=>a(this,o,y).call(this,"code")}
          >
            ${this.codeTabText}
          </button>
          <button
            class="mode"
            type="button"
            aria-pressed=${this.activeMode==="flow"?"true":"false"}
            @click=${()=>a(this,o,y).call(this,"flow")}
          >
            ${this.flowTabText}
          </button>
        </div>

        <div class="tools" part="tools">
          <slot name="tools">
            <button class="tool" type="button" title="Undo" @click=${()=>a(this,o,d).call(this,"undo")}>↶</button>
            <button class="tool" type="button" title="Redo" @click=${()=>a(this,o,d).call(this,"redo")}>↷</button>
            <button class="tool" type="button" title="Search" @click=${()=>a(this,o,d).call(this,"search")}>⌕</button>
            <button class="tool" type="button" title="Cut" @click=${()=>a(this,o,d).call(this,"cut")}>✂</button>
            <button class="tool" type="button" title="Copy" @click=${()=>a(this,o,d).call(this,"copy")}>⧉</button>
            <button class="tool" type="button" title="Paste" @click=${()=>a(this,o,d).call(this,"paste")}>▣</button>
            <button class="tool" type="button" title="More" @click=${()=>a(this,o,d).call(this,"more")}>⋯</button>
          </slot>
        </div>

        ${this.unsavedText?b`<span class="unsaved">${this.unsavedText}</span>`:null}

        <div class="trailing" part="trailing">
          <slot name="trailing">
            <dre-button hierarchy="secondary" size="xsmall">${this.previewText}</dre-button>
          </slot>
        </div>
      </div>
    `}};o=new WeakSet;y=function(t){this.activeMode=t,this.dispatchEvent(new CustomEvent("dre-mode-change",{detail:{mode:t},bubbles:!0,composed:!0}))};d=function(t){this.dispatchEvent(new CustomEvent("dre-action",{detail:{name:t},bubbles:!0,composed:!0}))};s.styles=[E,k`
      :host {
        display: block;
        width: 100%;
      }

      .bar {
        display: flex;
        align-items: center;
        gap: var(--dre-spacer-12);
        min-height: 36px;
        padding: 0 var(--dre-spacer-12);
        background: var(--dre-color-background-toolbar);
        border-bottom: 1px solid var(--dre-color-border-divider);
      }

      .modes {
        display: inline-flex;
        gap: 2px;
        padding: 2px;
        border-radius: var(--dre-radius-small);
        background: var(--dre-color-background-neutral-subtle);
      }

      .mode {
        border: 0;
        border-radius: var(--dre-radius-xsmall);
        padding: 4px 10px;
        background: transparent;
        color: var(--dre-color-text-subtle);
        font: inherit;
        font-size: var(--dre-typography-label3-font-size, 12px);
        cursor: pointer;
      }

      .mode[aria-pressed='true'] {
        background: var(--dre-color-background-neutral-default);
        color: var(--dre-color-text-default);
        box-shadow: 0 0 0 1px var(--dre-color-border-subtle);
      }

      .tools {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-2);
        flex: 1;
      }

      .tool {
        width: 28px;
        height: 28px;
        border: 0;
        border-radius: var(--dre-radius-small);
        background: transparent;
        color: var(--dre-color-icon-subtle);
        cursor: pointer;
        font-size: 13px;
      }

      .tool:hover {
        background: var(--dre-color-action-ghost-hovered);
        color: var(--dre-color-icon-default);
      }

      .unsaved {
        font-size: var(--dre-typography-caption1-font-size, 10px);
        color: var(--dre-color-text-warning);
        white-space: nowrap;
      }

      .trailing {
        display: inline-flex;
        align-items: center;
        gap: var(--dre-spacer-8);
        margin-inline-start: auto;
      }
    `];n([l({reflect:!0})],s.prototype,"type",2);n([l({attribute:"active-mode"})],s.prototype,"activeMode",2);n([l({attribute:"unsaved-text"})],s.prototype,"unsavedText",2);n([l({attribute:"code-tab-text"})],s.prototype,"codeTabText",2);n([l({attribute:"flow-tab-text"})],s.prototype,"flowTabText",2);n([l({attribute:"preview-text"})],s.prototype,"previewText",2);s=n([C("dre-secondary-top-bar")],s);const V={title:"Patterns & Layouts/Secondary Top Bar",component:"dre-secondary-top-bar",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Maps to Figma Secondary Top Bar (`12726:51297`) — Code/Flow switch + editor tools."}}}},p={render:()=>b`
    <dre-secondary-top-bar type="code-editor" unsaved-text="4 Unsaved changes"></dre-secondary-top-bar>
  `},u={render:()=>b`
    <dre-secondary-top-bar
      type="visual-builder"
      active-mode="flow"
      code-tab-text="Code"
      flow-tab-text="Flow"
    ></dre-secondary-top-bar>
  `};var m,x,f;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <dre-secondary-top-bar type="code-editor" unsaved-text="4 Unsaved changes"></dre-secondary-top-bar>
  \`
}`,...(f=(x=p.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,w,T;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <dre-secondary-top-bar
      type="visual-builder"
      active-mode="flow"
      code-tab-text="Code"
      flow-tab-text="Flow"
    ></dre-secondary-top-bar>
  \`
}`,...(T=(w=u.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const W=["CodeEditor","VisualBuilder"];export{p as CodeEditor,u as VisualBuilder,W as __namedExportsOrder,V as default};
