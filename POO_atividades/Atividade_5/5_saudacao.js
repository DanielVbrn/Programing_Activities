var Saudacoes = /** @class */ (function () {
    function Saudacoes(texto, destinario) {
        this.texto = texto;
        this.destinario = destinario;
    }
    Saudacoes.prototype.obterSaudacao = function () {
        return "".concat(this.texto, " ").concat(this.destinario);
    };
    return Saudacoes;
}());
var a = new Saudacoes("Bom dia", "João");
console.log(a.obterSaudacao());
