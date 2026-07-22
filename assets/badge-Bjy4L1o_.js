import{i as f,a as l,b as u}from"./iframe-D98_Yrru.js";import{n as i,t as d}from"./property-OxoNfEB1.js";import{h as c}from"./styles-CTqCNxHK.js";var g=Object.defineProperty,m=Object.getOwnPropertyDescriptor,o=(h,e,a,n)=>{for(var s=n>1?void 0:n?m(e,a):e,r=h.length-1,p;r>=0;r--)(p=h[r])&&(s=(n?p(e,a,s):p(s))||s);return n&&s&&g(e,a,s),s};let t=class extends l{constructor(){super(...arguments),this.status="info",this.size="small",this.tone="info"}render(){return u`<span part="badge"><slot></slot></span>`}};t.styles=[c,f`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        font-weight: 400;
        line-height: 1.2;
        color: #ffffff;
        white-space: nowrap;
      }

      :host([size='small']) span,
      :host(:not([size])) span {
        min-height: 20px;
        padding: 4px 8px;
        font-size: 10px;
      }

      :host([size='medium']) span {
        min-height: 27px;
        padding: 6px 12px;
        font-size: 12px;
      }

      :host([size='large']) span {
        min-height: 33px;
        padding: 8px 16px;
        font-size: 14px;
      }

      :host([status='success']) span,
      :host([tone='success']) span {
        background: #55b45a;
      }
      :host([status='warning']) span,
      :host([tone='warning']) span {
        background: #edb51d;
      }
      :host([status='error']) span,
      :host([tone='error']) span,
      :host([tone='danger']) span {
        background: #d64333;
      }
      :host([status='info']) span,
      :host([tone='info']) span,
      :host([tone='brand']) span,
      :host([tone='neutral']) span,
      :host(:not([status]):not([tone])) span {
        background: #3187d8;
      }
    `];o([i({reflect:!0})],t.prototype,"status",2);o([i({reflect:!0})],t.prototype,"size",2);o([i({reflect:!0})],t.prototype,"tone",2);t=o([d("dre-badge")],t);
