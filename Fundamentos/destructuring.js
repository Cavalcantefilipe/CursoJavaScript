const pessoa = {
  nome: "Ana",
  idade: 5,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000
  }
};

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n,i)

const {sobremome, seila = true} = pessoa
console.log(sobremome, seila)

const {endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro,numero,cep)