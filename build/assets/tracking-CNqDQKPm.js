import{c as q,_ as l,e as M,n as i,w as x,b as D,L as T,R as B,r as H}from"./icons-C5wB5cT0.js";import{S as N}from"./chunk.XJILXOW4-DumEcSPv.js";import{s as $,H as P,a as C,g as I,b as S,w as O}from"./chunk.NYIIDP5N-B4XWuJlf.js";import{i as z,k as b,h as W}from"./directive-helpers-CUT2Nyqc.js";var F=z`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,h=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),s=class extends D{constructor(){super(...arguments),this.hasSlotController=new P(this,"icon","suffix"),this.localize=new T(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await C(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=I(this,"alert.show",{dir:this.localize.dir()});await S(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await C(this.base);const{keyframes:t,options:e}=I(this,"alert.hide",{dir:this.localize.dir()});await S(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,O(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,O(this,"sl-after-hide")}async toast(){return new Promise(t=>{h.parentElement===null&&document.body.append(h),h.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{h.removeChild(this),t(),h.querySelector("sl-alert")===null&&h.remove()},{once:!0})})}render(){return b`
      <div
        part="base"
        class=${B({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?b`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};s.styles=[q,F];s.dependencies={"sl-icon-button":N};l([M('[part~="base"]')],s.prototype,"base",2);l([i({type:Boolean,reflect:!0})],s.prototype,"open",2);l([i({type:Boolean,reflect:!0})],s.prototype,"closable",2);l([i({reflect:!0})],s.prototype,"variant",2);l([i({type:Number})],s.prototype,"duration",2);l([x("open",{waitUntilFirstUpdate:!0})],s.prototype,"handleOpenChange",1);l([x("duration")],s.prototype,"handleDurationChange",1);$("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});s.define("sl-alert");const L=z`
  .tracking {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: 80vw;
    text-align: center;
  }

  .tracking--header {
    font-weight: var(--sl-font-weight-bold);
    font-size: var(--sl-font-size-large);
    text-align: center;
  }

  .tracking--link {
    color: var(--sl-color-primary-700);
  }
`;var U=Object.defineProperty,G=Object.getOwnPropertyDescriptor,A=t=>{throw TypeError(t)},_=(t,e,a,r)=>{for(var o=G(e,a),c=t.length-1,d;c>=0;c--)(d=t[c])&&(o=d(e,a,o)||o);return o&&U(e,a,o),o},E=(t,e,a)=>e.has(t)||A("Cannot "+a),u=(t,e,a)=>(E(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),f=(t,e,a,r)=>(E(t,e,"write to private field"),e.set(t,a),a),g,v,w,y;H();const k=class k extends W{constructor(){super(...arguments),this.name="hot-tracking",m(this,g,""),m(this,v,""),m(this,w,!1),m(this,y,!0)}get siteId(){return u(this,g)}set siteId(e){f(this,g,e)}get domain(){return u(this,v)}set domain(e){f(this,v,e)}get force(){return u(this,w)}set force(e){f(this,w,e)}get isOpen(){return u(this,y)}set isOpen(e){f(this,y,e)}render(){return b`<sl-alert class="tracking" variant="danger" ?open=${this.isOpen}>
      <sl-icon
        id="hot-red-text"
        library="bundled"
        slot="icon"
        name="info-circle"
      ></sl-icon>

      <p id="tracking-header" class="tracking--header">About the information we collect</p>

      <p>
        We use cookies and similar technologies to recognize and analyze your
        visits, and measure traffic usage and activity. You can learn about how
        we use the data about your visit or information you provide reading our
        <a
          class="tracking--link"
          href="https://www.hotosm.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
          >privacy policy</a
        >. By clicking "I Agree", you consent to the use of cookies.
      </p>

      <sl-button
        @click=${e=>{this._setAgree(e)}}
        >I Agree</sl-button
      >
      <sl-button
        @click=${e=>{this._setDisagree(e)}}
        >I Do Not Agree</sl-button
      >
    </sl-alert>`}_setAgree(e){const a=window._paq=window._paq||[];a.length!==0&&(a.push(["rememberConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"true"),this.dispatchEvent(new Event("agree",{bubbles:!0,composed:!0})))}_setDisagree(e){const a=window._paq=window._paq||[];a.length!==0&&(a.push(["forgetConsentGiven"]),this.isOpen=!1,localStorage.setItem(`${this.siteId}-matomo-agree`,"false"),this.dispatchEvent(new Event("disagree",{bubbles:!0,composed:!0})))}connectedCallback(){if(super.connectedCallback(),!this.force&&window.location.hostname!==this.domain){console.warn(`Matomo init failed. ${window.location.hostname} does not match ${this.domain}.`),this.isOpen=!1;return}const e=this.siteId;if(!this.force&&(e.length===0||this.domain.length===0)){console.warn("Matomo init failed. No site id or domains provided."),this.isOpen=!1;return}const a=localStorage.getItem(`${this.siteId}-matomo-agree`);if(a==="false"){this.isOpen=!1;return}a==="true"&&(this.isOpen=!1),console.log(`Setting Matomo tracking for site=${e} domain=${this.domain}`);const r=window._paq=window._paq||[];r.push(["requireConsent"]),r.push(["setDomains",[this.domain]]),r.push(["trackPageView"]),r.push(["enableLinkTracking"]),r.push(["trackVisibleContentImpressions"]),function(){const o="//matomo.hotosm.org/";r.push(["setTrackerUrl",o+"matomo.php"]),r.push(["setSiteId",e]);const c=document,d=c.createElement("script"),p=c.getElementsByTagName("script")[0];(p==null?void 0:p.parentNode)!=null?(d.async=!0,d.src=o+"matomo.js",p.parentNode.insertBefore(d,p)):console.warn("Script insertion failed. Parent node is null.")}()}};k.styles=[L];let n=k;g=new WeakMap;v=new WeakMap;w=new WeakMap;y=new WeakMap;_([i({type:String,attribute:"site-id"})],n.prototype,"siteId");_([i({type:String})],n.prototype,"domain");_([i({type:Boolean})],n.prototype,"force");_([i({type:Boolean})],n.prototype,"isOpen");customElements.define("hot-tracking",n);export{s as S};
