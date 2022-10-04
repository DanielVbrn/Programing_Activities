var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (atacado) {
        if (atacado.estaVivo() == true) {
            atacado.pontosAtuais -= this.calcularAtaque();
        }
    };
    Jogador.prototype.estaVivo = function () {
        if (this.pontosAtuais > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Jogador.prototype.toString = function () {
        return "for\u00E7a: ".concat(this.forca, " \nnivel: ").concat(this.nivel, " \npontos: ").concat(this.pontosAtuais);
    };
    return Jogador;
}());
var j1 = new Jogador(40, 25, 100);
var j2 = new Jogador(30, 20, 300);
console.log(j1.calcularAtaque());
console.log(j2.calcularAtaque());
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
j2.atacar(j1);
j1.atacar(j2);
j1.atacar(j2);
j1.atacar(j2);
console.log(j1.estaVivo());
console.log(j2.estaVivo());
