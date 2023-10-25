// Criando Proprio Map
Array.prototype.map2 = function(callback) {
    let result = []
    for (let i = 0;i < this.length; i++ ){
        result.push(callback(this[i], i , this))
       
    }
    return result
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45} ',
    '{ "nome": "Caderno", "preco": 13.90} ',
    '{ "nome": "Kit de Lapis", "preco": 41.22} ',
    '{ "nome": "Caneta", "preco": 7.50} '
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)


const nums = [1,2,3,4,5]
let resultado2 = nums.map2(function (e) {
    return e * 2
})
const soma10 = e => e + 10
const posiction = e => `${e}ª Lugar`
console.log(resultado2)
console.log(nums.map2(posiction))
console.log(nums.map2(soma10))  