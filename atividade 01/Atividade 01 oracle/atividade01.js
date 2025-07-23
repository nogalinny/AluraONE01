// // alerta mensagem de boas vindas
// // alert('Boas vindas ao nosso site!');
// // variável com o nome lua
// // let nome = 'Lua';
// // variável com a idade 25
// // let idade = 25;
// // variavel numero de vendas
// // let numeroDeVendas = 50;
// // variavel saldo disponivel 
// // let saldoDisponivel = 1000;
// // alerta de erro
// // alert('Erro! Preencha todos os campos');
// // declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos"
// // let mensagemDeErro = 'Erro!Preencha todos os campos';
// // alerta com a variavel
// // alert(mensagemDeErro);


// // let nomeusuario = prompt('Qual o seu nome de usuário?');
// // let idadeusuario = prompt('Qual a sua idade?');
// // idadeusuario = Number(idadeusuario);
// // if (idadeusuario >= 18) {
// //     alert('Pode tirar a habilitação');
// // }

// // codigo melhorado

// // Alerta de boas-vindas
// alert('Boas vindas ao nosso site!');

// // Declaração de variáveis iniciais
// let nome = 'Lua';
// let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// // Coleta dados do usuário
// let nomeusuario = prompt('Qual o seu nome de usuário?');
// let idadeusuario = prompt('Qual a sua idade?');

// // Converte idade para número
// idadeusuario = Number(idadeusuario);

// // Verifica se os campos foram preenchidos
// if (!nomeusuario || !idadeusuario) {
//   alert('Erro! Preencha todos os campos');
// } else {
//   // Valida idade
//   if (idadeusuario >= 18) {
//     alert('Pode tirar a habilitação');
//   } else {
//     alert('Ainda não pode tirar a habilitação');
//   }
// }

// Desafios
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diadasemana = prompt('Qual o dia da semana?')
if (diadasemana === 'Sábado' || diadasemana === 'Domingo') {
  alert('Bom fim de semana!');
}
else
  alert('Boa semana');
// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número:');
numero = Number(numero); // converte para número

if (numero > 0) {
  alert('É um número positivo!');
} else {
  alert('É um número negativo!');
}
// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let jogo = prompt('Qual a sua pontuação?')
jogo = Number(jogo);

if (jogo >= 100) {
  alert('Parabéns, você venceu!');
}
else
  alert('Tente novamente para ganhar');
// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 1250.75;

alert(`Seu saldo atual é de R$ ${saldo}.`);
// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeusuarioa = prompt('Qual o seu nome?');
alert(`Bem-vindo(a) ${nomeusuarioa}`);