import{b as i}from"./iframe-BfQCnnR_.js";import"./top-bar-Ix7taX5J.js";import"./button-Ds7rJm53.js";import"./badge-BaSEcKqf.js";import"./preload-helper-Dp1pzeXC.js";import"./property-P_7FsvOw.js";import"./styles-Bjo1gRn0.js";import"./icon-CPlX_fkM.js";const f={title:"Patterns & Layouts/Top Bar",component:"dre-top-bar",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Maps to Figma Top Bar (`12422:16587`) — file tabs + trailing actions."}}}},e={render:()=>i`
    <dre-top-bar .tabs=${[{id:"1",label:"code file.js",active:!0}]}>
      <dre-badge slot="trailing" tone="brand">Settings</dre-badge>
    </dre-top-bar>
  `},r={name:"Features / Many tabs",render:()=>i`
    <dre-top-bar
      .tabs=${[{id:"1",label:"main.dg",active:!0},{id:"2",label:"helpers.dg"},{id:"3",label:"config.json"},{id:"4",label:"README.md"}]}
    >
      <span slot="leading" style="font-size:12px;color:var(--dre-color-text-subtle);">DRE</span>
      <dre-button slot="trailing" hierarchy="ghost" size="xsmall">Share</dre-button>
    </dre-top-bar>
  `};var a,t,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <dre-top-bar .tabs=\${[{
    id: '1',
    label: 'code file.js',
    active: true
  }]}>
      <dre-badge slot="trailing" tone="brand">Settings</dre-badge>
    </dre-top-bar>
  \`
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Features / Many tabs',
  render: () => html\`
    <dre-top-bar
      .tabs=\${[{
    id: '1',
    label: 'main.dg',
    active: true
  }, {
    id: '2',
    label: 'helpers.dg'
  }, {
    id: '3',
    label: 'config.json'
  }, {
    id: '4',
    label: 'README.md'
  }]}
    >
      <span slot="leading" style="font-size:12px;color:var(--dre-color-text-subtle);">DRE</span>
      <dre-button slot="trailing" hierarchy="ghost" size="xsmall">Share</dre-button>
    </dre-top-bar>
  \`
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const y=["OneTab","ManyTabs"];export{r as ManyTabs,e as OneTab,y as __namedExportsOrder,f as default};
