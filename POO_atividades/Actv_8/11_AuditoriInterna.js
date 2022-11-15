"use strict";
exports.__esModule = true;
var _10_diagrama_1 = require("./10_diagrama");
var AuditoriaInterna = /** @class */ (function () {
    function AuditoriaInterna() {
        this.tributaveis = [];
    }
    AuditoriaInterna.prototype.adicionar = function (tributavel) {
        this.tributaveis.push(tributavel);
    };
    AuditoriaInterna.prototype.calcularTributos = function () {
        var soma = 0;
        for (var i = 0; i < this.tributaveis.length; i++) {
            soma += this.tributaveis[i].calculaTributos();
        }
        return soma;
    };
    return AuditoriaInterna;
}());
var TesteContasCorrentes = /** @class */ (function () {
    function TesteContasCorrentes() {
        this.conta1 = new _10_diagrama_1.ContaCorrente();
        this.conta2 = new _10_diagrama_1.ContaCorrente();
        this.conta3 = new _10_diagrama_1.ContaCorrente();
        this.contaSeguro1 = new _10_diagrama_1.SeguroDeVida();
        this.contaSeguro2 = new _10_diagrama_1.SeguroDeVida();
        this.contaSeguro3 = new _10_diagrama_1.SeguroDeVida();
    }
    return TesteContasCorrentes;
}());
var testeConta = function () {
    var testar = new TesteContasCorrentes();
    testar.conta1.setSaldo = 500;
    testar.conta2.setSaldo = 500;
    testar.conta3.setSaldo = 500;
    testar.conta1.setNome = "Daniel";
    testar.conta2.setNome = "Marcos";
    testar.conta3.setNome = "João";
    var addContas = new AuditoriaInterna();
    addContas.adicionar(testar.conta1);
    addContas.adicionar(testar.conta2);
    addContas.adicionar(testar.conta3);
    addContas.adicionar(testar.contaSeguro1);
    addContas.adicionar(testar.contaSeguro2);
    addContas.adicionar(testar.contaSeguro3);
    console.log(addContas.calcularTributos());
};
testeConta();
