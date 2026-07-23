import type { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'
import '../top-bar/top-bar.js'
import '../secondary-top-bar/secondary-top-bar.js'
import '../left-pane/left-pane.js'
import '../right-pane/right-pane.js'
import '../bottom-pane/bottom-pane.js'
import '../monaco-editor/monaco-editor.js'
import '../../atoms/button/button.js'
import '../../atoms/icon/icon.js'
import '../../molecules/dropdown/dropdown.js'

/**
 * App Layout Composition — all Patterns & Layouts organisms:
 * Top Bar · Secondary Top Bar · Left Pane · Right Pane · Bottom Pane
 * + Monaco editor (center).
 */
const meta: Meta = {
  title: 'App Layout Composition',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full IDE shell composed from Patterns & Layouts: Top Bar, Secondary Top Bar, Left Pane, Right Pane, Bottom Pane, with Monaco in the center.',
      },
      story: {
        // Keep the large IDE shell in an iframe so Docs does not collapse to a blank page.
        inline: false,
        iframeHeight: 720,
      },
    },
  },
}
export default meta
type Story = StoryObj

const DELUGE_SAMPLE = `// Notify Participants Deluge script
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
`

const FIELD_ROWS: { name: string; type: string }[] = [
  { name: 'Added_Time', type: 'Date-time' },
  { name: 'Added_User', type: 'Text' },
  { name: 'Added_User_IP_Address', type: 'Number' },
  { name: 'Code', type: 'Text' },
  { name: 'ID', type: 'Text' },
  { name: 'Modified_Time', type: 'Date-time' },
  { name: 'Modified_User', type: 'Text' },
  { name: 'Modified_User_IP_Address', type: 'Text' },
  { name: 'Name', type: 'Text' },
  { name: 'Type', type: 'Text' },
]

const shellCss = `
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
  /* 8px gutters between secondary / workspace / bottom (Figma IDE spacing) */
  .body {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px;
    box-sizing: border-box;
  }
  .secondary-wrap {
    flex: 0 0 auto;
  }
  .workspace {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: row;
    /* 8px between left pane · Monaco · right pane */
    gap: 8px;
  }
  .editor {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e6e8ed;
    border-radius: 4px;
    overflow: hidden;
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
  }
`

export const IDE: Story = {
  name: 'IDE',
  render: () => html`
    <style>
      ${shellCss}
    </style>
    <div class="shell" data-figma="patterns-layouts-composition">
      <!-- 1. Top Bar -->
      <dre-top-bar
        brand="Deluge"
        .tabs=${[{ id: 'settings', label: 'Settings', active: true, icon: 'settings' }]}
      ></dre-top-bar>

      <div class="body">
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
            <div class="editor-body">
              <dre-monaco-editor language="deluge" .value=${DELUGE_SAMPLE}></dre-monaco-editor>
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
                    ${FIELD_ROWS.map(
                      (f) => html`
                        <div class="field-row">
                          <span class="field-name">${f.name}</span>
                          <span class="field-type">${f.type}</span>
                        </div>
                      `,
                    )}
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

        <!-- 5. Bottom Pane — 8px from workspace above -->
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
    </div>
  `,
}
