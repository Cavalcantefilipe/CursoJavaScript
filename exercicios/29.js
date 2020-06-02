function intervalo(array){
    let contador = 0
    array.forEach(element => {
        if(element >=10 && element<=20){
            contador++
        }
    });
    return contador
}

console.log(intervalo([ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]))