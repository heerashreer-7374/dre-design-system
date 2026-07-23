import{b as d}from"./iframe-hYZkyXvR.js";import"./dropdown-BMEBHjoU.js";import"./icon-67h1dq3i.js";import{f as S}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./state-BaBndn7-.js";import"./styles-BGRCfbQF.js";const I={title:"Single Components/Dropdown",component:"dre-dropdown",tags:["autodocs"],parameters:{docs:{description:{component:`Figma **⭐ Dropdown** ${S("10219:552")} — Input Dropdown · Dropdown Menu · List Item.`}}}},o=[{label:"Opt 1",value:"opt-1"},{label:"Opt 2",value:"opt-2"},{label:"Opt 3",value:"opt-3"},{label:"Opt 4",value:"opt-4"},{label:"Opt 5",value:"opt-5"},{label:"Opt 6",value:"opt-6"}],r={name:"Features / Input Dropdown",render:()=>d`
    <div style="display:flex;gap:48px;align-items:flex-start;flex-wrap:wrap;">
      <dre-dropdown label="Title" placeholder="Add Value"></dre-dropdown>
      <dre-dropdown label="Title" value="opt-2" display-value="Opt 2">
        ${o.map(e=>d`<dre-dropdown-item label=${e.label} value=${e.value} meta="Sample"></dre-dropdown-item>`)}
      </dre-dropdown>
      <dre-dropdown label="Title" value="opt-2" display-value="Opt 2" open>
        ${o.map(e=>d`<dre-dropdown-item label=${e.label} value=${e.value} meta="Sample"></dre-dropdown-item>`)}
      </dre-dropdown>
    </div>
  `},t={name:"Features / Variants",render:()=>d`
    <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;">
      <dre-dropdown label="Default" placeholder="Add Value" variant="default">
        ${o.slice(0,4).map(e=>d`<dre-dropdown-item label=${e.label} value=${e.value} meta="Sample"></dre-dropdown-item>`)}
      </dre-dropdown>
      <dre-dropdown label="Icon Leading" placeholder="Add Value" variant="icon-leading">
        <dre-icon slot="leading" name="code-1" size="14"></dre-icon>
        ${o.slice(0,4).map(e=>d`<dre-dropdown-item label=${e.label} value=${e.value} meta="Sample"></dre-dropdown-item>`)}
      </dre-dropdown>
      <dre-dropdown label="Search" placeholder="Search…" variant="search" searchable>
        ${o.map(e=>d`<dre-dropdown-item label=${e.label} value=${e.value} meta="Sample"></dre-dropdown-item>`)}
      </dre-dropdown>
      <dre-dropdown label="Disabled" placeholder="Add Value" disabled></dre-dropdown>
      <dre-dropdown label="Error" placeholder="Add Value" invalid></dre-dropdown>
    </div>
  `},l={name:"Features / Menu Single",render:()=>d`
    <dre-dropdown menu-only type="single" menu-title="Show field type">
      <dre-dropdown-item control="radio" label="List item" value="1"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="2"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="3"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="4"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="5"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="6"></dre-dropdown-item>
    </dre-dropdown>
  `},i={name:"Features / Menu Multiple",render:()=>d`
    <dre-dropdown menu-only type="multiple" menu-title="Show field type" value="1,3">
      <dre-dropdown-item control="checkbox" label="List item" value="1"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="2"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="3"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="4"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="5"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="6"></dre-dropdown-item>
    </dre-dropdown>
  `},n={name:"Features / List Item",render:()=>d`
    <div style="display:grid;grid-template-columns:repeat(3,200px);gap:24px;width:max-content;">
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item label="List item"></dre-dropdown-item>
        <dre-dropdown-item label="List item"></dre-dropdown-item>
        <dre-dropdown-item label="List item" selected show-check></dre-dropdown-item>
        <dre-dropdown-item label="List item" disabled></dre-dropdown-item>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item control="radio" label="List item"></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" selected></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" supporting-text="Supporting text"></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" disabled></dre-dropdown-item>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item control="checkbox" label="List item"></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" selected></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" supporting-text="Supporting text"></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" disabled></dre-dropdown-item>
      </div>
    </div>
  `};var a,p,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Features / Input Dropdown',
  render: () => html\`
    <div style="display:flex;gap:48px;align-items:flex-start;flex-wrap:wrap;">
      <dre-dropdown label="Title" placeholder="Add Value"></dre-dropdown>
      <dre-dropdown label="Title" value="opt-2" display-value="Opt 2">
        \${options.map(o => html\`<dre-dropdown-item label=\${o.label} value=\${o.value} meta="Sample"></dre-dropdown-item>\`)}
      </dre-dropdown>
      <dre-dropdown label="Title" value="opt-2" display-value="Opt 2" open>
        \${options.map(o => html\`<dre-dropdown-item label=\${o.label} value=\${o.value} meta="Sample"></dre-dropdown-item>\`)}
      </dre-dropdown>
    </div>
  \`
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var s,c,w;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Features / Variants',
  render: () => html\`
    <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;">
      <dre-dropdown label="Default" placeholder="Add Value" variant="default">
        \${options.slice(0, 4).map(o => html\`<dre-dropdown-item label=\${o.label} value=\${o.value} meta="Sample"></dre-dropdown-item>\`)}
      </dre-dropdown>
      <dre-dropdown label="Icon Leading" placeholder="Add Value" variant="icon-leading">
        <dre-icon slot="leading" name="code-1" size="14"></dre-icon>
        \${options.slice(0, 4).map(o => html\`<dre-dropdown-item label=\${o.label} value=\${o.value} meta="Sample"></dre-dropdown-item>\`)}
      </dre-dropdown>
      <dre-dropdown label="Search" placeholder="Search…" variant="search" searchable>
        \${options.map(o => html\`<dre-dropdown-item label=\${o.label} value=\${o.value} meta="Sample"></dre-dropdown-item>\`)}
      </dre-dropdown>
      <dre-dropdown label="Disabled" placeholder="Add Value" disabled></dre-dropdown>
      <dre-dropdown label="Error" placeholder="Add Value" invalid></dre-dropdown>
    </div>
  \`
}`,...(w=(c=t.parameters)==null?void 0:c.docs)==null?void 0:w.source}}};var u,b,v;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Features / Menu Single',
  render: () => html\`
    <dre-dropdown menu-only type="single" menu-title="Show field type">
      <dre-dropdown-item control="radio" label="List item" value="1"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="2"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="3"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="4"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="5"></dre-dropdown-item>
      <dre-dropdown-item control="radio" label="List item" value="6"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,h,L;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Menu Multiple',
  render: () => html\`
    <dre-dropdown menu-only type="multiple" menu-title="Show field type" value="1,3">
      <dre-dropdown-item control="checkbox" label="List item" value="1"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="2"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="3"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="4"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="5"></dre-dropdown-item>
      <dre-dropdown-item control="checkbox" label="List item" value="6"></dre-dropdown-item>
    </dre-dropdown>
  \`
}`,...(L=(h=i.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var g,y,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Features / List Item',
  render: () => html\`
    <div style="display:grid;grid-template-columns:repeat(3,200px);gap:24px;width:max-content;">
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item label="List item"></dre-dropdown-item>
        <dre-dropdown-item label="List item"></dre-dropdown-item>
        <dre-dropdown-item label="List item" selected show-check></dre-dropdown-item>
        <dre-dropdown-item label="List item" disabled></dre-dropdown-item>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item control="radio" label="List item"></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" selected></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" supporting-text="Supporting text"></dre-dropdown-item>
        <dre-dropdown-item control="radio" label="List item" disabled></dre-dropdown-item>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;border:1px solid #e6e8ed;border-radius:4px;padding:8px 0;">
        <dre-dropdown-item control="checkbox" label="List item"></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" selected></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" supporting-text="Supporting text"></dre-dropdown-item>
        <dre-dropdown-item control="checkbox" label="List item" disabled></dre-dropdown-item>
      </div>
    </div>
  \`
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const T=["Default","Variants","MenuSingle","MenuMultiple","ListItem"];export{r as Default,n as ListItem,i as MenuMultiple,l as MenuSingle,t as Variants,T as __namedExportsOrder,I as default};
