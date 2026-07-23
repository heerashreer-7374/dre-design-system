import{b as e}from"./iframe-hYZkyXvR.js";import"./popover-COV19c0p.js";import"./button-Du1k3Bj9.js";import"./input-uEA5vyW9.js";import{f as $}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import"./toggle-DkDf4XWs.js";import"./state-BaBndn7-.js";const P={title:"Single Components/Popover",component:"dre-popover",tags:["autodocs"],argTypes:{appearance:{control:"select",options:["light","dark"]},variant:{control:"select",options:["single-field","multiple-field"]},open:{control:"boolean"},inline:{control:"boolean"}},args:{appearance:"light",variant:"single-field",heading:"Enter choice",open:!0,inline:!0},parameters:{docs:{description:{component:`Figma **⭐ Popover** ${$("10125:322")} — Single Field · Multiple Field · Light/Dark · Field Slots.`}}}},n={name:"Features / Default",render:r=>e`
    <dre-popover
      appearance=${r.appearance}
      variant=${r.variant}
      heading=${r.heading}
      ?open=${r.open}
      ?inline=${r.inline}
    >
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
    </dre-popover>
  `},o={name:"Features / Single Field",render:()=>e`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-popover variant="single-field" appearance="light" heading="Enter choice" open inline>
        <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      </dre-popover>
      <dre-popover variant="single-field" appearance="dark" heading="Enter choice" open inline>
        <dre-button slot="trigger" hierarchy="secondary" size="small">Single dark</dre-button>
      </dre-popover>
    </div>
  `},a={name:"Features / Multiple Field",render:()=>e`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-popover
        variant="multiple-field"
        appearance="light"
        heading="Criteria Builder"
        open
        inline
      >
        <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      </dre-popover>
      <dre-popover
        variant="multiple-field"
        appearance="dark"
        heading="Criteria Builder"
        open
        inline
      >
        <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple dark</dre-button>
      </dre-popover>
    </div>
  `},i={name:"Features / Field Slots",render:()=>e`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dre-popover-slot kind="single" appearance="light"></dre-popover-slot>
      <div style="display:flex;gap:12px;">
        <dre-popover-slot kind="multiple" appearance="light"></dre-popover-slot>
        <dre-popover-slot kind="multiple" appearance="light"></dre-popover-slot>
      </div>
      <dre-popover-slot kind="single" appearance="dark"></dre-popover-slot>
    </div>
  `},t={name:"Features / With Content",render:()=>e`
    <dre-popover variant="single-field" heading="Rename field" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open</dre-button>
      <dre-input slot="body" label="Field name" placeholder="Add Value"></dre-input>
    </dre-popover>
  `},l={name:"Features / Interactive",render:()=>e`
    <dre-popover variant="single-field" heading="Enter choice">
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
      <dre-input slot="body" label="Choice" placeholder="Add Value"></dre-input>
    </dre-popover>
  `};var p,d,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Features / Default',
  render: args => html\`
    <dre-popover
      appearance=\${args.appearance}
      variant=\${args.variant}
      heading=\${args.heading}
      ?open=\${args.open}
      ?inline=\${args.inline}
    >
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
    </dre-popover>
  \`
}`,...(s=(d=n.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Features / Single Field',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-popover variant="single-field" appearance="light" heading="Enter choice" open inline>
        <dre-button slot="trigger" hierarchy="secondary" size="small">Single</dre-button>
      </dre-popover>
      <dre-popover variant="single-field" appearance="dark" heading="Enter choice" open inline>
        <dre-button slot="trigger" hierarchy="secondary" size="small">Single dark</dre-button>
      </dre-popover>
    </div>
  \`
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,v,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Features / Multiple Field',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-popover
        variant="multiple-field"
        appearance="light"
        heading="Criteria Builder"
        open
        inline
      >
        <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple</dre-button>
      </dre-popover>
      <dre-popover
        variant="multiple-field"
        appearance="dark"
        heading="Criteria Builder"
        open
        inline
      >
        <dre-button slot="trigger" hierarchy="secondary" size="small">Multiple dark</dre-button>
      </dre-popover>
    </div>
  \`
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,f,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Features / Field Slots',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;max-width:500px;">
      <dre-popover-slot kind="single" appearance="light"></dre-popover-slot>
      <div style="display:flex;gap:12px;">
        <dre-popover-slot kind="multiple" appearance="light"></dre-popover-slot>
        <dre-popover-slot kind="multiple" appearance="light"></dre-popover-slot>
      </div>
      <dre-popover-slot kind="single" appearance="dark"></dre-popover-slot>
    </div>
  \`
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,x,k;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Features / With Content',
  render: () => html\`
    <dre-popover variant="single-field" heading="Rename field" open inline>
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open</dre-button>
      <dre-input slot="body" label="Field name" placeholder="Add Value"></dre-input>
    </dre-popover>
  \`
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,z,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Features / Interactive',
  render: () => html\`
    <dre-popover variant="single-field" heading="Enter choice">
      <dre-button slot="trigger" hierarchy="secondary" size="small">Open popover</dre-button>
      <dre-input slot="body" label="Choice" placeholder="Add Value"></dre-input>
    </dre-popover>
  \`
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const R=["Default","SingleField","MultipleField","FieldSlots","WithContent","Interactive"];export{n as Default,i as FieldSlots,l as Interactive,a as MultipleField,o as SingleField,t as WithContent,R as __namedExportsOrder,P as default};
