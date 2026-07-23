import{b as i}from"./iframe-hYZkyXvR.js";import"./modal-BjdQla8Q.js";import"./button-Du1k3Bj9.js";import{f as l}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";const g={title:"Single Components/Modal",component:"dre-modal",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **⭐ Modal** Basic Dialog ${l("12306:9560")} — width 428 · radius 8 · pad 12 · divider \`#e6e8ed\`.`}}}},e={render:()=>i`
    <dre-button
      hierarchy="primary"
      @dre-click=${d=>{const o=d.currentTarget.parentElement,r=o==null?void 0:o.querySelector("dre-modal");r&&(r.open=!0)}}
      >Open modal</dre-button
    >
    <dre-modal heading="Confirm publish" open>
      Publishing will make this workflow available to end users. Continue?
    </dre-modal>
  `};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <dre-button
      hierarchy="primary"
      @dre-click=\${(e: Event) => {
    const host = (e.currentTarget as HTMLElement).parentElement;
    const modal = host?.querySelector('dre-modal') as HTMLElement & {
      open: boolean;
    };
    if (modal) modal.open = true;
  }}
      >Open modal</dre-button
    >
    <dre-modal heading="Confirm publish" open>
      Publishing will make this workflow available to end users. Continue?
    </dre-modal>
  \`
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,g as default};
