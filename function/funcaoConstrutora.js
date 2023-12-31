function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    //metodo publio
    this.acelerar = function (){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta            
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }    
    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
uno.getVelocidadeAtual()

console.log(uno.getVelocidadeAtual())