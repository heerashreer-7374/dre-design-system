import{i as w,a as k,A as m,b as p}from"./iframe-hYZkyXvR.js";import{n as r,t as C}from"./property-BSL9Me-Y.js";import{h as E}from"./styles-BGRCfbQF.js";var D=Object.defineProperty,O=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},n=(e,t,s,o)=>{for(var a=o>1?void 0:o?O(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(o?d(t,s,a):d(a))||a);return o&&a&&D(t,s,a),a},$=(e,t,s)=>t.has(e)||S("Cannot "+s),c=(e,t,s)=>($(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_=(e,t,s)=>($(e,t,"access private method"),s),f,g,h,v;let i=class extends k{constructor(){super(...arguments),b(this,f),this.value="",this.mode="default",this.active=!1,this.disabled=!1,this.hovered=!1,this.enclosed=!1,this.count="",b(this,h,()=>{var e;this.disabled||this.dispatchEvent(new CustomEvent("dre-tab-select",{detail:{value:this.value||((e=this.textContent)==null?void 0:e.trim())},bubbles:!0,composed:!0}))}),b(this,v,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),c(this,h).call(this))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab"),_(this,f,g).call(this),this.addEventListener("click",c(this,h)),this.addEventListener("keydown",c(this,v))}disconnectedCallback(){this.removeEventListener("click",c(this,h)),this.removeEventListener("keydown",c(this,v)),super.disconnectedCallback()}updated(e){(e.has("active")||e.has("disabled"))&&_(this,f,g).call(this)}render(){const e=this.mode==="icon"||this.mode==="both",t=this.mode==="badge"||this.mode==="both",s=this.count.trim();return p`
      <div class="tab" part="tab">
        <span class="content">
          <span class="label-group">
            ${e?p`<span class="icon"><slot name="icon"></slot></span>`:m}
            <slot></slot>
          </span>
          ${t?s?p`<span class="badge">${s}</span>`:p`<span class="badge-slot"><slot name="badge"></slot></span>`:m}
        </span>
        <span class="indicator" part="indicator"></span>
      </div>
    `}};f=new WeakSet;g=function(){this.setAttribute("aria-selected",this.active?"true":"false"),this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"),this.tabIndex=this.disabled?-1:0};h=new WeakMap;v=new WeakMap;i.styles=[E,w`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .tab {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin: 0;
        padding: 10px 12px 0;
        border: 0;
        background: transparent;
        color: #5d6481;
        font: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
        box-sizing: border-box;
      }

      .content {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        min-height: 16px;
      }

      .label-group {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }

      .indicator {
        width: 100%;
        height: 2px;
        border-radius: 1px;
        background: transparent;
      }

      :host([active]) .tab {
        color: #0d6dfd;
      }

      :host([active]) .indicator {
        background: #0d6dfd;
      }

      :host(:not([active]):not([disabled]):hover) .indicator,
      :host([hovered]:not([active]):not([disabled])) .indicator {
        background: #8c92ac;
      }

      :host([disabled]) .tab {
        color: #8c92ac;
        cursor: not-allowed;
      }

      :host(:focus) {
        outline: none;
      }

      :host(:focus-visible) .tab {
        outline: 2px solid #0d6dfd;
        outline-offset: 2px;
      }

      /* Enclosed track (Tab Group Style=Enclosed) */
      :host([enclosed]) .tab {
        padding: 6px 12px;
        border-radius: 2px;
      }

      :host([enclosed][active]) .tab {
        background: #ffffff;
        color: #0d6dfd;
      }

      :host([enclosed]) .indicator {
        display: none;
      }

      .icon {
        display: inline-flex;
        width: 16px;
        height: 16px;
        align-items: center;
        justify-content: center;
        line-height: 0;
        color: inherit;
        flex-shrink: 0;
      }

      .icon ::slotted(*) {
        width: 16px;
        height: 16px;
      }

      .badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border-radius: 34px;
        border: 1px solid #d6d8e1;
        font-size: 12px;
        line-height: normal;
        color: #5d6481;
        flex-shrink: 0;
      }

      :host([active]) .badge {
        border-color: #0d6dfd;
        color: #0d6dfd;
      }

      :host(:not([active]):not([disabled]):hover) .badge,
      :host([hovered]:not([active]):not([disabled])) .badge {
        border-color: #5d6481;
      }

      :host([disabled]) .badge {
        border-color: #8c92ac;
        color: #8c92ac;
      }

      .badge-slot {
        display: inline-flex;
        line-height: 0;
      }
    `];n([r()],i.prototype,"value",2);n([r({reflect:!0})],i.prototype,"mode",2);n([r({type:Boolean,reflect:!0})],i.prototype,"active",2);n([r({type:Boolean,reflect:!0})],i.prototype,"disabled",2);n([r({type:Boolean,reflect:!0})],i.prototype,"hovered",2);n([r({type:Boolean,reflect:!0})],i.prototype,"enclosed",2);n([r()],i.prototype,"count",2);i=n([C("dre-tab")],i);var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},x=(e,t,s,o)=>{for(var a=o>1?void 0:o?B(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(a=(o?d(t,s,a):d(a))||a);return o&&a&&T(t,s,a),a},W=(e,t,s)=>t.has(e)||A("Cannot "+s),z=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),G=(e,t,s)=>(W(e,t,"access private method"),s),y,P;let u=class extends k{constructor(){super(...arguments),z(this,y),this.value="",this.groupStyle="default"}updated(e){if(e.has("groupStyle"))for(const t of this.querySelectorAll("dre-tab"))t.enclosed=this.groupStyle==="enclosed"}render(){return p`
      <div class="bar" part="bar">
        <div class="tabs" role="tablist" @dre-tab-select=${G(this,y,P)}>
          <slot></slot>
        </div>
        <div class="divider" part="divider"></div>
      </div>
      <div class="panel" part="panel"><slot name="panel"></slot></div>
    `}};y=new WeakSet;P=function(e){var s;const t=e.detail;this.value=t.value;for(const o of this.querySelectorAll("dre-tab"))o.active=o.value===this.value||((s=o.textContent)==null?void 0:s.trim())===this.value;this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:this.value},bubbles:!0,composed:!0}))};u.styles=[E,w`
      :host {
        display: block;
        width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .tabs {
        display: flex;
        align-items: flex-end;
        gap: 0;
      }

      :host([group-style='default']) .bar,
      :host(:not([group-style])) .bar {
        display: flex;
        flex-direction: column;
      }

      :host([group-style='default']) .divider,
      :host(:not([group-style])) .divider {
        height: 1px;
        background: #e0e0e0;
        margin-top: -1px;
      }

      :host([group-style='enclosed']) .tabs {
        background: #f5f5f7;
        padding: 4px;
        border-radius: 4px;
        align-items: center;
      }

      :host([group-style='enclosed']) .divider {
        display: none;
      }

      .panel {
        padding: 16px 0;
        color: #5d6481;
        font-size: 14px;
      }
    `];x([r()],u.prototype,"value",2);x([r({reflect:!0,attribute:"group-style"})],u.prototype,"groupStyle",2);u=x([C("dre-tab-group")],u);
