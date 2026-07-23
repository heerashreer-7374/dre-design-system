import{b as a}from"./iframe-hYZkyXvR.js";import"./input-uEA5vyW9.js";import"./icon-67h1dq3i.js";import{f as y}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";const L={title:"Single Components/Input Field",component:"dre-input",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},appearance:{control:"select",options:["light","dark"]},variant:{control:"select",options:["default","leading-dropdown","trailing-dropdown"]},disabled:{control:"boolean"},invalid:{control:"boolean"},destructive:{control:"boolean"}},args:{size:"medium",appearance:"light",variant:"default",label:"Email",placeholder:"Add Value",hint:"",disabled:!1,invalid:!1,destructive:!1},parameters:{docs:{description:{component:`Figma **⭐ Input Field** ${y("10171:179")} — Default · Leading/Trailing Dropdown · Small 28 · Medium 34 · Light/Dark · Destructive.`}}}},d={name:"Features / Default",render:e=>a`
    <dre-input
      size=${e.size}
      appearance=${e.appearance}
      variant=${e.variant}
      label=${e.label}
      placeholder=${e.placeholder}
      hint=${e.hint}
      ?disabled=${e.disabled}
      ?invalid=${e.invalid}
      ?destructive=${e.destructive}
    ></dre-input>
  `},r={name:"Features / Sizes",render:()=>a`
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <dre-input size="small" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input size="medium" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
    </div>
  `},l={name:"Features / States",render:()=>a`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input label="Email" placeholder="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" value="filled@dre.io"></dre-input>
      <dre-input label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" disabled></dre-input>
      <dre-input label="Email" placeholder="Add Value" required></dre-input>
    </div>
  `},n={name:"Features / Icons",render:()=>a`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input label="Email" placeholder="Add Value">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Email" placeholder="Add Value">
        <dre-icon slot="label-icon" name="chevron-down" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Email" placeholder="Add Value" hint="Add Value">
        <dre-icon slot="leading" name="search" size="14"></dre-icon>
        <dre-icon slot="label-icon" name="chevron-down" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Search" type="search" placeholder="Add Value">
        <dre-icon slot="trailing" name="search" size="14"></dre-icon>
      </dre-input>
    </div>
  `},i={name:"Features / Dropdown Types",render:()=>a`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input
        variant="leading-dropdown"
        prefix="USD"
        placeholder="Add Value"
        label="Amount"
      ></dre-input>
      <dre-input variant="trailing-dropdown" placeholder="Add Value" label="Select"></dre-input>
      <dre-input
        variant="leading-dropdown"
        prefix="USD"
        placeholder="Add Value"
        label="Amount"
        hint="Add Value"
      ></dre-input>
      <dre-input
        variant="trailing-dropdown"
        placeholder="Add Value"
        label="Select"
        destructive
        hint="Add Value"
      >
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
    </div>
  `},t={name:"Features / Dark",parameters:{backgrounds:{default:"dark"}},render:()=>a`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;padding:16px;background:#1b1b1e;">
      <dre-input appearance="dark" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input appearance="dark" label="Email" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input appearance="dark" label="Email" placeholder="Add Value">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
      <dre-input appearance="dark" variant="leading-dropdown" prefix="USD" label="Amount" placeholder="Add Value"></dre-input>
    </div>
  `};var p,o,s;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: args => html\`
    <dre-input
      size=\${args.size}
      appearance=\${args.appearance}
      variant=\${args.variant}
      label=\${args.label}
      placeholder=\${args.placeholder}
      hint=\${args.hint}
      ?disabled=\${args.disabled}
      ?invalid=\${args.invalid}
      ?destructive=\${args.destructive}
    ></dre-input>
  \`
}`,...(s=(o=d.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / Sizes',
  render: () => html\`
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <dre-input size="small" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input size="medium" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
    </div>
  \`
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,g,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Features / States',
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input label="Email" placeholder="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" value="filled@dre.io"></dre-input>
      <dre-input label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input label="Email" placeholder="Add Value" disabled></dre-input>
      <dre-input label="Email" placeholder="Add Value" required></dre-input>
    </div>
  \`
}`,...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var A,v,V;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Features / Icons',
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input label="Email" placeholder="Add Value">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Email" placeholder="Add Value">
        <dre-icon slot="label-icon" name="chevron-down" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Email" placeholder="Add Value" hint="Add Value">
        <dre-icon slot="leading" name="search" size="14"></dre-icon>
        <dre-icon slot="label-icon" name="chevron-down" size="14"></dre-icon>
      </dre-input>
      <dre-input label="Search" type="search" placeholder="Add Value">
        <dre-icon slot="trailing" name="search" size="14"></dre-icon>
      </dre-input>
    </div>
  \`
}`,...(V=(v=n.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var x,E,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Dropdown Types',
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;">
      <dre-input
        variant="leading-dropdown"
        prefix="USD"
        placeholder="Add Value"
        label="Amount"
      ></dre-input>
      <dre-input variant="trailing-dropdown" placeholder="Add Value" label="Select"></dre-input>
      <dre-input
        variant="leading-dropdown"
        prefix="USD"
        placeholder="Add Value"
        label="Amount"
        hint="Add Value"
      ></dre-input>
      <dre-input
        variant="trailing-dropdown"
        placeholder="Add Value"
        label="Select"
        destructive
        hint="Add Value"
      >
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
    </div>
  \`
}`,...(f=(E=i.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var z,S,k;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Features / Dark',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(2,280px);gap:24px;padding:16px;background:#1b1b1e;">
      <dre-input appearance="dark" label="Email" placeholder="Add Value" hint="Add Value"></dre-input>
      <dre-input appearance="dark" label="Email" placeholder="Add Value" destructive hint="Add Value"></dre-input>
      <dre-input appearance="dark" label="Email" placeholder="Add Value">
        <dre-icon slot="leading" name="sparkles" size="14"></dre-icon>
      </dre-input>
      <dre-input appearance="dark" variant="leading-dropdown" prefix="USD" label="Amount" placeholder="Add Value"></dre-input>
    </div>
  \`
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const q=["Default","Sizes","States","WithIcons","DropdownTypes","Dark"];export{t as Dark,d as Default,i as DropdownTypes,r as Sizes,l as States,n as WithIcons,q as __namedExportsOrder,L as default};
