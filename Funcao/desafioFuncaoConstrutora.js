function criarPessoa(nome = 'joão'){

    this.falar = function(){ 
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new criarPessoa('marcelo')
p1.falar()