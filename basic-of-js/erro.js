function tratarErroELancar(erro) {
    throw new Error("...")
    //throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date:new Date

    }
}


function imprimirNomeGritado(obj) {
    try{ // TENTA
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){ // CASO HAJA ERRO
        tratarErroELancar(e)
    } finally { // EXECUTA APOS OS DOIS BLOCOS, DE QUALQUER FORMA
        console.log("Final")
    }
    
}

const obj = {
    name: "Luiz"
}

console.log(imprimirNomeGritado(obj))