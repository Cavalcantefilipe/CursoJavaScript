function convenio(idade){
    if(idade > 0){
        if(idade < 10){
            console.log('pagar R$180')
        }else if(idade<30){
            console.log('pagar R$150')
        }else if(idade<61){
            console.log('pagar R$195')
        }else{
            console.log('pagar R$230')
        }
    }else{
        console.log('idade invalida')
    }
}

convenio(0)
convenio(9)
convenio(10)
convenio(30)
convenio(60)
convenio(73)