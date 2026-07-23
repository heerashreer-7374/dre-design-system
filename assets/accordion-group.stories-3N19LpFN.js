import{b as n}from"./iframe-hYZkyXvR.js";import"./block-item-DsGoeFwW.js";import"./accordion-group-CHV1697V.js";import"./accordion-panel-EruGFoIK.js";import"./icon-67h1dq3i.js";import{f as F}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";const w={title:"Assembled Components/Accordion Group",component:"dre-accordion-group",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **💠 Accordion Group** ${F("12502:11657")} — width 202 · dividers · exclusive expand. Panel chrome via \`dre-accordion-panel\`.`}}}},f=n`
  <dre-block-item label="Set Field Value" description="assign values to fields" icon="cioption"></dre-block-item>
  <dre-block-item label="Set Field Value" description="assign values to fields" icon="cioption"></dre-block-item>
  <dre-block-item label="Set Field Value" description="assign values to fields" icon="cioption"></dre-block-item>
`;function s(A,t=0){return n`
    <dre-accordion-panel title="Actions">
      ${A.map((g,a)=>n`
          <dre-accordion title=${g} ?expanded=${a===t}>
            <dre-icon slot="lead" name="code-1" size="14"></dre-icon>
            ${a===t?f:null}
          </dre-accordion>
        `)}
    </dre-accordion-panel>
  `}const e={name:"Features / Count 3",render:()=>s(["Basics","Advanced","Permissions"])},o={name:"Features / Count 5",render:()=>s(["Basics","Advanced","Permissions","Integrations","Audit"])},r={name:"Features / Count 9",render:()=>s(["Basics","Ai Task","Flow Control","Form Control","Subform Action","Notification","Debug","Data Access","Portal User Task"])};var i,c,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Features / Count 3',
  render: () => renderGroup(['Basics', 'Advanced', 'Permissions'])
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Features / Count 5',
  render: () => renderGroup(['Basics', 'Advanced', 'Permissions', 'Integrations', 'Audit'])
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,C,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Count 9',
  render: () => renderGroup(['Basics', 'Ai Task', 'Flow Control', 'Form Control', 'Subform Action', 'Notification', 'Debug', 'Data Access', 'Portal User Task'])
}`,...(b=(C=r.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const x=["Count3","Count5","Count9"];export{e as Count3,o as Count5,r as Count9,x as __namedExportsOrder,w as default};
