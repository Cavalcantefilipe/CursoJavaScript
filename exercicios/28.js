function numeros(array){
    let par = 0
    let impar = 0
    for(let i = 0; i < array.length;i++){
        if(array[i] % 2 == 0){
            par++
        }else{
            impar++
        }
    }
    console.log(`Neste array ${impar}: são impar e ${par}: são par`)
}

numeros([10,15,7,20,2,4,8])