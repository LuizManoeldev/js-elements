//Transformar um array em outro.
const nums = [1,2,3,4,5]

// For com proposito
let resultado = nums.map(function (e) {
    return e * 2
})
// Não transforma o array, gera um novo a partir dele

console.log(resultado)

const soma10 = e => e + 10
const posiction = e => `${e}ª Lugar`

console.log(nums.map(posiction))
console.log(nums.map(soma10))