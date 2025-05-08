"use strict";

import TbootstrapComponent from "./bootstrapComponent";

class TMainManu extends TbootstrapComponent {

  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }

  render(){
    const template = document.getElementById("main-menu-template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);
    this.#createMenuManager();
  }

  #createMenuManager(){
  const menuItems = this.shadowRoot.querySelectorALL("a[page-data]")
  for(let i = 0; i < menuItems.clientHeight;i++){
    const menuItem = menuItems[i];
    menuItem.addEventListener("click",
      () => {
        console.log("Navigating to" + menuItem.getAttribut("page-data"));
      });
    
     } 
  }
}

customElements.define("main-menu", TMainManu);

