import{i as J,a as Q,b as I}from"./iframe-BMlSAenk.js";import"./top-bar-DPQ29L9O.js";import"./secondary-top-bar-_LRz3lfw.js";import"./left-pane-C29NvFz1.js";import"./right-pane-BjoEL0iJ.js";import"./bottom-pane-D8sj__yM.js";import{n as P,t as X}from"./property-DjCj8DcD.js";import"./button-5aWZ5Cqh.js";import"./icon-DC5KmofD.js";import"./dropdown-CxhWsshh.js";import"./preload-helper-Dp1pzeXC.js";import"./styles-CNCx_--U.js";import"./accordion-ZyoOmXCc.js";import"./accordion-group-BYHDU8xg.js";import"./badge-DDVtm-NG.js";function A(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ee(e){if(Array.isArray(e))return e}function te(e,t,n){return(t=de(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ne(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,c=[],s=!0,p=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(s=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(E){p=!0,i=E}finally{try{if(!s&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(p)throw i}}return c}}function re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ie(e,t){if(e==null)return{};var n,r,i=oe(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function oe(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ae(e,t){return ee(e)||ne(e,t)||le(e,t)||re()}function se(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function de(e){var t=se(e,"string");return typeof t=="symbol"?t:t+""}function le(e,t){if(e){if(typeof e=="string")return A(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ue(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function v(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return t.apply(n,[].concat(i,c))}}}function _(e){return{}.toString.call(e).includes("Object")}function pe(e){return!Object.keys(e).length}function h(e){return typeof e=="function"}function fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function me(e,t){return _(t)||u("changeType"),Object.keys(t).some(function(n){return!fe(e,n)})&&u("changeField"),t}function ve(e){h(e)||u("selectorType")}function ge(e){h(e)||_(e)||u("handlerType"),_(e)&&Object.values(e).some(function(t){return!h(t)})&&u("handlersType")}function he(e){e||u("initialIsRequired"),_(e)||u("initialType"),pe(e)&&u("initialContent")}function ye(e,t){throw new Error(e[t]||e.default)}var be={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},u=v(ye)(be),w={changes:me,selector:ve,handler:ge,initial:he};function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.initial(e),w.handler(t);var n={current:e},r=v(_e)(n,t),i=v(Oe)(n),o=v(w.changes)(e),a=v(xe)(n);function c(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(E){return E};return w.selector(p),p(n.current)}function s(p){ue(r,i,o,a)(p)}return[c,s]}function xe(e,t){return h(t)?t(e.current):t}function Oe(e,t){return e.current=R(R({},e.current),t),t}function _e(e,t,n){return h(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var je={create:we},Pe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Se(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return t.apply(n,[].concat(i,c))}}}function Ee(e){return{}.toString.call(e).includes("Object")}function Ce(e){return e||B("configIsRequired"),Ee(e)||B("configType"),e.urls?(Te(),{paths:{vs:e.urls.monacoBase}}):e}function Te(){console.warn(W.deprecation)}function Ie(e,t){throw new Error(e[t]||e.default)}var W={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},B=Se(Ie)(W),De={config:Ce},ze=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function q(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],q(e[n],t[n]))}),$($({},e),t)}var Ae={type:"cancelation",msg:"operation is manually canceled"};function C(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(Ae):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Le=["monaco"],$e=je.create({config:Pe,isInitialized:!1,resolve:null,reject:null,monaco:null}),H=ae($e,2),y=H[0],S=H[1];function Me(e){var t=De.config(e),n=t.monaco,r=ie(t,Le);S(function(i){return{config:q(i.config,r),monaco:n}})}function Re(){var e=y(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(S({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),C(T);if(window.monaco&&window.monaco.editor)return V(window.monaco),e.resolve(window.monaco),C(T);ze(Be,Fe)(Ne)}return C(T)}function Be(e){return document.body.appendChild(e)}function ke(e){var t=document.createElement("script");return e&&(t.src=e),t}function Fe(e){var t=y(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=ke("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Ne(){var e=y(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;V(r),e.resolve(r)},function(n){e.reject(n)})}function V(e){y().monaco||S({monaco:e})}function Ue(){return y(function(e){var t=e.monaco;return t})}var T=new Promise(function(e,t){return S({resolve:e,reject:t})}),k={config:Me,init:Re,__getMonacoInstance:Ue},We=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},b=(e,t,n,r)=>{for(var i=r>1?void 0:r?qe(t,n):t,o=e.length-1,a;o>=0;o--)(a=e[o])&&(i=(r?a(t,n,i):a(i))||i);return r&&i&&We(t,n,i),i},z=(e,t,n)=>t.has(e)||G("Cannot "+n),d=(e,t,n)=>(z(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),D=(e,t,n,r)=>(z(e,t,"write to private field"),t.set(e,n),n),K=(e,t,n)=>(z(e,t,"access private method"),n),l,g,m,j,Z,Y;let f=class extends Q{constructor(){super(...arguments),x(this,j),this.value="",this.language="javascript",this.readOnly=!1,this.minimap=!1,x(this,l),x(this,g),x(this,m,document.createElement("div"))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.style.display="block",this.style.width="100%",this.style.height="100%",this.style.minHeight="0",this.style.position="relative",Object.assign(d(this,m).style,{position:"absolute",inset:"0",width:"100%",height:"100%"}),d(this,m).isConnected||this.appendChild(d(this,m)),K(this,j,Z).call(this)}disconnectedCallback(){var e;(e=d(this,l))==null||e.dispose(),D(this,l,void 0),super.disconnectedCallback()}updated(e){if(d(this,l)){if(e.has("value")&&d(this,l).getValue()!==this.value&&d(this,l).setValue(this.value),e.has("language")&&d(this,g)){const t=d(this,l).getModel();t&&d(this,g).editor.setModelLanguage(t,this.language)}(e.has("readOnly")||e.has("minimap"))&&d(this,l).updateOptions({readOnly:this.readOnly,minimap:{enabled:this.minimap}})}}render(){return I``}};l=new WeakMap;g=new WeakMap;m=new WeakMap;j=new WeakSet;Z=async function(){if(d(this,l))return;k.config({paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"}});const e=await k.init();D(this,g,e),K(this,j,Y).call(this,e),D(this,l,e.editor.create(d(this,m),{value:this.value,language:this.language==="deluge"?"deluge":this.language,readOnly:this.readOnly,automaticLayout:!0,minimap:{enabled:this.minimap},fontSize:13,lineHeight:20,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Space Mono', monospace",lineNumbers:"on",glyphMargin:!1,folding:!1,lineDecorationsWidth:16,lineNumbersMinChars:3,renderLineHighlight:"line",scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8},padding:{top:20,bottom:20},scrollBeyondLastLine:!1,overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,theme:"dre-light"})),d(this,l).onDidChangeModelContent(()=>{var n;const t=((n=d(this,l))==null?void 0:n.getValue())??"";t!==this.value&&(this.value=t,this.dispatchEvent(new CustomEvent("dre-change",{detail:{value:t},bubbles:!0,composed:!0})))})};Y=function(e){e.languages.getLanguages().some(t=>t.id==="deluge")||(e.languages.register({id:"deluge"}),e.languages.setMonarchTokensProvider("deluge",{keywords:["if","else","for","while","return","info","alert","true","false","null"],tokenizer:{root:[[new RegExp("//.*$"),"comment"],[new RegExp('"(?:[^"\\\\]|\\\\.)*"'),"string"],[new RegExp("\\b(?:if|else|for|while|return|info|alert|true|false|null)\\b"),"keyword"],[new RegExp("\\b[a-zA-Z_][\\w]*\\b"),"identifier"],[new RegExp("[=<>!]+"),"operator"],[new RegExp("[(){}\\[\\]]+"),"delimiter"],[new RegExp("\\d+(?:\\.\\d+)?"),"number"]]}})),e.editor.defineTheme("dre-light",{base:"vs",inherit:!0,rules:[{token:"comment",foreground:"5d6481"},{token:"string",foreground:"089949"},{token:"keyword",foreground:"0d6dfd"},{token:"identifier",foreground:"0d6dfd"},{token:"number",foreground:"13141a"}],colors:{"editor.background":"#ffffff","editor.foreground":"#13141a","editorLineNumber.foreground":"#8c92ac","editorLineNumber.activeForeground":"#5d6481","editor.lineHighlightBackground":"#f7f7f9","editor.selectionBackground":"#bdd8fe66","editorCursor.foreground":"#0d6dfd","editorIndentGuide.background":"#e6e8ed"}})};f.styles=J`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
      position: relative;
    }
  `;b([P()],f.prototype,"value",2);b([P()],f.prototype,"language",2);b([P({type:Boolean,attribute:"read-only"})],f.prototype,"readOnly",2);b([P({type:Boolean})],f.prototype,"minimap",2);f=b([X("dre-monaco-editor")],f);const lt={title:"App Layout Composition",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Full IDE shell composed from **Patterns & Layouts**: Top Bar, Secondary Top Bar, Left Pane, Right Pane, Bottom Pane — with Monaco editor in the center."}}}},He=`// Notify Participants Deluge script
app = my_first_app;
form = Customer_order;
record = form[ID == input.id];
if (record.Status == "Active")
{
 info "Processing active record: " + record.Name;
 notify_participants(record.ID, "Order status updated");
}
else {
 alert "Inactive record detected";
}
`,Ve=[{name:"Added_Time",type:"Date-time"},{name:"Added_User",type:"Text"},{name:"Added_User_IP_Address",type:"Number"},{name:"Code",type:"Text"},{name:"ID",type:"Text"},{name:"Modified_Time",type:"Date-time"},{name:"Modified_User",type:"Text"},{name:"Modified_User_IP_Address",type:"Text"},{name:"Name",type:"Text"},{name:"Type",type:"Text"}],Ge=`
  .shell {
    width: 1440px;
    max-width: 100%;
    height: 1024px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0;
    background: #f3f3f6;
    overflow: hidden;
    font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
  }
  .secondary-wrap {
    padding: 4px 10px 0;
    flex: 0 0 auto;
  }
  .workspace {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: row;
    padding: 4px 10px 0;
    gap: 0;
  }
  .editor {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e6e8ed;
    border-top: 0;
    border-bottom: 0;
  }
  .editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 8px 16px;
    background: #f3f3f6;
    box-sizing: border-box;
  }
  .active-file {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    line-height: 16px;
    color: #13141a;
    font-weight: 500;
  }
  .editor-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .editor-body {
    flex: 1;
    min-height: 0;
    position: relative;
  }
  .section {
    border-bottom: 1px solid #f3f3f6;
    padding: 14px 16px;
    box-sizing: border-box;
  }
  .section-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .section-title {
    font-size: 13px;
    line-height: 16px;
    color: #13141a;
  }
  .config {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .field-label {
    font-size: 12px;
    line-height: 15px;
    color: #5d6481;
  }
  .fields-list {
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e8ed;
    border-radius: 4px;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
  }
  .field-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 10px;
    border-bottom: 1px solid #f3f3f6;
    font-size: 12px;
  }
  .field-row:last-child { border-bottom: 0; }
  .field-name { color: #13141a; }
  .field-type { color: #5d6481; }
  .spacer { flex: 1; min-height: 8px; }
  .test-action {
    border-top: 1px solid #e6e8ed;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .test-desc {
    margin: 0;
    font-size: 11px;
    line-height: 18px;
    color: #5d6481;
  }
  .bottom-wrap {
    flex: 0 0 auto;
    padding: 0 10px 8px;
  }
`,O={name:"IDE",render:()=>I`
    <style>
      ${Ge}
    </style>
    <div class="shell" data-figma="patterns-layouts-composition">
      <!-- 1. Top Bar -->
      <dre-top-bar
        brand="Deluge"
        .tabs=${[{id:"settings",label:"Settings",active:!0,icon:"settings"}]}
      ></dre-top-bar>

      <!-- 2. Secondary Top Bar -->
      <div class="secondary-wrap">
        <dre-secondary-top-bar
          type="code-editor"
          active-mode="code"
          unsaved-text="4 Unsaved changes"
        ></dre-secondary-top-bar>
      </div>

      <div class="workspace">
        <!-- 3. Left Pane -->
        <dre-left-pane state="collapsed"></dre-left-pane>

        <main class="editor" aria-label="Code editor">
          <div class="editor-header">
            <div class="active-file">
              <dre-icon name="file" size="14"></dre-icon>
              <span>on_success.dg</span>
            </div>
            <div class="editor-actions">
              <dre-button hierarchy="secondary" size="xsmall">Button</dre-button>
              <dre-button hierarchy="primary" size="xsmall">Button</dre-button>
            </div>
          </div>
          <div class="editor-body">
            <dre-monaco-editor language="deluge" .value=${He}></dre-monaco-editor>
          </div>
        </main>

        <!-- 4. Right Pane -->
        <dre-right-pane title="Fields">
          <div class="section">
            <div class="section-row">
              <span class="section-title">Fields</span>
              <dre-icon name="chevron-down" size="16"></dre-icon>
            </div>
          </div>

          <div class="section" style="border-bottom:0;padding:0;">
            <div class="section-row" style="padding:14px 16px;">
              <span class="section-title">Configuration</span>
              <dre-icon name="chevron-down" size="16"></dre-icon>
            </div>
            <div class="config">
              <div class="field">
                <span class="field-label">Application</span>
                <dre-dropdown
                  style="max-width:100%;width:100%;"
                  size="medium"
                  display-value="my_first_app"
                  value="my_first_app"
                >
                  <dre-dropdown-item label="my_first_app" selected></dre-dropdown-item>
                  <dre-dropdown-item label="crm_app"></dre-dropdown-item>
                </dre-dropdown>
              </div>
              <div class="field">
                <span class="field-label">Form</span>
                <dre-dropdown
                  style="max-width:100%;width:100%;"
                  size="medium"
                  display-value="Customer_order"
                  value="Customer_order"
                >
                  <dre-dropdown-item label="Customer_order" selected></dre-dropdown-item>
                  <dre-dropdown-item label="Leads"></dre-dropdown-item>
                </dre-dropdown>
              </div>
              <div class="field">
                <span class="field-label">Fields</span>
                <div class="fields-list">
                  ${Ve.map(e=>I`
                      <div class="field-row">
                        <span class="field-name">${e.name}</span>
                        <span class="field-type">${e.type}</span>
                      </div>
                    `)}
                </div>
              </div>
            </div>
          </div>

          <div class="spacer"></div>

          <div class="test-action" slot="footer">
            <div class="section-row">
              <span class="section-title">Test Action</span>
              <dre-button hierarchy="secondary" size="xsmall">Validate</dre-button>
            </div>
            <p class="test-desc">
              Validate this action to confirm its configuration, so that the data can be passed
              forward.
            </p>
          </div>
        </dre-right-pane>
      </div>

      <!-- 5. Bottom Pane -->
      <div class="bottom-wrap">
        <dre-bottom-pane
          state="collapsed"
          error-count="5"
          info-count="1"
          last-edited="Last edited by kamal"
          line-column="Ln15:Col 1 ( 1 Selected)"
          language="Deluge"
        ></dre-bottom-pane>
      </div>
    </div>
  `};var F,N,U;O.parameters={...O.parameters,docs:{...(F=O.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'IDE',
  render: () => html\`
    <style>
      \${shellCss}
    </style>
    <div class="shell" data-figma="patterns-layouts-composition">
      <!-- 1. Top Bar -->
      <dre-top-bar
        brand="Deluge"
        .tabs=\${[{
    id: 'settings',
    label: 'Settings',
    active: true,
    icon: 'settings'
  }]}
      ></dre-top-bar>

      <!-- 2. Secondary Top Bar -->
      <div class="secondary-wrap">
        <dre-secondary-top-bar
          type="code-editor"
          active-mode="code"
          unsaved-text="4 Unsaved changes"
        ></dre-secondary-top-bar>
      </div>

      <div class="workspace">
        <!-- 3. Left Pane -->
        <dre-left-pane state="collapsed"></dre-left-pane>

        <main class="editor" aria-label="Code editor">
          <div class="editor-header">
            <div class="active-file">
              <dre-icon name="file" size="14"></dre-icon>
              <span>on_success.dg</span>
            </div>
            <div class="editor-actions">
              <dre-button hierarchy="secondary" size="xsmall">Button</dre-button>
              <dre-button hierarchy="primary" size="xsmall">Button</dre-button>
            </div>
          </div>
          <div class="editor-body">
            <dre-monaco-editor language="deluge" .value=\${DELUGE_SAMPLE}></dre-monaco-editor>
          </div>
        </main>

        <!-- 4. Right Pane -->
        <dre-right-pane title="Fields">
          <div class="section">
            <div class="section-row">
              <span class="section-title">Fields</span>
              <dre-icon name="chevron-down" size="16"></dre-icon>
            </div>
          </div>

          <div class="section" style="border-bottom:0;padding:0;">
            <div class="section-row" style="padding:14px 16px;">
              <span class="section-title">Configuration</span>
              <dre-icon name="chevron-down" size="16"></dre-icon>
            </div>
            <div class="config">
              <div class="field">
                <span class="field-label">Application</span>
                <dre-dropdown
                  style="max-width:100%;width:100%;"
                  size="medium"
                  display-value="my_first_app"
                  value="my_first_app"
                >
                  <dre-dropdown-item label="my_first_app" selected></dre-dropdown-item>
                  <dre-dropdown-item label="crm_app"></dre-dropdown-item>
                </dre-dropdown>
              </div>
              <div class="field">
                <span class="field-label">Form</span>
                <dre-dropdown
                  style="max-width:100%;width:100%;"
                  size="medium"
                  display-value="Customer_order"
                  value="Customer_order"
                >
                  <dre-dropdown-item label="Customer_order" selected></dre-dropdown-item>
                  <dre-dropdown-item label="Leads"></dre-dropdown-item>
                </dre-dropdown>
              </div>
              <div class="field">
                <span class="field-label">Fields</span>
                <div class="fields-list">
                  \${FIELD_ROWS.map(f => html\`
                      <div class="field-row">
                        <span class="field-name">\${f.name}</span>
                        <span class="field-type">\${f.type}</span>
                      </div>
                    \`)}
                </div>
              </div>
            </div>
          </div>

          <div class="spacer"></div>

          <div class="test-action" slot="footer">
            <div class="section-row">
              <span class="section-title">Test Action</span>
              <dre-button hierarchy="secondary" size="xsmall">Validate</dre-button>
            </div>
            <p class="test-desc">
              Validate this action to confirm its configuration, so that the data can be passed
              forward.
            </p>
          </div>
        </dre-right-pane>
      </div>

      <!-- 5. Bottom Pane -->
      <div class="bottom-wrap">
        <dre-bottom-pane
          state="collapsed"
          error-count="5"
          info-count="1"
          last-edited="Last edited by kamal"
          line-column="Ln15:Col 1 ( 1 Selected)"
          language="Deluge"
        ></dre-bottom-pane>
      </div>
    </div>
  \`
}`,...(U=(N=O.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const ct=["IDE"];export{O as IDE,ct as __namedExportsOrder,lt as default};
