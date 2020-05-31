function lanchonete(pedido,quantidade = 0){
    let produto
    let total
    let preco
    let totalString
    switch(pedido){
        case 100:
            produto = 'Cachorro Quente'
            preco = 3
            total = preco * quantidade
            totalString = ""+total
            console.log(`pedido= ${quantidade} ${produto} valor = R$${totalString.replace('.',',')}`)
            break
        case 200:
            produto = 'Hambúrguer Simples'
            preco = 4
            total = preco * quantidade
            totalString = ""+total
            console.log(`pedido= ${quantidade} ${produto} valor = R$${totalString.replace('.',',')}`)
            break
        case 300:
            produto = 'Cheeseburguer'
            preco = 5.50
            total = preco * quantidade
            totalString = ""+total
            console.log(`pedido= ${quantidade} ${produto} valor = R$${totalString.replace('.',',')}`)
            break
        case 400:
            produto = 'Bauru'
            preco = 7.50
            total = preco * quantidade
            totalString = ""+total
            console.log(`pedido= ${quantidade} ${produto} valor = R$${totalString.replace('.',',')}`)
            break
        case 500:
            produto = 'Refrigerante'
            preco = 3.50
            total = preco * quantidade
            totalString = ""+total
            console.log(`pedido= ${quantidade} ${produto} valor = R$${totalString.replace('.',',')}`)
            break
        case 600:
            produto = 'Suco'
            preco = 2.80
            total = preco * quantidade
            totalString = ""+total
            console.log(`pedido= ${quantidade} ${produto} valor = R$${totalString.replace('.',',')}`)
            break
        default:
            console.log('Pedido invalido')

    }
}
lanchonete(100,3)
lanchonete(200,3)
lanchonete(300,1)
lanchonete(400,3)