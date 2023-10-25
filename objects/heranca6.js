function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem vindo", 123)
const aula2 = new Aula("Ate breve", 456)
console.log(aula1, aula2)

//Simulando new
function novo(f, ...params) { // ... indica que uma serie de parametros sera passado
    const obj = {}
    obj.__proto__ = f.prototype // Fazendo com que o pai deste objeto, seja o mesmo da funcao passada
    f.apply(obj, params) // Apply() faz com que a funcao passada seja executada
    return obj
}

const aula3 = novo (Aula, 'Bem vindo', 123)
const aula4 = novo (Aula, 'Ate Breve', 456)
