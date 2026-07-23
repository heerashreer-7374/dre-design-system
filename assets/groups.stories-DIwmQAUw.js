import{b as t}from"./iframe-6U_684zG.js";import"./named-groups-D4qfYKGc.js";import"./checkbox-Cl37BOPC.js";import{f as u}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-Bwn_HGw6.js";import"./styles-Cq6U1Hym.js";import"./toast-group-_i7YcM_4.js";const F={title:"Assembled Components/Checkbox Group",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **💠 Checkbox Group** ${u("12044:27604")} — title/description · Size · Orientation · item helper text.`}}}},e={render:()=>t`
    <dre-checkbox-group
      label="Checkbox group label"
      description="Select all that apply"
      size="medium"
      orientation="vertical"
    >
      <dre-checkbox size="medium">Option one</dre-checkbox>
      <dre-checkbox size="medium" checked>Option two</dre-checkbox>
      <dre-checkbox size="medium">Option three</dre-checkbox>
    </dre-checkbox-group>
  `},o={name:"Features / With helper text",render:()=>t`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply">
      <dre-checkbox helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox checked helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox disabled helper="Helper text for this option">Checkbox label</dre-checkbox>
    </dre-checkbox-group>
  `},r={name:"Features / Horizontal",render:()=>t`
    <dre-checkbox-group
      label="Checkbox group label"
      description="Select all that apply"
      orientation="horizontal"
    >
      <dre-checkbox>Option one</dre-checkbox>
      <dre-checkbox checked>Option two</dre-checkbox>
      <dre-checkbox>Option three</dre-checkbox>
    </dre-checkbox-group>
  `},c={name:"Features / Small",render:()=>t`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply" size="small">
      <dre-checkbox size="small">Option one</dre-checkbox>
      <dre-checkbox size="small" checked>Option two</dre-checkbox>
      <dre-checkbox size="small">Option three</dre-checkbox>
    </dre-checkbox-group>
  `};var l,a,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <dre-checkbox-group
      label="Checkbox group label"
      description="Select all that apply"
      size="medium"
      orientation="vertical"
    >
      <dre-checkbox size="medium">Option one</dre-checkbox>
      <dre-checkbox size="medium" checked>Option two</dre-checkbox>
      <dre-checkbox size="medium">Option three</dre-checkbox>
    </dre-checkbox-group>
  \`
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var h,p,i;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Features / With helper text',
  render: () => html\`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply">
      <dre-checkbox helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox checked helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox disabled helper="Helper text for this option">Checkbox label</dre-checkbox>
    </dre-checkbox-group>
  \`
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,b,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Features / Horizontal',
  render: () => html\`
    <dre-checkbox-group
      label="Checkbox group label"
      description="Select all that apply"
      orientation="horizontal"
    >
      <dre-checkbox>Option one</dre-checkbox>
      <dre-checkbox checked>Option two</dre-checkbox>
      <dre-checkbox>Option three</dre-checkbox>
    </dre-checkbox-group>
  \`
}`,...(s=(b=r.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};var x,k,m;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Small',
  render: () => html\`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply" size="small">
      <dre-checkbox size="small">Option one</dre-checkbox>
      <dre-checkbox size="small" checked>Option two</dre-checkbox>
      <dre-checkbox size="small">Option three</dre-checkbox>
    </dre-checkbox-group>
  \`
}`,...(m=(k=c.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const w=["Default","WithHelpers","Horizontal","Small"];export{e as Default,r as Horizontal,c as Small,o as WithHelpers,w as __namedExportsOrder,F as default};
