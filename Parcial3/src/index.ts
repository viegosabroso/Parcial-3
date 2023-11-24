import "./screens/Form"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('my-formscreen');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)