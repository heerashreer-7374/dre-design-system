import{b as t}from"./iframe-BMlSAenk.js";import"./accordion-ZyoOmXCc.js";import"./icon-DC5KmofD.js";import"./preload-helper-Dp1pzeXC.js";import"./property-DjCj8DcD.js";import"./styles-CNCx_--U.js";const u={title:"Single Components/Accordion",component:"dre-accordion",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **⭐ Accordion** (`12502:11281`) — Collapsed/Expanded · header 14px · block items `#f7f7f9` / `#e6e8ed` r6."}}}},e=p=>t`
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
    ${p}
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
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <dre-accordion title="Basics" expanded>
      <dre-icon slot="lead" name="settings" size="14"></dre-icon>
      \${blockItem('Name')} \${blockItem('Description')} \${blockItem('Entry point')}
    </dre-accordion>
  \`
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const f=["Default","Expanded"];export{o as Default,r as Expanded,f as __namedExportsOrder,u as default};
