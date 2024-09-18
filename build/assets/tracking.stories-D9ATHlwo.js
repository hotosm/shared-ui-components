import"./tracking-CNqDQKPm.js";import"./chunk.XJILXOW4-DumEcSPv.js";import"./icons-C5wB5cT0.js";import{k as r}from"./directive-helpers-CUT2Nyqc.js";import"./chunk.NYIIDP5N-B4XWuJlf.js";const m={title:"Tracking",component:"hot-tracking"},a={args:{siteId:"1",domain:"localhost"},argTypes:{siteId:{options:["","1","2"],control:{type:"select"}},domain:{options:["localhost","anotherdomain"],control:{type:"select"}}},parameters:{showAgreeToast:()=>{const e=document.getElementById("agree-toast");e&&e.toast()},showDisagreeToast:()=>{const e=document.getElementById("disagree-toast");e&&e.toast()},addKeyLocalStorage:e=>{localStorage.setItem(`${e}-matomo-agree`,"true")},removeKeyLocalStorage:e=>{localStorage.removeItem(`${e}-matomo-agree`)}},render:(e,{parameters:t})=>r`
      <sl-button @click=${()=>{t.removeKeyLocalStorage(e.siteId)}}>Re-Enable Banner</sl-button>
      <sl-button @click=${()=>{t.addKeyLocalStorage(e.siteId)}}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="${e.siteId}"
        domain="${e.domain}"
        @agree=${()=>{t.showAgreeToast()}}
        @disagree=${()=>{t.showDisagreeToast()}}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    `};var o,n,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    siteId: "1",
    domain: "localhost"
  },
  argTypes: {
    siteId: {
      options: ["", "1", "2"],
      control: {
        type: "select"
      }
    },
    domain: {
      options: ["localhost", "anotherdomain"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    showAgreeToast: () => {
      const agree = document.getElementById("agree-toast");
      if (agree) {
        agree.toast();
      }
    },
    showDisagreeToast: () => {
      const disagree = document.getElementById("disagree-toast");
      if (disagree) {
        disagree.toast();
      }
    },
    addKeyLocalStorage: (siteId: number) => {
      localStorage.setItem(\`\${siteId}-matomo-agree\`, 'true');
    },
    removeKeyLocalStorage: (siteId: number) => {
      localStorage.removeItem(\`\${siteId}-matomo-agree\`);
    }
  },
  render: (args, {
    parameters
  }) => {
    return html\`
      <sl-button @click=\${() => {
      parameters.removeKeyLocalStorage(args.siteId);
    }}>Re-Enable Banner</sl-button>
      <sl-button @click=\${() => {
      parameters.addKeyLocalStorage(args.siteId);
    }}>Disable Banner</sl-button>

      <hot-tracking
        id="matomo-banner"
        site-id="\${args.siteId}"
        domain="\${args.domain}"
        @agree=\${() => {
      parameters.showAgreeToast();
    }}
        @disagree=\${() => {
      parameters.showDisagreeToast();
    }}
      ></hot-tracking>

      <sl-alert id="agree-toast" variant="success" duration="3000" closable>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        You clicked agree.
      </sl-alert>

      <sl-alert id="disagree-toast" variant="danger" duration="3000" closable>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        You clicked disagree.
      </sl-alert>
    \`;
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["Template"];export{a as Template,u as __namedExportsOrder,m as default};
