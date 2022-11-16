"use strict";
exports.__esModule = true;
// import prompt from "prompt-sync"
var input = require('prompt-sync')({ sigint: true });
// const input = prompt()
var BancoValidacoes_1 = require("./BancoValidacoes");
var ContaValidacoes_1 = require("./ContaValidacoes");
var PoupancaValidacoes_1 = require("./PoupancaValidacoes");
var banco = new BancoValidacoes_1.Banco();
var opcao = '';
do {
    var menu = '\nBem vindo\nInsira uma opção: \n';
    menu += '1 - Cadastrar 2 - Consultar 3 - Sacar';
    menu += '4 - Depositar 5 - Excluir 6 - Transferir';
    menu += '7 – Totalizações 8 - RenderJuros 0 - Sair';
    menu += "\n\n\n\n";
    console.log(menu);
    opcao = input("Opção: ");
    switch (opcao) {
        case "1":
            cadastrar();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            total();
            break;
        case "8":
            RenderJuros();
            break;
    }
    input("Operação finalizada. Insira <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function cadastrar() {
    console.log("\nCadastrar conta\n");
    var numero = input('Insira o número da conta:');
    var saldo = input('Insira seu saldo:');
    var conta;
    conta = new ContaValidacoes_1.Conta(numero, saldo);
    banco.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = input('Insira o número da conta: ');
    var conta = banco.consultSaldo;
    if (conta != undefined) {
        console.log("\nNome do titular: ".concat(conta, ", numero: ").concat(numero.consultarNumero, "\n"));
    }
}
function sacar() {
    console.log("\nSaque\n");
    var numero = input('Insira o número da conta: ');
    var valor = Number(input("Valor: "));
    banco.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepósito\n");
    var numero = input('Insira o número da conta: ');
    var valor = Number(input("Valor: "));
    banco.depositar(numero, valor);
}
function transferir() {
    console.log("\nTransferência\n");
    var numeroCredito = input('Insira o número da conta : ');
    var numeroDebito = input('Insira o número da conta : ');
    var valor = input("Valor: ");
    banco.transferir(numeroCredito, numeroDebito, valor);
}
function excluir() {
    console.log("\nExcluir conta\n");
    var numero = input('Insira o número da conta: ');
    var excluir = input('Confirmar dígito (Sim/Nao): ');
    if (excluir.toLocaleUpperCase() == 'Sim') {
        banco.excluir(numero);
        console.log("conta excluída");
    }
    else if (excluir.toLocaleUpperCase() == 'Nao') {
        console.log("conta mantida");
    }
}
function total() {
    console.log("\nTotalizações do banco\n");
    var QtdContas = banco.qtdContas();
    var depositoTotal = banco.depositoTotal();
    var mediaSaldo = banco.MediaSaldo();
    console.log("Total de contas: ".concat(QtdContas, " "));
    console.log("Deposito total: ".concat(depositoTotal, " "));
    console.log("M\u00E9dia de saldo por conta: ".concat(mediaSaldo, " \n"));
}
function RenderJuros() {
    var c1;
    c1 = new PoupancaValidacoes_1.ContaPoupanca(10, "12", 1000);
    banco.inserir(c1);
    banco.renderJuros("12");
    console.log("\nRender juros da conta\n");
    console.log(c1.consultarSaldo);
}
RenderJuros();
