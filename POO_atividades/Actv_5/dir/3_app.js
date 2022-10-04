"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input = require(prompt)();
const print = (message) => console.log(message);
const Conta_1 = require("./Conta");
const _1_banco_1 = require("./1_banco");
let b = new _1_banco_1.Banco();
let opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
        '0 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            print();
            break;
        case "2":
            consultarSaldo();
            break;
        case "2":
            consultar();
            break;
        case "2":
            consultar();
            break;
        case "2":
            consultar();
            break;
        case "2":
            consultar();
            break;
        case "2":
            consultar();
            break;
        //...
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta:');
    let conta;
    conta = new Conta_1.Conta(numero, 0);
    b.inserir(conta);
}
