"use strict";
exports.__esModule = true;
var _8_Imcomparavel_1 = require("./8_Imcomparavel");
var TestarComparavel = /** @class */ (function () {
    function TestarComparavel() {
        this.quadrado = new _8_Imcomparavel_1.Quadrado(4, 4);
        this.retangulo = new _8_Imcomparavel_1.Retangulo(4, 6);
        this.triangulo = new _8_Imcomparavel_1.Triangulo(4, 2, 5, 5);
    }
    TestarComparavel.prototype.comparacao_Triangulo_X_Quadrado = function () {
        console.log(this.triangulo.comparar(this.quadrado));
    };
    TestarComparavel.prototype.comparacao_Retangulo_X_Quadrado = function () {
        console.log(this.retangulo.comparar(this.quadrado));
    };
    TestarComparavel.prototype.comparacao_Triangulo_X_Retangulo = function () {
        console.log(this.triangulo.comparar(this.retangulo));
    };
    return TestarComparavel;
}());
function testarComparacoes() {
    var teste = new TestarComparavel();
    teste.comparacao_Retangulo_X_Quadrado();
    teste.comparacao_Triangulo_X_Quadrado();
    teste.comparacao_Triangulo_X_Retangulo();
}
testarComparacoes();
