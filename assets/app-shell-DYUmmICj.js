import{j as e,M as s,C as a}from"./blocks-N3rAJin2.js";import{useMDXComponents as r}from"./index-D73FcIXF.js";import{A as i,I as d}from"./app-shell.stories-BiLVG2qi.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C1mRIqdo.js";import"./top-bar-Dps1nDh6.js";import"./property-COYYN49D.js";import"./styles-DmOKkkRH.js";import"./icon-DLOWPnC1.js";import"./secondary-top-bar-CgEm8JvZ.js";import"./button-aadQc3ho.js";import"./left-pane-CkMPb2Ji.js";import"./accordion-7PnIKIRB.js";import"./accordion-group-BeSeXYwc.js";import"./right-pane-DmmzfJoG.js";import"./bottom-pane-C4BnWZJH.js";import"./badge-C4byrqP6.js";import"./dropdown-OPBnWHEY.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i}),`
`,e.jsx(n.h1,{id:"app-layout-composition",children:"App Layout Composition"}),`
`,e.jsxs(n.p,{children:["Full Deluge IDE shell composed from ",e.jsx(n.strong,{children:"Patterns & Layouts"})," organisms. Use this page when designing a feature flow from a PRD — start here, then drill into individual panes and bars."]}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.p,{children:[`| Region | Component | Storybook |
| --- | --- | --- |
| Top Bar | `,e.jsx(n.code,{children:"dre-top-bar"}),` | Patterns & Layouts / Top Bar |
| Secondary Top Bar | `,e.jsx(n.code,{children:"dre-secondary-top-bar"}),` | Patterns & Layouts / Secondary Top Bar |
| Left Pane | `,e.jsx(n.code,{children:"dre-left-pane"}),` | Patterns & Layouts / Left Pane |
| Center editor | `,e.jsx(n.code,{children:"dre-monaco-editor"}),` | (embedded in IDE story) |
| Right Pane | `,e.jsx(n.code,{children:"dre-right-pane"}),` | Patterns & Layouts / Right Pane |
| Bottom Pane | `,e.jsx(n.code,{children:"dre-bottom-pane"})," | Patterns & Layouts / Bottom Pane |"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────┐
│ Top Bar                                                 │
├─────────────────────────────────────────────────────────┤
│ Secondary Top Bar                                       │
│        ↕ 8px                                            │
│ Left ─8px─ Monaco / canvas ─8px─ Right Pane             │
│        ↕ 8px                                            │
│ Bottom Pane (status / console / errors)                 │
└─────────────────────────────────────────────────────────┘
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Spacing:"})," 8px between Left Pane ↔ Monaco ↔ Right Pane, and between Bottom Pane and the workspace above. Extended Left Pane also uses ",e.jsx(n.strong,{children:"8px"})," between the icon rail and Actions panel (",e.jsx("a",{href:"https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable?node-id=12478-5025",target:"_blank",rel:"noopener noreferrer",children:"12478:5025"}),")."]}),`
`,e.jsx(n.h2,{id:"ide-preview",children:"IDE preview"}),`
`,e.jsx(n.p,{children:"Live composition of all layout regions. Prefer this canvas when reviewing PRD screens against the design system."}),`
`,e.jsx(a,{of:d,sourceState:"shown"}),`
`,e.jsx(n.h2,{id:"how-to-design-a-prd-flow",children:"How to design a PRD flow"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Map the PRD to regions in the table above (which pane/bar changes per step)."}),`
`,e.jsx(n.li,{children:"Reuse existing Patterns & Layouts stories for states (collapsed left rail, expanded console, etc.)."}),`
`,e.jsx(n.li,{children:"Compose a new App Layout story variant for the full flow when multiple screens are needed."}),`
`,e.jsx(n.li,{children:"Only add new atoms/molecules if no Pattern covers the interaction."}),`
`]}),`
`,e.jsx(n.h2,{id:"related-figma",children:"Related Figma"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["App shell frame: ",e.jsx("a",{href:"https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable?node-id=15007-9689",target:"_blank",rel:"noopener noreferrer",children:"15007:9689"})," (notify participants)"]}),`
`,e.jsxs(n.li,{children:["Left Pane: ",e.jsx("a",{href:"https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable?node-id=12613-41263",target:"_blank",rel:"noopener noreferrer",children:"12613:41263"})]}),`
`,e.jsxs(n.li,{children:["Right Pane: ",e.jsx("a",{href:"https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable?node-id=12726-50864",target:"_blank",rel:"noopener noreferrer",children:"12726:50864"})]}),`
`,e.jsxs(n.li,{children:["Bottom Pane: ",e.jsx("a",{href:"https://www.figma.com/design/UnFbmt5yovBqr4tBNjuNx9/DRE-Design-System---AI-Readable?node-id=12585-36757",target:"_blank",rel:"noopener noreferrer",children:"12585:36757"})]}),`
`]})]})}function S(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{S as default};
