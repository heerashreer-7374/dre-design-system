import{b as i}from"./iframe-D98_Yrru.js";import"./radio-_d-uOF6b.js";import"./preload-helper-BJOJroOC.js";import"./property-OxoNfEB1.js";import"./styles-CTqCNxHK.js";const k={title:"Single Components/Radio Button",component:"dre-radio",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},checked:{control:"boolean"},disabled:{control:"boolean"}},args:{size:"medium",checked:!1,disabled:!1},parameters:{docs:{description:{component:"Figma **⭐ Radio Button** (`10151:1002`) — Small 8×8 · Medium 14×14 · States Default/Hover/Selected/Disabled."}}}},e={render:r=>i`
    <dre-radio size=${r.size} ?checked=${r.checked} ?disabled=${r.disabled} name="demo"
      >Option</dre-radio
    >
  `},d={name:"Features / Sizes",render:()=>i`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-radio size="small" name="s" checked>Small 8</dre-radio>
      <dre-radio size="medium" name="m" checked>Medium 14</dre-radio>
    </div>
  `},a={name:"Features / States",render:()=>i`
    <div style="display:grid;gap:12px;">
      <dre-radio size="medium" name="st1">Default</dre-radio>
      <dre-radio size="medium" name="st2" checked>Selected</dre-radio>
      <dre-radio size="medium" name="st3" disabled>Disabled</dre-radio>
      <dre-radio size="medium" name="st4" checked disabled>Selected Disabled</dre-radio>
    </div>
  `};var s,o,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => html\`
    <dre-radio size=\${args.size} ?checked=\${args.checked} ?disabled=\${args.disabled} name="demo"
      >Option</dre-radio
    >
  \`
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,n,c;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-radio size="small" name="s" checked>Small 8</dre-radio>
      <dre-radio size="medium" name="m" checked>Medium 14</dre-radio>
    </div>
  \`
}`,...(c=(n=d.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:grid;gap:12px;">
      <dre-radio size="medium" name="st1">Default</dre-radio>
      <dre-radio size="medium" name="st2" checked>Selected</dre-radio>
      <dre-radio size="medium" name="st3" disabled>Disabled</dre-radio>
      <dre-radio size="medium" name="st4" checked disabled>Selected Disabled</dre-radio>
    </div>
  \`
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const f=["Default","Sizes","States"];export{e as Default,d as Sizes,a as States,f as __namedExportsOrder,k as default};
