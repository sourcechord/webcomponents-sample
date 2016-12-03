
class SampleElement extends HTMLElement {
    constructor() {
        super();
        this.importDoc = document.currentScript.ownerDocument;
    }
    connectedCallback() {
        const template = this.importDoc.querySelector('#sample-element-template');
        const instance = template.content.cloneNode(true);
        this.appendChild(instance);
    }
}

customElements.define('sample-element', SampleElement);
