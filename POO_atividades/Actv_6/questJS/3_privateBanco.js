"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor(contas = []) {
        this.contas = [];
        this.contas = contas;
    }
    inserir(conta) {
        if (this.verificContas(conta.verificarNumero) == 0) {
            this.contas.push(conta);
        }
    }
    verificContas(num) {
        let a = 0;
        for (let i = 1; i <= this.contas.length; i++) {
            if (this.contas[i].verificarNumero == num) {
                a = i;
                break;
            }
        }
        return a;
    }
    consultarSaldo(num) {
        let contaP;
        for (const i of this.contas) {
            if (i.verificarNumero == num) {
                contaP = i;
                break;
            }
        }
        return contaP;
    }
    alterar(conta) {
        let o = this.verificContas(conta.verificarNumero);
        if (o != 0) {
            this.contas[o] = conta;
        }
    }
    excluir(numero) {
        let indice = this.verificContas(numero);
        this.contas.splice(indice, 1);
    }
    sacar(numeroCredito, valor) {
        let verifica = this.consultarSaldo(numeroCredito);
        if (verifica != null) {
            verifica.sacar(valor);
        }
    }
    depositar(numero, valor) {
        let conta = this.consultarSaldo(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let a = this.consultarSaldo(numeroDebito);
        let b = this.consultarSaldo(numeroCredito);
        a.transferencia(b, valor);
    }
    qtdContas() {
        return this.contas.length;
    }
    depositoTotal() {
        let a = 0;
        if (this.qtdContas() != 0) {
            let saldo = this.contas.map((c) => c.consultarSaldo());
            a = saldo.reduce((anterior, valoratual) => anterior += valoratual);
        }
        return a;
    }
    MediaSaldo() {
        let media = this.depositoTotal() / this.qtdContas();
        return media;
    }
}
exports.Banco = Banco;
