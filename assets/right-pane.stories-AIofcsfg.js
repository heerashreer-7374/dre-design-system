import{b as a}from"./iframe-hYZkyXvR.js";import"./right-pane-CQ-D8MtF.js";import"./input-uEA5vyW9.js";import"./button-Du1k3Bj9.js";import"./dropdown-BMEBHjoU.js";import{f as l}from"./figma-By0ClEEC.js";import"./preload-helper-Dp1pzeXC.js";import"./property-BSL9Me-Y.js";import"./styles-BGRCfbQF.js";import"./icon-67h1dq3i.js";import"./state-BaBndn7-.js";const w={title:"Patterns & Layouts/Right Pane",component:"dre-right-pane",tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`Maps to Figma Right Pane ${l("12726:50864")} — property inspector.`}}}},e={render:()=>a`
    <div style="height:520px;display:flex;justify-content:flex-end;background:#f3f3f6;">
      <dre-right-pane title="Set Variable">
        <div style="display:flex;flex-direction:column;gap:16px;padding:16px;">
          <dre-input label="Variable name" placeholder="myVar" required></dre-input>
          <dre-dropdown label="Type" placeholder="Select type">
            <dre-dropdown-item label="Text"></dre-dropdown-item>
            <dre-dropdown-item label="Number"></dre-dropdown-item>
            <dre-dropdown-item label="Boolean"></dre-dropdown-item>
          </dre-dropdown>
          <dre-input label="Value" placeholder="Enter value"></dre-input>
        </div>
        <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid #e6e8ed;">
          <dre-button hierarchy="secondary" size="small">Cancel</dre-button>
          <dre-button hierarchy="primary" size="small">Apply</dre-button>
        </div>
      </dre-right-pane>
    </div>
  `},t={render:()=>a`
    <div style="height:520px;display:flex;justify-content:flex-end;background:#f3f3f6;">
      <dre-right-pane title="Fields">
        <div style="padding:14px 16px;border-bottom:1px solid #f3f3f6;font-size:13px;">Actions Details</div>
        <div style="padding:14px 16px;font-size:13px;">Configuration</div>
        <div slot="footer" style="padding:14px 16px;border-top:1px solid #e6e8ed;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <span style="font-size:13px;">Test Action</span>
            <dre-button hierarchy="secondary" size="xsmall">Validate</dre-button>
          </div>
          <p style="margin:0;font-size:11px;line-height:18px;color:#5d6481;">
            Validate this action to confirm its configuration.
          </p>
        </div>
      </dre-right-pane>
    </div>
  `};var d,r,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height:520px;display:flex;justify-content:flex-end;background:#f3f3f6;">
      <dre-right-pane title="Set Variable">
        <div style="display:flex;flex-direction:column;gap:16px;padding:16px;">
          <dre-input label="Variable name" placeholder="myVar" required></dre-input>
          <dre-dropdown label="Type" placeholder="Select type">
            <dre-dropdown-item label="Text"></dre-dropdown-item>
            <dre-dropdown-item label="Number"></dre-dropdown-item>
            <dre-dropdown-item label="Boolean"></dre-dropdown-item>
          </dre-dropdown>
          <dre-input label="Value" placeholder="Enter value"></dre-input>
        </div>
        <div slot="footer" style="display:flex;gap:8px;justify-content:flex-end;padding:12px 16px;border-top:1px solid #e6e8ed;">
          <dre-button hierarchy="secondary" size="small">Cancel</dre-button>
          <dre-button hierarchy="primary" size="small">Apply</dre-button>
        </div>
      </dre-right-pane>
    </div>
  \`
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var n,o,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="height:520px;display:flex;justify-content:flex-end;background:#f3f3f6;">
      <dre-right-pane title="Fields">
        <div style="padding:14px 16px;border-bottom:1px solid #f3f3f6;font-size:13px;">Actions Details</div>
        <div style="padding:14px 16px;font-size:13px;">Configuration</div>
        <div slot="footer" style="padding:14px 16px;border-top:1px solid #e6e8ed;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <span style="font-size:13px;">Test Action</span>
            <dre-button hierarchy="secondary" size="xsmall">Validate</dre-button>
          </div>
          <p style="margin:0;font-size:11px;line-height:18px;color:#5d6481;">
            Validate this action to confirm its configuration.
          </p>
        </div>
      </dre-right-pane>
    </div>
  \`
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const z=["Default","Fields"];export{e as Default,t as Fields,z as __namedExportsOrder,w as default};
