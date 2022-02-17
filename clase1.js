// numeros ,cadenas de texto y boleanos//

// 1. Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
// Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir en la consola debes utilizar el método console.log() -->

var frase = prompt("¿cual es tu nombre?")
console.log(frase)

//2.Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.
//Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".
//Comparte tu respuesta .

 var frase = prompt("¿cual es tu nombre?")
 console.log( "hola" +" "  + frase + "!")

// 3.Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

 var num1= parseInt(prompt("ingresa un numero :"))
 var num2= parseInt(prompt("ingresa un numero 2 :"))
var result = num1 + num2 
 console.log("el resultado es " + result) 

// 4.Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000.
// var anionacimiento = parseInt(prompt("escriba el año en que nacio"))
// var anioactual= 2022

 var resul = anioactual - anionacimiento

console.log("su edad es  " + resul)

//5. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
// El BMI se calcula con la siguiente formula:
// peso / altura^2

var peso = parseFloat(prompt("escriba su peso"))
var altura=parseFloat(prompt("escriba su altura"))
var bmi= peso /(altura * altura) 
console.log("su BMI es" + bmi)


