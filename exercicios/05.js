function valor(x){
    return `R$${x.toFixed(2).replace(".",",")}`
}

console.log(valor(1.15))
console.log(valor(0.30000000000000004))