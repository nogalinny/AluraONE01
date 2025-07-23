// Passar mensagem para a pessoa que vai jogar
// alert('Olá mundo'); 
alert('Boas vindas ao jogo do número secreto');

// Guardar informações utilizando variáveis, usamos o let

let numeroSecreto = 21 // temos o número secreto armazenado
console.log(numeroSecreto)
// pedir para o jogador falar o número
// prompt('Escolha um número entre 1 e 30'); //textos e mensagens utilizamos aspas simples
// BUG, ele acertou mesmo com o número errado

let chute = prompt('Escolha um número entre 1 e 30');

// realizar comparação, se o valor é igual ao outro valor, condição

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`)//onde fica as mensagens de console.log
} else
    alert  ('Você errou :C');

// caso o chute não seja o numero secreto