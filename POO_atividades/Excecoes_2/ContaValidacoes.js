"use strict";
// import { Banco } from "./1_banco";
exports.__esModule = true;
exports.Conta = void 0;
var _4_valorinvalido_1 = require("./4_valorinvalido");
var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        if (saldo === void 0) { saldo = 0; }
        if (saldo < 0) {
            throw new _4_valorinvalido_1.ValorInvalidoError("Valor inválido.");
        }
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        this.validarValor(valor);
        if (this.saldo < valor) {
            throw new Error('Saldo insuficiente.');
        }
        this.saldo = this.saldo - valor;
    };
    Conta.prototype.depositar = function (valor) {
        this.validarValor(valor);
        this.saldo = this.saldo + valor;
    };
    Object.defineProperty(Conta.prototype, "consultarSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "consultarNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.transferencia = function (contaDestinada, valor) {
        this.sacar(valor);
        contaDestinada.depositar(valor);
    };
    Conta.prototype.validarValor = function (valor) {
        if (valor <= 0) {
            throw new _4_valorinvalido_1.ValorInvalidoError("Valor negado.");
        }
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
