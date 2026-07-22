import{b as n}from"./iframe-GA3ktVQc.js";import"./top-bar-Da2ocHlH.js";import"./left-pane-uyKuSNva.js";import"./right-pane-CNdZQUqL.js";import"./button-CFNMCiNm.js";import"./icon-Btw80okq.js";import"./dropdown-MW9v-uEQ.js";import"./preload-helper-Dp1pzeXC.js";import"./property-rkDd5alT.js";import"./styles-_scQb5lY.js";import"./accordion-83-Z8vEA.js";import"./accordion-group-CQMzXM78.js";const w={title:"App Layout Composition",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Figma **App Layout Composition** frame `deluge-ide-notify-participants` (1440×1024) — Top Bar + collapsed Left Pane + code editor + Fields right pane."}}}},o=[{n:1,text:"// Notify Participants Deluge script",kind:"comment"},{n:2,text:"app = my_first_app;",kind:"code"},{n:3,text:"form = Customer_order;",kind:"code"},{n:4,text:"record = form[ID == input.id];",kind:"code"},{n:5,text:'if (record.Status == "Active")',kind:"code"},{n:6,text:"{",kind:"brace"},{n:7,text:' info "Processing active record: " + record.Name;',kind:"code"},{n:8,text:' notify_participants(record.ID, "Order status updated");',kind:"code"},{n:9,text:"}",kind:"brace"},{n:10,text:"else {",kind:"code"},{n:11,text:' alert "Inactive record detected";',kind:"code"},{n:12,text:"}",kind:"brace"}],a=[{name:"Added_Time",type:"Date-time"},{name:"Added_User",type:"Text"},{name:"Added_User_IP_Address",type:"Number"},{name:"Code",type:"Text"},{name:"ID",type:"Text"},{name:"Modified_Time",type:"Date-time"},{name:"Modified_User",type:"Text"},{name:"Modified_User_IP_Address",type:"Text"},{name:"Name",type:"Text"},{name:"Type",type:"Text"}],r=`
  .shell {
    width: 1440px;
    max-width: 100%;
    height: 1024px;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f3f3f6;
    overflow: hidden;
    font-family: var(--dre-font-family-primary, 'Zoho Puvi', system-ui, sans-serif);
  }
  .workspace {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: row;
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
  }
  .editor-actions {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .editor-body {
    flex: 1;
    overflow: auto;
    padding: 20px 8px;
    box-sizing: border-box;
  }
  .line {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    min-height: 20px;
    font-size: 13px;
    line-height: 20px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  }
  .gutter {
    width: 32px;
    flex: 0 0 32px;
    text-align: right;
    color: #8c92ac;
    user-select: none;
  }
  .code { flex: 1; min-width: 0; color: #13141a; white-space: pre; }
  .code.comment { color: #5d6481; }
  .code.brace { color: #13141a; }

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
    gap: 0;
    border: 1px solid #e6e8ed;
    border-radius: 4px;
    overflow: hidden;
    max-height: 394px;
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
  .spacer { flex: 1; min-height: 16px; }
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
`,i={name:"IDE",render:()=>n`
    <style>
      ${r}
    </style>
    <div class="shell" data-figma="deluge-ide-notify-participants">
      <dre-top-bar
        brand="DRE"
        .tabs=${[{id:"settings",label:"Settings",active:!0,icon:"settings"}]}
      ></dre-top-bar>

      <div class="workspace">
        <dre-left-pane
          state="collapsed"
          .railIcons=${["syntax","cable","code"]}
        ></dre-left-pane>

        <main class="editor" aria-label="Code editor">
          <div class="editor-header">
            <div class="active-file">
              <dre-icon name="code" size="14"></dre-icon>
              <span>on_success.dg</span>
            </div>
            <div class="editor-actions">
              <dre-button hierarchy="secondary" size="xsmall">Button</dre-button>
              <dre-button hierarchy="primary" size="xsmall">Button</dre-button>
            </div>
          </div>
          <div class="editor-body">
            ${o.map(e=>n`
                <div class="line">
                  <span class="gutter">${e.n}</span>
                  <span class="code ${e.kind??"code"}">${e.text}</span>
                </div>
              `)}
          </div>
        </main>

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
                  ${a.map(e=>n`
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
              <dre-button hierarchy="secondary" size="xsmall">Button</dre-button>
            </div>
            <p class="test-desc">
              Validate this action to confirm its configuration, so that the data can be passed
              forward to the next block.
            </p>
          </div>
        </dre-right-pane>
      </div>
    </div>
  `};var d,t,s;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'IDE',
  render: () => html\`
    <style>
      \${shellCss}
    </style>
    <div class="shell" data-figma="deluge-ide-notify-participants">
      <dre-top-bar
        brand="DRE"
        .tabs=\${[{
    id: 'settings',
    label: 'Settings',
    active: true,
    icon: 'settings'
  }]}
      ></dre-top-bar>

      <div class="workspace">
        <dre-left-pane
          state="collapsed"
          .railIcons=\${['syntax', 'cable', 'code']}
        ></dre-left-pane>

        <main class="editor" aria-label="Code editor">
          <div class="editor-header">
            <div class="active-file">
              <dre-icon name="code" size="14"></dre-icon>
              <span>on_success.dg</span>
            </div>
            <div class="editor-actions">
              <dre-button hierarchy="secondary" size="xsmall">Button</dre-button>
              <dre-button hierarchy="primary" size="xsmall">Button</dre-button>
            </div>
          </div>
          <div class="editor-body">
            \${CODE_LINES.map(line => html\`
                <div class="line">
                  <span class="gutter">\${line.n}</span>
                  <span class="code \${line.kind ?? 'code'}">\${line.text}</span>
                </div>
              \`)}
          </div>
        </main>

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
              <dre-button hierarchy="secondary" size="xsmall">Button</dre-button>
            </div>
            <p class="test-desc">
              Validate this action to confirm its configuration, so that the data can be passed
              forward to the next block.
            </p>
          </div>
        </dre-right-pane>
      </div>
    </div>
  \`
}`,...(s=(t=i.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const _=["IDE"];export{i as IDE,_ as __namedExportsOrder,w as default};
