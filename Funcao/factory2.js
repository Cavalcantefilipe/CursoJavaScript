function criarProduto(nomep,valorp){
    return{
        nome: nomep,
        valor: valorp,
        desconto: 0.1
    }
}

abajur = criarProduto('abajur',35)
caneta = criarProduto('caneta',2)
console.log(abajur,caneta)