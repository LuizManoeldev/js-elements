function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)

} // os {} dentro do parenteses da funcao indica que vai ser passado um objeto e que o usario quer receber os dois os parametros de volta
const obj = {max: 50, min: 40}
console.log(rand(obj))