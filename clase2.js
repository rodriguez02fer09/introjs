// 1.Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

// Si es mayor debe imprimir "El número es mayor a 10".

// Si es menor debe imprimir "El número es menor o igual a 10".

var num=prompt("digite un numero")

 if (num > 10){
 console.log("el numero es mayor a 10")
} else  {
  console.log("el numero es menor a 10")
 } 

// 2.Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. 
// Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!"
// , de lo contrario debe imprimir "Lo siento, intenta nuevamente!".

// let numero = parseInt(prompt("Adivina un numero (del 1 al 10):"));
// let numeroAleatorio = Math.floor(Math.random() * 10);

// if (numeroAleatorio === numero) {
//     console.log("Felicitaciones, ese era!");
// } else {
//     console.log("Lo siento, intenta nuevamente!");



// 3. Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc.
// son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".

 var  numero= parseInt(prompt("digite un numero"))

 if (numero % 5  == 0) {
    console.log("el numero" + " " + numero + " " + "es multiplo de 5 ")
}else{
  console.log("No, el número" + " " + numero+ " "+ "no es múltiplo de 5") 
 }

//4.Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.

// Si el número es menor a 10 debe imprimir "El número es menor que 10".

// Si el número es mayor a 10 debe imprimir "El número es mayor que 10".

// Si el número es igual a 10 debe imprimir "El número es igual a 10".

var num=prompt("digite un numero")
if (num < 10){
     console.log("el" + num + " es menor a 10")
}else if(num==10) {
          console.log("el" + num  +" es igual a 10")

}else{
    console.log("el" + num + " es mayora 10")
 }

// 5.El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
var peso = parseFloat(prompt("escriba su peso"))
 var altura=parseFloat(prompt("escriba su altura"))
 var bmi= peso /(altura * altura) 

if (bmi < 18.5){
   console.log("Bajo de peso")
 }else if(bmi >= 18.5 ||bmi <= 24.9){
    console.log("Normal")
 }else if(bmi >= 25 ||bmi <= 29.9){
     console.log("Sobrepeso" )
 }else if(bmi >= 30){
    console.log("obeso")
 }

// 5.Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola "bing".
// Si el número es múltiplo de 5 debe imprimir en la consola "bong".
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
 var  numero= parseInt(prompt("digite un numero"))
 if (numero % 3  == 0) {
   console.log("Bing ")
}else if(numero % 5  == 0){
       console.log("bong")
  }else if(numero % 3 === 0 &&  numero % 5  === 0 ) {
        console.log("BINGBONG" )
 }else {
        console.log(numero)
 }

