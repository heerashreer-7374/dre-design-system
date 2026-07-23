import{b as n}from"./iframe-6U_684zG.js";import"./dropdown-toPy_G2z.js";import{f as t}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-Bwn_HGw6.js";import"./styles-Cq6U1Hym.js";const k={title:"Single Components/Dropdown",component:"dre-dropdown",tags:["autodocs"],parameters:{docs:{description:{component:`Maps to Figma Input Dropdown ${t("10280:148")}, Dropdown menu ${t("10289:952")}, and \`_Dropdown list item\` ${t("10261:398")}.`}}}},e={render:()=>n`
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
  `};var a,l,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <dre-dropdown label="Field type" placeholder="Choose type" menu-title="Show field type">
      <dre-dropdown-item label="Text"></dre-dropdown-item>
      <dre-dropdown-item label="Number"></dre-dropdown-item>
      <dre-dropdown-item label="Date" supporting-text="ISO or locale format"></dre-dropdown-item>
      <dre-dropdown-item label="Boolean" disabled></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Single with radio',
  render: () => html\`
    <dre-dropdown label="Priority" type="single" value="Medium" display-value="Medium">
      <dre-dropdown-item control="radio" label="Low" value="Low"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="Medium" value="Medium" selected></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="High" value="High"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var w,s,u;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Features / Multiple with checkbox',
  render: () => html\`
    <dre-dropdown label="Channels" type="multiple" menu-title="Notify via">
      <dre-dropdown-item control="checkbox" label="Email" value="email"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="SMS" value="sms"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="In-app" value="in-app"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(u=(s=r.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var b,h,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Features / Search',
  render: () => html\`
    <dre-dropdown variant="search" placeholder="Search actions…" label="Action">
      <dre-dropdown-item label="Send mail"></dre-dropdown-item>
      <dre-dropdown-item label="Create record"></dre-dropdown-item>
      <dre-dropdown-item label="Invoke function"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const D=["Default","WithRadio","Multiple","SearchVariant"];export{e as Default,r as Multiple,d as SearchVariant,o as WithRadio,D as __namedExportsOrder,k as default};
