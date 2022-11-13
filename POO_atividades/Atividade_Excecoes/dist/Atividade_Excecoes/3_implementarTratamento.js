"use strict";
class ContaSaque {
    saldo;
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
}
let conta = new ContaSaque(1000);
conta.sacar(100000);
