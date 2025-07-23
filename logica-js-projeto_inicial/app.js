// Passar mensagem para a pessoa que vai jogar
// alert('Olá mundo'); 
alert('Boas vindas ao jogo do número secreto');

// Guardar informações utilizando variáveis, usamos o let

let numeroSecreto = 29 // temos o número secreto armazenado

// pedir para o jogador falar o número
// prompt('Escolha um número entre 1 e 30'); //textos e mensagens utilizamos aspas simples
// BUG, ele acertou mesmo com o número errado

let chute = prompt('Escolha um número entre 1 e 30');

// realizar comparação, se o valor é igual ao outro valor, condição

if (chute == numeroSecreto) {
    console.log('Isso aí" Você descobriu o número secreto (29)') //onde fica as mensagens de console.log
};