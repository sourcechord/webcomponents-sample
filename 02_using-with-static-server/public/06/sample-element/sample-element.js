
class SampleElement extends HTMLElement {
    constructor() {
        super();
        this.importDoc = document.currentScript.ownerDocument;
        
    }
    connectedCallback() {
        const template = this.importDoc.querySelector('#sample-element-template');
        const instance = template.content.cloneNode(true);

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(instance);
    }
}

customElements.define('sample-element', SampleElement);
