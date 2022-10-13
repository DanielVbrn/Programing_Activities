"use strict";
exports.__esModule = true;
exports.Banco = void 0;
var Banco = /** @class */ (function () {
    function Banco(contas) {
        if (contas === void 0) { contas = []; }
        this.contas = [];
        this.contas = contas;
    }
    Banco.prototype.inserir = function (conta) {
        if (this.verificContas(conta.verificarNumero) == 0) {
            this.contas.push(conta);
        }
    };
    Banco.prototype.verificContas = function (num) {
        var a = 0;
        for (var i = 1; i <= this.contas.length; i++) {
            if (this.contas[i].verificarNumero == num) {
                a = i;
                break;
            }
        }
        return a;
    };
    Banco.prototype.consultarSaldo = function (num) {
        var contaP;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.verificarNumero == num) {
                contaP = i;
                break;
            }
        }
        return contaP;
    };
    Banco.prototype.alterar = function (conta) {
        var o = this.verificContas(conta.verificarNumero);
        if (o != 0) {
            this.contas[o] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.verificContas(numero);
        this.contas.splice(indice, 1);
    };
    Banco.prototype.sacar = function (numeroCredito, valor) {
        var verifica = this.consultarSaldo(numeroCredito);
        if (verifica != null) {
            verifica.sacar(valor);
        }
    };
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultarSaldo(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var a = this.consultarSaldo(numeroDebito);
        var b = this.consultarSaldo(numeroCredito);
        a.transferencia(b, valor);
    };
    Banco.prototype.qtdContas = function () {
        return this.contas.length;
    };
    Banco.prototype.depositoTotal = function () {
        var a = 0;
        if (this.qtdContas() != 0) {
            var saldo = this.contas.map(function (c) { return c.consultarSaldo(); });
            a = saldo.reduce(function (anterior, valoratual) { return anterior += valoratual; });
        }
        return a;
    };
    Banco.prototype.MediaSaldo = function () {
        var media = this.depositoTotal() / this.qtdContas();
        return media;
    };
    return Banco;
}());
exports.Banco = Banco;
