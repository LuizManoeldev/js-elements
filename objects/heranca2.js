const avo = {
    attr1 : "A"
}

const pai = {
    __proto__ : avo,
    att2: "B"
}

const filho = {
    __proto__ : pai,
    attr3 : "C"
}


console.log(filho.attr0, filho.attr1, filho.attr3) // FIlho nao tem, mas por herança, o compilador chega até o pai

/*
    O compilador sobe de objeto pai para pai ate encontrar o que deseja.
    Se nao encontrar, retorna nulo.

*/


const carro =  {
    velAtual : 0,
    velMax : 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta  
        } else {
            this.velAtual = this.velMax
        } 
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}


const ferrari = {
    modelo : 'F40',
    velMax : 324 // Shadowing
}

const volvo = {
    modelo : 'V40',
    status() {
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())
