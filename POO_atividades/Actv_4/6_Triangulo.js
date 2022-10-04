var Triangulo = /** @class */ (function () {
    function Triangulo(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangulo.prototype.ladosTrinagulo = function () {
        return ((this.b - this.c) < this.a && this.a < (this.b + this.c));
    };
    Triangulo.prototype.ehIsoceles = function () {
        return (this.a == this.b && this.b != this.c);
    };
    Triangulo.prototype.ehEquilatero = function () {
        return (this.a == this.b && this.b == this.c);
    };
    Triangulo.prototype.ehEscaleno = function () {
        return (this.a != this.b && this.b != this.c && this.a != this.c);
    };
    return Triangulo;
}());
var ladosT = function () {
    var lados = new Triangulo(10, 30, 40);
    console.log(lados.ladosTrinagulo());
    console.log(lados.ehEquilatero());
    console.log(lados.ehIsoceles());
    console.log(lados.ehEscaleno());
    console.log("///////////////");
};
// let lados = new Triangulo(10,30, 40);
// console.log(lados.ehEquilatero());
// console.log(lados.ehIsoceles());
// console.log(lados.ehEscaleno());
// console.log("///////////////");
