//closure é o escopo criado quando a funnção e declarada 
// esse escopo permite a função acessar e manipular variáveis externas à funçao


//contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())