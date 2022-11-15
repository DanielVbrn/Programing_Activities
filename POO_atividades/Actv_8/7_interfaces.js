"use strict";
exports.__esModule = true;
exports.TesteFiguras = exports.Triangulo = exports.Retangulo = exports.Quadrado = void 0;
var Quadrado = /** @class */ (function () {
    function Quadrado(altura, base) {
        this.base = base;
        this.altura = altura;
    }
    Quadrado.prototype.area = function () {
        return Math.pow(this.base, 2);
    };
    Quadrado.prototype.perimetro = function () {
        return this.base * 4;
    };
    Quadrado.prototype.comparar = function (formaGeometrica) {
        if (formaGeometrica.retangulo.area > this.area) {
            return -1;
        }
        else if (formaGeometrica.retangulo.area < this.area) {
            return 1;
        }
        if (formaGeometrica.triangulo.area > this.area) {
            return -1;
        }
        else if (formaGeometrica.triangulo.area < this.area) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return Quadrado;
}());
exports.Quadrado = Quadrado;
var Retangulo = /** @class */ (function () {
    function Retangulo(altura, base) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.perimetro = function () {
        return ((this.base * 2) + (this.altura * 2));
    };
    Retangulo.prototype.comparar = function (formaGeometrica) {
        if (formaGeometrica.quadrado.area > this.area) {
            return -1;
        }
        else if (formaGeometrica.quadrado.area < this.area) {
            return 1;
        }
        if (formaGeometrica.triangulo.area > this.area) {
            return -1;
        }
        else if (formaGeometrica.triangulo.area < this.area) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
var Triangulo = /** @class */ (function () {
    function Triangulo(altura, base, l1, l2) {
        this.base = base;
        this.altura = altura;
        this.l1 = l1;
        this.l2 = l2;
    }
    Triangulo.prototype.area = function () {
        return ((this.base * this.altura) / 2);
    };
    Triangulo.prototype.perimetro = function () {
        return (this.l1 + this.l2 + this.base);
    };
    Triangulo.prototype.comparar = function (formaGeometrica) {
        if (formaGeometrica.quadrado.area > this.area) {
            return -1;
        }
        else if (formaGeometrica.quadrado.area < this.area) {
            return 1;
        }
        if (formaGeometrica.retangulo.area > this.area) {
            return -1;
        }
        else if (formaGeometrica.retangulo.area < this.area) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
// let testeFiguras: FiguraGeometrica =new FiguraGeometrica()//ERRO!!
var TesteFiguras = /** @class */ (function () {
    function TesteFiguras() {
        this.quadrado = new Quadrado(10, 10);
        this.retangulo = new Retangulo(10, 20);
        this.triangulo = new Triangulo(10, 10, 13, 13);
    }
    TesteFiguras.prototype.mostrarClassQuadrado = function () {
        console.log("Quadrado");
        console.log(this.quadrado.area());
        console.log(this.quadrado.perimetro());
    };
    TesteFiguras.prototype.mostrarClassRetangulo = function () {
        console.log("Retângulo");
        console.log(this.retangulo.area());
        console.log(this.retangulo.perimetro());
    };
    TesteFiguras.prototype.mostrarClassTriangulo = function () {
        console.log("Triângulo");
        console.log(this.triangulo.area());
        console.log(this.triangulo.perimetro());
    };
    return TesteFiguras;
}());
exports.TesteFiguras = TesteFiguras;
function mostrarCalculos() {
    var show = new TesteFiguras();
    show.mostrarClassQuadrado();
    show.mostrarClassRetangulo();
    show.mostrarClassTriangulo();
}
mostrarCalculos();
