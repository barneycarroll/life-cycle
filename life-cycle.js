class LifeCycle extends HTMLElement {
  connected(){}
  connectedCallback(){
    this.style.display = 'contents'
    
    this.connected.apply(this, arguments)
  }

  disconnected(){}
  disconnectedCallback(){
    this.disconnected.apply(this, arguments)
  }

  adopted(){}
  adoptedCallback(){
    this.adopted.apply(this, arguments)
  }
  
  attributeChanged(){}
  attributeChangedCallback(){
    this.attributeChanged.apply(this, arguments)
  }
  
  static get observedAttributes(){
    return ['attribute']
  }
}

customElements.define('life-cycle', LifeCycle)