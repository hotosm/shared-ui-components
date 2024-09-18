import{c as pt,b as ft,L as Mt,f as Wt,g as At,S as ae,_ as d,e as tt,a as Nt,n as f,w as St,d as Kt,k as zt,R as xt,t as I,r as xe}from"./icons-C5wB5cT0.js";import{i as it,k as Y,h as _e}from"./directive-helpers-CUT2Nyqc.js";import{H as ke,s as le,p as Jt,a as Qt,g as Zt,b as te,w as ee}from"./chunk.NYIIDP5N-B4XWuJlf.js";var Ce=it`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,ce=class extends ft{constructor(){super(...arguments),this.localize=new Mt(this)}render(){return Y`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ce.styles=[pt,Ce];var lt=new WeakMap,ct=new WeakMap,ut=new WeakMap,Bt=new WeakSet,mt=new WeakMap,Ee=class{constructor(t,e){this.handleFormData=o=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!r&&!s&&typeof i=="string"&&i.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(a=>{o.formData.append(i,a.toString())}):o.formData.append(i,n.toString()))},this.handleFormSubmit=o=>{var r;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((r=lt.get(this.form))==null||r.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),mt.set(this.host,[])},this.handleInteraction=o=>{const r=mt.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=At({form:o=>{const r=o.form;if(r){const n=o.getRootNode().querySelector(`#${r}`);if(n)return n}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var r;return(r=o.disabled)!=null?r:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>o.value=r,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),mt.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),mt.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,lt.has(this.form)?lt.get(this.form).add(this.host):lt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ct.has(this.form)||(ct.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),ut.has(this.form)||(ut.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=lt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ct.has(this.form)&&(this.form.reportValidity=ct.get(this.form),ct.delete(this.form)),ut.has(this.form)&&(this.form.checkValidity=ut.get(this.form),ut.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Bt.add(t):Bt.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!Bt.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},It=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ao=Object.freeze(Wt(At({},It),{valid:!1,valueMissing:!0})),So=Object.freeze(Wt(At({},It),{valid:!1,customError:!0})),Ae=it`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,x=class extends ft{constructor(){super(...arguments),this.formControlController=new Ee(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ke(this,"[default]","prefix","suffix"),this.localize=new Mt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:It}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?Kt`a`:Kt`button`;return zt`
      <${e}
        part="base"
        class=${xt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${I(t?void 0:this.disabled)}
        type=${I(t?void 0:this.type)}
        title=${this.title}
        name=${I(t?void 0:this.name)}
        value=${I(t?void 0:this.value)}
        href=${I(t?this.href:void 0)}
        target=${I(t?this.target:void 0)}
        download=${I(t?this.download:void 0)}
        rel=${I(t?this.rel:void 0)}
        role=${I(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?zt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?zt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[pt,Ae];x.dependencies={"sl-icon":ae,"sl-spinner":ce};d([tt(".button")],x.prototype,"button",2);d([Nt()],x.prototype,"hasFocus",2);d([Nt()],x.prototype,"invalid",2);d([f()],x.prototype,"title",2);d([f({reflect:!0})],x.prototype,"variant",2);d([f({reflect:!0})],x.prototype,"size",2);d([f({type:Boolean,reflect:!0})],x.prototype,"caret",2);d([f({type:Boolean,reflect:!0})],x.prototype,"disabled",2);d([f({type:Boolean,reflect:!0})],x.prototype,"loading",2);d([f({type:Boolean,reflect:!0})],x.prototype,"outline",2);d([f({type:Boolean,reflect:!0})],x.prototype,"pill",2);d([f({type:Boolean,reflect:!0})],x.prototype,"circle",2);d([f()],x.prototype,"type",2);d([f()],x.prototype,"name",2);d([f()],x.prototype,"value",2);d([f()],x.prototype,"href",2);d([f()],x.prototype,"target",2);d([f()],x.prototype,"rel",2);d([f()],x.prototype,"download",2);d([f()],x.prototype,"form",2);d([f({attribute:"formaction"})],x.prototype,"formAction",2);d([f({attribute:"formenctype"})],x.prototype,"formEnctype",2);d([f({attribute:"formmethod"})],x.prototype,"formMethod",2);d([f({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);d([f({attribute:"formtarget"})],x.prototype,"formTarget",2);d([St("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);var Se=it`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,bt=class extends ft{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=dt(t.target);e==null||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),r=dt(e);r&&(r.toggleAttribute("data-sl-button-group__button",!0),r.toggleAttribute("data-sl-button-group__button--first",o===0),r.toggleAttribute("data-sl-button-group__button--inner",o>0&&o<t.length-1),r.toggleAttribute("data-sl-button-group__button--last",o===t.length-1),r.toggleAttribute("data-sl-button-group__button--radio",r.tagName.toLowerCase()==="sl-radio-button"))})}render(){return Y`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};bt.styles=[pt,Se];d([tt("slot")],bt.prototype,"defaultSlot",2);d([Nt()],bt.prototype,"disableRole",2);d([f()],bt.prototype,"label",2);function dt(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}var Pe=it`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const X=Math.min,P=Math.max,_t=Math.round,vt=Math.floor,G=t=>({x:t,y:t}),Oe={left:"right",right:"left",bottom:"top",top:"bottom"},$e={start:"end",end:"start"};function Ft(t,e,o){return P(t,X(e,o))}function nt(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function ue(t){return t==="x"?"y":"x"}function Ht(t){return t==="y"?"height":"width"}function Q(t){return["top","bottom"].includes(K(t))?"y":"x"}function Ut(t){return ue(Q(t))}function ze(t,e,o){o===void 0&&(o=!1);const r=st(t),i=Ut(t),n=Ht(i);let s=i==="x"?r===(o?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=kt(s)),[s,kt(s)]}function Be(t){const e=kt(t);return[Vt(t),e,Vt(e)]}function Vt(t){return t.replace(/start|end/g,e=>$e[e])}function Re(t,e,o){const r=["left","right"],i=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:r:e?r:i;case"left":case"right":return e?n:s;default:return[]}}function Le(t,e,o,r){const i=st(t);let n=Re(K(t),o==="start",r);return i&&(n=n.map(s=>s+"-"+i),e&&(n=n.concat(n.map(Vt)))),n}function kt(t){return t.replace(/left|right|bottom|top/g,e=>Oe[e])}function Fe(t){return{top:0,right:0,bottom:0,left:0,...t}}function de(t){return typeof t!="number"?Fe(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){const{x:e,y:o,width:r,height:i}=t;return{width:r,height:i,top:o,left:e,right:e+r,bottom:o+i,x:e,y:o}}function oe(t,e,o){let{reference:r,floating:i}=t;const n=Q(e),s=Ut(e),a=Ht(s),c=K(e),l=n==="y",u=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,g=r[a]/2-i[a]/2;let h;switch(c){case"top":h={x:u,y:r.y-i.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:p};break;case"left":h={x:r.x-i.width,y:p};break;default:h={x:r.x,y:r.y}}switch(st(e)){case"start":h[s]-=g*(o&&l?-1:1);break;case"end":h[s]+=g*(o&&l?-1:1);break}return h}const Ve=async(t,e,o)=>{const{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:s}=o,a=n.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:p}=oe(l,r,c),g=r,h={},b=0;for(let m=0;m<a.length;m++){const{name:y,fn:v}=a[m],{x:w,y:_,data:E,reset:C}=await v({x:u,y:p,initialPlacement:r,placement:g,strategy:i,middlewareData:h,rects:l,platform:s,elements:{reference:t,floating:e}});u=w??u,p=_??p,h={...h,[y]:{...h[y],...E}},C&&b<=50&&(b++,typeof C=="object"&&(C.placement&&(g=C.placement),C.rects&&(l=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):C.rects),{x:u,y:p}=oe(l,g,c)),m=-1)}return{x:u,y:p,placement:g,strategy:i,middlewareData:h}};async function jt(t,e){var o;e===void 0&&(e={});const{x:r,y:i,platform:n,rects:s,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:p="floating",altBoundary:g=!1,padding:h=0}=nt(e,t),b=de(h),y=a[g?p==="floating"?"reference":"floating":p],v=Ct(await n.getClippingRect({element:(o=await(n.isElement==null?void 0:n.isElement(y)))==null||o?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:l,rootBoundary:u,strategy:c})),w=p==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,_=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),E=await(n.isElement==null?void 0:n.isElement(_))?await(n.getScale==null?void 0:n.getScale(_))||{x:1,y:1}:{x:1,y:1},C=Ct(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:_,strategy:c}):w);return{top:(v.top-C.top+b.top)/E.y,bottom:(C.bottom-v.bottom+b.bottom)/E.y,left:(v.left-C.left+b.left)/E.x,right:(C.right-v.right+b.right)/E.x}}const De=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:r,placement:i,rects:n,platform:s,elements:a,middlewareData:c}=e,{element:l,padding:u=0}=nt(t,e)||{};if(l==null)return{};const p=de(u),g={x:o,y:r},h=Ut(i),b=Ht(h),m=await s.getDimensions(l),y=h==="y",v=y?"top":"left",w=y?"bottom":"right",_=y?"clientHeight":"clientWidth",E=n.reference[b]+n.reference[h]-g[h]-n.floating[b],C=g[h]-n.reference[h],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let z=$?$[_]:0;(!z||!await(s.isElement==null?void 0:s.isElement($)))&&(z=a.floating[_]||n.floating[b]);const W=E/2-C/2,F=z/2-m[b]/2-1,B=X(p[v],F),H=X(p[w],F),V=B,U=z-m[b]-H,S=z/2-m[b]/2+W,et=Ft(V,S,U),N=!c.arrow&&st(i)!=null&&S!==et&&n.reference[b]/2-(S<V?B:H)-m[b]/2<0,D=N?S<V?S-V:S-U:0;return{[h]:g[h]+D,data:{[h]:et,centerOffset:S-et-D,...N&&{alignmentOffset:D}},reset:N}}}),Te=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,r;const{placement:i,middlewareData:n,rects:s,initialPlacement:a,platform:c,elements:l}=e,{mainAxis:u=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:m=!0,...y}=nt(t,e);if((o=n.arrow)!=null&&o.alignmentOffset)return{};const v=K(i),w=Q(a),_=K(a)===a,E=await(c.isRTL==null?void 0:c.isRTL(l.floating)),C=g||(_||!m?[kt(a)]:Be(a)),$=b!=="none";!g&&$&&C.push(...Le(a,m,b,E));const z=[a,...C],W=await jt(e,y),F=[];let B=((r=n.flip)==null?void 0:r.overflows)||[];if(u&&F.push(W[v]),p){const S=ze(i,s,E);F.push(W[S[0]],W[S[1]])}if(B=[...B,{placement:i,overflows:F}],!F.every(S=>S<=0)){var H,V;const S=(((H=n.flip)==null?void 0:H.index)||0)+1,et=z[S];if(et)return{data:{index:S,overflows:B},reset:{placement:et}};let N=(V=B.filter(D=>D.overflows[0]<=0).sort((D,j)=>D.overflows[1]-j.overflows[1])[0])==null?void 0:V.placement;if(!N)switch(h){case"bestFit":{var U;const D=(U=B.filter(j=>{if($){const q=Q(j.placement);return q===w||q==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(q=>q>0).reduce((q,we)=>q+we,0)]).sort((j,q)=>j[1]-q[1])[0])==null?void 0:U[0];D&&(N=D);break}case"initialPlacement":N=a;break}if(i!==N)return{reset:{placement:N}}}return{}}}};async function Me(t,e){const{placement:o,platform:r,elements:i}=t,n=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=K(o),a=st(o),c=Q(o)==="y",l=["left","top"].includes(s)?-1:1,u=n&&c?-1:1,p=nt(e,t);let{mainAxis:g,crossAxis:h,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof b=="number"&&(h=a==="end"?b*-1:b),c?{x:h*u,y:g*l}:{x:g*l,y:h*u}}const We=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,r;const{x:i,y:n,placement:s,middlewareData:a}=e,c=await Me(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:n+c.y,data:{...c,placement:s}}}}},Ne=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:r,placement:i}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...c}=nt(t,e),l={x:o,y:r},u=await jt(e,c),p=Q(K(i)),g=ue(p);let h=l[g],b=l[p];if(n){const y=g==="y"?"top":"left",v=g==="y"?"bottom":"right",w=h+u[y],_=h-u[v];h=Ft(w,h,_)}if(s){const y=p==="y"?"top":"left",v=p==="y"?"bottom":"right",w=b+u[y],_=b-u[v];b=Ft(w,b,_)}const m=a.fn({...e,[g]:h,[p]:b});return{...m,data:{x:m.x-o,y:m.y-r,enabled:{[g]:n,[p]:s}}}}}},Ie=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,r;const{placement:i,rects:n,platform:s,elements:a}=e,{apply:c=()=>{},...l}=nt(t,e),u=await jt(e,l),p=K(i),g=st(i),h=Q(i)==="y",{width:b,height:m}=n.floating;let y,v;p==="top"||p==="bottom"?(y=p,v=g===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(v=p,y=g==="end"?"top":"bottom");const w=m-u.top-u.bottom,_=b-u.left-u.right,E=X(m-u[y],w),C=X(b-u[v],_),$=!e.middlewareData.shift;let z=E,W=C;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(W=_),(r=e.middlewareData.shift)!=null&&r.enabled.y&&(z=w),$&&!g){const B=P(u.left,0),H=P(u.right,0),V=P(u.top,0),U=P(u.bottom,0);h?W=b-2*(B!==0||H!==0?B+H:P(u.left,u.right)):z=m-2*(V!==0||U!==0?V+U:P(u.top,u.bottom))}await c({...e,availableWidth:W,availableHeight:z});const F=await s.getDimensions(a.floating);return b!==F.width||m!==F.height?{reset:{rects:!0}}:{}}}};function Pt(){return typeof window<"u"}function at(t){return he(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(he(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function he(t){return Pt()?t instanceof Node||t instanceof O(t).Node:!1}function R(t){return Pt()?t instanceof Element||t instanceof O(t).Element:!1}function T(t){return Pt()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function re(t){return!Pt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:o,overflowY:r,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+o)&&!["inline","contents"].includes(i)}function He(t){return["table","td","th"].includes(at(t))}function Ot(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function qt(t){const e=Yt(),o=R(t)?L(t):t;return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(o.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(o.contain||"").includes(r))}function Ue(t){let e=J(t);for(;T(e)&&!rt(e);){if(qt(e))return e;if(Ot(e))return null;e=J(e)}return null}function Yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(at(t))}function L(t){return O(t).getComputedStyle(t)}function $t(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function J(t){if(at(t)==="html")return t;const e=t.assignedSlot||t.parentNode||re(t)&&t.host||M(t);return re(e)?e.host:e}function pe(t){const e=J(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:T(e)&&gt(e)?e:pe(e)}function ht(t,e,o){var r;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=pe(t),n=i===((r=t.ownerDocument)==null?void 0:r.body),s=O(i);if(n){const a=Dt(s);return e.concat(s,s.visualViewport||[],gt(i)?i:[],a&&o?ht(a):[])}return e.concat(i,ht(i,[],o))}function Dt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function fe(t){const e=L(t);let o=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=T(t),n=i?t.offsetWidth:o,s=i?t.offsetHeight:r,a=_t(o)!==n||_t(r)!==s;return a&&(o=n,r=s),{width:o,height:r,$:a}}function Xt(t){return R(t)?t:t.contextElement}function ot(t){const e=Xt(t);if(!T(e))return G(1);const o=e.getBoundingClientRect(),{width:r,height:i,$:n}=fe(e);let s=(n?_t(o.width):o.width)/r,a=(n?_t(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const je=G(0);function be(t){const e=O(t);return!Yt()||!e.visualViewport?je:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qe(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==O(t)?!1:e}function Z(t,e,o,r){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),n=Xt(t);let s=G(1);e&&(r?R(r)&&(s=ot(r)):s=ot(t));const a=qe(n,o,r)?be(n):G(0);let c=(i.left+a.x)/s.x,l=(i.top+a.y)/s.y,u=i.width/s.x,p=i.height/s.y;if(n){const g=O(n),h=r&&R(r)?O(r):r;let b=g,m=Dt(b);for(;m&&r&&h!==b;){const y=ot(m),v=m.getBoundingClientRect(),w=L(m),_=v.left+(m.clientLeft+parseFloat(w.paddingLeft))*y.x,E=v.top+(m.clientTop+parseFloat(w.paddingTop))*y.y;c*=y.x,l*=y.y,u*=y.x,p*=y.y,c+=_,l+=E,b=O(m),m=Dt(b)}}return Ct({width:u,height:p,x:c,y:l})}function Ye(t){let{elements:e,rect:o,offsetParent:r,strategy:i}=t;const n=i==="fixed",s=M(r),a=e?Ot(e.floating):!1;if(r===s||a&&n)return o;let c={scrollLeft:0,scrollTop:0},l=G(1);const u=G(0),p=T(r);if((p||!p&&!n)&&((at(r)!=="body"||gt(s))&&(c=$t(r)),T(r))){const g=Z(r);l=ot(r),u.x=g.x+r.clientLeft,u.y=g.y+r.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-c.scrollLeft*l.x+u.x,y:o.y*l.y-c.scrollTop*l.y+u.y}}function Xe(t){return Array.from(t.getClientRects())}function Tt(t,e){const o=$t(t).scrollLeft;return e?e.left+o:Z(M(t)).left+o}function Ge(t){const e=M(t),o=$t(t),r=t.ownerDocument.body,i=P(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),n=P(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let s=-o.scrollLeft+Tt(t);const a=-o.scrollTop;return L(r).direction==="rtl"&&(s+=P(e.clientWidth,r.clientWidth)-i),{width:i,height:n,x:s,y:a}}function Ke(t,e){const o=O(t),r=M(t),i=o.visualViewport;let n=r.clientWidth,s=r.clientHeight,a=0,c=0;if(i){n=i.width,s=i.height;const l=Yt();(!l||l&&e==="fixed")&&(a=i.offsetLeft,c=i.offsetTop)}return{width:n,height:s,x:a,y:c}}function Je(t,e){const o=Z(t,!0,e==="fixed"),r=o.top+t.clientTop,i=o.left+t.clientLeft,n=T(t)?ot(t):G(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,c=i*n.x,l=r*n.y;return{width:s,height:a,x:c,y:l}}function ie(t,e,o){let r;if(e==="viewport")r=Ke(t,o);else if(e==="document")r=Ge(M(t));else if(R(e))r=Je(e,o);else{const i=be(t);r={...e,x:e.x-i.x,y:e.y-i.y}}return Ct(r)}function ge(t,e){const o=J(t);return o===e||!R(o)||rt(o)?!1:L(o).position==="fixed"||ge(o,e)}function Qe(t,e){const o=e.get(t);if(o)return o;let r=ht(t,[],!1).filter(a=>R(a)&&at(a)!=="body"),i=null;const n=L(t).position==="fixed";let s=n?J(t):t;for(;R(s)&&!rt(s);){const a=L(s),c=qt(s);!c&&a.position==="fixed"&&(i=null),(n?!c&&!i:!c&&a.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||gt(s)&&!c&&ge(t,s))?r=r.filter(u=>u!==s):i=a,s=J(s)}return e.set(t,r),r}function Ze(t){let{element:e,boundary:o,rootBoundary:r,strategy:i}=t;const s=[...o==="clippingAncestors"?Ot(e)?[]:Qe(e,this._c):[].concat(o),r],a=s[0],c=s.reduce((l,u)=>{const p=ie(e,u,i);return l.top=P(p.top,l.top),l.right=X(p.right,l.right),l.bottom=X(p.bottom,l.bottom),l.left=P(p.left,l.left),l},ie(e,a,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function to(t){const{width:e,height:o}=fe(t);return{width:e,height:o}}function eo(t,e,o){const r=T(e),i=M(e),n=o==="fixed",s=Z(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const c=G(0);if(r||!r&&!n)if((at(e)!=="body"||gt(i))&&(a=$t(e)),r){const h=Z(e,!0,n,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else i&&(c.x=Tt(i));let l=0,u=0;if(i&&!r&&!n){const h=i.getBoundingClientRect();u=h.top+a.scrollTop,l=h.left+a.scrollLeft-Tt(i,h)}const p=s.left+a.scrollLeft-c.x-l,g=s.top+a.scrollTop-c.y-u;return{x:p,y:g,width:s.width,height:s.height}}function Rt(t){return L(t).position==="static"}function ne(t,e){if(!T(t)||L(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return M(t)===o&&(o=o.ownerDocument.body),o}function me(t,e){const o=O(t);if(Ot(t))return o;if(!T(t)){let i=J(t);for(;i&&!rt(i);){if(R(i)&&!Rt(i))return i;i=J(i)}return o}let r=ne(t,e);for(;r&&He(r)&&Rt(r);)r=ne(r,e);return r&&rt(r)&&Rt(r)&&!qt(r)?o:r||Ue(t)||o}const oo=async function(t){const e=this.getOffsetParent||me,o=this.getDimensions,r=await o(t.floating);return{reference:eo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ro(t){return L(t).direction==="rtl"}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:Ye,getDocumentElement:M,getClippingRect:Ze,getOffsetParent:me,getElementRects:oo,getClientRects:Xe,getDimensions:to,getScale:ot,isElement:R,isRTL:ro};function io(t,e){let o=null,r;const i=M(t);function n(){var a;clearTimeout(r),(a=o)==null||a.disconnect(),o=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),n();const{left:l,top:u,width:p,height:g}=t.getBoundingClientRect();if(a||e(),!p||!g)return;const h=vt(u),b=vt(i.clientWidth-(l+p)),m=vt(i.clientHeight-(u+g)),y=vt(l),w={rootMargin:-h+"px "+-b+"px "+-m+"px "+-y+"px",threshold:P(0,X(1,c))||1};let _=!0;function E(C){const $=C[0].intersectionRatio;if($!==c){if(!_)return s();$?s(!1,$):r=setTimeout(()=>{s(!1,1e-7)},1e3)}_=!1}try{o=new IntersectionObserver(E,{...w,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,w)}o.observe(t)}return s(!0),n}function no(t,e,o,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,l=Xt(t),u=i||n?[...l?ht(l):[],...ht(e)]:[];u.forEach(v=>{i&&v.addEventListener("scroll",o,{passive:!0}),n&&v.addEventListener("resize",o)});const p=l&&a?io(l,o):null;let g=-1,h=null;s&&(h=new ResizeObserver(v=>{let[w]=v;w&&w.target===l&&h&&(h.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var _;(_=h)==null||_.observe(e)})),o()}),l&&!c&&h.observe(l),h.observe(e));let b,m=c?Z(t):null;c&&y();function y(){const v=Z(t);m&&(v.x!==m.x||v.y!==m.y||v.width!==m.width||v.height!==m.height)&&o(),m=v,b=requestAnimationFrame(y)}return o(),()=>{var v;u.forEach(w=>{i&&w.removeEventListener("scroll",o),n&&w.removeEventListener("resize",o)}),p==null||p(),(v=h)==null||v.disconnect(),h=null,c&&cancelAnimationFrame(b)}}const so=We,ao=Ne,lo=Te,se=Ie,co=De,uo=(t,e,o)=>{const r=new Map,i={platform:yt,...o},n={...i.platform,_c:r};return Ve(t,e,{...i,platform:n})};function ho(t){return po(t)}function Lt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function po(t){for(let e=t;e;e=Lt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Lt(t);e;e=Lt(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function fo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var k=class extends ft{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let r=0,i=0,n=0,s=0,a=0,c=0,l=0,u=0;o?t.top<e.top?(r=t.left,i=t.bottom,n=t.right,s=t.bottom,a=e.left,c=e.top,l=e.right,u=e.top):(r=e.left,i=e.bottom,n=e.right,s=e.bottom,a=t.left,c=t.top,l=t.right,u=t.top):t.left<e.left?(r=t.right,i=t.top,n=e.left,s=e.top,a=t.right,c=t.bottom,l=e.left,u=e.bottom):(r=e.right,i=e.top,n=t.left,s=t.top,a=e.right,c=e.bottom,l=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${r}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||fo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=no(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[so({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(se({apply:({rects:o})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${o.reference.width}px`:"",this.popup.style.height=i?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(lo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(ao({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(se({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(co({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>yt.getOffsetParent(o,ho):yt.getOffsetParent;uo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Wt(At({},yt),{getOffsetParent:e})}).then(({x:o,y:r,middlewareData:i,placement:n})=>{const s=this.matches(":dir(rtl)"),a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${o}px`,top:`${r}px`}),this.arrow){const c=i.arrow.x,l=i.arrow.y;let u="",p="",g="",h="";if(this.arrowPlacement==="start"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=s?b:"",h=s?"":b}else if(this.arrowPlacement==="end"){const b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=s?"":b,h=s?b:"",g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof c=="number"?`${c}px`:"",u=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:u,right:p,bottom:g,left:h,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${xt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};k.styles=[pt,Pe];d([tt(".popup")],k.prototype,"popup",2);d([tt(".popup__arrow")],k.prototype,"arrowEl",2);d([f()],k.prototype,"anchor",2);d([f({type:Boolean,reflect:!0})],k.prototype,"active",2);d([f({reflect:!0})],k.prototype,"placement",2);d([f({reflect:!0})],k.prototype,"strategy",2);d([f({type:Number})],k.prototype,"distance",2);d([f({type:Number})],k.prototype,"skidding",2);d([f({type:Boolean})],k.prototype,"arrow",2);d([f({attribute:"arrow-placement"})],k.prototype,"arrowPlacement",2);d([f({attribute:"arrow-padding",type:Number})],k.prototype,"arrowPadding",2);d([f({type:Boolean})],k.prototype,"flip",2);d([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],k.prototype,"flipFallbackPlacements",2);d([f({attribute:"flip-fallback-strategy"})],k.prototype,"flipFallbackStrategy",2);d([f({type:Object})],k.prototype,"flipBoundary",2);d([f({attribute:"flip-padding",type:Number})],k.prototype,"flipPadding",2);d([f({type:Boolean})],k.prototype,"shift",2);d([f({type:Object})],k.prototype,"shiftBoundary",2);d([f({attribute:"shift-padding",type:Number})],k.prototype,"shiftPadding",2);d([f({attribute:"auto-size"})],k.prototype,"autoSize",2);d([f()],k.prototype,"sync",2);d([f({type:Object})],k.prototype,"autoSizeBoundary",2);d([f({attribute:"auto-size-padding",type:Number})],k.prototype,"autoSizePadding",2);d([f({attribute:"hover-bridge",type:Boolean})],k.prototype,"hoverBridge",2);var bo=it`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,A=class extends ft{constructor(){super(),this.localize=new Mt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=Jt(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=Jt(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await Qt(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:o,options:r}=Zt(this,"tooltip.show",{dir:this.localize.dir()});await te(this.popup.popup,o,r),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await Qt(this.body);const{keyframes:o,options:r}=Zt(this,"tooltip.hide",{dir:this.localize.dir()});await te(this.popup.popup,o,r),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ee(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ee(this,"sl-after-hide")}render(){return Y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${xt({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};A.styles=[pt,bo];A.dependencies={"sl-popup":k};d([tt("slot:not([name])")],A.prototype,"defaultSlot",2);d([tt(".tooltip__body")],A.prototype,"body",2);d([tt("sl-popup")],A.prototype,"popup",2);d([f()],A.prototype,"content",2);d([f()],A.prototype,"placement",2);d([f({type:Boolean,reflect:!0})],A.prototype,"disabled",2);d([f({type:Number})],A.prototype,"distance",2);d([f({type:Boolean,reflect:!0})],A.prototype,"open",2);d([f({type:Number})],A.prototype,"skidding",2);d([f()],A.prototype,"trigger",2);d([f({type:Boolean})],A.prototype,"hoist",2);d([St("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1);d([St(["content","distance","hoist","placement","skidding"])],A.prototype,"handleOptionsChange",1);d([St("disabled")],A.prototype,"handleDisabledChange",1);le("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});le("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});x.define("sl-button");bt.define("sl-button-group");ae.define("sl-icon");A.define("sl-tooltip");const go=it`
  .toolbar {
  }
`;var mo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,ve=t=>{throw TypeError(t)},yo=(t,e,o,r)=>{for(var i=vo(e,o),n=t.length-1,s;n>=0;n--)(s=t[n])&&(i=s(e,o,i)||i);return i&&mo(e,o,i),i},ye=(t,e,o)=>e.has(t)||ve("Cannot "+o),wo=(t,e,o)=>(ye(t,e,"read from private field"),o?o.call(t):e.get(t)),xo=(t,e,o)=>e.has(t)?ve("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),_o=(t,e,o,r)=>(ye(t,e,"write to private field"),e.set(t,o),o),wt;xe();const Gt=class Gt extends _e{constructor(){super(...arguments),this.name="hot-toolbar",xo(this,wt,"top"),this.undo=e=>{e.stopPropagation(),this.dispatchEvent(new Event("undo"))},this.redo=e=>{e.stopPropagation(),this.dispatchEvent(new Event("redo"))},this.bold=e=>{e.stopPropagation(),this.dispatchEvent(new Event("bold"))},this.italic=e=>{e.stopPropagation(),this.dispatchEvent(new Event("italic"))},this.underline=e=>{e.stopPropagation(),this.dispatchEvent(new Event("underline"))},this.alignLeft=e=>{e.stopPropagation(),this.dispatchEvent(new Event("leftalign"))},this.alignCenter=e=>{e.stopPropagation(),this.dispatchEvent(new Event("centeralign"))},this.alignRight=e=>{e.stopPropagation(),this.dispatchEvent(new Event("rightalign"))}}get tooltipPosition(){return wo(this,wt)}set tooltipPosition(e){_o(this,wt,e)}render(){return Y`
      <div class="toolbar">
        ${this.renderButtonGroup("History",[{content:"Undo",icon:"arrow-counterclockwise",label:"Undo",action:this.undo},{content:"Redo",icon:"arrow-clockwise",label:"Redo",action:this.redo}])}
        ${this.renderButtonGroup("Formatting",[{content:"Bold",icon:"type-bold",label:"Bold",action:this.bold},{content:"Italic",icon:"type-italic",label:"Italic",action:this.italic},{content:"Underline",icon:"type-underline",label:"Underline",action:this.underline}])}
        ${this.renderButtonGroup("Alignment",[{content:"Align Left",icon:"justify-left",label:"Align Left",action:this.alignLeft},{content:"Align Center",icon:"justify",label:"Align Center",action:this.alignCenter},{content:"Align Right",icon:"justify-right",label:"Align Right",action:this.alignRight}])}
      </div>
    `}renderButtonGroup(e,o){return Y`
      <sl-button-group label=${e}>
        ${o.map(r=>this.renderButton(r))}
      </sl-button-group>
    `}renderButton({content:e,icon:o,label:r,action:i}){return Y`
      <sl-tooltip content=${e} placement="${this.tooltipPosition}">
        <sl-button @click=${i??(()=>{})}
          ><sl-icon library="bundled" name=${o} label=${r}></sl-icon
        ></sl-button>
      </sl-tooltip>
    `}};Gt.styles=[go];let Et=Gt;wt=new WeakMap;yo([f({type:String,attribute:"tooltip-position"})],Et.prototype,"tooltipPosition");customElements.define("hot-toolbar",Et);export{Ee as F,k as S,bt as a,x as b,A as c,ce as d,Ae as e,So as f,It as g,Ao as v};
