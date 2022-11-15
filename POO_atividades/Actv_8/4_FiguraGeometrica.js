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
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quadrado.prototype.area = function () {
        return Math.pow(this.base, 2);
    };
    Quadrado.prototype.perimetro = function () {
        return this.base * 4;
    };
    return Quadrado;
}(FiguraGeometrica));
var Retangulo = /** @class */ (function (_super) {
    __extends(Retangulo, _super);
    function Retangulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Retangulo.prototype.area = function () {
        return Math.pow(this.base, this.altura);
    };
    Retangulo.prototype.perimetro = function () {
        return ((this.base * 2) + (this.altura * 2));
    };
    return Retangulo;
}(FiguraGeometrica));
var Tringulo = /** @class */ (function (_super) {
    __extends(Tringulo, _super);
    function Tringulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tringulo.prototype.area = function () {
        return ((this.base * this.altura) / 2);
    };
    Tringulo.prototype.perimetro = function () {
        return (this.l1 + this.l2 + this.l3);
    };
    return Tringulo;
}(FiguraGeometrica));
// let testeFiguras: FiguraGeometrica =new FiguraGeometrica()//ERRO!!
var functionQuadrado = function (quadrado) {
    console.log(quadrado.area);
};
