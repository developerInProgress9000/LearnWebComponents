
var gbwIsRegistered = false;

// ES6 class
class HelloWorld extends HTMLParagraphElement {
  // constructor is called when the element is displayed
  constructor() {
    super();
    // create a shadow dom
    const shadow = this.attachShadow({ mode: "closed" });
    // create a span element
    const text = document.createElement("span");
    // set the content to 'Hello World'
    text.textContent = "Hello World";
    // insert our created element into our shadow DOM, causing it to appear
    shadow.appendChild(text);
  }
}


// ES6 class
class GoodbyeWorld extends HTMLParagraphElement {
  // constructor is called when the element is displayed
  constructor() {
    super();
    // create a shadow dom
    const shadow = this.attachShadow({ mode: "closed" });
    // create a span element
    const text = document.createElement("span");
    // set the content to 'Goodbye World'
    text.textContent = "Goodbye World";
    // insert our created element into our shadow DOM, causing it to appear
    shadow.appendChild(text);
  }
}


function registerHelloWorld() {
  customElements.define("hello-world", HelloWorld, { extends: "p" });
}

function registerGoodbyeWorld() {
  if(!gbwIsRegistered) {
    customElements.define("goodbye-world", GoodbyeWorld, { extends: "p" });

    gbwIsRegistered = true;
  }
}


// make sure that the <hello-world></hello-world>
// or simply <hello-world /> is recognised as this element
window.onload = function() {
  registerHelloWorld();

  
}