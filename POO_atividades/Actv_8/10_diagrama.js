"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SeguroDeVida = exports.ContaCorrente = exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta() {
    }
    return Conta;
}());
exports.Conta = Conta;
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ContaCorrente.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ContaCorrente.prototype, "getSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaCorrente.prototype, "setNome", {
        set: function (nome) {
            this.nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaCorrente.prototype, "setSaldo", {
        set: function (saldo) {
            this.saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    ContaCorrente.prototype.calculaTributos = function () {
        return this.getSaldo * 0.1;
    };
    return ContaCorrente;
}(Conta));
exports.ContaCorrente = ContaCorrente;
var SeguroDeVida = /** @class */ (function () {
    function SeguroDeVida() {
    }
    SeguroDeVida.prototype.calculaTributos = function () {
        return 50.00;
    };
    return SeguroDeVida;
}());
exports.SeguroDeVida = SeguroDeVida;
var testeConta = function () {
    var contaCorrente = new ContaCorrente();
    contaCorrente.setNome = "Conta_A";
    contaCorrente.setSaldo = 800;
    console.log("Nome: ".concat(contaCorrente.getNome, " \nSaldo: ").concat(contaCorrente.getSaldo));
};
testeConta();
