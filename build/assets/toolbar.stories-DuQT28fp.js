import"./toolbar-CHmXihEs.js";import{k as i}from"./directive-helpers-CUT2Nyqc.js";import"./icons-C5wB5cT0.js";import"./chunk.NYIIDP5N-B4XWuJlf.js";const m={title:"Toolbar",component:"hot-toolbar"},o={args:{tooltipPosition:"top"},argTypes:{tooltipPosition:{options:["top","bottom","left","right"],control:{type:"select"}}},render:n=>i`
      <hot-toolbar
        tooltip-position="${n.tooltipPosition}"
        @redo=${()=>{alert("Redo Clicked")}}
      ></hot-toolbar>
    `};var t,r,e;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    tooltipPosition: "top"
  },
  argTypes: {
    tooltipPosition: {
      options: ["top", "bottom", "left", "right"],
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return html\`
      <hot-toolbar
        tooltip-position="\${args.tooltipPosition}"
        @redo=\${() => {
      alert("Redo Clicked");
    }}
      ></hot-toolbar>
    \`;
  }
}`,...(e=(r=o.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const c=["Template"];export{o as Template,c as __namedExportsOrder,m as default};
