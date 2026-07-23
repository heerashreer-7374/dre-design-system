import{b as t}from"./iframe-BIGdDvVp.js";import"./modal-C-FT-roQ.js";import"./button-CDCO90l1.js";import"./input-DHhTI07V.js";import"./preload-helper-Dp1pzeXC.js";import"./property-_7csjOJC.js";import"./styles-DjfhIa7o.js";import"./icon-BKdMMQwy.js";const k={title:"Assembled Components/Modal Group",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **💠 Modal Group** — Basic Dialog (428×150) · Form Dialog · Custom Dialog via `dre-modal`."}}}},i=(e,y)=>{const d=e.currentTarget.parentElement,l=d==null?void 0:d.querySelector(y);l&&(l.open=!0)},r={name:"Features / Basic Dialog",render:()=>t`
    <dre-button hierarchy="primary" @dre-click=${e=>i(e,"dre-modal")}
      >Open basic dialog</dre-button
    >
    <dre-modal heading="Title" open>
      Are you sure you want to change the action. The configuration cannot be undone.
    </dre-modal>
  `},o={name:"Features / Form Dialog",render:()=>t`
    <dre-button hierarchy="primary" @dre-click=${e=>i(e,"dre-modal")}
      >Open form dialog</dre-button
    >
    <dre-modal heading="Title">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-input label="Name" placeholder="Add Value"></dre-input>
        <dre-input label="Description" placeholder="Add Value"></dre-input>
        <dre-input label="Key" placeholder="Add Value"></dre-input>
      </div>
    </dre-modal>
  `},a={name:"Features / Custom Dialog",render:()=>t`
    <dre-button hierarchy="primary" @dre-click=${e=>i(e,"dre-modal")}
      >Open custom dialog</dre-button
    >
    <dre-modal heading="Title">
      <div style="min-height:200px;border:1px dashed #adb5c7;background:#f5f5fa;border-radius:4px;padding:16px;color:#5d6481;">
        Custom body slot
      </div>
      <div slot="footer">
        <dre-button hierarchy="secondary">Cancel</dre-button>
        <dre-button hierarchy="primary">Save</dre-button>
      </div>
    </dre-modal>
  `};var n,c,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Features / Basic Dialog',
  render: () => html\`
    <dre-button hierarchy="primary" @dre-click=\${(e: Event) => openModal(e, 'dre-modal')}
      >Open basic dialog</dre-button
    >
    <dre-modal heading="Title" open>
      Are you sure you want to change the action. The configuration cannot be undone.
    </dre-modal>
  \`
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,s,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Form Dialog',
  render: () => html\`
    <dre-button hierarchy="primary" @dre-click=\${(e: Event) => openModal(e, 'dre-modal')}
      >Open form dialog</dre-button
    >
    <dre-modal heading="Title">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-input label="Name" placeholder="Add Value"></dre-input>
        <dre-input label="Description" placeholder="Add Value"></dre-input>
        <dre-input label="Key" placeholder="Add Value"></dre-input>
      </div>
    </dre-modal>
  \`
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var h,g,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Features / Custom Dialog',
  render: () => html\`
    <dre-button hierarchy="primary" @dre-click=\${(e: Event) => openModal(e, 'dre-modal')}
      >Open custom dialog</dre-button
    >
    <dre-modal heading="Title">
      <div style="min-height:200px;border:1px dashed #adb5c7;background:#f5f5fa;border-radius:4px;padding:16px;color:#5d6481;">
        Custom body slot
      </div>
      <div slot="footer">
        <dre-button hierarchy="secondary">Cancel</dre-button>
        <dre-button hierarchy="primary">Save</dre-button>
      </div>
    </dre-modal>
  \`
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const O=["BasicDialog","FormDialog","CustomDialog"];export{r as BasicDialog,a as CustomDialog,o as FormDialog,O as __namedExportsOrder,k as default};
