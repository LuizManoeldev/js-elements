const notas = [7.7, 5.2, 4.4, 7.2, 1.9, 7.1]
//sem callback

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}



//Com callback
const notasMenorQue7 = nota => nota < 7
notasBaixas = notas.filter(notasMenorQue7)
console.log(notasBaixas)