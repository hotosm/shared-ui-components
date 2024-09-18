import{c as P,_ as l,e as x,n,w as T,b as N,L as F,R,a as J,g as Q,r as Z}from"./icons-C5wB5cT0.js";import{S as D}from"./chunk.XJILXOW4-DumEcSPv.js";import{i as L,k as h,h as tt}from"./directive-helpers-CUT2Nyqc.js";function et(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var O=new Set;function at(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function st(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function mt(t){if(O.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const e=at()+st();let a=getComputedStyle(document.documentElement).scrollbarGutter;(!a||a==="auto")&&(a="stable"),e<2&&(a=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",a),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function yt(t){O.delete(t),O.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function H(t,e,a="vertical",s="smooth"){const o=et(t,e),i=o.top+e.scrollTop,r=o.left+e.scrollLeft,c=e.scrollLeft,p=e.scrollLeft+e.offsetWidth,b=e.scrollTop,v=e.scrollTop+e.offsetHeight;(a==="horizontal"||a==="both")&&(r<c?e.scrollTo({left:r,behavior:s}):r+t.clientWidth>p&&e.scrollTo({left:r-e.offsetWidth+t.clientWidth,behavior:s})),(a==="vertical"||a==="both")&&(i<b?e.scrollTo({top:i,behavior:s}):i+t.clientHeight>v&&e.scrollTo({top:i-e.offsetHeight+t.clientHeight,behavior:s}))}var ot=L`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,rt=0,u=class extends N{constructor(){super(...arguments),this.localize=new F(this),this.attrId=++rt,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,h`
      <div
        part="base"
        class=${R({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?h`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};u.styles=[P,ot];u.dependencies={"sl-icon-button":D};l([x(".tab")],u.prototype,"tab",2);l([n({reflect:!0})],u.prototype,"panel",2);l([n({type:Boolean,reflect:!0})],u.prototype,"active",2);l([n({type:Boolean,reflect:!0})],u.prototype,"closable",2);l([n({type:Boolean,reflect:!0})],u.prototype,"disabled",2);l([n({type:Number,reflect:!0})],u.prototype,"tabIndex",2);l([T("active")],u.prototype,"handleActiveChange",1);l([T("disabled")],u.prototype,"handleDisabledChange",1);var lt=L`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,d=class extends N{constructor(){super(...arguments),this.localize=new F(this),this.tabs=[],this.focusableTabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(a=>!["aria-labelledby","aria-controls"].includes(a.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(a=>a.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((a,s)=>{var o;a[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),s.unobserve(a[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const a=t.target.closest("sl-tab");(a==null?void 0:a.closest("sl-tab-group"))===this&&a!==null&&this.setActiveTab(a,{scrollBehavior:"smooth"})}handleKeyDown(t){const a=t.target.closest("sl-tab");if((a==null?void 0:a.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&a!==null&&(this.setActiveTab(a,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=this.tabs.find(c=>c.matches(":focus")),i=this.matches(":dir(rtl)");let r=null;if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){if(t.key==="Home")r=this.focusableTabs[0];else if(t.key==="End")r=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const c=this.tabs.findIndex(p=>p===o);r=this.findNextFocusableTab(c,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const c=this.tabs.findIndex(p=>p===o);r=this.findNextFocusableTab(c,"forward")}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(r,{scrollBehavior:"smooth"}):this.tabs.forEach(c=>{c.tabIndex=c===r?0:-1}),["top","bottom"].includes(this.placement)&&H(r,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Q({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const a=this.activeTab;this.activeTab=t,this.tabs.forEach(s=>{s.active=s===this.activeTab,s.tabIndex=s===this.activeTab?0:-1}),this.panels.forEach(s=>{var o;return s.active=s.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&H(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(a&&this.emit("sl-tab-hide",{detail:{name:a.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(a=>a.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,a=t.clientHeight,s=this.matches(":dir(rtl)"),o=this.getAllTabs(),r=o.slice(0,o.indexOf(t)).reduce((c,p)=>({left:c.left+p.clientWidth,top:c.top+p.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?`${-1*r.left}px`:`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${a}px`,this.indicator.style.translate=`0 ${r.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let a=null;const s=e==="forward"?1:-1;let o=t+s;for(;t<this.tabs.length;){if(a=this.tabs[o]||null,a===null){e==="forward"?a=this.focusableTabs[0]:a=this.focusableTabs[this.focusableTabs.length-1];break}if(!a.disabled)break;o+=s}return a}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(a=>a.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.matches(":dir(rtl)");return h`
      <div
        part="base"
        class=${R({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?h`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?h`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};d.styles=[P,lt];d.dependencies={"sl-icon-button":D};l([x(".tab-group")],d.prototype,"tabGroup",2);l([x(".tab-group__body")],d.prototype,"body",2);l([x(".tab-group__nav")],d.prototype,"nav",2);l([x(".tab-group__indicator")],d.prototype,"indicator",2);l([J()],d.prototype,"hasScrollControls",2);l([n()],d.prototype,"placement",2);l([n()],d.prototype,"activation",2);l([n({attribute:"no-scroll-controls",type:Boolean})],d.prototype,"noScrollControls",2);l([T("noScrollControls",{waitUntilFirstUpdate:!0})],d.prototype,"updateScrollControls",1);l([T("placement",{waitUntilFirstUpdate:!0})],d.prototype,"syncIndicator",1);var it=L`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,nt=0,C=class extends N{constructor(){super(...arguments),this.attrId=++nt,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return h`
      <slot
        part="base"
        class=${R({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};C.styles=[P,it];l([n({reflect:!0})],C.prototype,"name",2);l([n({type:Boolean,reflect:!0})],C.prototype,"active",2);l([T("active")],C.prototype,"handleActiveChange",1);D.define("sl-icon-button");C.define("sl-tab-panel");d.define("sl-tab-group");u.define("sl-tab");function j(t){var e,a,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=j(t[e]))&&(s&&(s+=" "),s+=a);else for(e in t)t[e]&&(s&&(s+=" "),s+=e);return s}function ct(){for(var t,e,a=0,s="";a<arguments.length;)(t=arguments[a++])&&(e=j(t))&&(s&&(s+=" "),s+=e);return s}const V=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,U=ct,dt=(t,e)=>a=>{var s;if((e==null?void 0:e.variants)==null)return U(t,a==null?void 0:a.class,a==null?void 0:a.className);const{variants:o,defaultVariants:i}=e,r=Object.keys(o).map(b=>{const v=a==null?void 0:a[b],k=i==null?void 0:i[b];if(v===null)return null;const w=V(v)||V(k);return o[b][w]}),c=a&&Object.entries(a).reduce((b,v)=>{let[k,w]=v;return w===void 0||(b[k]=w),b},{}),p=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((b,v)=>{let{class:k,className:w,...Y}=v;return Object.entries(Y).every(q=>{let[G,W]=q;return Array.isArray(W)?W.includes({...i,...c}[G]):{...i,...c}[G]===W})?[...b,k,w]:b},[]);return U(t,r,p,a==null?void 0:a.class,a==null?void 0:a.className)},bt=dt(`
      header
  `,{variants:{size:{small:"header--size-small",medium:"header--size-medium",large:"header--size-large"},borderBottom:{true:"border-bottom"}}}),ht=L`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--sl-spacing-small);
  }

  .header.border-bottom {
    border-bottom: var(--sl-spacing-3x-small) solid var(--sl-color-neutral-50);
  }

  .header--size-small {
    height: var(--sl-spacing-4x-large);
  }

  .header--size-medium {
    height: calc(var(--sl-spacing-4x-large) * 2);
  }

  .header--size-large {
    height: calc(var(--sl-spacing-4x-large) * 4);
  }

  .header--link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--sl-spacing-small);
  }

  .header--title {
    color: var(--sl-color-neutral-950);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-x-large);
  }

  .header--tab-group {
    flex-direction: column;
  }

  .header--tab::part(base) {
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-950);
    padding: var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .header--tab-group::part(base) {
    --track-color: transparent;
    --indicator-color: var(--sl-color-neutral-950);
  }

  .header--nav {
    justify-content: space-between;
    justify-items: center;
    gap: var(--sl-spacing-medium);
    font-weight: var(--sl-font-weight-semibold);
  }

  .header--nav-mobile {
  }

  .header--person-circle {
    font-size: var(--sl-font-size-x-large);
  }

  .header--drawer {
    font-size: var(--sl-font-size-x-large)
  }

  .header--right-section {
  }

  .header--logo-img {
  }
}
`;var ut=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,K=t=>{throw TypeError(t)},_=(t,e,a,s)=>{for(var o=pt(e,a),i=t.length-1,r;i>=0;i--)(r=t[i])&&(o=r(e,a,o)||o);return o&&ut(e,a,o),o},X=(t,e,a)=>e.has(t)||K("Cannot "+a),f=(t,e,a)=>(X(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>e.has(t)?K("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),y=(t,e,a,s)=>(X(t,e,"write to private field"),e.set(t,a),a),A,S,z,$,E,B,I;Z();const M=class M extends tt{constructor(){super(...arguments),this.name="hot-header",m(this,A,""),m(this,S,""),m(this,z,!0),m(this,$,[]),m(this,E,"small"),m(this,B,!0),m(this,I,0)}get title(){return f(this,A)}set title(e){y(this,A,e)}get logo(){return f(this,S)}set logo(e){y(this,S,e)}get drawer(){return f(this,z)}set drawer(e){y(this,z,e)}get tabs(){return f(this,$)}set tabs(e){y(this,$,e)}get size(){return f(this,E)}set size(e){y(this,E,e)}get borderBottom(){return f(this,B)}set borderBottom(e){y(this,B,e)}get selectedTab(){return f(this,I)}set selectedTab(e){y(this,I,e)}render(){const e=typeof this.logo=="string"||this.logo instanceof URL?typeof this.logo=="string"?this.logo:this.logo.href:"";return h`
      <header class=${bt({size:this.size,borderBottom:this.borderBottom})}>
        <a href="/" class="header--link">
          ${e.length>0?h`
                <img
                  id="logo"
                  src="${this.logo}"
                  alt="Logo"
                  class="header--logo-img"
                />
              `:h`
            <hot-logo
              ?iconOnly="${this.title.length>0}"
            >
            </hot-logo>
            `}
          ${this.title.length>0?h`
                <h1 class="header--title">
                  ${this.title}
                </h1>
              `:null}
        </a>

        ${""}
        <nav
          class="header--nav"
        >
          <sl-tab-group class="header--tab-group">
            ${this.tabs.map((a,s)=>h`
                <sl-tab
                  class="header--tab"
                  slot="nav"
                  panel="general"
                  @click=${o=>{this._selectTab(o,a.clickEvent,s)}}
                  ?selected=${this.selectedTab===s}
                  >${a.label}</sl-tab
                >
              `)}
          </sl-tab-group>
        </nav>

        ${""}
        ${""}
        <nav
          class="header--nav-mobile"
        ></nav>

        <div id="right-section" class="header--right-section">
          <sl-icon-button
            library="bundled"
            name="person-circle"
            class="header--person-circle"
            label="login"
            @click=${a=>{this._handleLogin(a)}}
          ></sl-icon-button>
            ${this.drawer?h`
                  <sl-icon-button
                    library="bundled"
                    class="header--drawer"
                    name="list"
                    label="drawer-open"
                  ></sl-icon-button>
                `:null}
          </div>
        </div>
      </header>
    `}_selectTab(e,a,s){this.selectedTab=s,a()}_handleLogin(e){this.dispatchEvent(new Event("login"))}};M.styles=[ht];let g=M;A=new WeakMap;S=new WeakMap;z=new WeakMap;$=new WeakMap;E=new WeakMap;B=new WeakMap;I=new WeakMap;_([n({type:String})],g.prototype,"title");_([n({type:String})],g.prototype,"logo");_([n({type:Boolean})],g.prototype,"drawer");_([n({type:Array})],g.prototype,"tabs");_([n({type:String})],g.prototype,"size");_([n({type:Boolean})],g.prototype,"borderBottom");_([n()],g.prototype,"selectedTab");customElements.define("hot-header",g);export{u as S,d as a,C as b,mt as l,H as s,yt as u};
