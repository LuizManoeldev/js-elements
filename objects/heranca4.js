function Meuobjeto () {}
console.log(Meuobjeto.prototype)

const obj1 = new Meuobjeto
const obj2 = new Meuobjeto

console.log(obj1.__proto__ === obj2.__proto__ )

console.log(obj1.__proto__ === Meuobjeto.prototype)

// Prototipo = pai (mesma coisa de poo com java)
