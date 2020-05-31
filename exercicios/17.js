function aumento(plano,salario = 0){
    switch(plano){
        case 'a':
        case 'A':
            salario = salario + (salario*0.10)
            console.log(`Novo Salario = ${salario}`)
            break
        case 'b':
        case 'B':
            salario = salario + (salario*0.15)
            console.log(`Novo Salario = ${salario}`)
            break
        case 'c':
        case 'C':
            salario = salario + (salario*0.20)
            console.log(`Novo Salario = ${salario}`)
            break
        default:
            console.log('Plano invalido')
    }
}

aumento('A',1000)
aumento('a',1000)
aumento('b',1000)
aumento('c',1000)
aumento('d',1000)