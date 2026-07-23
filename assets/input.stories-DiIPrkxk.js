import{b as i}from"./iframe-CxxUV_ql.js";import"./input-BY92EUIc.js";import"./icon-DJMhDlAD.js";import{f as h}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BAmm2Bkg.js";import"./styles-DnIXmjyS.js";const A={title:"Single Components/Input Field",component:"dre-input",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},disabled:{control:"boolean"},invalid:{control:"boolean"},destructive:{control:"boolean"}},args:{size:"medium",label:"Email",placeholder:"Add Value",hint:"",disabled:!1,invalid:!1,destructive:!1},parameters:{docs:{description:{component:`Figma **⭐ Input Field** ${h("10209:416")} — Small h24 · Medium h34 · radius 4 · stroke \`#bdc0cf\`.`}}}},l={render:e=>i`
    <dre-input
      size=${e.size}
      label=${e.label}
      placeholder=${e.placeholder}
      hint=${e.hint}
      ?disabled=${e.disabled}
      ?invalid=${e.invalid}
      ?destructive=${e.destructive}
    ></dre-input>
  `},d={name:"Features / Sizes",render:()=>i`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dre-input size="small" label="Small" placeholder="Add Value"></dre-input>
      <dre-input size="medium" label="Medium" placeholder="Add Value"></dre-input>
    </div>
  `},a={name:"Features / States",render:()=>i`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dre-input label="Default" placeholder="Add Value"></dre-input>
      <dre-input label="With hint" placeholder="Add Value" hint="Helper text"></dre-input>
      <dre-input label="Destructive" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input label="Disabled" placeholder="Add Value" disabled></dre-input>
      <dre-input label="Leading icon" placeholder="Search">
        <dre-icon slot="leading" name="search" size="14"></dre-icon>
      </dre-input>
    </div>
  `};var r,t,n;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => html\`
    <dre-input
      size=\${args.size}
      label=\${args.label}
      placeholder=\${args.placeholder}
      hint=\${args.hint}
      ?disabled=\${args.disabled}
      ?invalid=\${args.invalid}
      ?destructive=\${args.destructive}
    ></dre-input>
  \`
}`,...(n=(t=l.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var s,o,p;d.parameters={...d.parameters,docs:{...(s=d.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dre-input size="small" label="Small" placeholder="Add Value"></dre-input>
      <dre-input size="medium" label="Medium" placeholder="Add Value"></dre-input>
    </div>
  \`
}`,...(p=(o=d.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var u,c,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;">
      <dre-input label="Default" placeholder="Add Value"></dre-input>
      <dre-input label="With hint" placeholder="Add Value" hint="Helper text"></dre-input>
      <dre-input label="Destructive" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input label="Disabled" placeholder="Add Value" disabled></dre-input>
      <dre-input label="Leading icon" placeholder="Search">
        <dre-icon slot="leading" name="search" size="14"></dre-icon>
      </dre-input>
    </div>
  \`
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const V=["Default","Sizes","States"];export{l as Default,d as Sizes,a as States,V as __namedExportsOrder,A as default};
