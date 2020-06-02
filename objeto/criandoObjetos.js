// usando notacao literal
const obj1 = {}
console.log(obj1)

// object JS
const obj2 = new Object
console.log(obj2)

//funções construtoras

function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco *(1 - desc)
    }
}


const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook',2999,0.25)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//função Factory

function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João',1000,0)
const f2 = criarFuncionario('marcos',1000,4)
console.log(f1.getSalario(),f2.getSalario())

//object create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')

console.log(fromJSON.info)