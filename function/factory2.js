function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',2499 ))
console.log(criarProduto('SmartPhone',3500))
console.log(criarProduto('Watch', 1350 ))
