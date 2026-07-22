import{b as n}from"./iframe-GA3ktVQc.js";import"./dropdown-MW9v-uEQ.js";import"./preload-helper-Dp1pzeXC.js";import"./property-rkDd5alT.js";import"./styles-_scQb5lY.js";const x={title:"Single Components/Dropdown",component:"dre-dropdown",tags:["autodocs"],parameters:{docs:{description:{component:"Maps to Figma Input Dropdown (`10280:148`), Dropdown menu (`10289:952`), and `_Dropdown list item` (`10261:398`)."}}}},e={render:()=>n`
    <dre-dropdown label="Field type" placeholder="Choose type" menu-title="Show field type">
      <dre-dropdown-item label="Text"></dre-dropdown-item>
      <dre-dropdown-item label="Number"></dre-dropdown-item>
      <dre-dropdown-item label="Date" supporting-text="ISO or locale format"></dre-dropdown-item>
      <dre-dropdown-item label="Boolean" disabled></dre-dropdown-item>
    </dre-dropdown>
  `},o={name:"Features / Single with radio",render:()=>n`
    <dre-dropdown label="Priority" type="single" value="Medium" display-value="Medium">
      <dre-dropdown-item control="radio" label="Low" value="Low"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="Medium" value="Medium" selected></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="High" value="High"></dre-dropdown-item>
    </dre-dropdown>
  `},r={name:"Features / Multiple with checkbox",render:()=>n`
    <dre-dropdown label="Channels" type="multiple" menu-title="Notify via">
      <dre-dropdown-item control="checkbox" label="Email" value="email"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="SMS" value="sms"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="In-app" value="in-app"></dre-dropdown-item>
    </dre-dropdown>
  `},d={name:"Features / Search",render:()=>n`
    <dre-dropdown variant="search" placeholder="Search actions…" label="Action">
      <dre-dropdown-item label="Send mail"></dre-dropdown-item>
      <dre-dropdown-item label="Create record"></dre-dropdown-item>
      <dre-dropdown-item label="Invoke function"></dre-dropdown-item>
    </dre-dropdown>
  `};var t,a,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <dre-dropdown label="Field type" placeholder="Choose type" menu-title="Show field type">
      <dre-dropdown-item label="Text"></dre-dropdown-item>
      <dre-dropdown-item label="Number"></dre-dropdown-item>
      <dre-dropdown-item label="Date" supporting-text="ISO or locale format"></dre-dropdown-item>
      <dre-dropdown-item label="Boolean" disabled></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,p,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Features / Single with radio',
  render: () => html\`
    <dre-dropdown label="Priority" type="single" value="Medium" display-value="Medium">
      <dre-dropdown-item control="radio" label="Low" value="Low"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="Medium" value="Medium" selected></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="High" value="High"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,w,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Features / Multiple with checkbox',
  render: () => html\`
    <dre-dropdown label="Channels" type="multiple" menu-title="Notify via">
      <dre-dropdown-item control="checkbox" label="Email" value="email"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="SMS" value="sms"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="In-app" value="in-app"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(s=(w=r.parameters)==null?void 0:w.docs)==null?void 0:s.source}}};var u,b,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / Search',
  render: () => html\`
    <dre-dropdown variant="search" placeholder="Search actions…" label="Action">
      <dre-dropdown-item label="Send mail"></dre-dropdown-item>
      <dre-dropdown-item label="Create record"></dre-dropdown-item>
      <dre-dropdown-item label="Invoke function"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const f=["Default","WithRadio","Multiple","SearchVariant"];export{e as Default,r as Multiple,d as SearchVariant,o as WithRadio,f as __namedExportsOrder,x as default};
