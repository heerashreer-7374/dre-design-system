import{b as r}from"./iframe-GA3ktVQc.js";import"./preload-helper-Dp1pzeXC.js";const o=[4,8,12,16,24,32,48,64],b={title:"Foundation/Spacer",tags:["autodocs"],parameters:{docs:{description:{component:"Figma **🧱 Spacer** — sizes 4, 8, 12, 16, 24, 32, 48, 64px on a 4px grid. Horizontal / Vertical."}}}},a={render:()=>r`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Spacer</h2>
      <p style="margin:0 0 20px;color:var(--dre-color-text-subtle);font-size:13px;max-width:560px;">
        Usage: Horizontal between row items · Vertical between column items · Based on 4px grid · Sizes:
        4, 8, 12, 16, 24, 32, 48, 64px
      </p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${o.map(e=>r`
            <div style="display:flex;align-items:center;gap:16px;">
              <code style="width:110px;font-size:12px;color:var(--dre-color-text-subtle);">spacer/${e}</code>
              <div
                style="height:12px;width:var(--dre-spacer-${e});background:var(--dre-color-action-primary-default);border-radius:2px;"
                title="${e}px"
              ></div>
              <span style="font-size:12px;color:var(--dre-color-text-subtlest);">${e}px</span>
            </div>
          `)}
      </div>
    </div>
  `},d={name:"Features / Vertical",render:()=>r`
    <div style="display:flex;gap:32px;padding:24px;flex-wrap:wrap;">
      ${o.map(e=>r`
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div
              style="width:48px;background:var(--dre-color-background-neutral-subtle);border:1px dashed var(--dre-color-border-subtle);display:flex;flex-direction:column;"
            >
              <div style="height:16px;background:var(--dre-color-background-elevated);"></div>
              <div
                style="height:var(--dre-spacer-${e});background:color-mix(in srgb, var(--dre-color-action-primary-default) 35%, transparent);"
              ></div>
              <div style="height:16px;background:var(--dre-color-background-elevated);"></div>
            </div>
            <span style="font-size:11px;color:var(--dre-color-text-subtle);">${e}</span>
          </div>
        `)}
    </div>
  `},t={name:"Features / Horizontal",render:()=>r`
    <div style="display:flex;flex-direction:column;gap:16px;padding:24px;">
      ${o.map(e=>r`
          <div style="display:flex;align-items:center;gap:12px;">
            <code style="width:40px;font-size:11px;color:var(--dre-color-text-subtle);">${e}</code>
            <div
              style="height:32px;background:var(--dre-color-background-neutral-subtle);border:1px dashed var(--dre-color-border-subtle);display:inline-flex;align-items:stretch;"
            >
              <div style="width:24px;background:var(--dre-color-background-elevated);"></div>
              <div
                style="width:var(--dre-spacer-${e});background:color-mix(in srgb, var(--dre-color-action-primary-default) 35%, transparent);"
              ></div>
              <div style="width:24px;background:var(--dre-color-background-elevated);"></div>
            </div>
          </div>
        `)}
    </div>
  `};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:24px;">
      <h2 style="margin:0 0 8px;font-size:20px;">Spacer</h2>
      <p style="margin:0 0 20px;color:var(--dre-color-text-subtle);font-size:13px;max-width:560px;">
        Usage: Horizontal between row items · Vertical between column items · Based on 4px grid · Sizes:
        4, 8, 12, 16, 24, 32, 48, 64px
      </p>
      <div style="display:flex;flex-direction:column;gap:12px;">
        \${FIGMA_SIZES.map(n => html\`
            <div style="display:flex;align-items:center;gap:16px;">
              <code style="width:110px;font-size:12px;color:var(--dre-color-text-subtle);">spacer/\${n}</code>
              <div
                style="height:12px;width:var(--dre-spacer-\${n});background:var(--dre-color-action-primary-default);border-radius:2px;"
                title="\${n}px"
              ></div>
              <span style="font-size:12px;color:var(--dre-color-text-subtlest);">\${n}px</span>
            </div>
          \`)}
      </div>
    </div>
  \`
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var s,p,c;d.parameters={...d.parameters,docs:{...(s=d.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Features / Vertical',
  render: () => html\`
    <div style="display:flex;gap:32px;padding:24px;flex-wrap:wrap;">
      \${FIGMA_SIZES.map(n => html\`
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <div
              style="width:48px;background:var(--dre-color-background-neutral-subtle);border:1px dashed var(--dre-color-border-subtle);display:flex;flex-direction:column;"
            >
              <div style="height:16px;background:var(--dre-color-background-elevated);"></div>
              <div
                style="height:var(--dre-spacer-\${n});background:color-mix(in srgb, var(--dre-color-action-primary-default) 35%, transparent);"
              ></div>
              <div style="height:16px;background:var(--dre-color-background-elevated);"></div>
            </div>
            <span style="font-size:11px;color:var(--dre-color-text-subtle);">\${n}</span>
          </div>
        \`)}
    </div>
  \`
}`,...(c=(p=d.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var x,v,u;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Horizontal',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;padding:24px;">
      \${FIGMA_SIZES.map(n => html\`
          <div style="display:flex;align-items:center;gap:12px;">
            <code style="width:40px;font-size:11px;color:var(--dre-color-text-subtle);">\${n}</code>
            <div
              style="height:32px;background:var(--dre-color-background-neutral-subtle);border:1px dashed var(--dre-color-border-subtle);display:inline-flex;align-items:stretch;"
            >
              <div style="width:24px;background:var(--dre-color-background-elevated);"></div>
              <div
                style="width:var(--dre-spacer-\${n});background:color-mix(in srgb, var(--dre-color-action-primary-default) 35%, transparent);"
              ></div>
              <div style="width:24px;background:var(--dre-color-background-elevated);"></div>
            </div>
          </div>
        \`)}
    </div>
  \`
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const y=["Scale","Vertical","Horizontal"];export{t as Horizontal,a as Scale,d as Vertical,y as __namedExportsOrder,b as default};
