import{b as e}from"./iframe-hYZkyXvR.js";import"./toggle-DkDf4XWs.js";import{f as O}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./state-BaBndn7-.js";import"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";const T={title:"Single Components/Toggle",component:"dre-toggle",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},appearance:{control:"select",options:["light","dark"]},checked:{control:"boolean"},disabled:{control:"boolean"},icon:{control:"boolean"}},args:{size:"medium",appearance:"light",checked:!0,disabled:!1,icon:!1},parameters:{docs:{description:{component:`Figma **⭐ Toggle** ${O("10068:197")} — Light/Dark · Small 26×18 · Medium 32×22 · Icon · Focus/Hover/Disabled.`}}}},a={name:"Features / Default",render:r=>e`
    <dre-toggle
      size=${r.size}
      appearance=${r.appearance}
      ?checked=${r.checked}
      ?disabled=${r.disabled}
      ?icon=${r.icon}
    >
      Notifications
    </dre-toggle>
  `},d={name:"Features / Sizes",render:()=>e`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle size="small" checked>Small</dre-toggle>
      <dre-toggle size="medium" checked>Medium</dre-toggle>
      <dre-toggle size="small"></dre-toggle>
      <dre-toggle size="medium"></dre-toggle>
    </div>
  `},o={name:"Features / States",render:()=>e`
    <div style="display:grid;grid-template-columns:repeat(4,auto);gap:16px 24px;align-items:center;">
      <dre-toggle checked></dre-toggle>
      <dre-toggle></dre-toggle>
      <dre-toggle checked disabled></dre-toggle>
      <dre-toggle disabled></dre-toggle>
      <span style="font:12px sans-serif;color:#727999;">On</span>
      <span style="font:12px sans-serif;color:#727999;">Off</span>
      <span style="font:12px sans-serif;color:#727999;">Disabled On</span>
      <span style="font:12px sans-serif;color:#727999;">Disabled Off</span>
    </div>
  `},t={name:"Features / With Icon",render:()=>e`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle icon checked></dre-toggle>
      <dre-toggle icon></dre-toggle>
      <dre-toggle icon size="small" checked></dre-toggle>
      <dre-toggle icon size="small"></dre-toggle>
      <dre-toggle icon checked disabled></dre-toggle>
      <dre-toggle icon disabled></dre-toggle>
    </div>
  `},l={name:"Features / Dark",parameters:{backgrounds:{default:"dark"}},render:()=>e`
    <div
      style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      <dre-toggle appearance="dark" checked>On</dre-toggle>
      <dre-toggle appearance="dark">Off</dre-toggle>
      <dre-toggle appearance="dark" icon checked></dre-toggle>
      <dre-toggle appearance="dark" icon></dre-toggle>
      <dre-toggle appearance="dark" checked disabled>Disabled</dre-toggle>
      <dre-toggle appearance="dark" disabled>Disabled off</dre-toggle>
    </div>
  `},s={name:"Features / Labeled",render:()=>e`
    <div style="display:grid;gap:12px;">
      <dre-toggle checked>Enable notifications</dre-toggle>
      <dre-toggle helper="Applies immediately">Dark mode</dre-toggle>
      <dre-toggle size="small" checked helper="Compact row">Compact setting</dre-toggle>
    </div>
  `};var g,n,i;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: args => html\`
    <dre-toggle
      size=\${args.size}
      appearance=\${args.appearance}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
      ?icon=\${args.icon}
    >
      Notifications
    </dre-toggle>
  \`
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,m;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle size="small" checked>Small</dre-toggle>
      <dre-toggle size="medium" checked>Medium</dre-toggle>
      <dre-toggle size="small"></dre-toggle>
      <dre-toggle size="medium"></dre-toggle>
    </div>
  \`
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,k;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(4,auto);gap:16px 24px;align-items:center;">
      <dre-toggle checked></dre-toggle>
      <dre-toggle></dre-toggle>
      <dre-toggle checked disabled></dre-toggle>
      <dre-toggle disabled></dre-toggle>
      <span style="font:12px sans-serif;color:#727999;">On</span>
      <span style="font:12px sans-serif;color:#727999;">Off</span>
      <span style="font:12px sans-serif;color:#727999;">Disabled On</span>
      <span style="font:12px sans-serif;color:#727999;">Disabled Off</span>
    </div>
  \`
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,h,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Features / With Icon',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle icon checked></dre-toggle>
      <dre-toggle icon></dre-toggle>
      <dre-toggle icon size="small" checked></dre-toggle>
      <dre-toggle icon size="small"></dre-toggle>
      <dre-toggle icon checked disabled></dre-toggle>
      <dre-toggle icon disabled></dre-toggle>
    </div>
  \`
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,z,v;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Features / Dark',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => html\`
    <div
      style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      <dre-toggle appearance="dark" checked>On</dre-toggle>
      <dre-toggle appearance="dark">Off</dre-toggle>
      <dre-toggle appearance="dark" icon checked></dre-toggle>
      <dre-toggle appearance="dark" icon></dre-toggle>
      <dre-toggle appearance="dark" checked disabled>Disabled</dre-toggle>
      <dre-toggle appearance="dark" disabled>Disabled off</dre-toggle>
    </div>
  \`
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var D,S,F;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Features / Labeled',
  render: () => html\`
    <div style="display:grid;gap:12px;">
      <dre-toggle checked>Enable notifications</dre-toggle>
      <dre-toggle helper="Applies immediately">Dark mode</dre-toggle>
      <dre-toggle size="small" checked helper="Compact row">Compact setting</dre-toggle>
    </div>
  \`
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const A=["Default","Sizes","States","WithIcon","Dark","Labeled"];export{l as Dark,a as Default,s as Labeled,d as Sizes,o as States,t as WithIcon,A as __namedExportsOrder,T as default};
