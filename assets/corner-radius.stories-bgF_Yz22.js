import{b as o}from"./iframe-GA3ktVQc.js";import"./preload-helper-Dp1pzeXC.js";const n=[{name:"None",token:"none",px:"0px"},{name:"XSmall",token:"xsmall",px:"2px"},{name:"Small",token:"small",px:"4px"},{name:"Medium",token:"medium",px:"8px"},{name:"Large",token:"large",px:"12px"},{name:"XLarge",token:"xlarge",px:"16px"},{name:"Full",token:"full",px:"9999px"}],s={title:"Foundation/Corner Radius",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **🧱 Corner Radius** — None 0 · XSmall 2 · Small 4 · Medium 8 · Large 12 · XLarge 16 · Full."}}}},r={render:()=>o`
    <div style="padding:24px;">
      <h2 style="margin:0 0 20px;font-size:20px;">Corner radius</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:20px;">
        ${n.map(e=>o`
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div
                style="width:96px;height:96px;background:var(--dre-color-background-brand-subtle);border:2px solid var(--dre-color-border-brand);border-radius:var(--dre-radius-${e.token});"
              ></div>
              <div style="font-size:13px;font-weight:600;">${e.name}</div>
              <div style="font-size:12px;color:var(--dre-color-text-subtle);">${e.px}</div>
              <code style="font-size:10px;color:var(--dre-color-text-subtlest);">--dre-radius-${e.token}</code>
            </div>
          `)}
      </div>
    </div>
  `};var d,t,a;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:24px;">
      <h2 style="margin:0 0 20px;font-size:20px;">Corner radius</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:20px;">
        \${RADII.map(r => html\`
            <div style="display:flex;flex-direction:column;align-items:center;gap:10px;">
              <div
                style="width:96px;height:96px;background:var(--dre-color-background-brand-subtle);border:2px solid var(--dre-color-border-brand);border-radius:var(--dre-radius-\${r.token});"
              ></div>
              <div style="font-size:13px;font-weight:600;">\${r.name}</div>
              <div style="font-size:12px;color:var(--dre-color-text-subtle);">\${r.px}</div>
              <code style="font-size:10px;color:var(--dre-color-text-subtlest);">--dre-radius-\${r.token}</code>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const p=["Scale"];export{r as Scale,p as __namedExportsOrder,s as default};
