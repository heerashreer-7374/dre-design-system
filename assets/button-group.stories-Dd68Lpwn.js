import{i as G,a as D,b as l}from"./iframe-CxxUV_ql.js";import{n as y,t as C}from"./property-BAmm2Bkg.js";import{h as O}from"./styles-DnIXmjyS.js";import"./button-BJBZnisn.js";import{f as U}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";var w=Object.defineProperty,F=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},b=(t,e,r,i)=>{for(var o=i>1?void 0:i?F(e,r):e,m=t.length-1,c;m>=0;m--)(c=t[m])&&(o=(i?c(e,r,o):c(o))||o);return i&&o&&w(e,r,o),o},E=(t,e,r)=>e.has(t)||$("Cannot "+r),A=(t,e,r)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),g=(t,e,r)=>(E(t,e,"access private method"),r),u,p;let n=class extends D{constructor(){super(...arguments),A(this,u),this.size="medium",this.orientation="horizontal",this.groupStyle="uniform"}updated(t){(t.has("size")||t.has("groupStyle")||t.has("orientation")||t.size===0)&&g(this,u,p).call(this)}firstUpdated(){g(this,u,p).call(this)}render(){return l`<div class="group" part="group" role="group"><slot @slotchange=${g(this,u,p)}></slot></div>`}};u=new WeakSet;p=function(){[...this.querySelectorAll("dre-button")].forEach((e,r)=>{e.size=this.size,this.groupStyle==="uniform"?e.hierarchy="secondary":e.hierarchy=r===0?"primary":r===1?"secondary":"ghost"})};n.styles=[O,G`
      :host {
        display: inline-flex;
        font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
      }

      .group {
        display: inline-flex;
        gap: 8px;
        align-items: center;
      }

      :host([orientation='vertical']) .group {
        flex-direction: column;
        align-items: stretch;
      }

      :host([orientation='vertical']) ::slotted(dre-button) {
        width: 100%;
      }
    `];b([y({reflect:!0})],n.prototype,"size",2);b([y({reflect:!0})],n.prototype,"orientation",2);b([y({reflect:!0,attribute:"group-style"})],n.prototype,"groupStyle",2);n=b([C("dre-button-group")],n);const j={title:"Assembled Components/Button Group",component:"dre-button-group",tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]},orientation:{control:"select",options:["horizontal","vertical"]},groupStyle:{control:"select",options:["uniform","split"],name:"group-style"}},args:{size:"medium",orientation:"horizontal",groupStyle:"uniform"},parameters:{docs:{description:{component:`Figma **💠 Button Group** ${U("12045:29952")} — Size · Orientation · Style Uniform/Split · gap 8.`}}}},s={render:t=>l`
    <dre-button-group
      size=${t.size}
      orientation=${t.orientation}
      group-style=${t.groupStyle}
    >
      <dre-button>Button</dre-button>
      <dre-button>Button</dre-button>
      <dre-button>Button</dre-button>
    </dre-button-group>
  `},d={name:"Features / Uniform",render:()=>l`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-button-group size="medium" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
      <dre-button-group size="small" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
      <dre-button-group size="medium" orientation="vertical" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
    </div>
  `},a={name:"Features / Split",render:()=>l`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-button-group size="medium" group-style="split">
        <dre-button>Primary</dre-button>
        <dre-button>Secondary</dre-button>
        <dre-button>Ghost</dre-button>
      </dre-button-group>
      <dre-button-group size="small" orientation="vertical" group-style="split">
        <dre-button>Primary</dre-button>
        <dre-button>Secondary</dre-button>
        <dre-button>Ghost</dre-button>
      </dre-button-group>
    </div>
  `};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`
    <dre-button-group
      size=\${args.size}
      orientation=\${args.orientation}
      group-style=\${args.groupStyle}
    >
      <dre-button>Button</dre-button>
      <dre-button>Button</dre-button>
      <dre-button>Button</dre-button>
    </dre-button-group>
  \`
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,z,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Features / Uniform',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-button-group size="medium" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
      <dre-button-group size="small" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
      <dre-button-group size="medium" orientation="vertical" group-style="uniform">
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
        <dre-button>Button</dre-button>
      </dre-button-group>
    </div>
  \`
}`,...(S=(z=d.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var x,_,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Features / Split',
  render: () => html\`
    <div style="display:flex;flex-direction:column;gap:24px;">
      <dre-button-group size="medium" group-style="split">
        <dre-button>Primary</dre-button>
        <dre-button>Secondary</dre-button>
        <dre-button>Ghost</dre-button>
      </dre-button-group>
      <dre-button-group size="small" orientation="vertical" group-style="split">
        <dre-button>Primary</dre-button>
        <dre-button>Secondary</dre-button>
        <dre-button>Ghost</dre-button>
      </dre-button-group>
    </div>
  \`
}`,...(P=(_=a.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const H=["Default","Uniform","Split"];export{s as Default,a as Split,d as Uniform,H as __namedExportsOrder,j as default};
