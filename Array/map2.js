const carrinho = [
    '{ "nome": "boracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit Laís", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]


const ok = carrinho.map(function(e){
    json = JSON.parse(e)
    return json.preco
})

console.log(ok)