const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function (e) {
    return e.preco > 1500 && e.fragil == true 
}))

const ProdCaro = produto => produto.preco >= 500
const ProdFragil = produto => produto.fragil == true //Mais legivel, porem n precisao passar o == true

console.log(produtos.filter(ProdCaro).filter(ProdFragil))