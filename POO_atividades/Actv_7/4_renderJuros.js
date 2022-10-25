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
exports.Poupanca = void 0;
var _4_privateConta_1 = require("../Actv_6/4_privateConta");
var Poupanca = /** @class */ (function (_super) {
    __extends(Poupanca, _super);
    function Poupanca(JurosPercentual, numero, saldo, nomeTitular) {
        var _this = _super.call(this, numero, nomeTitular, saldo) || this;
        _this.jurosPercentual = JurosPercentual;
        return _this;
    }
    Poupanca.prototype.renderJuros = function () {
        return this.depositar(this.verificarsaldo * (this.jurosPercentual / 100));
    };
    return Poupanca;
}(_4_privateConta_1.Conta));
exports.Poupanca = Poupanca;
// function juros(){
//     let renderJ = new Poupanca(34, "12",1000, "Marcos");
//     renderJ.depositar(1000);
//     console.log(renderJ.consultarSaldo());
//     console.log("-------------------");
//     renderJ.renderJuros();
//     console.log(renderJ.consultarSaldo());
// }
// juros()
