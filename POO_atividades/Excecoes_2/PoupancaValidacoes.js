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
exports.ContaPoupanca = void 0;
var ContaValidacoes_1 = require("./ContaValidacoes");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(JurosPercentual, numero, saldo) {
        var _this = _super.call(this, numero, saldo) || this;
        _this.jurosPercentual = JurosPercentual;
        return _this;
    }
    ContaPoupanca.prototype.renderJuros = function () {
        return this.depositar(this.consultarSaldo * (this.jurosPercentual / 100));
    };
    return ContaPoupanca;
}(ContaValidacoes_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
