export enum Attributes {
    "name" = "name",
    "color" = "color",
    "letter" = "letter"
}


export class cuadricula extends HTMLElement{
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
    const CuadradosVacios = this.ownerDocument.createElement("div")
    }
    }

    customElements.define("my-cuadricula",cuadricula)