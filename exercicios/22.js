function juros(mes,valor){
    if(mes == 1){
        return valor
    }else{
        return (valor*Math.pow((1+0.05),mes-1)).toFixed(2)
      }
}

console.log(juros(1,1000))
console.log(juros(2,1000))
console.log(juros(3,1000))