import{i as f,a as u,b as h}from"./iframe-BMlSAenk.js";import{n as v,t as _}from"./property-DjCj8DcD.js";import{h as g}from"./styles-CNCx_--U.js";import"./accordion-ZyoOmXCc.js";var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=r=>{throw TypeError(r)},l=(r,e,t,a)=>{for(var o=a>1?void 0:a?y(e,t):e,i=r.length-1,n;i>=0;i--)(n=r[i])&&(o=(a?n(e,t,o):n(o))||o);return a&&o&&m(e,t,o),o},x=(r,e,t)=>e.has(r)||d("Cannot "+t),w=(r,e,t)=>e.has(r)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),D=(r,e,t)=>(x(r,e,"access private method"),t),c,p;let s=class extends u{constructor(){super(...arguments),w(this,c),this.exclusive=!0}render(){return h`<div class="group" part="group" @dre-toggle=${D(this,c,p)}><slot></slot></div>`}};c=new WeakSet;p=function(r){if(!this.exclusive)return;const e=r.target;if(!(!e||e.tagName!=="DRE-ACCORDION")&&e.expanded)for(const t of this.querySelectorAll("dre-accordion"))t!==e&&(t.expanded=!1)};s.styles=[g,f`
      :host {
        display: block;
        width: 202px;
        max-width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .group {
        display: flex;
        flex-direction: column;
        gap: 11px;
      }

      ::slotted(dre-accordion) {
        max-width: 100%;
      }

      /* Dividers between slotted accordions via adjacent sibling in light DOM —
         use ::slotted can't style between; inject via CSS on host children wrapper */
    `];l([v({type:Boolean,reflect:!0})],s.prototype,"exclusive",2);s=l([_("dre-accordion-group")],s);
