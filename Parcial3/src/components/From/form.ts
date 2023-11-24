export enum Attributes {
    "name" = "name",
    "color" = "color",
    "letter" = "letter"
}
import Fromscsss from "./form.css"

export class form extends HTMLElement{
    name?: string
    color?: string
    letter?: string

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes(){
        const attrs: Record<Attributes, null> ={
            name: null,
            color:null,
            letter: null
        } 
        return Object.keys(attrs)
    }
    attributeChangedCallback(propName: Attributes, oldValue: undefined| string, newValue: undefined | string){
        switch(propName){
            default:
            this[propName] = newValue
            break 
        }
        this.render()
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= `<style>${Fromscsss}<style>`
        }

        const inputname = this.ownerDocument.createElement("input")
        inputname.setAttribute("placeholder","Nickname")
        this.shadowRoot?.appendChild(inputname)
        const inputcolor = this.ownerDocument.createElement("input")
        inputcolor.setAttribute("type","color")
        this.shadowRoot?.appendChild(inputcolor)
        const inputletter = this.ownerDocument.createElement("input")
        inputletter.setAttribute("placeholder","A letter u want")
        this.shadowRoot?.appendChild(inputletter)
        const button = this.ownerDocument.createElement("button")
        button.innerText= "Continue"
        this.shadowRoot?.appendChild(button)
    }
    
    }

    customElements.define("my-form",form)