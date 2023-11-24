import  "../components/From/form"

export class formcreen extends HTMLElement{

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
   
    connectedCallback(){
        this.render()
    }

    render(){
    
        const form = this.ownerDocument.createElement("my-form") 
        this.shadowRoot?.appendChild(form)  
    }
    }

    customElements.define("my-formscreen",formcreen)