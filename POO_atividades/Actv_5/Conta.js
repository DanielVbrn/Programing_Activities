"use strict";
exports.__esModule = true;
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(numero, nomeTitular, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.numero = numero;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (this.saldo < valor) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo = this.saldo + valor;
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferencia = function (contaDestinada, valor) {
        this.sacar(valor);
        contaDestinada.depositar(valor);
    };
    return Conta;
}());
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
