import{b as t}from"./iframe-CxxUV_ql.js";import"./popover-CTOB-o_v.js";import"./button-BJBZnisn.js";import"./input-BY92EUIc.js";import"./icon-DJMhDlAD.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BAmm2Bkg.js";import"./styles-DnIXmjyS.js";const f={title:"Assembled Components/Popover Group",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **💠 Popover Group** — Single Field (500) · Multiple Field · Custom compositions."}}}},e={name:"Features / Single Field",render:()=>t`
    <dre-popover heading="Single field" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      <dre-icon slot="icon" name="edit" size="14"></dre-icon>
      <dre-input label="Name" placeholder="Add Value"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Save</dre-button>
      </div>
    </dre-popover>
  `},r={name:"Features / Multiple Field",render:()=>t`
    <dre-popover heading="Multiple fields" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      <dre-icon slot="icon" name="settings" size="14"></dre-icon>
      <dre-input label="Key" placeholder="Add Value"></dre-input>
      <dre-input label="Value" placeholder="Add Value"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Apply</dre-button>
      </div>
    </dre-popover>
  `},o={name:"Features / Custom",render:()=>t`
    <dre-popover heading="Custom" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Custom</dre-button>
      <div style="min-height:120px;border:1px dashed #adb5c7;background:#f5f5fa;border-radius:4px;padding:12px;">
        Custom body content
      </div>
      <div slot="footer">
        <dre-button hierarchy="primary" size="xsmall">Done</dre-button>
      </div>
    </dre-popover>
  `};var n,d,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Features / Single Field',
  render: () => html\`
    <dre-popover heading="Single field" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      <dre-icon slot="icon" name="edit" size="14"></dre-icon>
      <dre-input label="Name" placeholder="Add Value"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Save</dre-button>
      </div>
    </dre-popover>
  \`
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var a,l,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Features / Multiple Field',
  render: () => html\`
    <dre-popover heading="Multiple fields" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      <dre-icon slot="icon" name="settings" size="14"></dre-icon>
      <dre-input label="Key" placeholder="Add Value"></dre-input>
      <dre-input label="Value" placeholder="Add Value"></dre-input>
      <div slot="footer">
        <dre-button hierarchy="secondary" size="xsmall">Cancel</dre-button>
        <dre-button hierarchy="primary" size="xsmall">Apply</dre-button>
      </div>
    </dre-popover>
  \`
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Custom',
  render: () => html\`
    <dre-popover heading="Custom" open>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Custom</dre-button>
      <div style="min-height:120px;border:1px dashed #adb5c7;background:#f5f5fa;border-radius:4px;padding:12px;">
        Custom body content
      </div>
      <div slot="footer">
        <dre-button hierarchy="primary" size="xsmall">Done</dre-button>
      </div>
    </dre-popover>
  \`
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const F=["SingleField","MultipleField","Custom"];export{o as Custom,r as MultipleField,e as SingleField,F as __namedExportsOrder,f as default};
