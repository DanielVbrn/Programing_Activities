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
var Guerreiros = /** @class */ (function () {
    function Guerreiros(id, descricao, forca_de_ataque) {
        this.id = id;
        this.descricao = descricao;
        this.forca_de_ataque = forca_de_ataque;
        this.life = 10;
    }
    Guerreiros.prototype.defenderAtaque = function (valorAtaque) {
        this.life - valorAtaque;
    };
    Guerreiros.prototype.estaEliminado = function () {
        if (this.life = 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Guerreiros.prototype.atacar = function (defensivel) {
        if (defensivel.estaEliminado() == true) {
            throw new JaEliminadoException("Já está eliminado!!!");
        }
        defensivel.defenderAtaque(this.forca_de_ataque);
    };
    return Guerreiros;
}());
var BasesMilitares = /** @class */ (function () {
    function BasesMilitares(id, localizacao_X, localizacao_Y) {
        this.id = id;
        this.localizacao_X = localizacao_X;
        this.localizacao_Y = localizacao_Y;
        this.percentual_de_danos = 0;
    }
    BasesMilitares.prototype.defenderAtaque = function (valorAtaque) {
        this.percentual_de_danos + valorAtaque;
    };
    BasesMilitares.prototype.estaEliminado = function () {
        if (this.percentual_de_danos >= 90) {
            return true;
        }
        else {
            return false;
        }
    };
    return BasesMilitares;
}());
var JaEliminadoException = /** @class */ (function (_super) {
    __extends(JaEliminadoException, _super);
    function JaEliminadoException(message) {
        return _super.call(this, message) || this;
    }
    return JaEliminadoException;
}(Error));
var Warrior = new Guerreiros("12", "Guerreiro habilidoso com mais de mil batalhas", 100);
var MilitaryBase = new BasesMilitares("10", "Teresina", "Guadalupe");
Warrior.atacar(MilitaryBase);
MilitaryBase.defenderAtaque(9);
console.log(Warrior.estaEliminado());
