const valor = 'Global'
// funcao procura por va/rivavle ate mesmo fora do seu escopo
function minhaFuncao() {
    console.log(valor)
}

function exec (){
    const valor = 'Local'
    minhaFuncao()
    // o valor "local" nao sera exibido pois a funcao carrega consgio o local onde foi instanciada e toma isso como parametro
}