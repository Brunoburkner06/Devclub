/* 

    DOCUMENT -> HTML

    getElementById -> Trás UM elemento pelo id.
    getElementByClassName -> Trás TODOS os elementos com essa classe.
    getElementByTagNamw -> Trás TODOS os  elementos com essa TAG.  
    getElementByName -> Trás  TODOS os elementos com esse NAME.
    
    querrySelector -> Trás UM elemento, o PRIMEIRO que encontrar.
    querrySelectorAll -> Trás TODOS os elementos que encontrar.


    ALTERANDO E ACESSANDO TEXTOS

    textContent -> Pega todo o conteúdo
    innerText -> Pega APENAS o texto
    innerHtml -> Permite adicionar HTML e TEXTO

 */

const input = document.getElementById("main-input")

console.log(input)

const elements = document.getElementsByClassName("paragraph-js")

console.log(elements)

const tag = document.getElementsByTagName("p")

console.log(tag)

const names = document.getElementsByName("nome-completo")

console.log(names)


const element = document.querySelector("#main-input")

element.placeholder= "Agora é esse texto"   //outras opções : value     
console.log("element.placeholder")


const all = document.querySelectorAll("p")

console.log("all")

const elem = document.querySelector(".paragraph.js")

console.log("element.textContent") // SÓ HTML
console.log("element.innertext") //LEVA EM CONTA O CSS
console.log("element.innerHTML") //TRÁS TUDO


const button = document.querySelector(".main-button")

button.style.backgroundColor = "#763873"





