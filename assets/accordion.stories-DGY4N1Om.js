import{b as t}from"./iframe-C1mRIqdo.js";import"./accordion-7PnIKIRB.js";import"./icon-DLOWPnC1.js";import{f as p}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-COYYN49D.js";import"./styles-DmOKkkRH.js";const k={title:"Single Components/Accordion",component:"dre-accordion",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **⭐ Accordion** ${p("12502:11281")} — Collapsed/Expanded · header 14px · block items \`#f7f7f9\` / \`#e6e8ed\` r6.`}}}},e=m=>t`
  <div
    style="
      background:#f7f7f9;
      border:1px solid #e6e8ed;
      border-radius:6px;
      padding:6px;
      box-sizing:border-box;
      min-height:46px;
      font-size:12px;
      color:#13141a;
    "
  >
    ${m}
  </div>
`,o={render:()=>t`
    <dre-accordion title="Basics">
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      ${e("Name")} ${e("Description")} ${e("Entry point")}
    </dre-accordion>
  `},r={render:()=>t`
    <dre-accordion title="Basics" expanded>
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      ${e("Name")} ${e("Description")} ${e("Entry point")}
    </dre-accordion>
  `};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <dre-accordion title="Basics">
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      \${blockItem('Name')} \${blockItem('Description')} \${blockItem('Entry point')}
    </dre-accordion>
  \`
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var n,a,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <dre-accordion title="Basics" expanded>
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      \${blockItem('Name')} \${blockItem('Description')} \${blockItem('Entry point')}
    </dre-accordion>
  \`
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const E=["Default","Expanded"];export{o as Default,r as Expanded,E as __namedExportsOrder,k as default};
