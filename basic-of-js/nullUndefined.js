// atribuicao por referencia
/*
const a ={name: 'teste}
const b = a
b.name = 'opa'
-> a.name = 'opa'
é possivel alterar "a"  a partir de "b", pois abam apontam para o mesmo endereço na memoria

Masssss...
em tipos primitivos, é feita uma copia do valor
c = 3
d = c
d++ (incremento)
d = 4
--- c = 3
*/

let valor // nao inicializado
console.log(valor)

valor = null // ausencia de valor
console.log(valor) //usar null para zerar variavel
//console.log(valor.toString())

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undifined
console.log(!!produto.preco)
console.log(produto)

prpoduto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)