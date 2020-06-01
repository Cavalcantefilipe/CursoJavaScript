function maiorMenor(array){
    let menor = Math.min.apply(Math, array)
    let maior = Math.max.apply(Math, array)
    console.log(`menor = ${menor} maior = ${maior}`)
}

maiorMenor([3,4,10,8,0,33,60,90])