"use strict";
// import { Banco } from "../../ContaBancaria/1_banco";
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
exports.ContaExistenteError = exports.ContaInexistenteError = exports.SaldoInsuficienteError = exports.AplicacaoError = void 0;
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(message) {
        return _super.call(this, message) || this;
    }
    return AplicacaoError;
}(Error));
exports.AplicacaoError = AplicacaoError;
var SaldoInsuficienteError = /** @class */ (function (_super) {
    __extends(SaldoInsuficienteError, _super);
    function SaldoInsuficienteError(message) {
        return _super.call(this, message) || this;
    }
    return SaldoInsuficienteError;
}(AplicacaoError));
exports.SaldoInsuficienteError = SaldoInsuficienteError;
var ContaInexistenteError = /** @class */ (function (_super) {
    __extends(ContaInexistenteError, _super);
    function ContaInexistenteError(message) {
        return _super.call(this, message) || this;
    }
    return ContaInexistenteError;
}(AplicacaoError));
exports.ContaInexistenteError = ContaInexistenteError;
var ContaExistenteError = /** @class */ (function (_super) {
    __extends(ContaExistenteError, _super);
    function ContaExistenteError(message) {
        return _super.call(this, message) || this;
    }
    return ContaExistenteError;
}(AplicacaoError));
exports.ContaExistenteError = ContaExistenteError;
