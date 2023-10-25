function pessoa() {
    this.idade = 0

    //criada uma especie de ponterio para a refernecia this
    //no momento no qual a referencia está no lugar desejado
    //assim usando esse ponteiro posteriormente
    const self = this
    setInterval(function() {
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)


}
