function estatistica(string) {
    let array = string.split(" ")
    let recordAtual = array[0]
    let nrRecord = 0
    let piorJogo= Math.min.apply(Math, array)
    const numeroElementos = array.length

    for (let i = 0; i < numeroElementos; i++) {
        if(parseInt(recordAtual) < parseInt(array[i])){
            recordAtual = array[i]
            nrRecord++
        }
    }
    return [nrRecord,1+array.indexOf(piorJogo.toString())]

}

console.log(estatistica( "10 20 20 8 25 3 1 30 1 35 0"))