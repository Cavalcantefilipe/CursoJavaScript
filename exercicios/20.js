function notas(reais){
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    if(reais>1){
        while(reais != 0){
            if((reais/100)>=1){
                nota100 = Math.trunc(reais/100)
                reais = reais%100
            }
            else if((reais/50)>=1){
                nota50 = Math.trunc(reais/50)
                reais = reais%50
            }
            else if((reais/10)>=1){
                nota10 = Math.trunc(reais/10)
                reais = reais%10
            }
            else if((reais/5)>=1){
                nota5 = Math.trunc(reais/5)
                reais = reais%5
            }
            else if((reais/1)>=1){
                nota1 = Math.trunc(reais/1)
                reais = reais%1
            }
        }
        console.log(
            `Notas de R$100 = ${nota100}
Notas de R$50 = ${nota50}
Notas de R$10 = ${nota10}
Notas de R$5 = ${nota5}
Notas de R$1 = ${nota1}`)
    }else{
        console.log('valor invalido')
    }
}

notas(18)