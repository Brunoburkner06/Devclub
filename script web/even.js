/*  

EVENT

*/

const input = document.querySelector("#input")
const select = document.querySelector("select")
const button = document.querySelector(".button")

select.addEventListener("change", function(){
    console.log("troquei de valor   ")

})

button.addEventListener("click", function(event){
    console.log("event")
})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function fuiEscrito(){
    console.log("fui escrito")
}

input.addEventListener("keypress", fuiEscrito)