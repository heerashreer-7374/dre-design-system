import{i as g,a as m,b as y}from"./iframe-BMlSAenk.js";import{n as c,t as v}from"./property-DjCj8DcD.js";import{h as x}from"./styles-CNCx_--U.js";import"./icon-DC5KmofD.js";var _=Object.defineProperty,b=Object.getOwnPropertyDescriptor,d=t=>{throw TypeError(t)},n=(t,e,s,a)=>{for(var o=a>1?void 0:a?b(e,s):e,p=t.length-1,l;p>=0;p--)(l=t[p])&&(o=(a?l(e,s,o):l(o))||o);return a&&o&&_(e,s,o),o},w=(t,e,s)=>e.has(t)||d("Cannot "+s),k=(t,e,s)=>e.has(t)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),h=(t,e,s)=>(w(t,e,"access private method"),s),i,f,u;const C={success:"correct",warning:"warning",error:"error",info:"info"};let r=class extends m{constructor(){super(...arguments),k(this,i),this.type="success",this.tone="success",this.title="",this.message=""}render(){const t=h(this,i,f).call(this),e=C[t],s=this.message||this.title;return y`
      <div class="toast" part="toast" role="status">
        <span class="icon" part="icon">
          <slot name="icon"><dre-icon name=${e} size="16"></dre-icon></slot>
        </span>
        <div class="message" part="message"><slot>${s}</slot></div>
        <button class="close" type="button" aria-label="Dismiss" @click=${h(this,i,u)}>
          <dre-icon name="x" size="10"></dre-icon>
        </button>
      </div>
    `}};i=new WeakSet;f=function(){const t=this.type||this.tone;return t==="danger"||t==="error"?"error":t==="information"||t==="neutral"||t==="info"?"info":t==="warning"?"warning":"success"};u=function(){this.dispatchEvent(new CustomEvent("dre-close",{bubbles:!0,composed:!0}))};r.styles=[x,g`
      :host {
        display: block;
        width: 314px;
        max-width: 100%;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .toast {
        display: flex;
        align-items: center;
        gap: 10px;
        min-height: 48px;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 4px;
        background: #e7f4e7;
      }

      :host([type='success']) .toast,
      :host([tone='success']) .toast {
        background: #e7f4e7;
      }
      :host([type='warning']) .toast,
      :host([tone='warning']) .toast {
        background: #fcf4df;
      }
      :host([type='error']) .toast,
      :host([tone='error']) .toast,
      :host([tone='danger']) .toast {
        background: #f9e4e2;
      }
      :host([type='info']) .toast,
      :host([tone='info']) .toast,
      :host([tone='information']) .toast,
      :host([tone='neutral']) .toast {
        background: #e2eef9;
      }

      .icon {
        flex: 0 0 auto;
        display: inline-flex;
        color: #13141a;
        line-height: 0;
      }

      .message {
        flex: 1;
        min-width: 0;
        font-size: 14px;
        line-height: 16px;
        color: #13141a;
      }

      .close {
        flex: 0 0 auto;
        width: 16px;
        height: 16px;
        border: 0;
        padding: 0;
        background: transparent;
        color: #727999;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
      }

      .close:hover {
        color: #383c4d;
      }
    `];n([c({reflect:!0})],r.prototype,"type",2);n([c({reflect:!0})],r.prototype,"tone",2);n([c()],r.prototype,"title",2);n([c()],r.prototype,"message",2);r=n([v("dre-toast")],r);
