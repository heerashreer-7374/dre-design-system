import{b as a}from"./iframe-C1mRIqdo.js";import"./checkbox-DgC24Hve.js";import{f as k}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-COYYN49D.js";import"./styles-DmOKkkRH.js";const z={title:"Single Components/Checkbox",component:"dre-checkbox",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"}},args:{size:"medium",checked:!1,disabled:!1,indeterminate:!1},parameters:{docs:{description:{component:`Figma **⭐ Checkbox** ${k("10048:396")} — Small 8×8 r2 · Medium 14×14 r4 · Selected \`#0d6dfd\`.`}}}},c={render:e=>a`
    <dre-checkbox
      size=${e.size}
      ?checked=${e.checked}
      ?disabled=${e.disabled}
      ?indeterminate=${e.indeterminate}
      >Label</dre-checkbox
    >
  `},d={name:"Features / Sizes",render:()=>a`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-checkbox size="small" checked>Small</dre-checkbox>
      <dre-checkbox size="medium" checked>Medium</dre-checkbox>
    </div>
  `},r={name:"Features / States",render:()=>a`
    <div style="display:grid;gap:12px;">
      <dre-checkbox>Default</dre-checkbox>
      <dre-checkbox checked>Selected</dre-checkbox>
      <dre-checkbox indeterminate>Indeterminate</dre-checkbox>
      <dre-checkbox disabled>Disabled</dre-checkbox>
      <dre-checkbox checked disabled>Selected Disabled</dre-checkbox>
    </div>
  `};var s,o,t;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => html\`
    <dre-checkbox
      size=\${args.size}
      ?checked=\${args.checked}
      ?disabled=\${args.disabled}
      ?indeterminate=\${args.indeterminate}
      >Label</dre-checkbox
    >
  \`
}`,...(t=(o=c.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var i,n,l;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-checkbox size="small" checked>Small</dre-checkbox>
      <dre-checkbox size="medium" checked>Medium</dre-checkbox>
    </div>
  \`
}`,...(l=(n=d.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,b,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:grid;gap:12px;">
      <dre-checkbox>Default</dre-checkbox>
      <dre-checkbox checked>Selected</dre-checkbox>
      <dre-checkbox indeterminate>Indeterminate</dre-checkbox>
      <dre-checkbox disabled>Disabled</dre-checkbox>
      <dre-checkbox checked disabled>Selected Disabled</dre-checkbox>
    </div>
  \`
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const y=["Default","Sizes","States"];export{c as Default,d as Sizes,r as States,y as __namedExportsOrder,z as default};
