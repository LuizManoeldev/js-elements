class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome);
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super("Silva")
    }
}

const filfo = new Filho()
console.log(filfo)