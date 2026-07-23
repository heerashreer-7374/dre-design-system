import{i as f,a as v,b as u}from"./iframe-hYZkyXvR.js";import{n as c,t as g}from"./property-BSL9Me-Y.js";import{h as m}from"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import"./block-item-DsGoeFwW.js";var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,p=t=>{throw TypeError(t)},n=(t,e,r,a)=>{for(var i=a>1?void 0:a?y(e,r):e,d=t.length-1,s;d>=0;d--)(s=t[d])&&(i=(a?s(e,r,i):s(i))||i);return a&&i&&x(e,r,i),i},_=(t,e,r)=>e.has(t)||p("Cannot "+r),w=(t,e,r)=>e.has(t)?p("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),b=(t,e,r)=>(_(t,e,"access private method"),r),l,h;let o=class extends v{constructor(){super(...arguments),w(this,l),this.title="Actions",this.headerIcon="code-1",this.exclusive=!0}render(){return u`
      <div class="panel-header" part="header">
        <p class="title" part="title">${this.title}</p>
        <span class="header-icon" part="header-icon">
          <slot name="header-icon">
            <dre-icon name=${this.headerIcon} size="18"></dre-icon>
          </slot>
        </span>
      </div>
      <div class="divider" part="divider" aria-hidden="true"></div>
      <div class="group" part="group" @dre-toggle=${b(this,l,h)}>
        <slot></slot>
      </div>
    `}};l=new WeakSet;h=function(t){if(!this.exclusive)return;const e=t.target;if(!(!e||e.tagName!=="DRE-ACCORDION")&&e.expanded)for(const r of this.querySelectorAll("dre-accordion"))r!==e&&(r.expanded=!1)};o.styles=[m,f`
      :host {
        display: flex;
        flex-direction: column;
        gap: 11px;
        width: 202px;
        max-width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-top: 10px;
        box-sizing: border-box;
      }

      .title {
        margin: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        color: #383c4d;
      }

      .header-icon {
        display: inline-flex;
        color: #727999;
        line-height: 0;
      }

      .divider {
        width: 100%;
        height: 1px;
        background: #f3f3f6;
      }

      .group {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: 100%;
      }

      ::slotted(dre-accordion) {
        max-width: 100%;
        padding-block: 10px 0;
      }

      ::slotted(dre-accordion:not(:last-child)) {
        border-bottom: 1px solid #f3f3f6;
        padding-bottom: 10px;
      }
    `];n([c()],o.prototype,"title",2);n([c({attribute:"header-icon"})],o.prototype,"headerIcon",2);n([c({type:Boolean,reflect:!0})],o.prototype,"exclusive",2);o=n([g("dre-accordion-panel")],o);
