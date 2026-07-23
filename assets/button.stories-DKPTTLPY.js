import{b as r}from"./iframe-C1mRIqdo.js";import"./button-aadQc3ho.js";import"./icon-DLOWPnC1.js";import{f as F}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-COYYN49D.js";import"./styles-DmOKkkRH.js";const G={title:"Single Components/Button",component:"dre-button",tags:["autodocs"],argTypes:{hierarchy:{control:"select",options:["primary","secondary","ghost"]},size:{control:"select",options:["xsmall","small","medium"]},icon:{control:"select",options:["false","leading","trailing","only"]},disabled:{control:"boolean"},destructive:{control:"boolean"}},args:{hierarchy:"primary",size:"medium",icon:"false",disabled:!1,destructive:!1,label:"Button"},parameters:{docs:{description:{component:`Figma **⭐ Button** ${F("12002:17139")} — Hierarchy · Size · State · Icon. Heights: Medium 30 · Small 26 · XSmall 24.`}}}},n={render:e=>r`
    <dre-button
      hierarchy=${e.hierarchy}
      size=${e.size}
      icon=${e.icon}
      ?disabled=${e.disabled}
      ?destructive=${e.destructive}
      aria-label=${e.icon==="only"?e.label:""}
    >
      ${e.icon==="leading"||e.icon==="only"?r`<dre-icon slot="leading" name="sparkles" size="14"></dre-icon>`:null}
      ${e.icon==="only"?null:e.label}
      ${e.icon==="trailing"?r`<dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>`:null}
    </dre-button>
  `},t={name:"Features / Hierarchy",render:()=>r`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
      <dre-button hierarchy="primary">Primary</dre-button>
      <dre-button hierarchy="secondary">Secondary</dre-button>
      <dre-button hierarchy="ghost">Ghost</dre-button>
      <dre-button hierarchy="primary" destructive>Destructive</dre-button>
    </div>
  `},a={name:"Features / Sizes",render:()=>r`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button size="xsmall">XSmall 24</dre-button>
      <dre-button size="small">Small 26</dre-button>
      <dre-button size="medium">Medium 30</dre-button>
    </div>
  `},i={name:"Features / Icons",render:()=>r`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button icon="leading">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
        Leading
      </dre-button>
      <dre-button icon="trailing">
        Trailing
        <dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>
      </dre-button>
      <dre-button icon="only" aria-label="Sparkles">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-button>
    </div>
  `},o={name:"Features / States",render:()=>r`
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${["primary","secondary","ghost"].map(e=>r`
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="width:80px;font-size:12px;color:var(--dre-color-text-subtle);">${e}</span>
            <dre-button hierarchy=${e}>Default</dre-button>
            <dre-button hierarchy=${e} disabled>Disabled</dre-button>
          </div>
        `)}
    </div>
  `},s={name:"Features / Matrix",render:()=>r`
    <div style="display:grid;gap:16px;">
      ${["primary","secondary","ghost"].map(e=>r`
          <div>
            <div style="font-size:12px;margin-bottom:8px;color:var(--dre-color-text-subtle);">${e}</div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              ${["xsmall","small","medium"].map(d=>r`<dre-button hierarchy=${e} size=${d}>${d}</dre-button>`)}
              <dre-button hierarchy=${e} icon="leading" size="medium">
                <dre-icon slot="leading" name="check" size="14"></dre-icon>
                Icon
              </dre-button>
              <dre-button hierarchy=${e} disabled>Disabled</dre-button>
            </div>
          </div>
        `)}
    </div>
  `};var l,c,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`
    <dre-button
      hierarchy=\${args.hierarchy}
      size=\${args.size}
      icon=\${args.icon}
      ?disabled=\${args.disabled}
      ?destructive=\${args.destructive}
      aria-label=\${args.icon === 'only' ? args.label : ''}
    >
      \${args.icon === 'leading' || args.icon === 'only' ? html\`<dre-icon slot="leading" name="sparkles" size="14"></dre-icon>\` : null}
      \${args.icon === 'only' ? null : args.label}
      \${args.icon === 'trailing' ? html\`<dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>\` : null}
    </dre-button>
  \`
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / Hierarchy',
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
      <dre-button hierarchy="primary">Primary</dre-button>
      <dre-button hierarchy="secondary">Secondary</dre-button>
      <dre-button hierarchy="ghost">Ghost</dre-button>
      <dre-button hierarchy="primary" destructive>Destructive</dre-button>
    </div>
  \`
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,h,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button size="xsmall">XSmall 24</dre-button>
      <dre-button size="small">Small 26</dre-button>
      <dre-button size="medium">Medium 30</dre-button>
    </div>
  \`
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Icons',
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button icon="leading">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
        Leading
      </dre-button>
      <dre-button icon="trailing">
        Trailing
        <dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>
      </dre-button>
      <dre-button icon="only" aria-label="Sparkles">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-button>
    </div>
  \`
}`,...($=(v=i.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var z,f,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;">
      \${(['primary', 'secondary', 'ghost'] as const).map(h => html\`
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="width:80px;font-size:12px;color:var(--dre-color-text-subtle);">\${h}</span>
            <dre-button hierarchy=\${h}>Default</dre-button>
            <dre-button hierarchy=\${h} disabled>Disabled</dre-button>
          </div>
        \`)}
    </div>
  \`
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var w,k,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Features / Matrix',
  render: () => html\`
    <div style="display:grid;gap:16px;">
      \${(['primary', 'secondary', 'ghost'] as const).map(h => html\`
          <div>
            <div style="font-size:12px;margin-bottom:8px;color:var(--dre-color-text-subtle);">\${h}</div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              \${(['xsmall', 'small', 'medium'] as const).map(s => html\`<dre-button hierarchy=\${h} size=\${s}>\${s}</dre-button>\`)}
              <dre-button hierarchy=\${h} icon="leading" size="medium">
                <dre-icon slot="leading" name="check" size="14"></dre-icon>
                Icon
              </dre-button>
              <dre-button hierarchy=\${h} disabled>Disabled</dre-button>
            </div>
          </div>
        \`)}
    </div>
  \`
}`,...(D=(k=s.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const P=["Default","Hierarchy","Sizes","Icons","States","Matrix"];export{n as Default,t as Hierarchy,i as Icons,s as Matrix,a as Sizes,o as States,P as __namedExportsOrder,G as default};
