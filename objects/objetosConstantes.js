// pessoa -> 123 -> {...}
const pessoa = {nome: "joao"}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // torna o objeto de fato constante
pessoa.nome = "Maria" // Apenas ignora
delete pessoa.nome

const pessoaConstante = Object.freeze({nome: 'Joao'})