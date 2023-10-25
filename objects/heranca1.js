const ferrari = {
    modelo : 'F40',
    velMax: 324
}

const volvo = {
    modelo : 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //Caso procure algum atributo em ferrai e nao ache, ele procurar no objeto pai(prototype)
console.log(ferrari.__proto__ === Object.prototype)