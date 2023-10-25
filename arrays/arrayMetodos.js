const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // Remove o ultimo elemento
pilotos.push('Verstappen') // Insere na ultima posicao
pilotos.shift() // Remove o primeiro
pilotos.unshift('Hamilton') // Insere no começo
pilotos.splice(2,0, 'Bottas', 'Massa') // Tanto Insere quanto remove
const algunsPilotos = pilotos.slice(2) // Pegar um pedaço do array
