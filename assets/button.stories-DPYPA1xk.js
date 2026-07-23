import{b as r}from"./iframe-hYZkyXvR.js";import"./button-Du1k3Bj9.js";import"./icon-67h1dq3i.js";import{f as H}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";const E={title:"Single Components/Button",component:"dre-button",tags:["autodocs"],argTypes:{hierarchy:{control:"select",options:["primary","secondary","ghost"]},size:{control:"select",options:["xsmall","small","medium"]},appearance:{control:"select",options:["light","dark"]},icon:{control:"select",options:["false","leading","trailing","only"]},disabled:{control:"boolean"},destructive:{control:"boolean"}},args:{hierarchy:"primary",size:"medium",appearance:"light",icon:"false",disabled:!1,destructive:!1,label:"Button"},parameters:{docs:{description:{component:`Figma **⭐ Button** ${H("1267:334303")} — Light/Dark · Primary/Secondary/Ghost · Medium 30 · Small 26 · XSmall 24.`}}}},n={name:"Features / Default",render:e=>r`
    <dre-button
      hierarchy=${e.hierarchy}
      size=${e.size}
      appearance=${e.appearance}
      icon=${e.icon}
      ?disabled=${e.disabled}
      ?destructive=${e.destructive}
      accessible-label=${e.icon==="only"?e.label:""}
    >
      ${e.icon==="leading"||e.icon==="only"?r`<dre-icon slot="leading" name="sparkles" size="14"></dre-icon>`:null}
      ${e.icon==="only"?null:e.label}
      ${e.icon==="trailing"?r`<dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>`:null}
    </dre-button>
  `},a={name:"Features / Hierarchy",render:()=>r`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
      <dre-button hierarchy="primary">Primary</dre-button>
      <dre-button hierarchy="secondary">Secondary</dre-button>
      <dre-button hierarchy="ghost">Ghost</dre-button>
      <dre-button hierarchy="primary" destructive>Destructive</dre-button>
    </div>
  `},t={name:"Features / Sizes",render:()=>r`
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
      <dre-button icon="only" accessible-label="Sparkles">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-button>
    </div>
  `},s={name:"Features / States",render:()=>r`
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${["primary","secondary","ghost"].map(e=>r`
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="width:80px;font-size:12px;color:#575b62;">${e}</span>
            <dre-button hierarchy=${e}>Default</dre-button>
            <dre-button hierarchy=${e} ?pressed=${!0}>Pressed</dre-button>
            <dre-button hierarchy=${e} disabled>Disabled</dre-button>
          </div>
        `)}
    </div>
  `},o={name:"Features / Dark",parameters:{backgrounds:{default:"dark"}},render:()=>r`
    <div
      style="display:flex;flex-direction:column;gap:16px;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      ${["primary","secondary","ghost"].map(e=>r`
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
            <span style="width:80px;font-size:12px;color:#c5c7ce;">${e}</span>
            <dre-button appearance="dark" hierarchy=${e}>Default</dre-button>
            <dre-button appearance="dark" hierarchy=${e} ?pressed=${!0}>Pressed</dre-button>
            <dre-button appearance="dark" hierarchy=${e} disabled>Disabled</dre-button>
            <dre-button appearance="dark" hierarchy=${e} icon="leading">
              <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
              Icon
            </dre-button>
          </div>
        `)}
    </div>
  `},d={name:"Features / Matrix",render:()=>r`
    <div style="display:grid;gap:16px;">
      ${["primary","secondary","ghost"].map(e=>r`
          <div>
            <div style="font-size:12px;margin-bottom:8px;color:#575b62;">${e}</div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              ${["xsmall","small","medium"].map(l=>r`<dre-button hierarchy=${e} size=${l}>${l}</dre-button>`)}
              <dre-button hierarchy=${e} icon="leading" size="medium">
                <dre-icon slot="leading" name="check" size="14"></dre-icon>
                Icon
              </dre-button>
              <dre-button hierarchy=${e} disabled>Disabled</dre-button>
            </div>
          </div>
        `)}
    </div>
  `};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: args => html\`
    <dre-button
      hierarchy=\${args.hierarchy}
      size=\${args.size}
      appearance=\${args.appearance}
      icon=\${args.icon}
      ?disabled=\${args.disabled}
      ?destructive=\${args.destructive}
      accessible-label=\${args.icon === 'only' ? args.label : ''}
    >
      \${args.icon === 'leading' || args.icon === 'only' ? html\`<dre-icon slot="leading" name="sparkles" size="14"></dre-icon>\` : null}
      \${args.icon === 'only' ? null : args.label}
      \${args.icon === 'trailing' ? html\`<dre-icon slot="trailing" name="chevron-down" size="14"></dre-icon>\` : null}
    </dre-button>
  \`
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Features / Hierarchy',
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
      <dre-button hierarchy="primary">Primary</dre-button>
      <dre-button hierarchy="secondary">Secondary</dre-button>
      <dre-button hierarchy="ghost">Ghost</dre-button>
      <dre-button hierarchy="primary" destructive>Destructive</dre-button>
    </div>
  \`
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,g,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:12px;align-items:center;">
      <dre-button size="xsmall">XSmall 24</dre-button>
      <dre-button size="small">Small 26</dre-button>
      <dre-button size="medium">Medium 30</dre-button>
    </div>
  \`
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var $,v,f;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      <dre-button icon="only" accessible-label="Sparkles">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-button>
    </div>
  \`
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var z,k,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;">
      \${(['primary', 'secondary', 'ghost'] as const).map(h => html\`
          <div style="display:flex;gap:12px;align-items:center;">
            <span style="width:80px;font-size:12px;color:#575b62;">\${h}</span>
            <dre-button hierarchy=\${h}>Default</dre-button>
            <dre-button hierarchy=\${h} ?pressed=\${true}>Pressed</dre-button>
            <dre-button hierarchy=\${h} disabled>Disabled</dre-button>
          </div>
        \`)}
    </div>
  \`
}`,...(S=(k=s.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,w,F;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Features / Dark',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => html\`
    <div
      style="display:flex;flex-direction:column;gap:16px;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      \${(['primary', 'secondary', 'ghost'] as const).map(h => html\`
          <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
            <span style="width:80px;font-size:12px;color:#c5c7ce;">\${h}</span>
            <dre-button appearance="dark" hierarchy=\${h}>Default</dre-button>
            <dre-button appearance="dark" hierarchy=\${h} ?pressed=\${true}>Pressed</dre-button>
            <dre-button appearance="dark" hierarchy=\${h} disabled>Disabled</dre-button>
            <dre-button appearance="dark" hierarchy=\${h} icon="leading">
              <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
              Icon
            </dre-button>
          </div>
        \`)}
    </div>
  \`
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var I,M,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Features / Matrix',
  render: () => html\`
    <div style="display:grid;gap:16px;">
      \${(['primary', 'secondary', 'ghost'] as const).map(h => html\`
          <div>
            <div style="font-size:12px;margin-bottom:8px;color:#575b62;">\${h}</div>
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
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const O=["Default","Hierarchy","Sizes","Icons","States","Dark","Matrix"];export{o as Dark,n as Default,a as Hierarchy,i as Icons,d as Matrix,t as Sizes,s as States,O as __namedExportsOrder,E as default};
