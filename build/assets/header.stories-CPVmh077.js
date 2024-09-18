import{G as E}from"./index-J3w2Phx6.js";import"./header-Kp7ogE3k.js";import{k as v}from"./directive-helpers-CUT2Nyqc.js";import"./icons-C5wB5cT0.js";import"./chunk.XJILXOW4-DumEcSPv.js";const{STORY_CHANGED:I,SELECT_STORY:w}=__STORYBOOK_MODULE_CORE_EVENTS__,{makeDecorator:U,addons:b}=__STORYBOOK_MODULE_PREVIEW_API__,{global:S}=__STORYBOOK_MODULE_GLOBAL__;var K="links",{document:i,HTMLElement:h}=S;function M(e){let t={},r=(e[0]==="?"?e.substring(1):e).split("&").filter(Boolean);for(let o=0;o<r.length;o++){let a=r[o].split("=");t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]||"")}return t}var y=e=>b.getChannel().emit(w,e),s=(e,t)=>new Promise(r=>{let{location:o}=i,a=M(o.search).id,g=e||a.split("--",2)[0],O=`/story/${E(g,t)}`,u=o.pathname.replace(/iframe\.html$/,""),B=`${o.origin+u}?${Object.entries({path:O}).map(l=>`${l[0]}=${l[1]}`).join("&")}`;r(B)}),f=e=>{let{target:t}=e;if(!(t instanceof h))return;let r=t,{sbKind:o,sbStory:a}=r.dataset;(o||a)&&(e.preventDefault(),y({kind:o,story:a}))},A=!1,F=()=>{A||(A=!0,i.addEventListener("click",f))},G=()=>{A&&(A=!1,i.removeEventListener("click",f))};U({name:"withLinks",parameterName:K,wrapper:(e,t)=>(F(),b.getChannel().once(I,G),e(t))});const m="",V={title:"Header",component:"hot-header"},L=[{label:"ONE TAB ONLY",clickEvent:()=>{}}],c=[{label:"GO TO HEADER PAGE",clickEvent:async()=>{const e=await s("Button","Template");window.location.href=e}},{label:"GO TO TRACKING PAGE",clickEvent:async()=>{const e=await s("Tracking","Template");window.location.href=e}}],N=Array.from({length:3},(e,t)=>({label:`TAB Number ${t+1}`,clickEvent:()=>{}})),P=Array.from({length:4},(e,t)=>({label:`TAB Number ${t+1}`,clickEvent:()=>{}})),Y=Array.from({length:5},(e,t)=>({label:`TAB Number ${t+1}`,clickEvent:()=>{}})),n={parameters:{layout:"fullscreen"},args:{size:"small",title:"",logo:m,drawer:!0,tabs:c,borderBottom:!0},argTypes:{size:{options:["large","medium","small"],control:{type:"select"}},title:{options:["","Tasking Manager","FMTM","Drone Tasking Manager"],control:{type:"select"}},logo:{options:[m,"data:image/png;base64,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"],control:{type:"select"}},drawer:{options:[!0,!1],control:{type:"radio"}},borderBottom:{options:[!0,!1],control:{type:"radio"}},tabs:{options:{"1 Tab":L,"2 Tabs":c,"3 Tabs":N,"4 Tabs":P,"5 Tabs":Y},control:{type:"select"}}},render:e=>v`
      <hot-header
        title=${e.title}
        logo=${e.logo}
        ?borderBottom=${e.borderBottom}
        size=${e.size}
        ?drawer=${e.drawer}
        .tabs=${e.tabs}
      ></hot-header>
    `};var p,T,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    size: "small",
    title: "",
    logo: defaultLogo,
    drawer: true,
    tabs: twoTab,
    borderBottom: true
  },
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: {
        type: "select"
      }
    },
    title: {
      options: ["", "Tasking Manager", "FMTM", "Drone Tasking Manager"],
      control: {
        type: "select"
      }
    },
    logo: {
      options: [defaultLogo, "data:image/png;base64,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"],
      control: {
        type: "select"
      }
    },
    drawer: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    borderBottom: {
      options: [true, false],
      control: {
        type: "radio"
      }
    },
    tabs: {
      options: {
        '1 Tab': oneTab,
        '2 Tabs': twoTab,
        '3 Tabs': threeTab,
        '4 Tabs': fourTab,
        '5 Tabs': fiveTab
      },
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return html\`
      <hot-header
        title=\${args.title}
        logo=\${args.logo}
        ?borderBottom=\${args.borderBottom}
        size=\${args.size}
        ?drawer=\${args.drawer}
        .tabs=\${args.tabs}
      ></hot-header>
    \`;
  }
}`,...(d=(T=n.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};const C=["Template"];export{n as Template,C as __namedExportsOrder,V as default};
