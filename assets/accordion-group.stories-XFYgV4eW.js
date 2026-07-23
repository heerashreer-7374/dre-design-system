import{b as e}from"./iframe-BfQCnnR_.js";import"./accordion-D_hHKggc.js";import"./accordion-group-7wY-5vX3.js";import"./icon-CPlX_fkM.js";import"./preload-helper-Dp1pzeXC.js";import"./property-P_7FsvOw.js";import"./styles-Bjo1gRn0.js";const I={title:"Assembled Components/Accordion Group",component:"dre-accordion-group",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **💠 Accordion Group** (`12502:12082`) — Count 3/5/9 · gap 11 · width 202 · exclusive expand."}}}},a=r=>e`
  <div
    style="
      background:#f7f7f9;border:1px solid #e6e8ed;border-radius:6px;
      padding:6px;min-height:46px;box-sizing:border-box;font-size:12px;color:#13141a;
    "
  >
    ${r}
  </div>
`;function i(r,d=0){return e`
    <dre-accordion-group exclusive>
      ${r.map((v,t)=>e`
          <dre-accordion title=${v} ?expanded=${t===d}>
            <dre-icon slot="lead" name="settings" size="14"></dre-icon>
            ${t===d?e`${a("Item 1")}${a("Item 2")}${a("Item 3")}`:null}
          </dre-accordion>
          ${t<r.length-1?e`<div style="height:1px;background:#f3f3f6;width:100%;"></div>`:null}
        `)}
    </dre-accordion-group>
  `}const o={name:"Features / Count 3",render:()=>i(["Basics","Advanced","Permissions"])},n={name:"Features / Count 5",render:()=>i(["Basics","Advanced","Permissions","Integrations","Audit"])},s={name:"Features / Count 9",render:()=>i(["Basics","Advanced","Permissions","Integrations","Audit","Webhooks","Logs","Billing","Danger zone"])};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Features / Count 3',
  render: () => renderGroup(['Basics', 'Advanced', 'Permissions'])
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Count 5',
  render: () => renderGroup(['Basics', 'Advanced', 'Permissions', 'Integrations', 'Audit'])
}`,...(l=(g=n.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var C,A,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Features / Count 9',
  render: () => renderGroup(['Basics', 'Advanced', 'Permissions', 'Integrations', 'Audit', 'Webhooks', 'Logs', 'Billing', 'Danger zone'])
}`,...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};const P=["Count3","Count5","Count9"];export{o as Count3,n as Count5,s as Count9,P as __namedExportsOrder,I as default};
