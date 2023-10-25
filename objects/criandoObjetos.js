// usando a notação literal
const obj1 = {}
console.log(obj1)

//Objetos em JS
console.log(typeof Object, typeof new Object)
const obj2 =  new Object
console.log(obj2)

// Funções Construtoras
function Produto (nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
    TouchList.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

// Funcao Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }   
}

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'

// Uma funcao famosa
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)