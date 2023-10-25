let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // ! = negaçao 
// !! - Dupla negacao força operações nao booleanas a retornarem True ou False
// Casos de true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
// Casos de False
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)

console.log('pra finalizar...')
console.log(('' || null || 0 || ' '))

//Exemplo real do ||(ou)
let nome = ''
console.log(nome || "Desconhecido")
