const pilotos = ['Vettel','Alonso', 'Raikkonen','Massa']
pilotos.pop()//retira ultimo
console.log(pilotos)

pilotos.push('Verstappen')//add array
console.log(pilotos)

pilotos.shift()//remove 1
console.log(pilotos)

pilotos.unshift('Hamilton')//add 1
console.log(pilotos)



//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)


//selecionaParte
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)


const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)