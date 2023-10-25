function comprar(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || = OU
    const comprarTv50 = trabalho1 && trabalho2 // && = E
    const comprarTv32 = trabalho1 != trabalho2 // !=  = imporiviso de disjuncao(tem que ser diferente)
    const manterSsaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, manterSsaudavel} // automaticamente o JS adiciona como chave / valor
    
}