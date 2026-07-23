import{i as h,a as u,b as v}from"./iframe-6U_684zG.js";import{n as c,t as m}from"./property-Bwn_HGw6.js";import{h as g}from"./styles-Cq6U1Hym.js";import"./block-item-9l10tRoX.js";var _=Object.defineProperty,x=Object.getOwnPropertyDescriptor,l=t=>{throw TypeError(t)},p=(t,e,r,a)=>{for(var o=a>1?void 0:a?x(e,r):e,d=t.length-1,s;d>=0;d--)(s=t[d])&&(o=(a?s(e,r,o):s(o))||o);return a&&o&&_(e,r,o),o},y=(t,e,r)=>e.has(t)||l("Cannot "+r),w=(t,e,r)=>e.has(t)?l("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),C=(t,e,r)=>(y(t,e,"access private method"),r),n,f;let i=class extends u{constructor(){super(...arguments),w(this,n),this.exclusive=!0,this.divided=!1}render(){return v`<div class="group" part="group" @dre-toggle=${C(this,n,f)}><slot></slot></div>`}};n=new WeakSet;f=function(t){if(!this.exclusive)return;const e=t.target;if(!(!e||e.tagName!=="DRE-ACCORDION")&&e.expanded)for(const r of this.querySelectorAll("dre-accordion"))r!==e&&(r.expanded=!1)};i.styles=[g,h`
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

      :host([divided]) .group {
        gap: 0;
      }

      :host([divided]) ::slotted(dre-accordion) {
        padding-block: 10px 0;
      }

      :host([divided]) ::slotted(dre-accordion:not(:last-child)) {
        border-bottom: 1px solid #f3f3f6;
        padding-bottom: 10px;
        margin-bottom: 0;
      }

      ::slotted(dre-accordion) {
        max-width: 100%;
      }
    `];p([c({type:Boolean,reflect:!0})],i.prototype,"exclusive",2);p([c({type:Boolean,reflect:!0})],i.prototype,"divided",2);i=p([m("dre-accordion-group")],i);
