//criar forma literal

function fun1() {

}

//Armazenar em variavel

const fun2 = function(){}

//armazenar array

const array = [function (a,b) { return a + b}, fun1,fun2]

console.log(array[0](2,3))

const obj = {}


obj.falar = function(){ return 'Opa'}
console.log(obj.falar())

//funçao retornando / contendo outra

function soma(a ,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

const cincoMais = soma(2,3)
cincoMais(9)
