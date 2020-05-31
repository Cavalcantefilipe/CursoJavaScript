function calculadora(a=0,operacao = '',b=0){
    switch(operacao){
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return (a/b).toFixed(2)
            break
        default:
            return 'Operaçao invalida'
    }
}

console.log(calculadora(2,'+',3))
console.log(calculadora(2,'*',3))
console.log(calculadora(2,'-',3))
console.log(calculadora(2,'/',3))
console.log(calculadora(2,'j',3))