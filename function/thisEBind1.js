const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }   
}

pessoa.falar()
const falar = pessoa.falar
falar()
//eRRo

const falarDePessoa = pessoa.falar.bind(pessoa) // bind mostra onda a funcao deve ser executada
falarDePessoa()


