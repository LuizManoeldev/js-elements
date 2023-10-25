// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)    
}

imprimirSoma(2, 3)
imprimirSoma(2) // 2 + undefined = NaN
imprimirSoma(2, 4, 5 ,6 , 6, 4) //pega os dois primeiros e ignora o resto

//funcao com retorno
function soma(a, b=0) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())