let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return Implicito

console.log(dobro(5))

ola = _ => 'Ola'

console.log(ola())