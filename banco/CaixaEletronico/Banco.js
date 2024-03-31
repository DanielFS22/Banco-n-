var nome = prompt("Primeiro queremos saber o seu nome. Por favor digite seu nome.")
alert(`Olá, ${nome} é um prazer ter você por aqui!`)

let permissao;
switch (permissao) {
    case "comum":
        alert('usuario comun')
        break
}

switch (permissao) {
    case "comum":
        alert('usuario comun')
        break
}




var saldo = 1000.5; //Float
var extrato = ['Transferencia: R$ 110,10', '\n Transferencia: R$ 10,30', '\nSaque: R$ 50,00', '\nDeposito: 20,00'];
var senha = 3589

function inicio() {
var escolha = parseInt(prompt('1.) Saldo   2.) Extrato  3.) Saque  4.) Depósito  5.) Transferência  6.) Sair.'));

switch (escolha) {
case 1:
    ver_saldo();
    break;
case 2:
    ver_extrato();
    break;
case 3:
    fazer_saque();
    break;
case 4:
    fazer_deposito();
    break;
case 5:
    fazer_transferência();
    break;
case 6:
    sair();
    break;
default:
    erro();
    break;
}
}



function fazer_transferência() {
var contaDestino = parseInt(prompt('Digite o número da conta de destino: '));

if (isNaN(contaDestino)) {
alert('Número da conta inválido. Por favor, informe um número válido.');
fazer_transferência();
return;
}

var valorDaTransferencia = parseFloat(prompt('Digite o valor da transferência: '));

if (isNaN(valorDaTransferencia) || valorDaTransferencia <= 0) {
alert('Valor da transferência inválido. Digite um valor válido maior que zero.');
fazer_transferência();
return;
}

if (valorDaTransferencia > saldo) {
alert('Valor de transferência inválido. Saldo insuficiente.');
ver_saldo();
return;
}

var digiteSenha = Number(prompt('Digite a sua senha: '));

if (digiteSenha !== senha) {
alert('Senha inválida.');
return;
}

saldo -= valorDaTransferencia;
extrato.push('Transferência: R$ ' + valorDaTransferencia);
alert('Transferência realizada com sucesso!');
ver_saldo();
}

function ver_extrato() {
    var digiteSenha = Number(prompt('Digite a sua senha: '))
    if (digiteSenha !== senha) {
        alert('Senha invalida invalida!')
        ver_extrato()
    } else {
        alert(`extrato da sua conta:\n ${extrato.join('\n')}`)
        inicio();

    }
}

function ver_saldo() {
    var digiteSenha = Number(prompt('Digite a sua senha: '))
    if (digiteSenha !== senha) {
        alert('Senha invalida invalida!')
        ver_saldo()
    } else {
        alert('Seu saldo atual é: ' + saldo);
        inicio();
    }
}

function fazer_deposito() {
var deposito = parseFloat(prompt('Qual o valor para depósito?'));

if (isNaN(deposito) || deposito === '') {
alert('Por favor, informe um número válido maior que zero.');
fazer_deposito();
} else if (deposito <= 0) {
alert('Valor de depósito inválido. Por favor, informe um valor válido maior que zero.');
fazer_deposito();
} else {
var digiteSenha = Number(prompt('Digite a sua senha:'));

if (digiteSenha !== senha) {
    alert('Senha inválida.');
    return; // Encerra a função sem chamar novamente fazer_deposito()
}

saldo += deposito;
extrato.push('Depósito: R$ ' + deposito);
alert('Depósito realizado com sucesso!');
ver_saldo();
}
}

function fazer_saque() {
var saque = parseFloat(prompt('Qual o valor para saque?'));

if (isNaN(saque) || saque === '') {
alert('Por favor, informe um número válido maior que zero.');
fazer_saque();
} else if (saque <= 0) {
alert('Valor de saque inválido. Por favor, informe um valor válido maior que zero.');
fazer_saque();
} else if (saque > saldo) {
alert('Operação não autorizada! Saldo insuficiente para realizar o saque.');
ver_saldo();
} else {
var digiteSenha = parseInt(prompt('Digite a sua senha:'));

if (digiteSenha !== senha) {
    alert('Senha inválida.');
    fazer_saque();
} else {
    saldo -= saque;
    extrato.push('Saque: R$ ' + saque);
    alert('Saque realizado com sucesso!');
    ver_saldo();
}
}
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert (`Obrigado por usar o nosso Banco! ${nome}, foi um prazer te-lo conosco.`)
        window.close();
    } else {
        inicio();
    }
}



inicio()