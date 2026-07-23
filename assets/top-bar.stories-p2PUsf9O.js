import{b as a}from"./iframe-CxxUV_ql.js";import"./top-bar-DLvVDlmr.js";import{f as m}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BAmm2Bkg.js";import"./styles-DnIXmjyS.js";import"./icon-DJMhDlAD.js";const M={title:"Patterns & Layouts/Top Bar",component:"dre-top-bar",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`Maps to Figma Top Bar ${m("12422:16587")} — Deluge logo, file tabs, Settings + More. Light appearance; One / Two / Many tabs.`}}}},e={name:"One Tab",render:()=>a`
    <dre-top-bar
      .tabs=${[{id:"settings",label:"Settings",active:!0,icon:"settings"}]}
    ></dre-top-bar>
  `},n={name:"Two Tabs",render:()=>a`
    <dre-top-bar
      .tabs=${[{id:"file",label:"code file.js",icon:"code"},{id:"settings",label:"Settings",active:!0,icon:"settings"}]}
    ></dre-top-bar>
  `},t={name:"Many Tabs",render:()=>a`
    <dre-top-bar
      .tabs=${[{id:"1",label:"code file.js",icon:"code"},{id:"2",label:"function.dg",icon:"code"},{id:"3",label:"workflow.dg",icon:"code"},{id:"settings",label:"Settings",active:!0,icon:"settings"}]}
    ></dre-top-bar>
  `};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'One Tab',
  render: () => html\`
    <dre-top-bar
      .tabs=\${[{
    id: 'settings',
    label: 'Settings',
    active: true,
    icon: 'settings'
  }]}
    ></dre-top-bar>
  \`
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Two Tabs',
  render: () => html\`
    <dre-top-bar
      .tabs=\${[{
    id: 'file',
    label: 'code file.js',
    icon: 'code'
  }, {
    id: 'settings',
    label: 'Settings',
    active: true,
    icon: 'settings'
  }]}
    ></dre-top-bar>
  \`
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,b,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Many Tabs',
  render: () => html\`
    <dre-top-bar
      .tabs=\${[{
    id: '1',
    label: 'code file.js',
    icon: 'code'
  }, {
    id: '2',
    label: 'function.dg',
    icon: 'code'
  }, {
    id: '3',
    label: 'workflow.dg',
    icon: 'code'
  }, {
    id: 'settings',
    label: 'Settings',
    active: true,
    icon: 'settings'
  }]}
    ></dre-top-bar>
  \`
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};const $=["OneTab","TwoTabs","ManyTabs"];export{t as ManyTabs,e as OneTab,n as TwoTabs,$ as __namedExportsOrder,M as default};
