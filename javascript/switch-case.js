/* 

 switch case - controlador de fluxo
    APENAS VALORES EXATOS
*/

const temperature = 30

switch (temperature){
    case 10 :
        console.log('tá meio frio')
        break

    case 20:
        console.log('tá meio quente')
        break

    case 30 :
        console.log('tá quente')
        break

        default:
            console.log('não sei te dizer')
            break
}