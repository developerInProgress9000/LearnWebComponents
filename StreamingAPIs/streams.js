class StreamingPlatformDisplay extends HTMLElement {
    constructor() {
        super();

        let myTemplate = document.getElementById('my-template');
        let content = myTemplate.content;

        const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
            content.cloneNode(true)
        );
    }
}


window.onload = function() {
    customElements.define('streaming-platform-display', StreamingPlatformDisplay);
};