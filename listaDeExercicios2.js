// Crie uma funcao que retorne a stinrg "Olá", concatenada com um argumento text

function cumprimentar(nome) {
    let saudacao = `Olá, ${nome}`
    console.log(saudacao)
    return saudacao 
}
// Teste (comentado)
// cumprimentar("Luiz Manoel")

// Crie uma funcao que receba a idade em anos e retorne em dias
function idadeEmAnos(idade) {
    let idadeEmAnos = idade * 365
    return idadeEmAnos
}
// Teste (comentado)
//console.log(idadeEmAnos(20))

// Desenvolva uma funcao que receba quantidade de horas trabalhadas e o valor da hora, retorandno quanto ele recebeu no mes
function Salario(horasTrabalhadas, valorDaHora) {
    let salario = horasTrabalhadas * valorDaHora
    return `Salario do Mês = ${salario}`
}
// Teste (comentado)
//console.log(Salario(150, 40.5))

// Crie uma funcao que receba um numero de 1 a 12 e retorne o mes correspondente 
function mesDoAno(mes) {
    switch (mes) {
        case 1:
            return 'Janeiro'
            break;
        case 2:
            return 'Fevereiro'
            break;
        case 3:
            return 'Março'
            break;
        case 4:
            return 'Abril'
            break;
        case 5:
            return 'Maio'
            break;
        case 6:
            return 'Junho'
            break;
        //...        
        default:
            return "Restante do ano..."
            break;
    }
}
// Teste (comentado)
//console.log(mesDoAno(3))

//Elabore um funcao que receba um objeto com estudantes e suas notas e retorne o estudante com a melhor media

const alunos = {
    Joao: [8, 7.6, 8.9, 6], // media 7.625
    Mariana: [9, 6.6, 7.9, 8], // media 7.875
    Carla: [7, 7 , 8, 9] // media 7.875
}

const Media = function(aluno) {
    let soma = aluno.reduce(function(acumulador, elemento){
        return acumulador + elemento
    })
    return soma / aluno.length
}

function MelhorAluno(alunos) { //Criou um array com o objeto / map para acessar cada posicao desse array
    const estudanteComMedias = Object.entries(alunos).map( aluno => {
        const chave = 0, valor = 1
            //chave posicao 0 e valor posicao 1 do array
        return {Nome: aluno[chave], Media: Media(aluno[valor])}
        //retornado agora para objetos novamento
    })
    const estudantesOrdenados = estudanteComMedias.sort((alunoA, alunoB) => alunoB.Media - alunoA.Media )
    const MelhorAluno = estudantesOrdenados[0]
    return MelhorAluno
    
}
//Teste (comentado)
//console.log(MelhorAluno(alunos))

//Crie uma funcao que receba um array de numeros e retorne o segndo maior
function segundoMaior(array) {
    let arrayOrdenado = array.sort((valorA, valorB) => valorB - valorA)
    return arrayOrdenado[1]
}
//Teste (comentado)
//console.log(segundoMaior([0,100,2,3,4,5,6,10,110]))

// Crie uma funcao que receba dois parametros, um array de numeros e outra valor que filtre os numero pela quantidade de digitos

const contarDigitos= function(numero) {
    var numeroString = numero.toString()
    return numeroString.length
}

function Filtro(array, qtdNumeros){
    const resultado = array.filter(function(numero) {
        return contarDigitos(numero) == qtdNumeros 
    })
    return resultado
}
// Teste (comentado)
// console.log(Filtro([10, 30, 20, 1, 1000, 123321, 123, 123213, 12313], 2))


// Crie uma funcao que receba um objeto e inverta a chave e valor

function inverterObj(obj) {
    const objArray = Object.entries(obj)
    const chave = objArray[0][0]
    const valor = objArray[0][1]

    const objeto ={} 
    objeto[valor] = chave
    return objeto
}
//Teste (comentado)
//let teste =  {nome: "LuizManoel"}
//console.log(inverterObj(teste))
