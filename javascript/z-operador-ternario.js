/*   

OPERADORES TERNÁRIOS

? IF (SE)
: ELSE (SE NÃO)

*/

const salary = 15000

// if(salary < 3000){
//     console.log('o colaborador é junior')
// }else if(salary >=3000 && salary > 10000){
//     console.log('ele é senior')
// }else {
//     console.log('ele e diretor')
// }

//   IF salary < 3000 && console.log('o colaborador é junior')

// IF/ELSE -> salary < 3000 ? console.log('o colaborador é junior'): console.log('ele é senior')

// ELSE IF
salary < 3000 ? console.log('o colaborador é junior') : salary >= 3000 && salary < 10000 ? console.log('ele é senior') : console.log('ele é diretor')