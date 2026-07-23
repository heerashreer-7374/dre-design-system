import{n,t as a}from"./property-P_7FsvOw.js";import{i as v,a as y,b as h}from"./iframe-BfQCnnR_.js";import{h as b}from"./styles-Bjo1gRn0.js";import"./toast-group-ByB84SVQ.js";var w=Object.defineProperty,D=Object.getOwnPropertyDescriptor,o=(r,s,c,i)=>{for(var t=i>1?void 0:i?D(s,c):s,l=r.length-1,p;l>=0;l--)(p=r[l])&&(t=(i?p(s,c,t):p(t))||t);return i&&t&&w(s,c,t),t};let e=class extends y{constructor(){super(...arguments),this.label="",this.description="",this.hint="",this.showDescription=!0,this.size="medium",this.orientation="vertical",this.denseItems=!1}render(){const r=this.description||this.hint,s=this.showDescription&&!!r;return h`
      ${this.label||s?h`
            <div class="header" part="header">
              ${this.label?h`<div class="legend">${this.label}</div>`:null}
              ${s?h`<div class="description">${r}</div>`:null}
            </div>
          `:null}
      <div class="items" part="items"><slot></slot></div>
    `}};e.styles=[b,v`
      :host {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .header {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .legend {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #1a1a1f;
      }

      :host([size='small']) .legend {
        font-size: 12px;
        line-height: 14px;
      }

      .description {
        font-size: 13px;
        line-height: 17px;
        color: #737380;
      }

      :host([size='small']) .description {
        font-size: 11px;
        line-height: 13px;
      }

      .items {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      :host([orientation='horizontal']) .items {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 12px;
        align-items: flex-start;
      }

      /* Input/Dropdown groups use 8px item gap vertically */
      :host([dense-items]) .items {
        gap: 8px;
      }

      :host([dense-items][orientation='horizontal']) .items {
        gap: 12px;
      }
    `];o([n()],e.prototype,"label",2);o([n()],e.prototype,"description",2);o([n()],e.prototype,"hint",2);o([n({type:Boolean,attribute:"show-description",reflect:!0})],e.prototype,"showDescription",2);o([n({reflect:!0})],e.prototype,"size",2);o([n({reflect:!0})],e.prototype,"orientation",2);o([n({type:Boolean,reflect:!0,attribute:"dense-items"})],e.prototype,"denseItems",2);e=o([a("dre-field-group")],e);var z=Object.getOwnPropertyDescriptor,d=(r,s,c,i)=>{for(var t=i>1?void 0:i?z(s,c):s,l=r.length-1,p;l>=0;l--)(p=r[l])&&(t=p(t)||t);return t};let u=class extends e{};u=d([a("dre-checkbox-group")],u);let f=class extends e{};f=d([a("dre-radio-group")],f);let m=class extends e{};m=d([a("dre-toggle-group")],m);let x=class extends e{connectedCallback(){super.connectedCallback(),this.denseItems=!0}};x=d([a("dre-input-group")],x);let g=class extends e{connectedCallback(){super.connectedCallback(),this.denseItems=!0}};g=d([a("dre-dropdown-group")],g);
