function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div class="warning">Sua resposta deve ser um número!</div>'
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div class="warning">Fale um número entre ${menorValor} e ${maiorValor}!</div>
        `
    }

    if (numero === numeroSecreto) {
        elementoChute.innerHTML += `
        <p class="win">Acertou!</p>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}