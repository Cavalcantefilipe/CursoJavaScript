function dias(n){
    if(n < 1 || n > 31){
        return console.log('dia não valido')
    }
    switch (n%7){
    case 0:
        console.log('sabado')
        break
    case 1:
        console.log('domingo')
        break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    console.log('dia util')
    break
    }
}

dias(1)
dias(2)
dias(3)
dias(4)
dias(5)
dias(6)
dias(7)
dias(14)
dias(15)
dias(0)