import"./index-DQU6lUxE.js";import{k as e}from"./directive-helpers-CUT2Nyqc.js";import{r as l}from"./icons-C5wB5cT0.js";import"./tracking-CNqDQKPm.js";import"./chunk.XJILXOW4-DumEcSPv.js";import"./chunk.NYIIDP5N-B4XWuJlf.js";import"./toolbar-CHmXihEs.js";import"./header-Kp7ogE3k.js";l();const $={title:"Button",component:"hot-button"},t={args:{text:"Click Me",variant:"default",size:"medium",disabled:!1,style:"",href:""},argTypes:{variant:{options:["default","primary","success","neutral","warning","danger","text"],control:{type:"select"}},size:{options:["small","medium","large"],control:{type:"select"}},outline:{options:[!0,!1],control:{type:"radio"}},pill:{options:[!0,!1],control:{type:"radio"}},prefix:{options:[!0,!1],control:{type:"radio"}},suffix:{options:[!0,!1],control:{type:"radio"}},icon:{options:[!0,!1],control:{type:"radio"}},disabled:{options:[!0,!1],control:{type:"radio"}},circle:{options:[!0,!1],control:{type:"radio"}},caret:{options:[!0,!1],control:{type:"radio"}},loading:{options:[!0,!1],control:{type:"radio"}}},render:(n,{parameters:a})=>e`
      <hot-button
        variant="${n.variant}"
        ?outline="${n.outline}"
        size="${n.size}"
        ?pill="${n.pill}"
        ?circle="${n.circle}"
        @click=${()=>{console.log("click!")}}
        ?disabled=${n.disabled}
        style=${n.style}
        ?prefix=${n.prefix}
        ?caret=${n.caret}
        ?loading=${n.loading}
        href="${n.href}"
        target="_blank"
      >
        ${n.prefix?e`<sl-icon slot="prefix" library="bundled" name="person-circle"></sl-icon>`:""}
        ${n.suffix?e`<sl-icon slot="prefix" library="bundled" name="list"></sl-icon>`:""}
        ${n.icon?e`<sl-icon library="bundled" name="person-circle"></sl-icon>`:n.text}
      </hot-button>
    `};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: "Click Me",
    variant: "default",
    size: "medium",
    disabled: false,
    style: "",
    href: ""
  },
  argTypes: {
    variant: {
      options: ["default", "primary", "success", "neutral", "warning", "danger", "text"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select"
      }
    },
    outline: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    pill: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    prefix: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    suffix: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    icon: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    disabled: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    circle: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    caret: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    loading: {
      options: [true, false],
      control: {
        type: "radio"
      }
    }
  },
  render: (args, {
    parameters
  }) => {
    return html\`
      <hot-button
        variant="\${args.variant}"
        ?outline="\${args.outline}"
        size="\${args.size}"
        ?pill="\${args.pill}"
        ?circle="\${args.circle}"
        @click=\${() => {
      console.log("click!");
    }}
        ?disabled=\${args.disabled}
        style=\${args.style}
        ?prefix=\${args.prefix}
        ?caret=\${args.caret}
        ?loading=\${args.loading}
        href="\${args.href}"
        target="_blank"
      >
        \${args.prefix ? html\`<sl-icon slot="prefix" library="bundled" name="person-circle"></sl-icon>\` : ""}
        \${args.suffix ? html\`<sl-icon slot="prefix" library="bundled" name="list"></sl-icon>\` : ""}
        \${args.icon ? html\`<sl-icon library="bundled" name="person-circle"></sl-icon>\` : args.text}
      </hot-button>
    \`;
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const b=["Template"];export{t as Template,b as __namedExportsOrder,$ as default};
