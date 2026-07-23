import{b as r}from"./iframe-hYZkyXvR.js";import"./checkbox-DZBS_Ccs.js";import{f as y}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./state-BaBndn7-.js";import"./styles-BGRCfbQF.js";const O={title:"Single Components/Checkbox",component:"dre-checkbox",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},appearance:{control:"select",options:["light","dark"]},checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{size:"medium",appearance:"light",checked:!1,disabled:!1,indeterminate:!1},parameters:{docs:{description:{component:`Figma **⭐ Checkbox** ${y("10036:1134")} — Light/Dark · Small 20/8 · Medium 34/14 · Selected \`#0d6dfd\`.`}}}},a={name:"Features / Default",render:e=>r`
    <dre-checkbox
      size=${e.size}
      appearance=${e.appearance}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
      ?indeterminate=${e.indeterminate}
    >
      Label
    </dre-checkbox>
  `},c={name:"Features / Sizes",render:()=>r`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-checkbox size="small" checked>Small</dre-checkbox>
      <dre-checkbox size="medium" checked>Medium</dre-checkbox>
      <dre-checkbox size="small"></dre-checkbox>
      <dre-checkbox size="medium"></dre-checkbox>
    </div>
  `},d={name:"Features / States",render:()=>r`
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;">
      <dre-checkbox aria-label="Default"></dre-checkbox>
      <dre-checkbox checked aria-label="Selected"></dre-checkbox>
      <dre-checkbox indeterminate aria-label="Indeterminate"></dre-checkbox>
      <dre-checkbox disabled aria-label="Disabled"></dre-checkbox>
      <dre-checkbox checked disabled aria-label="Selected disabled"></dre-checkbox>
      <dre-checkbox ?pressed=${!0} aria-label="Pressed"></dre-checkbox>
      <dre-checkbox checked ?pressed=${!0} aria-label="Selected pressed"></dre-checkbox>
    </div>
  `},o={name:"Features / Dark",parameters:{backgrounds:{default:"dark"}},render:()=>r`
    <div
      style="display:flex;flex-wrap:wrap;gap:24px;align-items:center;padding:16px;background:#1b1b1e;border-radius:8px;"
    >
      <dre-checkbox appearance="dark">Off</dre-checkbox>
      <dre-checkbox appearance="dark" checked>On</dre-checkbox>
      <dre-checkbox appearance="dark" indeterminate>Mixed</dre-checkbox>
      <dre-checkbox appearance="dark" disabled>Disabled</dre-checkbox>
      <dre-checkbox appearance="dark" checked disabled>Selected disabled</dre-checkbox>
    </div>
  `},s={name:"Features / Labeled",render:()=>r`
    <div style="display:grid;gap:12px;">
      <dre-checkbox checked>I agree to the terms</dre-checkbox>
      <dre-checkbox helper="Optional supporting description">Include analytics</dre-checkbox>
      <dre-checkbox size="small" checked helper="Compact row">Compact option</dre-checkbox>
    </div>
  `};var i,n,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: args => html\`
    <dre-checkbox
      size=\${args.size}
      appearance=\${args.appearance}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
      ?indeterminate=\${args.indeterminate}
    >
      Label
    </dre-checkbox>
  \`
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var l,b,p;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-checkbox size="small" checked>Small</dre-checkbox>
      <dre-checkbox size="medium" checked>Medium</dre-checkbox>
      <dre-checkbox size="small"></dre-checkbox>
      <dre-checkbox size="medium"></dre-checkbox>
    </div>
  \`
}`,...(p=(b=c.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var k,h,x;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;">
      <dre-checkbox aria-label="Default"></dre-checkbox>
      <dre-checkbox checked aria-label="Selected"></dre-checkbox>
      <dre-checkbox indeterminate aria-label="Indeterminate"></dre-checkbox>
      <dre-checkbox disabled aria-label="Disabled"></dre-checkbox>
      <dre-checkbox checked disabled aria-label="Selected disabled"></dre-checkbox>
      <dre-checkbox ?pressed=\${true} aria-label="Pressed"></dre-checkbox>
      <dre-checkbox checked ?pressed=\${true} aria-label="Selected pressed"></dre-checkbox>
    </div>
  \`
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      <dre-checkbox appearance="dark">Off</dre-checkbox>
      <dre-checkbox appearance="dark" checked>On</dre-checkbox>
      <dre-checkbox appearance="dark" indeterminate>Mixed</dre-checkbox>
      <dre-checkbox appearance="dark" disabled>Disabled</dre-checkbox>
      <dre-checkbox appearance="dark" checked disabled>Selected disabled</dre-checkbox>
    </div>
  \`
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,S,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Features / Labeled',
  render: () => html\`
    <div style="display:grid;gap:12px;">
      <dre-checkbox checked>I agree to the terms</dre-checkbox>
      <dre-checkbox helper="Optional supporting description">Include analytics</dre-checkbox>
      <dre-checkbox size="small" checked helper="Compact row">Compact option</dre-checkbox>
    </div>
  \`
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const I=["Default","Sizes","States","Dark","Labeled"];export{o as Dark,a as Default,s as Labeled,c as Sizes,d as States,I as __namedExportsOrder,O as default};
