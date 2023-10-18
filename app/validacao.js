function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        console.log('Valor inválido')
    }

    if (numeroMaiorOuMenor(numero)) {
        console.log(`Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}