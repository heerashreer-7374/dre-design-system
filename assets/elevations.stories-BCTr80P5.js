import{b as n}from"./iframe-CxxUV_ql.js";import"./preload-helper-Dp1pzeXC.js";const s=[{name:"None",token:"none",elevation:"Elevation 0",css:"none",usage:"Flat elements, no depth (inline content)"},{name:"Low",token:"low",elevation:"Elevation 1",css:`0 1px 3px rgba(0,0,0,0.08)
0 1px 2px rgba(0,0,0,0.06)`,usage:"Subtle lift for cards, list items on hover"},{name:"Medium",token:"medium",elevation:"Elevation 2",css:`0 4px 6px -1px rgba(0,0,0,0.1)
0 2px 4px -1px rgba(0,0,0,0.06)`,usage:"Floating elements like dropdowns, popovers"},{name:"High",token:"high",elevation:"Elevation 3",css:`0 10px 15px -3px rgba(0,0,0,0.1)
0 4px 6px -2px rgba(0,0,0,0.05)`,usage:"Modals, dialogs, prominent overlays"},{name:"Overlay",token:"overlay",elevation:"Elevation 4",css:`0 20px 25px -5px rgba(0,0,0,0.15)
0 8px 10px -5px rgba(0,0,0,0.08)`,usage:"Toast messages, notifications, top-layer elements"}],l={title:"Foundation/Elevations",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **🧱 Elevations** — exact shadow strings from the file."}}}},o={render:()=>n`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Elevations</h2>
      <p style="margin:0 0 24px;color:var(--dre-color-text-subtle);font-size:13px;max-width:640px;">
        Usage: None (inline) → Low (cards/hover) → Medium (dropdowns/popovers) → High (modals) → Overlay
        (toasts).
      </p>
      <div
        style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:28px;padding:16px;background:var(--dre-color-background-page);"
      >
        ${s.map(e=>n`
            <div>
              <div
                style="height:140px;border-radius:12px;background:var(--dre-color-background-elevated);box-shadow:var(--dre-elevation-${e.token});display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;"
              >
                <strong style="font-size:14px;">${e.name}</strong>
                <span style="font-size:11px;color:var(--dre-color-text-subtle);">${e.elevation}</span>
              </div>
              <pre
                style="margin:10px 0 0;font-size:10px;line-height:1.35;color:var(--dre-color-text-subtle);white-space:pre-wrap;font-family:ui-monospace,monospace;"
              >
${e.css}</pre
              >
              <p style="margin:6px 0 0;font-size:11px;color:var(--dre-color-text-subtlest);">${e.usage}</p>
            </div>
          `)}
      </div>
    </div>
  `};var t,a,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Elevations</h2>
      <p style="margin:0 0 24px;color:var(--dre-color-text-subtle);font-size:13px;max-width:640px;">
        Usage: None (inline) → Low (cards/hover) → Medium (dropdowns/popovers) → High (modals) → Overlay
        (toasts).
      </p>
      <div
        style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:28px;padding:16px;background:var(--dre-color-background-page);"
      >
        \${LEVELS.map(level => html\`
            <div>
              <div
                style="height:140px;border-radius:12px;background:var(--dre-color-background-elevated);box-shadow:var(--dre-elevation-\${level.token});display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;"
              >
                <strong style="font-size:14px;">\${level.name}</strong>
                <span style="font-size:11px;color:var(--dre-color-text-subtle);">\${level.elevation}</span>
              </div>
              <pre
                style="margin:10px 0 0;font-size:10px;line-height:1.35;color:var(--dre-color-text-subtle);white-space:pre-wrap;font-family:ui-monospace,monospace;"
              >
\${level.css}</pre
              >
              <p style="margin:6px 0 0;font-size:11px;color:var(--dre-color-text-subtlest);">\${level.usage}</p>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const d=["Levels"];export{o as Levels,d as __namedExportsOrder,l as default};
