import{i as k,a as x,A as y,b as w,w as c}from"./iframe-hYZkyXvR.js";import{n as l,t as m}from"./property-BSL9Me-Y.js";import{h as b}from"./styles-BGRCfbQF.js";var _=Object.defineProperty,D=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},n=(t,e,o,s)=>{for(var r=s>1?void 0:s?D(e,o):e,p=t.length-1,d;p>=0;p--)(d=t[p])&&(r=(s?d(e,o,r):d(r))||r);return s&&r&&_(e,o,r),r},M=(t,e,o)=>e.has(t)||f("Cannot "+o),L=(t,e,o)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),h=(t,e,o)=>(M(t,e,"access private method"),o),i,u,g,v;let a=class extends x{constructor(){super(...arguments),L(this,i),this.appearance="light",this.type="success",this.tone="success",this.title="",this.message=""}render(){const t=h(this,i,u).call(this),e=this.appearance==="dark",o=this.message||this.title;return w`
      <div class="toast" part="toast" role="status" aria-live=${t==="error"?"assertive":"polite"}>
        <div class="content" part="content">
          <div class="body" part="body">
            <span class="icon" part="icon">
              <slot name="icon">${h(this,i,g).call(this,t,e)}</slot>
            </span>
            <div class="message" part="message"><slot>${o||y}</slot></div>
          </div>
          <button class="close" type="button" aria-label="Dismiss" @click=${h(this,i,v)}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
              <path
                d="M8.5 8.5L4.5 4.5M4.5 4.5L0.5 0.5M4.5 4.5L8.5 0.5M4.5 4.5L0.5 8.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    `}};i=new WeakSet;u=function(){const t=this.type||this.tone;return t==="danger"||t==="error"?"error":t==="information"||t==="neutral"||t==="info"?"info":t==="warning"?"warning":"success"};g=function(t,e){return t==="success"?c`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect width="16" height="16" rx="8" fill=${e?"#6DBF71":"#55B45A"} />
          <path d="M5.6 8L7.2 9.6L10.4 6.4" stroke="#EEF5FF" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `:t==="warning"?c`
        <svg width="16" height="14" viewBox="0 0 15.8594 14" fill="none" aria-hidden="true">
          <path
            d="M7.06367 0.5C7.44857 -0.166666 8.41082 -0.166667 8.79572 0.5L15.7239 12.5C16.1088 13.1667 15.6277 14 14.8579 14H1.00149C0.231692 14 -0.249434 13.1667 0.135466 12.5L7.06367 0.5Z"
            fill=${e?"#EFC03D":"#EDB51D"}
          />
          <path
            d="M7.95044 6V9.33333M7.97119 11V11.0417L7.92969 11.0417V11H7.97119Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `:t==="error"?c`
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="8" fill=${e?"#DC5E50":"#D64333"} />
          <path
            d="M10.5 5.5L5.5 10.5M5.5 5.5l5 5"
            stroke="#F3F3F4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `:c`
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="8" fill=${e?"#4F98DD":"#3187D8"} />
        <path
          d="M8.02026 11.042V7.70866M7.99951 6.04199V6.00033L8.04102 6.00024V6.04199H7.99951Z"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `};v=function(){this.dispatchEvent(new CustomEvent("dre-close",{bubbles:!0,composed:!0}))};a.styles=[b,k`
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
        box-shadow:
          0 1px 2px rgba(0, 0, 0, 0.06),
          0 2px 4px rgba(0, 0, 0, 0.04);
      }

      .content {
        display: flex;
        align-items: center;
        gap: 24px;
        flex: 1;
        min-width: 0;
      }

      .body {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 0;
      }

      .icon {
        flex: 0 0 auto;
        display: inline-flex;
        line-height: 0;
      }

      .icon svg {
        display: block;
      }

      .message {
        flex: 1;
        min-width: 0;
        font-size: 14px;
        line-height: normal;
        color: #13141a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .close {
        flex: 0 0 auto;
        width: 16px;
        height: 16px;
        border: 0;
        padding: 0;
        background: transparent;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        color: #727999;
      }

      .close:hover {
        opacity: 0.85;
      }

      .close svg {
        display: block;
      }

      /* —— Light fills —— */
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

      /* —— Dark fills —— */
      :host([appearance='dark'][type='success']) .toast,
      :host([appearance='dark'][tone='success']) .toast {
        background: #112712;
      }
      :host([appearance='dark'][type='warning']) .toast,
      :host([appearance='dark'][tone='warning']) .toast {
        background: #463506;
      }
      :host([appearance='dark'][type='error']) .toast,
      :host([appearance='dark'][tone='error']) .toast,
      :host([appearance='dark'][tone='danger']) .toast {
        background: #3f120d;
      }
      :host([appearance='dark'][type='info']) .toast,
      :host([appearance='dark'][tone='info']) .toast,
      :host([appearance='dark'][tone='information']) .toast,
      :host([appearance='dark'][tone='neutral']) .toast {
        background: #051335;
      }

      :host([appearance='dark']) .message {
        color: #e3e4e6;
      }

      :host([appearance='dark']) .close {
        color: #a0a4ab;
      }
    `];n([l({reflect:!0})],a.prototype,"appearance",2);n([l({reflect:!0})],a.prototype,"type",2);n([l({reflect:!0})],a.prototype,"tone",2);n([l()],a.prototype,"title",2);n([l()],a.prototype,"message",2);a=n([m("dre-toast")],a);
