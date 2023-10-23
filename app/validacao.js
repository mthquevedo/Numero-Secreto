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

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
         `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div class="warning">O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div class="warning">O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})