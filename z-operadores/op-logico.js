/*  

 OPERADORES LÓGICOS

 &&  -> E -> PESSOA EXIGENTE /
    TRUE && TRUE = TRUE
    TRUE && FALSE =  FALSE
    FALSE && FALSE = FALSE


 ||  -> OU -> TANTO FAZ /
    TRUE || TRUE = TRUE
    TRUE || FALSE =  TRUE
    FALSE || FALSE = FALSE


 !  -> NEGAÇÃO 
    !TRUE = FALSE
    !FALSE = TRUE

*/

const digitarASenha = true
const digitarOToken = true
const numeroDaConta = true


if(digitarASenha && digitarOToken && numeroDaConta){
    console.log("logado com sucesso")
}else{
    console.log("Autentificação Falhou")
}