// assim funciona
function CriarPessoa(nome){
    return {
        nome, 
        falar: falar => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = CriarPessoa('Luiz')
p1.falar()

// assim tbm
function pessoa(nome) {
    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 =  new pessoa("Joao")
p2.falar()