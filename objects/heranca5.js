console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


String.prototype.reverse = function () {
    return this.split('').reverse().join('') // Reverse() nesta linha é um metodo de Arrays.
}

// Adiciona um funcao diretamente nas funções bases possiveis em Strings. Foda!


console.log("Escola Cod3r".reverse())