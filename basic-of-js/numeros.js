const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.982

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media =  total / (peso1 + peso2)

console.log(media.toFixed(2)) //quantida de casa entra parenteses
console.log(media.toString(2)) // valor converte para binario

