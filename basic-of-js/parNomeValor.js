// par nome/valor
const saudacao = "opa" // constexto lexico 1

function exec() {
    const saudacao = "falaaa" // contexto 2
    return saudacao
}

//Objetos sao grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: '32',
    peso: '90',
    endereco: {
        logradouro: 'Rua muito legal',
        numero:'123'
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)