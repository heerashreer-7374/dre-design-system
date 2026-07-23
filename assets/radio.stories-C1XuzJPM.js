import{b as e}from"./iframe-hYZkyXvR.js";import"./radio-DkUI-2iZ.js";import{f as y}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./state-BaBndn7-.js";import"./styles-BGRCfbQF.js";const C={title:"Single Components/Radio Button",component:"dre-radio",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},appearance:{control:"select",options:["light","dark"]},checked:{control:"boolean"},disabled:{control:"boolean"}},args:{size:"medium",appearance:"light",checked:!1,disabled:!1},parameters:{docs:{description:{component:`Figma **⭐ Radio Button** ${y("10151:1001")} — Light/Dark · Small 20/8 · Medium 34/14 · Selected \`#0d6dfd\`.`}}}},d={name:"Features / Default",render:a=>e`
    <dre-radio
      size=${a.size}
      appearance=${a.appearance}
      ?checked=${a.checked}
      ?disabled=${a.disabled}
      name="demo"
    >
      Option
    </dre-radio>
  `},r={name:"Features / Sizes",render:()=>e`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-radio size="small" name="s" checked>Small</dre-radio>
      <dre-radio size="medium" name="m" checked>Medium</dre-radio>
      <dre-radio size="small" name="s2"></dre-radio>
      <dre-radio size="medium" name="m2"></dre-radio>
    </div>
  `},s={name:"Features / States",render:()=>e`
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;">
      <dre-radio name="st" accessible-label="Default"></dre-radio>
      <dre-radio name="st" checked accessible-label="Selected"></dre-radio>
      <dre-radio name="st-d" disabled accessible-label="Disabled"></dre-radio>
      <dre-radio name="st-d" checked disabled accessible-label="Selected disabled"></dre-radio>
      <dre-radio name="st-p" ?pressed=${!0} accessible-label="Pressed"></dre-radio>
      <dre-radio name="st-p" checked ?pressed=${!0} accessible-label="Selected pressed"></dre-radio>
    </div>
  `},i={name:"Features / Dark",parameters:{backgrounds:{default:"dark"}},render:()=>e`
    <div
      style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      <dre-radio appearance="dark" name="dk">Off</dre-radio>
      <dre-radio appearance="dark" name="dk" checked>On</dre-radio>
      <dre-radio appearance="dark" name="dk-d" disabled>Disabled</dre-radio>
      <dre-radio appearance="dark" name="dk-d" checked disabled>Selected disabled</dre-radio>
      <dre-radio appearance="dark" name="dk-p" ?pressed=${!0}>Pressed</dre-radio>
      <dre-radio appearance="dark" name="dk-p" checked ?pressed=${!0}>Selected pressed</dre-radio>
    </div>
  `},n={name:"Features / Labeled",render:()=>e`
    <div style="display:grid;gap:12px;">
      <dre-radio name="lb" checked>Email notifications</dre-radio>
      <dre-radio name="lb" helper="Optional supporting description">SMS alerts</dre-radio>
      <dre-radio name="lb-s" size="small" checked helper="Compact row">Compact option</dre-radio>
    </div>
  `};var o,l,c;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: args => html\`
    <dre-radio
      size=\${args.size}
      appearance=\${args.appearance}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
      name="demo"
    >
      Option
    </dre-radio>
  \`
}`,...(c=(l=d.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var t,p,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-radio size="small" name="s" checked>Small</dre-radio>
      <dre-radio size="medium" name="m" checked>Medium</dre-radio>
      <dre-radio size="small" name="s2"></dre-radio>
      <dre-radio size="medium" name="m2"></dre-radio>
    </div>
  \`
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,k,u;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;">
      <dre-radio name="st" accessible-label="Default"></dre-radio>
      <dre-radio name="st" checked accessible-label="Selected"></dre-radio>
      <dre-radio name="st-d" disabled accessible-label="Disabled"></dre-radio>
      <dre-radio name="st-d" checked disabled accessible-label="Selected disabled"></dre-radio>
      <dre-radio name="st-p" ?pressed=\${true} accessible-label="Pressed"></dre-radio>
      <dre-radio name="st-p" checked ?pressed=\${true} accessible-label="Selected pressed"></dre-radio>
    </div>
  \`
}`,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      <dre-radio appearance="dark" name="dk">Off</dre-radio>
      <dre-radio appearance="dark" name="dk" checked>On</dre-radio>
      <dre-radio appearance="dark" name="dk-d" disabled>Disabled</dre-radio>
      <dre-radio appearance="dark" name="dk-d" checked disabled>Selected disabled</dre-radio>
      <dre-radio appearance="dark" name="dk-p" ?pressed=\${true}>Pressed</dre-radio>
      <dre-radio appearance="dark" name="dk-p" checked ?pressed=\${true}>Selected pressed</dre-radio>
    </div>
  \`
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,x,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Features / Labeled',
  render: () => html\`
    <div style="display:grid;gap:12px;">
      <dre-radio name="lb" checked>Email notifications</dre-radio>
      <dre-radio name="lb" helper="Optional supporting description">SMS alerts</dre-radio>
      <dre-radio name="lb-s" size="small" checked helper="Compact row">Compact option</dre-radio>
    </div>
  \`
}`,...(z=(x=n.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const M=["Default","Sizes","States","Dark","Labeled"];export{i as Dark,d as Default,n as Labeled,r as Sizes,s as States,M as __namedExportsOrder,C as default};
