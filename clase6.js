//Funciones 

// function hola(name,age){
//     return `hola ${name }, tienes ${age} años 
// }
//otra forma
//Funcion Flecha    
const hola =(name, age) => {
 return `hola ${name}, tienes ${age} años`  
}   
//const hola =(name, age)=>`hola ${name}, tienes ${age} años` 
//funcion anonima
// se utiliza para 
// -asignar a una variable 
// -pasar como argumento de otra funciòn 
// -retornar desde una funciòn 
// // -para limitar el alcance de las variables (var)
//     const hola=function(){
//         return function(){}
//     }
// hola()

// ejercicios
// 1.Escribe una función llamada suma que reciba dos números y retorne la suma de los dos números.

//  escribe la función suma acá

// código de prueba, verifica que aparezcan los valores correctos en la consola
// console.log(suma(1, 2)) // 3
// console.log(suma(0, 0)) // 0
// console.log(suma(245, 923)) // 1168

function suma(num1,num2){
    return num1 + num2
}
console.log(suma(1,2))
console.log(suma(0,0))
console.log(suma(245,923))

// 2.Escribe una función llamada hola que reciba un argumento (una cadena de texto) y retorne "Hola " seguido del argumento y un signo de exclamación.
function hola (name){
    return "hola " + name+ " ! "
}
console.log(hola("Pedro")) 
console.log(hola("Juan")) 
console.log(hola("")) 

// 3.El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
// El BMI se calcula con la siguiente formula:
// peso / altura^2
// Escribe una función llamada bmi que reciba dos argumentos: peso y altura. Utiliza la fórmula para retornar el BMI correspondiente.
 function bmi (p,al){
     return p / al ** 2
 }
 console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(55, 1.63)) //  16.979591836734695

// 4.La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

// Si el número es 1 retorna "El color es negro".
// Si el número es 2 retorna "El color es blanco".
// Si el número es 3 retorna "El color es azul".
// De lo contrario retorna "El color es verde".
// El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla para que funcione correctamente según lo anterior.

function calcularColor(num) {
    let color= " "

    if (num == 1) {
       color = "negro"
    } else  if(num == 2) {
       color = "blanco"
    }  else if (num == 3) {
     color = "rojo"
    } else {
       color = "verde";
    }
      return "El color es " + color;
  }
  

  console.log(calcularColor(1)) 
  console.log(calcularColor(2)) 
  console.log(calcularColor(3)) 
  console.log(calcularColor(8)) 

//   5.Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.
function capitalizar (cadena) {
    const palabras = cadena.split(" ")
    return palabras.reduce((value) => {
       return value.toUpperCase()
    }, '')
}


// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"

function capitalizar (cadena) {
    const palabras = cadena.split(" ")
    return palabras.reduce((previousValue, currentValue) => {
       return currentValue.toUpperCase() + ' ' + previousValue
    }, '')
}


// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"