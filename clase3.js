// 1.Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.

 var frase = prompt("Ingrese una frase")

 for( i=0 ; i<10;i++){
    console.log(frase)
}

// 2.Escribe un programa que le pida al usuario una frase y un número.
//  El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

 var frase = prompt("Ingrese una frase")
 var num= parseInt(prompt("Ingrese un numro "))

 for( i=0 ; i<num ;i++){
     console.log(frase )
 }

//3.Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.

  var num= parseInt(prompt("Ingrese un numero "))

 for( i=0 ; i<num ;i++){
   console.log(i)
 }

// 4.Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. 
// Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:var frase = prompt("Ingrese una frase")
// var num1= parseInt(prompt("Ingrese un numero "))
// var num2= parseInt(prompt("Ingrese un numero "))

 for( i=num1 ; i<=num2 ;i++){
   console.log(i)
 }

// // 5.Escribe un programa que:

// Le pida al usuario un string (una cadena de texto).
// Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
// De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
 var frase = prompt("Ingrese una frase")
while( frase != "SALIR"){
   console.log(frase)

   str=prompt("ingrese una frase")
  }
  console.log("hasta pronto")
// 6.Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). 
// La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.
const numeroAleatorio=Math.floor( Math.random()*10)
 
 while(true){
    adivinar=parseInt(prompt("ingresa un numero y trata de adivinar"))
if (adivinar == numeroAleatorio){
    console.log("genial adivinaste")
    break;
}else{
    console.log("sigue intentando1")
}
}


