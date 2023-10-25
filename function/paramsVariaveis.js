function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma 
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 4, 5, 6))
console.log(soma(1.1, 1.9, "TESTE"))