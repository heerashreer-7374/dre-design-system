import{i as O,a as E,b as i,A as v,w as u}from"./iframe-hYZkyXvR.js";import"./badge-CN0vGrM4.js";import{n as o,t as F}from"./property-BSL9Me-Y.js";import{h as L}from"./styles-BGRCfbQF.js";import{f as T}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";var Z=Object.defineProperty,U=Object.getOwnPropertyDescriptor,W=e=>{throw TypeError(e)},h=(e,a,r,t)=>{for(var n=t>1?void 0:t?U(a,r):a,d=e.length-1,l;d>=0;d--)(l=e[d])&&(n=(t?l(a,r,n):l(n))||n);return t&&n&&Z(a,r,n),n},H=(e,a,r)=>a.has(e)||W("Cannot "+r),N=(e,a,r)=>a.has(e)?W("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,r),q=(e,a,r)=>(H(e,a,"access private method"),r),x,j;let p=class extends E{constructor(){super(...arguments),N(this,x),this.count=0,this.size="small",this.appearance="light"}render(){const e=q(this,x,j).call(this);return i`
      <span class="badge" part="badge" aria-label=${`${this.count} items`}>
        <span class="ring" part="ring" aria-hidden="true"></span>
        <span class="count" part="count">${e}</span>
      </span>
    `}};x=new WeakSet;j=function(){return this.count>99?"99+":String(this.count)};p.styles=[L,O`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .badge {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 50%;
        background: #f5f5fa;
        color: #646478;
        font-weight: 600;
        line-height: normal;
      }

      :host([appearance='dark']) .badge {
        background: #1e2026;
        color: #8c919e;
      }

      :host([size='small']) .badge,
      :host(:not([size])) .badge {
        width: 32px;
        height: 32px;
        font-size: 12px;
      }

      :host([size='medium']) .badge {
        width: 48px;
        height: 48px;
        font-size: 18px;
      }

      :host([size='large']) .badge {
        width: 64px;
        height: 64px;
        font-size: 24px;
      }

      .ring {
        position: absolute;
        inset: 4px;
        border-radius: 50%;
        border: 2px solid #c8c8d2;
        pointer-events: none;
        box-sizing: border-box;
      }

      :host([size='medium']) .ring {
        inset: 5px;
        border-width: 3px;
      }

      :host([size='large']) .ring {
        inset: 7px;
        border-width: 3px;
      }

      :host([appearance='dark']) .ring {
        border-color: #5a5f6c;
      }

      .count {
        position: relative;
        z-index: 1;
      }
    `];h([o({type:Number})],p.prototype,"count",2);h([o({reflect:!0})],p.prototype,"size",2);h([o({reflect:!0})],p.prototype,"appearance",2);p=h([F("dre-count-badge")],p);var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,V=e=>{throw TypeError(e)},c=(e,a,r,t)=>{for(var n=t>1?void 0:t?J(a,r):a,d=e.length-1,l;d>=0;d--)(l=e[d])&&(n=(t?l(a,r,n):l(n))||n);return t&&n&&G(a,r,n),n},K=(e,a,r)=>a.has(e)||V("Cannot "+r),Q=(e,a,r)=>a.has(e)?V("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,r),R=(e,a,r)=>(K(e,a,"access private method"),r),y,A;let s=class extends E{constructor(){super(...arguments),Q(this,y),this.type="info",this.size="small",this.appearance="light",this.icon=!0,this.label=""}render(){const e=this.type==="error"||this.type==="warning"?"alert":"status";return i`
      <div class="banner" part="banner" role=${e}>
        <span part="label"><slot>${this.label||v}</slot></span>
        ${this.icon?i`<span class="icon" part="icon"><slot name="icon">${R(this,y,A).call(this)}</slot></span>`:v}
      </div>
    `}};y=new WeakSet;A=function(){const e=this.type;return e==="success"?u`
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
          <path d="M5.5 8.2L7.2 9.8L10.5 6.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `:e==="warning"?u`
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2.5L14 13.5H2L8 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M8 7V9.5M8 11.5V11.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      `:e==="error"?u`
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
          <path d="M6 6L10 10M10 6L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      `:u`
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.5" />
        <path d="M8 7.2V11M8 5V5.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    `};s.styles=[L,O`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .banner {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        box-sizing: border-box;
        border-radius: 8px;
        font-weight: 500;
        line-height: normal;
        white-space: nowrap;
        background: #ebe9f8;
        color: #6852e0;
      }

      :host([size='small']) .banner,
      :host(:not([size])) .banner {
        min-height: 31px;
        padding: 8px 12px;
        font-size: 12px;
        gap: 8px;
        border-radius: 8px;
      }

      :host([size='medium']) .banner {
        min-height: 38px;
        padding: 10px 16px;
        font-size: 14px;
        gap: 10px;
        border-radius: 10px;
      }

      :host([size='large']) .banner {
        min-height: 44px;
        padding: 12px 20px;
        font-size: 16px;
        gap: 12px;
        border-radius: 12px;
      }

      :host([type='success']) .banner {
        background: #dcfce7;
        color: #166534;
      }
      :host([type='warning']) .banner {
        background: #fef3c7;
        color: #92400e;
      }
      :host([type='error']) .banner {
        background: #fee2e2;
        color: #991b1b;
      }
      :host([type='info']) .banner {
        background: #ebe9f8;
        color: #6852e0;
      }

      :host([appearance='dark']) .banner {
        background: #282a36;
        color: #c8c8dc;
      }

      .icon {
        display: inline-flex;
        flex: 0 0 auto;
        line-height: 0;
        color: currentColor;
      }

      .icon svg {
        display: block;
      }

      :host([size='small']) .icon svg,
      :host(:not([size])) .icon svg {
        width: 14px;
        height: 14px;
      }

      :host([size='medium']) .icon svg {
        width: 18px;
        height: 18px;
      }

      :host([size='large']) .icon svg {
        width: 20px;
        height: 20px;
      }
    `];c([o({reflect:!0})],s.prototype,"type",2);c([o({reflect:!0})],s.prototype,"size",2);c([o({reflect:!0})],s.prototype,"appearance",2);c([o({type:Boolean,reflect:!0})],s.prototype,"icon",2);c([o()],s.prototype,"label",2);s=c([F("dre-info-banner")],s);const te={title:"Single Components/Badge",component:"dre-badge",tags:["autodocs"],argTypes:{status:{control:"select",options:["success","warning","error","info"]},size:{control:"select",options:["small","medium","large"]},appearance:{control:"select",options:["light","dark"]}},args:{status:"success",size:"small",appearance:"light"},parameters:{docs:{description:{component:`Figma **⭐ Badge** ${T("12290:8429")} — Status Badge · Count Badge · Info Banner.`}}}},b={render:e=>{var a,r,t;return i`
    <dre-badge status=${e.status} size=${e.size} appearance=${e.appearance}>
      ${(r=(a=e.status)==null?void 0:a[0])==null?void 0:r.toUpperCase()}${(t=e.status)==null?void 0:t.slice(1)}
    </dre-badge>
  `}},g={name:"Features / Status Badge",render:()=>i`
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${["small","medium","large"].map(e=>i`
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            <dre-badge status="success" size=${e}>Success</dre-badge>
            <dre-badge status="warning" size=${e}>Warning</dre-badge>
            <dre-badge status="error" size=${e}>Error</dre-badge>
            <dre-badge status="info" size=${e}>Info</dre-badge>
          </div>
        `)}
    </div>
  `},f={name:"Features / Count Badge",render:()=>i`
    <div style="display:flex;gap:32px;align-items:flex-end;">
      <div style="display:flex;gap:16px;align-items:flex-end;">
        <dre-count-badge count=${5} size="small" appearance="light"></dre-count-badge>
        <dre-count-badge count=${5} size="medium" appearance="light"></dre-count-badge>
        <dre-count-badge count=${5} size="large" appearance="light"></dre-count-badge>
      </div>
      <div style="display:flex;gap:16px;align-items:flex-end;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-count-badge count=${5} size="small" appearance="dark"></dre-count-badge>
        <dre-count-badge count=${5} size="medium" appearance="dark"></dre-count-badge>
        <dre-count-badge count=${5} size="large" appearance="dark"></dre-count-badge>
      </div>
    </div>
  `},m={name:"Features / Info Banner",render:()=>i`
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-info-banner type="info" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="warning" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="error" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="medium" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="large" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="info" size="small" ?icon=${!1} label="Mail Submitted"></dre-info-banner>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-info-banner type="info" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="warning" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="error" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
      </div>
    </div>
  `};var z,k,$;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:"{\n  render: args => html`\n    <dre-badge status=${args.status} size=${args.size} appearance=${args.appearance}>\n      ${args.status?.[0]?.toUpperCase()}${args.status?.slice(1)}\n    </dre-badge>\n  `\n}",...($=(k=b.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var w,S,_;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Features / Status Badge',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:16px;">
      \${(['small', 'medium', 'large'] as const).map(size => html\`
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            <dre-badge status="success" size=\${size}>Success</dre-badge>
            <dre-badge status="warning" size=\${size}>Warning</dre-badge>
            <dre-badge status="error" size=\${size}>Error</dre-badge>
            <dre-badge status="info" size=\${size}>Info</dre-badge>
          </div>
        \`)}
    </div>
  \`
}`,...(_=(S=g.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var M,B,C;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Features / Count Badge',
  render: () => html\`
    <div style="display:flex;gap:32px;align-items:flex-end;">
      <div style="display:flex;gap:16px;align-items:flex-end;">
        <dre-count-badge count=\${5} size="small" appearance="light"></dre-count-badge>
        <dre-count-badge count=\${5} size="medium" appearance="light"></dre-count-badge>
        <dre-count-badge count=\${5} size="large" appearance="light"></dre-count-badge>
      </div>
      <div style="display:flex;gap:16px;align-items:flex-end;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-count-badge count=\${5} size="small" appearance="dark"></dre-count-badge>
        <dre-count-badge count=\${5} size="medium" appearance="dark"></dre-count-badge>
        <dre-count-badge count=\${5} size="large" appearance="dark"></dre-count-badge>
      </div>
    </div>
  \`
}`,...(C=(B=f.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,I,P;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Features / Info Banner',
  render: () => html\`
    <div style="display:flex;gap:32px;align-items:flex-start;">
      <div style="display:flex;flex-direction:column;gap:12px;">
        <dre-info-banner type="info" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="warning" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="error" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="medium" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" size="large" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="info" size="small" ?icon=\${false} label="Mail Submitted"></dre-info-banner>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:12px;background:#1b1b1e;border-radius:8px;">
        <dre-info-banner type="info" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="success" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="warning" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
        <dre-info-banner type="error" appearance="dark" size="small" label="Mail Submitted"></dre-info-banner>
      </div>
    </div>
  \`
}`,...(P=(I=m.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const ie=["Default","StatusBadge","CountBadge","InfoBanner"];export{f as CountBadge,b as Default,m as InfoBanner,g as StatusBadge,ie as __namedExportsOrder,te as default};
