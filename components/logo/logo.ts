
import HotLogoIconSVG from '../../theme/logo/hot-logo-icon.svg';
import HotLogoTextSVG from '../../theme/logo/hot-logo-text.svg';

import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import styles from './logo.styles.js';
import type { CSSResultGroup } from 'lit';

export class Logo extends LitElement {

  static styles: CSSResultGroup = [styles];

  name = 'hot-logo';

  @property({ type: Boolean })
  accessor iconOnly = false;

  @property({ type: Boolean })
  accessor textOnly = false;

  protected render() {

    return html`
      <h1 class="logo">
        ${ !this.textOnly ? html`<img src=${HotLogoIconSVG} />` : null }
        ${ !this.iconOnly ? html`<img src=${HotLogoTextSVG} />` : null }
      </h1>
    `;
  }

}

export default Logo;

// Define web component
customElements.define("hot-logo", Logo);
