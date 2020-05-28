const notas = [6.8,7,9,10,0]

for( i in notas ){
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade:29,
    peso: 69
}

for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}