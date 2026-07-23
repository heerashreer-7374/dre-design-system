import{i as P,a as B,b as a}from"./iframe-hYZkyXvR.js";import"./tab-group-BFjBwWyu.js";import{n as A,t as M}from"./property-BSL9Me-Y.js";import{h as E}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import{f as O}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";var W=Object.defineProperty,I=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},F=(e,t,o,i)=>{for(var r=i>1?void 0:i?I(t,o):t,m=e.length-1,g;m>=0;m--)(g=e[m])&&(r=(i?g(t,o,r):g(r))||r);return i&&r&&W(t,o,r),r},j=(e,t,o)=>t.has(e)||k("Cannot "+o),H=(e,t,o)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),b=(e,t,o)=>(j(e,t,"access private method"),o),n,u,S;let p=class extends B{constructor(){super(...arguments),H(this,n),this.value="flow"}render(){return a`
      <div class="track" role="tablist" aria-label="View mode" @keydown=${b(this,n,S)}>
        <button
          type="button"
          role="tab"
          aria-selected=${this.value==="flow"?"true":"false"}
          @click=${()=>b(this,n,u).call(this,"flow")}
        >
          <span class="icon"><dre-icon name="workflow" size="16"></dre-icon></span>
          Flow
        </button>
        <button
          type="button"
          role="tab"
          aria-selected=${this.value==="code"?"true":"false"}
          @click=${()=>b(this,n,u).call(this,"code")}
        >
          <span class="icon"><dre-icon name="code" size="16"></dre-icon></span>
          Code
        </button>
      </div>
    `}};n=new WeakSet;u=function(e){this.value!==e&&(this.value=e,this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:this.value},bubbles:!0,composed:!0})))};S=function(e){(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),b(this,n,u).call(this,this.value==="flow"?"code":"flow"))};p.styles=[E,P`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .track {
        display: inline-flex;
        align-items: flex-start;
        gap: 2px;
        height: 26px;
        padding: 2px;
        box-sizing: border-box;
        border-radius: 2px;
        background: #e6e8ed;
      }

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        height: 22px;
        margin: 0;
        padding: 4px;
        border: 0;
        border-radius: 2px;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        box-sizing: border-box;
        white-space: nowrap;
      }

      button[aria-selected='true'] {
        background: #ffffff;
        color: #0d6dfd;
      }

      button:focus {
        outline: none;
      }

      button:focus-visible {
        outline: 2px solid #0d6dfd;
        outline-offset: 1px;
      }

      .icon {
        display: inline-flex;
        width: 16px;
        height: 16px;
        align-items: center;
        justify-content: center;
        color: inherit;
        flex-shrink: 0;
      }
    `];F([A({reflect:!0})],p.prototype,"value",2);p=F([M("dre-tab-toggle")],p);const J={title:"Single Components/Tab",component:"dre-tab",tags:["autodocs"],argTypes:{mode:{control:"select",options:["default","icon","badge","both"]},active:{control:"boolean"},disabled:{control:"boolean"}},args:{mode:"default",active:!1,disabled:!1},parameters:{docs:{description:{component:`Figma **⭐ Tab** ${O("12267:1598")} — Modes Default / Icon / Badge / Both · Active indicator \`#0d6dfd\` · Tab Toggle Flow/Code.`}}}},d={name:"Features / Default",render:()=>a`
    <dre-tab-group value="Design">
      <dre-tab value="Design" active>Design</dre-tab>
      <dre-tab value="Code">Code</dre-tab>
      <dre-tab value="Preview" disabled>Preview</dre-tab>
      <div slot="panel">Tab panel content for the active tab.</div>
    </dre-tab-group>
  `},s={name:"Features / Modes",render:()=>a`
    <div role="tablist" style="display:flex;gap:8px;align-items:flex-end;">
      <dre-tab active>Default</dre-tab>
      <dre-tab mode="icon" active>
        <dre-icon slot="icon" name="trash-2" size="16"></dre-icon>
        With Icon
      </dre-tab>
      <dre-tab mode="badge" active count="5">Badge</dre-tab>
      <dre-tab mode="both" active count="5">
        <dre-icon slot="icon" name="trash-2" size="16"></dre-icon>
        Both
      </dre-tab>
    </div>
  `},l={name:"Features / States",render:()=>a`
    <div style="display:flex;flex-direction:column;gap:20px;">
      ${["default","icon","badge","both"].map(e=>a`
          <div role="tablist" style="display:flex;gap:24px;align-items:flex-end;">
            <dre-tab mode=${e} count=${e==="badge"||e==="both"?"5":""}>
              ${e==="icon"||e==="both"?a`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`:null}
              Default
            </dre-tab>
            <dre-tab mode=${e} active count=${e==="badge"||e==="both"?"5":""}>
              ${e==="icon"||e==="both"?a`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`:null}
              Active
            </dre-tab>
            <dre-tab mode=${e} disabled count=${e==="badge"||e==="both"?"5":""}>
              ${e==="icon"||e==="both"?a`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`:null}
              Disabled
            </dre-tab>
            <dre-tab
              mode=${e}
              ?hovered=${!0}
              count=${e==="badge"||e==="both"?"5":""}
            >
              ${e==="icon"||e==="both"?a`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>`:null}
              Hovered
            </dre-tab>
          </div>
        `)}
    </div>
  `},c={name:"Features / Tab Toggle",render:()=>a`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-tab-toggle value="flow"></dre-tab-toggle>
      <dre-tab-toggle value="code"></dre-tab-toggle>
    </div>
  `};var h,f,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: () => html\`
    <dre-tab-group value="Design">
      <dre-tab value="Design" active>Design</dre-tab>
      <dre-tab value="Code">Code</dre-tab>
      <dre-tab value="Preview" disabled>Preview</dre-tab>
      <div slot="panel">Tab panel content for the active tab.</div>
    </dre-tab-group>
  \`
}`,...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,y,$;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Modes',
  render: () => html\`
    <div role="tablist" style="display:flex;gap:8px;align-items:flex-end;">
      <dre-tab active>Default</dre-tab>
      <dre-tab mode="icon" active>
        <dre-icon slot="icon" name="trash-2" size="16"></dre-icon>
        With Icon
      </dre-tab>
      <dre-tab mode="badge" active count="5">Badge</dre-tab>
      <dre-tab mode="both" active count="5">
        <dre-icon slot="icon" name="trash-2" size="16"></dre-icon>
        Both
      </dre-tab>
    </div>
  \`
}`,...($=(y=s.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var w,D,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:20px;">
      \${(['default', 'icon', 'badge', 'both'] as const).map(mode => html\`
          <div role="tablist" style="display:flex;gap:24px;align-items:flex-end;">
            <dre-tab mode=\${mode} count=\${mode === 'badge' || mode === 'both' ? '5' : ''}>
              \${mode === 'icon' || mode === 'both' ? html\`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>\` : null}
              Default
            </dre-tab>
            <dre-tab mode=\${mode} active count=\${mode === 'badge' || mode === 'both' ? '5' : ''}>
              \${mode === 'icon' || mode === 'both' ? html\`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>\` : null}
              Active
            </dre-tab>
            <dre-tab mode=\${mode} disabled count=\${mode === 'badge' || mode === 'both' ? '5' : ''}>
              \${mode === 'icon' || mode === 'both' ? html\`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>\` : null}
              Disabled
            </dre-tab>
            <dre-tab
              mode=\${mode}
              ?hovered=\${true}
              count=\${mode === 'badge' || mode === 'both' ? '5' : ''}
            >
              \${mode === 'icon' || mode === 'both' ? html\`<dre-icon slot="icon" name="trash-2" size="16"></dre-icon>\` : null}
              Hovered
            </dre-tab>
          </div>
        \`)}
    </div>
  \`
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var _,z,C;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Features / Tab Toggle',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-tab-toggle value="flow"></dre-tab-toggle>
      <dre-tab-toggle value="code"></dre-tab-toggle>
    </div>
  \`
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const N=["Default","Modes","States","TabToggle"];export{d as Default,s as Modes,l as States,c as TabToggle,N as __namedExportsOrder,J as default};
