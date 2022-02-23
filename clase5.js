// //strings 
// //unir un arreglo en una cadena se usa join.

// const arr=[1,2,3,4,5]

// console.log(arr.join(" "))

// let str=""
// for (let i=0;i<arr.length; i++) {
//     str +=arr[i] +" "
// }console.log(str)

// //otro metodo
// const arr=[1,2,3,4,5]
// console.log(arr.join("-"))

// //buscar la posicion de un elemento 
// const arr=[1,2,3,4,5]
// console.log (arr.indexOf(4))
// //lastIndexOf da la ultima posicion del elemento.

// // obtener la longitud -lenght
// const h ="  hola   "
// console.log(h.length)

// //recorrer cadenas o estrings
// const str = "hola mundo"

// console.log (str[5])// da como resultado la m 
// //en los strings no se puede modificar caracteres

// //como dividir o partir un string
// const str= "1,2,3,4,5,6,7,8,9"
// console.log(str.split(","))


// //pasar de minuscula a mayusculas 
// const str="Hola mundo"
// console.log(str.toUpperCase())

// //pasar a minuscula
// const str="Hola mundo"
// console.log(str.toLowerCase())

// //saber si un string comienza con otro string 
// const str="hola mundo"
// str=str.toLowerCase()
// console.log(str.startsWith("ho"))

// //extraer una parte del string 
// const str="hola mundo"
// console.log(str.substring(5))
// //reemplazar partes de un string 
// let str="hola mundo"
// console.log(str.replace("h","B"))
// //el replace retorna un nuevo string

// //verificar si el string incluye una subcadena 
// let str= "hola mundo"
// console.log(str.includes ("hola"))

// //reemplazar partes de un string
// let str="hola mundo"

// str =str.replace("o", "hola mundo")
// console.log(str)
// //para reemplazar todo se deja la letra a reemplzar con /o/ 
// // ejercicios
// // 1.Escribe un programa que le pida una frase al usuario y la repita en mayúsculas. Por ejemplo:

// // Ingresa una frase> Hola Mundo
// // HOLA MUNDO
// let frase =prompt("ingrese una frase")
// console.log(frase.toUpperCase())

// //2.Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:
// //Ingresa una frase> Hasta la próxima
// //La frase tiene 4 caracteres "a"
// const frase =prompt("ingrese una frase")
// contar =0

// for( let i=0; i<frase.length; i++){
//        if (frase[i]=="a"){
//        contar +=1
//      }
//  }console.log(contar)
    
// //  3.Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

// //  Las mayúsculas se reemplazan por minúsculas.
// //  Se eliminan los espacios en blanco.
// //  Reemplaza el caracter "a" por "4".
// //  Reemplaza el caracter "e" por "3".
// //  Reemplaza el caracter "i" por "1".
// //  Reemplaza el caracter "o" por "0".

// let frase =prompt("ingrese una frase")
// frase=frase.toUpperCase()
// frase=frase.replaceAll("a",4)
// frase=frase.replaceAll("e",3)
// frase=frase.replaceAll("i",1)
// frase=frase.replaceAll("o",0)

// console.log(frase.trim())
// 4.Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:
// Ingresa una frase> esta es una prueba
// Esta Es Una Prueba
let frase =prompt("ingrese una frase")

frase =frase.trim().split(" ")
frase =frase

//6.Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. 
//Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".
let frase =prompt("ingrese una frase")




