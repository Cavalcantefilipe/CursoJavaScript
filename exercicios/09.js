function nota(nota){
    const resto = (nota % 5)
    if(nota < 38 ){
        return console.log(`Aluno reprovado`)
    }else {
        if(resto != 0 ){
            let notaFinal = resto < 3 ? nota - resto : (nota + resto)-1
            return console.log(`Aluno Aprovado ${notaFinal} `)
        }else{
            return console.log(`Aluno Aprovado ${nota} `)
        }
    }
}

nota(38)
nota(46)
nota(40)
nota(47)
nota(48)
nota(77)
nota(72)
nota(88)