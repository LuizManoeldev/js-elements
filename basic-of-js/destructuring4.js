function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} // caso o min for maior que o max, ele inverte os valores com atribuiçoes

console.log(rand(50, 40))
