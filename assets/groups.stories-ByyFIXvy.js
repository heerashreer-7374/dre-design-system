import{b as t}from"./iframe-D98_Yrru.js";import"./named-groups-BD8Oe3hr.js";import"./checkbox-CCafw0jB.js";import"./preload-helper-BJOJroOC.js";import"./property-OxoNfEB1.js";import"./styles-CTqCNxHK.js";import"./toast-group-QXbuwjS6.js";const f={title:"Assembled Components/Checkbox Group",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **💠 Checkbox Group** (`12044:27604`) — title/description · Size · Orientation · item helper text."}}}},e={render:()=>t`
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var h,p,d;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Features / With helper text',
  render: () => html\`
    <dre-checkbox-group label="Checkbox group label" description="Select all that apply">
      <dre-checkbox helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox checked helper="Helper text for this option">Checkbox label</dre-checkbox>
      <dre-checkbox disabled helper="Helper text for this option">Checkbox label</dre-checkbox>
    </dre-checkbox-group>
  \`
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var i,b,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(k=c.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const y=["Default","WithHelpers","Horizontal","Small"];export{e as Default,r as Horizontal,c as Small,o as WithHelpers,y as __namedExportsOrder,f as default};
