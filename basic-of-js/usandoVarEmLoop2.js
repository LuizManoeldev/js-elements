const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
// com a variavel VAR nao é respeitado o escopo.
// apos a ultima alteracao de "i" para 10, ate mesmo dentro do array e dentro das funcoes, o valor é alterado