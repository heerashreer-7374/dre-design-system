import{b as t}from"./iframe-hYZkyXvR.js";import"./popover-COV19c0p.js";import"./button-Du1k3Bj9.js";import"./input-uEA5vyW9.js";import{f as c}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import"./toggle-DkDf4XWs.js";import"./state-BaBndn7-.js";const A={title:"Assembled Components/Popover Group",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **💠 Popover Group** — composed Single / Multiple Field popovers from ${c("10125:322")}.`}}}},e={name:"Features / Single Field",render:()=>t`
    <dre-popover variant="single-field" heading="Enter choice" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      <dre-input slot="body" label="Name" placeholder="Add Value"></dre-input>
    </dre-popover>
  `},r={name:"Features / Multiple Field",render:()=>t`
    <dre-popover variant="multiple-field" heading="Criteria Builder" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      <dre-input slot="left" label="Field" placeholder="Add Value"></dre-input>
      <dre-input slot="right" label="Value" placeholder="Add Value"></dre-input>
    </dre-popover>
  `},o={name:"Features / Custom",render:()=>t`
    <dre-popover variant="single-field" heading="Custom" open inline .showToggle=${!1}>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Custom</dre-button>
      <dre-popover-slot slot="body" label="Custom body content"></dre-popover-slot>
      <div slot="footer">
        <dre-button hierarchy="primary" size="small">Done</dre-button>
      </div>
    </dre-popover>
  `};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Features / Single Field',
  render: () => html\`
    <dre-popover variant="single-field" heading="Enter choice" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      <dre-input slot="body" label="Name" placeholder="Add Value"></dre-input>
    </dre-popover>
  \`
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,a,s;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Features / Multiple Field',
  render: () => html\`
    <dre-popover variant="multiple-field" heading="Criteria Builder" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      <dre-input slot="left" label="Field" placeholder="Add Value"></dre-input>
      <dre-input slot="right" label="Value" placeholder="Add Value"></dre-input>
    </dre-popover>
  \`
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Custom',
  render: () => html\`
    <dre-popover variant="single-field" heading="Custom" open inline .showToggle=\${false}>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Custom</dre-button>
      <dre-popover-slot slot="body" label="Custom body content"></dre-popover-slot>
      <div slot="footer">
        <dre-button hierarchy="primary" size="small">Done</dre-button>
      </div>
    </dre-popover>
  \`
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const M=["SingleField","MultipleField","Custom"];export{o as Custom,r as MultipleField,e as SingleField,M as __namedExportsOrder,A as default};
