import{b as n}from"./iframe-C1mRIqdo.js";import{D as a}from"./icon-DLOWPnC1.js";import"./preload-helper-Dp1pzeXC.js";import"./property-COYYN49D.js";const g={title:"Foundation/Icons",tags:["autodocs"],parameters:{docs:{description:{component:'Figma **🧱 Icons** — 72 SVGs exported from the file (20×20). Use `<dre-icon name="search">`.'}}}},r={render:()=>n`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Icons</h2>
      <p style="margin:0 0 20px;color:var(--dre-color-text-subtle);font-size:13px;">
        ${a.length} icons exported from Figma · default size 20px · stroke inherits
        <code>currentColor</code>
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;">
        ${a.map(e=>n`
            <div
              style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px 10px;border:1px solid var(--dre-color-border-subtle);border-radius:8px;background:var(--dre-color-background-neutral-default);color:var(--dre-color-icon-default);"
            >
              <dre-icon name=${e} size="20"></dre-icon>
              <span
                style="font-size:10px;text-align:center;color:var(--dre-color-text-subtle);word-break:break-word;"
                >${e}</span
              >
            </div>
          `)}
      </div>
    </div>
  `},o={render:()=>n`
    <div style="display:flex;align-items:flex-end;gap:20px;padding:24px;color:var(--dre-color-icon-default);">
      ${[12,16,20,24,32].map(e=>n`
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <dre-icon name="sparkles" size=${e}></dre-icon>
            <span style="font-size:11px;color:var(--dre-color-text-subtle);">${e}px</span>
          </div>
        `)}
    </div>
  `};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Icons</h2>
      <p style="margin:0 0 20px;color:var(--dre-color-text-subtle);font-size:13px;">
        \${DRE_ICON_NAMES.length} icons exported from Figma · default size 20px · stroke inherits
        <code>currentColor</code>
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;">
        \${DRE_ICON_NAMES.map(name => html\`
            <div
              style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px 10px;border:1px solid var(--dre-color-border-subtle);border-radius:8px;background:var(--dre-color-background-neutral-default);color:var(--dre-color-icon-default);"
            >
              <dre-icon name=\${name} size="20"></dre-icon>
              <span
                style="font-size:10px;text-align:center;color:var(--dre-color-text-subtle);word-break:break-word;"
                >\${name}</span
              >
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,s,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;align-items:flex-end;gap:20px;padding:24px;color:var(--dre-color-icon-default);">
      \${[12, 16, 20, 24, 32].map(size => html\`
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <dre-icon name="sparkles" size=\${size}></dre-icon>
            <span style="font-size:11px;color:var(--dre-color-text-subtle);">\${size}px</span>
          </div>
        \`)}
    </div>
  \`
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const f=["Gallery","Sizes"];export{r as Gallery,o as Sizes,f as __namedExportsOrder,g as default};
