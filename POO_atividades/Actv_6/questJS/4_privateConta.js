"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, nomeTitular, saldo = 0) {
        this.numero = numero;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
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
    get verificarNumero() {
        return this.numero;
    }
    get verificarNome() {
        return this.nomeTitular;
    }
    get verificarsaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferencia(contaDestinada, valor) {
        this.sacar(valor);
        contaDestinada.depositar(valor);
    }
}
exports.Conta = Conta;
