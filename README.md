## Aplicação interativa com reconhecimento de voz por meio da Web Speech API

A aplicação foi desenvolvida com o objetivo de ser um jogo que gera um número aleatório e desafia o usuário a adivinhá-lo por meio de dicas e comandos de voz, para interpretar esses comandos ela utiliza a Web Speech API.

Link de acesso do projeto: https://mq-numero-secreto.vercel.app/

Tecnologias utilizadas:

<div style="display: inline_block">
  <img align="center" alt="Quevedo-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Quevedo-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Quevedo-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
</div>

##

**Funções da Aplicação**:

**Responsividade**: A aplicação é responsiva a dispositivos como computadores, notebooks, tablets e celulares.

**Comandos de voz**: Uma vez que o usuário permitir por meio do navegador o acesso ao microfone, os comandos de voz serão interpretados e exibidos na tela em tempo real, e ao acertar o número secreto o uso da permissão é encerrado.

**Validações**: Foram desenvolvidas validações para checar se a resposta do usuário é de fato um número e se o número está dentro dos limites definidos. Caso a o teste aponte uma inconsistência no resultado, um aviso surgirá para notificar o caso.

**dicas de resposta**: Ao falar um número, a aplicação dará dicas se a resposta certa é um número maior ou menor com o objetivo de auxiliar o usuário a chegar na resposta correta.
