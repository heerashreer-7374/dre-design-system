import{b as g}from"./iframe-hYZkyXvR.js";import"./named-groups-BOCT0Dx4.js";import"./toggle-DkDf4XWs.js";import{f as T}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";import"./toast-group-DYCVCKe9.js";import"./state-BaBndn7-.js";import"./icon-67h1dq3i.js";const D={title:"Assembled Components/Toggle Group",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **💠 Toggle Group** ${T("12045:29470")} — title/description · Size · Orientation.`}}}},e={render:()=>g`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below">
      <dre-toggle checked>Option one</dre-toggle>
      <dre-toggle>Option two</dre-toggle>
      <dre-toggle>Option three</dre-toggle>
    </dre-toggle-group>
  `},o={name:"Features / With helper text",render:()=>g`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below">
      <dre-toggle checked helper="Helper text for this toggle">Toggle label</dre-toggle>
      <dre-toggle helper="Helper text for this toggle">Toggle label</dre-toggle>
      <dre-toggle helper="Helper text for this toggle">Toggle label</dre-toggle>
    </dre-toggle-group>
  `},r={name:"Features / Horizontal",render:()=>g`
    <dre-toggle-group
      label="Toggle group label"
      description="Toggle the options below"
      orientation="horizontal"
    >
      <dre-toggle checked>Option one</dre-toggle>
      <dre-toggle>Option two</dre-toggle>
      <dre-toggle>Option three</dre-toggle>
    </dre-toggle-group>
  `},t={name:"Features / Small",render:()=>g`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below" size="small">
      <dre-toggle size="small" checked>Option one</dre-toggle>
      <dre-toggle size="small">Option two</dre-toggle>
      <dre-toggle size="small">Option three</dre-toggle>
    </dre-toggle-group>
  `};var l,n,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below">
      <dre-toggle checked>Option one</dre-toggle>
      <dre-toggle>Option two</dre-toggle>
      <dre-toggle>Option three</dre-toggle>
    </dre-toggle-group>
  \`
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,a,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Features / With helper text',
  render: () => html\`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below">
      <dre-toggle checked helper="Helper text for this toggle">Toggle label</dre-toggle>
      <dre-toggle helper="Helper text for this toggle">Toggle label</dre-toggle>
      <dre-toggle helper="Helper text for this toggle">Toggle label</dre-toggle>
    </dre-toggle-group>
  \`
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Features / Horizontal',
  render: () => html\`
    <dre-toggle-group
      label="Toggle group label"
      description="Toggle the options below"
      orientation="horizontal"
    >
      <dre-toggle checked>Option one</dre-toggle>
      <dre-toggle>Option two</dre-toggle>
      <dre-toggle>Option three</dre-toggle>
    </dre-toggle-group>
  \`
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / Small',
  render: () => html\`
    <dre-toggle-group label="Toggle group label" description="Toggle the options below" size="small">
      <dre-toggle size="small" checked>Option one</dre-toggle>
      <dre-toggle size="small">Option two</dre-toggle>
      <dre-toggle size="small">Option three</dre-toggle>
    </dre-toggle-group>
  \`
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const G=["Default","WithHelpers","Horizontal","Small"];export{e as Default,r as Horizontal,t as Small,o as WithHelpers,G as __namedExportsOrder,D as default};
