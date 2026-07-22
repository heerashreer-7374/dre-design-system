import{b as r}from"./iframe-D98_Yrru.js";import"./badge-Bjy4L1o_.js";import"./preload-helper-BJOJroOC.js";import"./property-OxoNfEB1.js";import"./styles-CTqCNxHK.js";const x={title:"Single Components/Badge",component:"dre-badge",tags:["autodocs"],argTypes:{status:{control:"select",options:["success","warning","error","info"]},size:{control:"select",options:["small","medium","large"]}},args:{status:"success",size:"small"},parameters:{docs:{description:{component:"Figma **⭐ Badge** Status Badge (`12301:9489`) — Success `#55b45a` · Warning `#edb51d` · Error `#d64333` · Info `#3187d8`."}}}},e={render:t=>r`<dre-badge status=${t.status} size=${t.size}>Success</dre-badge>`},s={name:"Features / Status",render:()=>r`
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <dre-badge status="success">Success</dre-badge>
      <dre-badge status="warning">Warning</dre-badge>
      <dre-badge status="error">Error</dre-badge>
      <dre-badge status="info">Info</dre-badge>
    </div>
  `},a={name:"Features / Sizes",render:()=>r`
    <div style="display:flex;gap:8px;align-items:center;">
      <dre-badge status="success" size="small">Success</dre-badge>
      <dre-badge status="success" size="medium">Success</dre-badge>
      <dre-badge status="success" size="large">Success</dre-badge>
    </div>
  `};var d,c,n;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{\n  render: args => html`<dre-badge status=${args.status} size=${args.size}>Success</dre-badge>`\n}",...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,u,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Features / Status',
  render: () => html\`
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <dre-badge status="success">Success</dre-badge>
      <dre-badge status="warning">Warning</dre-badge>
      <dre-badge status="error">Error</dre-badge>
      <dre-badge status="info">Info</dre-badge>
    </div>
  \`
}`,...(o=(u=s.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var g,m,l;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:8px;align-items:center;">
      <dre-badge status="success" size="small">Success</dre-badge>
      <dre-badge status="success" size="medium">Success</dre-badge>
      <dre-badge status="success" size="large">Success</dre-badge>
    </div>
  \`
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["Default","Status","Sizes"];export{e as Default,a as Sizes,s as Status,y as __namedExportsOrder,x as default};
