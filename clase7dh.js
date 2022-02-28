const pelis = ["star wars" , "totoro","rocky" , "pulp fiction" , "la vida es bella"]
const pelis2 = ["toy story" , "finding memo","kunfu-panda" , "wally" , "la vida es bell" , "fortine"]
pelis[2] = "chuky"

function mayusculas(pelis){
  for (let i=0;  i < pelis.length ;i++) {
    pelis[i] =  pelis[i].toUpperCase()
  }
  return pelis
}


function newArray(array1 , array2){

    p1 = mayusculas(array1) 
    p2 = mayusculas(array2)
    for (let i=0;  i < p2.length ;i++) {
     p1.push(p2[i])
    }
    
    return p1
}

a = newArray(pelis , pelis2 )
a

