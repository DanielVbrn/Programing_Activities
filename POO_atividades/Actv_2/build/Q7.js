"use strict";
var Professor = /** @class */ (function () {
    function Professor() {
        this.nome = "Ely";
        this.pagamento = 120.56;
        this.preferLanguage = "Typescript";
        this.nome;
        this.pagamento;
        this.preferLanguage;
    }
    Professor.prototype.outputName = function () {
        console.log("".concat(this.nome));
    };
    Professor.prototype.outputPayment = function () {
        console.log("My payment time is ".concat(this.pagamento, " "));
    };
    Professor.prototype.outputPreferLang = function () {
        console.log("and \nmy preffered language is ".concat(this.preferLanguage));
    };
    return Professor;
}());
function template() {
    var valor = new Professor();
    var nome = valor.outputName();
    var pagamento = valor.outputPayment();
    var preferLanguage = valor.outputPreferLang();
}
template();
