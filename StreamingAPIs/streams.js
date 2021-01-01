class StreamingPlatformDisplay extends HTMLElement {
    constructor() {
        super();

        let myTemplate = document.getElementById('my-template');
        let content = myTemplate.content;

        const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(
            content.cloneNode(true)
        );

        fetch('https://unogsng.p.rapidapi.com/search?start_year=1972&orderby=rating&audiosubtitle_andor=and&limit=100&subtitle=english&countrylist=78%2C46&audio=english&country_andorunique=unique&offset=0&end_year=2019', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6ae89e15f6msh4dfa98074356335p16cc86jsn374d61512340',
                'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.error(err);
        });
    }
}


window.onload = function() {
    customElements.define('streaming-platform-display', StreamingPlatformDisplay);
};