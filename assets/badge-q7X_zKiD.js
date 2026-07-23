import{i as h,a as d,b as f}from"./iframe-6U_684zG.js";import{n as a,t as l}from"./property-Bwn_HGw6.js";import{h as c}from"./styles-Cq6U1Hym.js";var g=Object.defineProperty,b=Object.getOwnPropertyDescriptor,e=(u,n,r,o)=>{for(var t=o>1?void 0:o?b(n,r):n,p=u.length-1,i;p>=0;p--)(i=u[p])&&(t=(o?i(n,r,t):i(t))||t);return o&&t&&g(n,r,t),t};let s=class extends d{constructor(){super(...arguments),this.status="info",this.size="small",this.appearance="light",this.tone="info"}render(){return f`<span part="badge"><slot></slot></span>`}};s.styles=[c,h`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 100px;
        font-weight: 600;
        line-height: normal;
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

      /* Legacy tone — only when status is unset */
      :host([tone='success']:not([status])) span {
        background: #55b45a;
      }
      :host([tone='warning']:not([status])) span {
        background: #edb51d;
      }
      :host([tone='error']:not([status])) span,
      :host([tone='danger']:not([status])) span {
        background: #d64333;
      }
      :host([tone='info']:not([status])) span,
      :host([tone='brand']:not([status])) span,
      :host([tone='neutral']:not([status])) span,
      :host(:not([status]):not([tone])) span {
        background: #3187d8;
      }

      :host([status='success']) span {
        background: #55b45a;
      }
      :host([status='warning']) span {
        background: #edb51d;
      }
      :host([status='error']) span {
        background: #d64333;
      }
      :host([status='info']) span {
        background: #3187d8;
      }
    `];e([a({reflect:!0})],s.prototype,"status",2);e([a({reflect:!0})],s.prototype,"size",2);e([a({reflect:!0})],s.prototype,"appearance",2);e([a({reflect:!0})],s.prototype,"tone",2);s=e([l("dre-badge")],s);
