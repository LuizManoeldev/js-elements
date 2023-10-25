 // colecao dinamuca de pares chave/valor
 const produto = new Object

 produto.nome = 'Cadeira'
 produto['marca do produto'] = 'Generica'

//forma de instanciar tbm
const carro = {
    modelo:'a4',
    valor: 89000,
    //
    //
    //
    condutores: [{
        nome: 'junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro : function(){
        //...
    }
 }

 console.log(carro.condutores)