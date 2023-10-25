const pai = {
    nome: "Pedro",
    corCabelo : "Preto"
}

const filha1 = Object.create(pai) // Cria com os atributos vazios
filha1.nome = "Laura"
filha1.corCabelo = "Castanho"

const filha2 = Object.create(pai,{
    nome : {value : 'Bia', writable: false, enumerable: true}
})


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por Herança : ${key}`) // testar se aquele atributo veio por heranca
}