import{b as s}from"./iframe-CxxUV_ql.js";import"./toggle-CAZEMy4O.js";import{f as u}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BAmm2Bkg.js";import"./styles-DnIXmjyS.js";const O={title:"Single Components/Toggle",component:"dre-toggle",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},checked:{control:"boolean"},disabled:{control:"boolean"}},args:{size:"medium",checked:!0,disabled:!1},parameters:{docs:{description:{component:`Figma **⭐ Toggle** ${u("10070:229")} — Small 26×18 · Medium 32×22 · On \`#0d6dfd\` · Off \`#bdc0cf\`.`}}}},e={render:t=>s`
    <dre-toggle size=${t.size} ?checked=${t.checked} ?disabled=${t.disabled}
      >Notifications</dre-toggle
    >
  `},d={name:"Features / Sizes",render:()=>s`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle size="small" checked>Small</dre-toggle>
      <dre-toggle size="medium" checked>Medium</dre-toggle>
    </div>
  `},r={name:"Features / States",render:()=>s`
    <div style="display:grid;gap:12px;">
      <dre-toggle>Off</dre-toggle>
      <dre-toggle checked>On</dre-toggle>
      <dre-toggle disabled>Disabled Off</dre-toggle>
      <dre-toggle checked disabled>Disabled On</dre-toggle>
    </div>
  `};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => html\`
    <dre-toggle size=\${args.size} ?checked=\${args.checked} ?disabled=\${args.disabled}
      >Notifications</dre-toggle
    >
  \`
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var g,i,n;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:center;">
      <dre-toggle size="small" checked>Small</dre-toggle>
      <dre-toggle size="medium" checked>Medium</dre-toggle>
    </div>
  \`
}`,...(n=(i=d.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:grid;gap:12px;">
      <dre-toggle>Off</dre-toggle>
      <dre-toggle checked>On</dre-toggle>
      <dre-toggle disabled>Disabled Off</dre-toggle>
      <dre-toggle checked disabled>Disabled On</dre-toggle>
    </div>
  \`
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const y=["Default","Sizes","States"];export{e as Default,d as Sizes,r as States,y as __namedExportsOrder,O as default};
