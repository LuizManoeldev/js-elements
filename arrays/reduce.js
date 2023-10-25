//reduce(acumulador, elemento)

const alunos = [
    {nome: "Joao", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: false},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: false}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista

//Desafio 1: Todos os alunos são bolsistas?
const desafio1 = alunos.map(a => a.bolsista).reduce(todosBolsistas)
//Desafio 2: Algum aluno é bolsista?
const desafio2 = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(`Todos os alunos sao bolsistas?: ${desafio1}`)
console.log(`Algum aluno é bolsista?: ${desafio2}`)


Array.prototype.reduce2 = function(callback) {
    
}