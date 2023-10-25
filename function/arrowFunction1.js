let dobro = function(a) {
    return 2 * a
}

//arrow function
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return  'Olá'
}

ola = () => {
    return 'Ola'
}

ola = () => 'Ola'
ola = _ => 'Ola' // possui um parametro "_" mas que pode ser ignorado
