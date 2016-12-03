class SampleElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerText = "hoge";
    }
}

customElements.define('sample-element', SampleElement);
