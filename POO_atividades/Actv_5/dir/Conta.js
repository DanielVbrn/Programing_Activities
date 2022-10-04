"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class People {
    constructor(nome) {
        this.nome = nome;
    }
}
let p = new People("Daniel");
console.log(p.nome);
class Conta {
    constructor(numero, saldo, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }
    sacar(valor) {
        if (this.saldo < valor) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    getNomeCLiente() {
        return this.cliente.nome;
    }
    transferencia(contaDestinada, valor) {
        this.sacar(valor);
        contaDestinada.depositar(valor);
    }
    equals(conta) {
        return (this.numero == conta.numero && this.cliente.nome == conta.cliente.nome);
    }
}
exports.Conta = Conta;
// class Banco{
//     contas : Conta = [];
//     inserir(conta: Conta):void{
//         this.contas = conta
//     }
//     alterar(conta: Conta):void{}
//     excluir(numero: string):void{}
//     sacar(numero:string, valor:number):void{}
//     depositar(numero:string, valor:number):void{}
//     transferir(numeroOrigem:string,numeroDestino:string, valor:number):void{}
// }
