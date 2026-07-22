import{b as a}from"./iframe-D98_Yrru.js";import"./named-groups-BD8Oe3hr.js";import"./radio-_d-uOF6b.js";import"./preload-helper-BJOJroOC.js";import"./property-OxoNfEB1.js";import"./styles-CTqCNxHK.js";import"./toast-group-QXbuwjS6.js";const H={title:"Assembled Components/Radio Button Group",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **💠 Radio Button Group** (`12045:28528`) — title/description · Size · Orientation."}}}},e={render:()=>a`
    <dre-radio-group label="Radio group label" description="Select one option">
      <dre-radio name="g1" value="a" checked>Option one</dre-radio>
      <dre-radio name="g1" value="b">Option two</dre-radio>
      <dre-radio name="g1" value="c">Option three</dre-radio>
    </dre-radio-group>
  `},r={name:"Features / With helper text",render:()=>a`
    <dre-radio-group label="Radio group label" description="Select one option">
      <dre-radio name="g2" value="a" checked helper="Helper text for this option">Radio label</dre-radio>
      <dre-radio name="g2" value="b" helper="Helper text for this option">Radio label</dre-radio>
      <dre-radio name="g2" value="c" helper="Helper text for this option">Radio label</dre-radio>
    </dre-radio-group>
  `},o={name:"Features / Horizontal",render:()=>a`
    <dre-radio-group label="Radio group label" description="Select one option" orientation="horizontal">
      <dre-radio name="g3" value="a" checked>Option one</dre-radio>
      <dre-radio name="g3" value="b">Option two</dre-radio>
      <dre-radio name="g3" value="c">Option three</dre-radio>
    </dre-radio-group>
  `};var d,i,t;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <dre-radio-group label="Radio group label" description="Select one option">
      <dre-radio name="g1" value="a" checked>Option one</dre-radio>
      <dre-radio name="g1" value="b">Option two</dre-radio>
      <dre-radio name="g1" value="c">Option three</dre-radio>
    </dre-radio-group>
  \`
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Features / With helper text',
  render: () => html\`
    <dre-radio-group label="Radio group label" description="Select one option">
      <dre-radio name="g2" value="a" checked helper="Helper text for this option">Radio label</dre-radio>
      <dre-radio name="g2" value="b" helper="Helper text for this option">Radio label</dre-radio>
      <dre-radio name="g2" value="c" helper="Helper text for this option">Radio label</dre-radio>
    </dre-radio-group>
  \`
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var s,c,u;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Features / Horizontal',
  render: () => html\`
    <dre-radio-group label="Radio group label" description="Select one option" orientation="horizontal">
      <dre-radio name="g3" value="a" checked>Option one</dre-radio>
      <dre-radio name="g3" value="b">Option two</dre-radio>
      <dre-radio name="g3" value="c">Option three</dre-radio>
    </dre-radio-group>
  \`
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const f=["Default","WithHelpers","Horizontal"];export{e as Default,o as Horizontal,r as WithHelpers,f as __namedExportsOrder,H as default};
