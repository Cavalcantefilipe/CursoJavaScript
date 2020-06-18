/// Spred = ...

// Spread Com Objeto

const funcionario = { nome: 'Maria', salaraio: 2000}

const clone = {ativo : true, ...funcionario}

console.log(clone)

/// usar spread com Array

const grupoA = [ 'João', 'Pedro', 'Gloria']
const grupoFinal = [ 'Maria' ,...grupoA, 'Rafaela']
coonsole.log(grupoFinal)