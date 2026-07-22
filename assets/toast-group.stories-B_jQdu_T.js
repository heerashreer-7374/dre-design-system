import{b as s}from"./iframe-GA3ktVQc.js";import"./toast-group-tZsvLY-f.js";import"./toast-QOXOkE6m.js";import"./preload-helper-Dp1pzeXC.js";import"./property-rkDd5alT.js";import"./styles-_scQb5lY.js";import"./icon-Btw80okq.js";const A={title:"Assembled Components/Toast Group",component:"dre-toast-group",tags:["autodocs"],argTypes:{position:{control:"select",options:["top-right","bottom-right"]}},args:{position:"top-right"},parameters:{docs:{description:{component:"Figma **💠 Toast Group** (`12385:13230`) — pad 16 · gap 8 · width 357 · Position Top-Right/Bottom-Right."}}}},e={name:"Features / Count 2",render:c=>s`
    <dre-toast-group position=${c.position}>
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
    </dre-toast-group>
  `},t={name:"Features / Count 3",render:()=>s`
    <dre-toast-group position="top-right">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
      <dre-toast type="warning" message="Your quota is almost full"></dre-toast>
    </dre-toast-group>
  `},o={name:"Features / Bottom-Right",render:()=>s`
    <dre-toast-group position="bottom-right">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="error" message="Could not deploy the workflow"></dre-toast>
    </dre-toast-group>
  `};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Features / Count 2',
  render: args => html\`
    <dre-toast-group position=\${args.position}>
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
    </dre-toast-group>
  \`
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var p,d,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Count 3',
  render: () => html\`
    <dre-toast-group position="top-right">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="info" message="A new version is available"></dre-toast>
      <dre-toast type="warning" message="Your quota is almost full"></dre-toast>
    </dre-toast-group>
  \`
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Features / Bottom-Right',
  render: () => html\`
    <dre-toast-group position="bottom-right">
      <dre-toast type="success" message="All your changes have been saved"></dre-toast>
      <dre-toast type="error" message="Could not deploy the workflow"></dre-toast>
    </dre-toast-group>
  \`
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const C=["Default","Count3","BottomRight"];export{o as BottomRight,t as Count3,e as Default,C as __namedExportsOrder,A as default};
