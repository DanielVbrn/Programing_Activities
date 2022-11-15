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
exports.Triangulo = exports.Retangulo = exports.Quadrado = exports.FiguraGeometrica = void 0;
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica(altura, base) {
        this.altura = 5;
        this.base = 10;
        this.altura = altura;
        this.base = base;
    }
    return FiguraGeometrica;
}());
exports.FiguraGeometrica = FiguraGeometrica;
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(altura, base) {
        return _super.call(this, altura, base) || this;
    }
    Quadrado.prototype.area = function () {
        return Math.pow(this.base, 2);
    };
    Quadrado.prototype.perimetro = function () {
        return this.base * 4;
    };
    Quadrado.prototype.comparar = function (formaGeometrica) {
        var num = 0;
        if (formaGeometrica.area > this.area) {
            num = -1;
        }
        else if (formaGeometrica.area < this.area) {
            num = 1;
        }
        return num;
    };
    return Quadrado;
}(FiguraGeometrica));
exports.Quadrado = Quadrado;
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo(altura, base) {
        return _super.call(this, altura, base) || this;
    }
    Retangulo.prototype.area = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.perimetro = function () {
        return ((this.base * 2) + (this.altura * 2));
    };
    Retangulo.prototype.comparar = function (formaGeometrica) {
        var num = 0;
        if (formaGeometrica.area > this.area) {
            num = -1;
        }
        else if (formaGeometrica.area < this.area) {
            num = 1;
        }
        return num;
    };
    return Retangulo;
}(FiguraGeometrica));
exports.Retangulo = Retangulo;
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(altura, base, l1, l2) {
        var _this = _super.call(this, altura, base) || this;
        _this.l1 = l1;
        _this.l2 = l2;
        return _this;
    }
    Triangulo.prototype.area = function () {
        return ((this.base * this.altura) / 2);
    };
    Triangulo.prototype.perimetro = function () {
        return (this.l1 + this.l2 + this.base);
    };
    Triangulo.prototype.comparar = function (formaGeometrica) {
        var num = 0;
        if (formaGeometrica.area > this.area) {
            num = -1;
        }
        else if (formaGeometrica.area < this.area) {
            num = 1;
        }
        return num;
    };
    return Triangulo;
}(FiguraGeometrica));
exports.Triangulo = Triangulo;
