"use strict";
exports.__esModule = true;
exports.Banco = void 0;
var _1_error_1 = require("./1_error");
var PoupancaValidacoes_1 = require("./PoupancaValidacoes");
var _6_poupancaInvalida_1 = require("./6_poupancaInvalida");
var Banco = /** @class */ (function () {
    function Banco(contas) {
        if (contas === void 0) { contas = []; }
        this.contas = [];
        this.contas = contas;
    }
    Banco.prototype.inserir = function (conta) {
        try {
            this.consultarPorIndice(conta.consultarNumero);
            throw new _1_error_1.ContaExistenteError("Conta já cadastrada...");
        }
        catch (a) {
            if (conta instanceof PoupancaValidacoes_1.ContaPoupanca) {
                this.contas.push(conta);
            }
        }
    };
    Banco.prototype.consultarPorIndice = function (num) {
        var a = 0;
        for (var i = 1; i <= this.contas.length; i++) {
            if (this.contas[i].consultarNumero != num) {
                throw new _1_error_1.ContaInexistenteError("Conta não encontrada...");
            }
            else if (this.contas[i].consultarNumero == num) {
                a = i;
                break;
            }
        }
        return a;
    };
    Banco.prototype.consultar = function (num) {
        var contaP;
        var i = this.consultarPorIndice(num);
        contaP = this.contas[i];
        return contaP;
    };
    Object.defineProperty(Banco.prototype, "consultSaldo", {
        set: function (num) {
            this.consultar(num);
        },
        enumerable: false,
        configurable: true
    });
    Banco.prototype.alterar = function (conta) {
        var o = this.consultarPorIndice(conta.consultarNumero);
        this.contas[o] = conta;
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarPorIndice(numero);
        this.contas.splice(indice, 1);
    };
    Banco.prototype.sacar = function (numeroCredito, valor) {
        var i = this.consultarPorIndice(numeroCredito);
        var contaP = this.contas[i];
        contaP.sacar(valor);
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        conta.depositar(valor);
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var a = this.consultar(numeroDebito);
        var b = this.consultar(numeroCredito);
        a.transferencia(b, valor);
    };
    Banco.prototype.qtdContas = function () {
        return this.contas.length;
    };
    Banco.prototype.depositoTotal = function () {
        var a = 0;
        if (this.qtdContas() != 0) {
            var saldo = this.contas.map(function (c) { return c.consultarSaldo; });
            a = saldo.reduce(function (anterior, valoratual) { return anterior += valoratual; });
        }
        return a;
    };
    Banco.prototype.MediaSaldo = function () {
        var media = this.depositoTotal() / this.qtdContas();
        return media;
    };
    Banco.prototype.renderJuros = function (numero) {
        var i = this.consultarPorIndice(numero);
        if (this.contas[i] instanceof PoupancaValidacoes_1.ContaPoupanca) {
            this.contas[i].renderJuros();
        }
        else {
            throw new _6_poupancaInvalida_1.PoupancaInvalidaError("Não é conta poupança.");
        }
    };
    return Banco;
}());
exports.Banco = Banco;
