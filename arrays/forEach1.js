const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ // nao importa os nomes das variaveis
    console.log(`${indice + 1}) ${nome}`) // foreach sempre passa 3 parametros ->  VAlor, indice e o proprio array
})

aprovados.forEach(nome => console.log(nome))
