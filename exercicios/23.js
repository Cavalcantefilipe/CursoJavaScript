function notas(codigo,n1,n2,n3){
    let notaFinal
    if(n1 >= n2 && n1 >=n3){
        notaFinal= ((n1*4)+(n2*3)+(n3*3))/10
    }else if(n2 >= n1 && n2 >= n3){
        notaFinal= ((n2*4)+(n1*3)+(n3*3))/10

    }else{
        notaFinal= ((n3*4)+(n2*3)+(n1*3))/10
    }
    console.log(`Aluno:${codigo} situação:${notaFinal>=5 ? 'APROVADO' : 'REPROVADO' }`)
}

notas(300,7,3,5)
notas(300,3,7,5)
notas(300,5,5,5)
notas(300,9,2,2)