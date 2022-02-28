arreglos : 
const arr=[1, "pedro",true,[2,"juan"]]

//obtenerla longitud se utiliza length
console.log("longitud:", arr.length)
//obtener el valor de  una posicion 
 console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])

//recorrer  un arreglo 
for(let i=0;i<arr.length; i++){
    console.log(arr[i])
}

// //reemplazar elementos 
 arr[2]=false
 console.log(arr)

// //insertar nuevos elementos al final del arreglo
const arr=[1, "pedro",true,[2,"juan"]]
 arr.push("german")
 arr.push("german")
 arr.push("german")
 console.log(arr)

//insertar nuevos elementos al inicio del arreglo   
 arr.splice(1,0,"alicia")
 console.log(arr)
 //eliminar elementos 
const arr=[1, "pedro",true,[2,"juan"]]
 arr.splice(1,1)
 console.log(arr)

//arreglos dentro de arreglos 
const mat = [
   [1,2,3],
 [4,5,6],
[7,8,9]
 ]

 mat[1][1]
for(let i=0; i<mat.length; i++){
console.log(mat[1])
}

// 1.Crea un programa a partir de las siguientes instrucciones:

// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
const nombres=["Pedro", "Pablo", "María", "Juan", "Diana"]
 nombres.push(prompt("ingrese su nombre"))

 nombres[2]=prompt("ingrese su nombre")

 for(i=0;i<5;i++)

console.log(nombres[i])

// 2.Escribe un programa que:
//Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

 let numero =parseInt(prompt("ingrese un numero"))
let array=[]
for(let i=0; i< numero ;i++ )
 array.push(i+1)
array.splice(1,1)
 for(let i=0; i<array.length ;i++ )
console.log(array[i])


//3.Imprime la matriz en la consola, el resultado final debe ser el siguiente:

  const mat = [
 ["Pablo", "Maria", "Pedro"],
     ["Diana", "Juan", "Federico"],
     ["Roberto", "Daniel", "Sandra"]
     ];
     for(let i=0 ;i<mat.length ; i++){
     console.log("Grupo ${i+1}");
     {
         for(let j=0 ;j<mat[i].length; j++)
         console.log(`  ${mat[i][j]}`)
     }
 }
//4.Completa el siguiente programa para imprimir los números que sean mayores a 10.

 const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
 // escribe tu código acá
for(let i=0; i<nums.length; i++){
     if (nums[i] >10){
     console.log (nums[i])
 }
 }

// El resultado debería ser el siguiente:

// 23
// 40
// 12
// 67
// 24
// 39
// Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros números.

//5.Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

 const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
 let  suma=0
 //El resultado debería ser el siguiente:11
for( i=0; i<=nums.length; i++){
   if (nums[i]===1){
 suma++
}
}console.log(suma)

