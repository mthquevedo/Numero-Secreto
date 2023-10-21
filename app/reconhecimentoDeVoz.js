const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div class="chute-subtitle">Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    const chuteNum = +chute

    if (chuteNum === numeroSecreto) {
        recognition.stop();
    } else {
        recognition.start();
    }
})
