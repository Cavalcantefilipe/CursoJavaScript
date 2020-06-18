// ES8: OBJECT.values/ OBJECT.entries

const obj = { a: 1, b: 2 , c: 3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias na Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'oiii gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//class

class Animal{}
class Cachorro extends Animal {
    falar(){
        return 'AU AU!'
    }
}

console.log(new Cachorro().falar())