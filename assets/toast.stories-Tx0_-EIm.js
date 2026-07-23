import{b as c}from"./iframe-6U_684zG.js";import"./toast-B10DeMOH.js";import{f as l}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-Bwn_HGw6.js";import"./styles-Cq6U1Hym.js";const h={title:"Single Components/Toast Message",component:"dre-toast",tags:["autodocs"],argTypes:{appearance:{control:"select",options:["light","dark"]},type:{control:"select",options:["success","warning","error","info"]}},args:{appearance:"light",type:"success",message:"All your changes have been saved"},parameters:{docs:{description:{component:`Figma **⭐ Toast Message** ${l("10109:905")} — Appearance Light/Dark · Type Success/Warning/Error/Info · 314×48 · pad 16 · radius 4.`}}}},e={render:s=>c`
    <dre-toast
      appearance=${s.appearance}
      type=${s.type}
      message=${s.message}
    ></dre-toast>
  `},a={name:"Features / Types",render:()=>c`
    <div style="display:flex;gap:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-toast type="success" message="All your changes have been saved"></dre-toast>
        <dre-toast type="warning" message="All your changes have been saved"></dre-toast>
        <dre-toast type="error" message="All your changes have been saved"></dre-toast>
        <dre-toast type="info" message="All your changes have been saved"></dre-toast>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-toast appearance="dark" type="success" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="warning" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="error" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="info" message="All your changes have been saved"></dre-toast>
      </div>
    </div>
  `};var r,t,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => html\`
    <dre-toast
      appearance=\${args.appearance}
      type=\${args.type}
      message=\${args.message}
    ></dre-toast>
  \`
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var o,d,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Features / Types',
  render: () => html\`
    <div style="display:flex;gap:24px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-toast type="success" message="All your changes have been saved"></dre-toast>
        <dre-toast type="warning" message="All your changes have been saved"></dre-toast>
        <dre-toast type="error" message="All your changes have been saved"></dre-toast>
        <dre-toast type="info" message="All your changes have been saved"></dre-toast>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-toast appearance="dark" type="success" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="warning" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="error" message="All your changes have been saved"></dre-toast>
        <dre-toast appearance="dark" type="info" message="All your changes have been saved"></dre-toast>
      </div>
    </div>
  \`
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["Default","Types"];export{e as Default,a as Types,b as __namedExportsOrder,h as default};
