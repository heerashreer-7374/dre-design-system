import{b as l}from"./iframe-BfQCnnR_.js";import"./toast-CaRRGkGm.js";import"./preload-helper-Dp1pzeXC.js";import"./property-P_7FsvOw.js";import"./styles-Bjo1gRn0.js";import"./icon-CPlX_fkM.js";const f={title:"Single Components/Toast Message",component:"dre-toast",tags:["autodocs"],argTypes:{type:{control:"select",options:["success","warning","error","info"]}},args:{type:"success",message:"All your changes have been saved"},parameters:{docs:{description:{component:"Figma **⭐ Toast Message** (`10110:280`) — 314×48 · pad 16 · radius 4 · Success/Warning/Error/Info fills."}}}},e={render:t=>l`<dre-toast type=${t.type} message=${t.message}></dre-toast>`},s={name:"Features / Types",render:()=>l`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="warning" message="Your quota is almost full"></dre-toast>
      <dre-toast type="error" message="Could not deploy the workflow"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
    </div>
  `};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{\n  render: args => html`<dre-toast type=${args.type} message=${args.message}></dre-toast>`\n}",...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var n,d,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Features / Types',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:12px;">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="warning" message="Your quota is almost full"></dre-toast>
      <dre-toast type="error" message="Could not deploy the workflow"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
    </div>
  \`
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Default","Types"];export{e as Default,s as Types,v as __namedExportsOrder,f as default};
