import { LitElement, CSSResultGroup } from 'lit';

export declare class Toolbar extends LitElement {
    static styles: CSSResultGroup;
    name: string;
    /** Change the position of the tooltips relative to buttons. */
    accessor tooltipPosition: string;
    protected render(): import('lit').TemplateResult<1>;
    private renderButtonGroup;
    private renderButton;
    private readonly undo;
    private readonly redo;
    private readonly bold;
    private readonly italic;
    private readonly underline;
    private readonly alignLeft;
    private readonly alignCenter;
    private readonly alignRight;
}
export default Toolbar;
