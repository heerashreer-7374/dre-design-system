import{b as i}from"./iframe-D98_Yrru.js";import"./tab-group-CU_j4qud.js";import"./icon-B1KlDiLz.js";import"./badge-Bjy4L1o_.js";import"./preload-helper-BJOJroOC.js";import"./property-OxoNfEB1.js";import"./styles-CTqCNxHK.js";const v={title:"Single Components/Tab",component:"dre-tab",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **⭐ Tab** Tab Item (`12290:8325`) — Modes Default / With Icon / Badge / Both · Active indicator `#0d6dfd`."}}}},e={render:()=>i`
    <dre-tab-group value="Design">
      <dre-tab value="Design" active>Design</dre-tab>
      <dre-tab value="Code">Code</dre-tab>
      <dre-tab value="Preview" disabled>Preview</dre-tab>
      <div slot="panel">Tab panel content for the active tab.</div>
    </dre-tab-group>
  `},a={name:"Features / Modes",render:()=>i`
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <dre-tab active>Default</dre-tab>
      <dre-tab mode="icon" active>
        <dre-icon slot="icon" name="code" size="16"></dre-icon>
        With Icon
      </dre-tab>
      <dre-tab mode="badge" active>
        Badge
        <dre-badge slot="badge" status="info" size="small">3</dre-badge>
      </dre-tab>
      <dre-tab mode="both" active>
        <dre-icon slot="icon" name="workflow" size="16"></dre-icon>
        Both
        <dre-badge slot="badge" status="success" size="small">1</dre-badge>
      </dre-tab>
    </div>
  `};var t,d,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <dre-tab-group value="Design">
      <dre-tab value="Design" active>Design</dre-tab>
      <dre-tab value="Code">Code</dre-tab>
      <dre-tab value="Preview" disabled>Preview</dre-tab>
      <div slot="panel">Tab panel content for the active tab.</div>
    </dre-tab-group>
  \`
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var o,n,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Features / Modes',
  render: () => html\`
    <div style="display:flex;gap:8px;align-items:flex-end;">
      <dre-tab active>Default</dre-tab>
      <dre-tab mode="icon" active>
        <dre-icon slot="icon" name="code" size="16"></dre-icon>
        With Icon
      </dre-tab>
      <dre-tab mode="badge" active>
        Badge
        <dre-badge slot="badge" status="info" size="small">3</dre-badge>
      </dre-tab>
      <dre-tab mode="both" active>
        <dre-icon slot="icon" name="workflow" size="16"></dre-icon>
        Both
        <dre-badge slot="badge" status="success" size="small">1</dre-badge>
      </dre-tab>
    </div>
  \`
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const f=["Default","Modes"];export{e as Default,a as Modes,f as __namedExportsOrder,v as default};
