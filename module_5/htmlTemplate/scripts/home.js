"use strict"

import TbootstrapComponent from "./bootstrapComponent.js";

class THome extends TbootstrapComponent {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

  }

  render(){
    const template = document.getElementById("home-page-template");
    const content = template.content.clone(true);
    this.shadowRoot.appendChild(content);
  }
}

customElements.define("home-page", THome);