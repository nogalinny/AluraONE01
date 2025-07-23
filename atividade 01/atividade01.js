// alerta mensagem de boas vindas
// alert('Boas vindas ao nosso site!');
// variável com o nome lua
// let nome = 'Lua';
// variável com a idade 25
// let idade = 25;
// variavel numero de vendas
// let numeroDeVendas = 50;
// variavel saldo disponivel 
// let saldoDisponivel = 1000;
// alerta de erro
// alert('Erro! Preencha todos os campos');
// declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos"
// let mensagemDeErro = 'Erro!Preencha todos os campos';
// alerta com a variavel
// alert(mensagemDeErro);


// let nomeusuario = prompt('Qual o seu nome de usuário?');
// let idadeusuario = prompt('Qual a sua idade?');
// idadeusuario = Number(idadeusuario);
// if (idadeusuario >= 18) {
//     alert('Pode tirar a habilitação');
// }

// codigo melhorado

// Alerta de boas-vindas
alert('Boas vindas ao nosso site!');

// Declaração de variáveis iniciais
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

// Coleta dados do usuário
let nomeusuario = prompt('Qual o seu nome de usuário?');
let idadeusuario = prompt('Qual a sua idade?');

// Converte idade para número
idadeusuario = Number(idadeusuario);

// Verifica se os campos foram preenchidos
if (!nomeusuario || !idadeusuario) {
  alert('Erro! Preencha todos os campos');
} else {
  // Valida idade
  if (idadeusuario >= 18) {
    alert('Pode tirar a habilitação');
  } else {
    alert('Ainda não pode tirar a habilitação');
  }
}