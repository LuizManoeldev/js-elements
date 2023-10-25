//Object.preventExtensions -> Nao permite novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag : "Promocao"
})

console.log("Extensivel:", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

//Object.seal -> Selar. Nao conseguir inserir nem deletar, mas pode alterar atributos ja existentes
const pessoa = {nome : "Juliana", idade: 33}
Object.seal(pessoa)
console.log("Selado:" ,Object.isSealed(pessoa))

//Object.freeze = selado + valores constantes
