import{i as n,a as f,b as c}from"./iframe-CxxUV_ql.js";import{n as m,t as d}from"./property-BAmm2Bkg.js";import{h as u}from"./styles-DnIXmjyS.js";var x=Object.defineProperty,h=Object.getOwnPropertyDescriptor,l=(p,r,s,o)=>{for(var t=o>1?void 0:o?h(r,s):r,i=p.length-1,a;i>=0;i--)(a=p[i])&&(t=(o?a(r,s,t):a(t))||t);return o&&t&&x(r,s,t),t};let e=class extends f{constructor(){super(...arguments),this.position="top-right"}render(){return c`<div class="stack" part="stack" role="region" aria-label="Notifications"><slot></slot></div>`}};e.styles=[u,n`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 16px;
        width: 357px;
        max-width: 100%;
        box-sizing: border-box;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .stack {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      :host([position='bottom-right']) .stack {
        flex-direction: column-reverse;
      }
    `];l([m({reflect:!0})],e.prototype,"position",2);e=l([d("dre-toast-group")],e);
