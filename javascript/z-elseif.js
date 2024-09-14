/*  

    IF (SE)
    ELSE (SE NÃO)
    ELSE IF

*/

const temperature = 36

if(temperature===36){
    console.log('você está saudável')
}else if(temperature > 36 && temperature <=40 ) {
    console.log('você está com febre')
}else if (temperature > 40){
    console.log('você está com muita febre')
}else {
    console.log('você está com hipotermia')
}