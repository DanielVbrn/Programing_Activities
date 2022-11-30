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
        this.life -= valorAtaque;
    };
    Guerreiros.prototype.estaEliminado = function () {
        if (this.life <= 0) {
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
        this.percentual_de_danos += valorAtaque;
    };
    BasesMilitares.prototype.estaEliminado = function () {
        if (this.percentual_de_danos >= 90) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(BasesMilitares.prototype, "percentualDeDano", {
        get: function () {
            return this.percentualDeDano;
        },
        enumerable: false,
        configurable: true
    });
    return BasesMilitares;
}());
var CenarioDeBatalha = /** @class */ (function () {
    function CenarioDeBatalha() {
    }
    CenarioDeBatalha.prototype.avaliar = function (defensivel1, defensivel2) {
        var indexD1 = 0;
        var indexD2 = 0;
        for (var i = 0; i < defensivel1.length; i++) {
            if (defensivel1 instanceof Guerreiros) {
                if (defensivel1[i].estaEliminado() == false) {
                    indexD1 += 3;
                }
            }
            if (defensivel1 instanceof BasesMilitares) {
                if (defensivel1[i].estaEliminado() == false) {
                    indexD1 += 5;
                }
            }
        }
        for (var i = 0; i < defensivel2.length; i++) {
            if (defensivel1 instanceof BasesMilitares) {
                if (defensivel2[i].estaEliminado() == false) {
                    indexD2 += 7;
                }
            }
            if (defensivel1 instanceof BasesMilitares) {
                if (defensivel1[i].estaEliminado() == false) {
                    indexD1 += 5;
                }
            }
        }
        if (indexD1 > indexD2) {
            console.log("O Exército 1 saiu vencedor!");
        }
        else if (indexD1 < indexD2) {
            console.log("O Exército 2 saiu vencedor!");
        }
        else {
            console.log("Houve um empate!");
        }
    };
    return CenarioDeBatalha;
}());
var JaEliminadoException = /** @class */ (function (_super) {
    __extends(JaEliminadoException, _super);
    function JaEliminadoException(message) {
        return _super.call(this, message) || this;
    }
    return JaEliminadoException;
}(Error));
var Warrior_1 = new Guerreiros("12", "Guerreiro", 5);
var Warrior_2 = new Guerreiros("10", "Mago", 4);
var MilitaryBase = new BasesMilitares("10", 4, 5);
Warrior_1.atacar(MilitaryBase);
Warrior_2.atacar(MilitaryBase);
Warrior_2.atacar(Warrior_1);
MilitaryBase.defenderAtaque(1);
var guerra1 = new CenarioDeBatalha();
var WR_Blue = [];
var WR_red = [];
for (var i = 0; i < 8; i++) {
    WR_Blue.push(Warrior_1);
    WR_Blue.push(Warrior_1);
    WR_Blue.push(Warrior_1);
    WR_red.push(Warrior_2);
}
WR_Blue.push(MilitaryBase);
WR_Blue.push(MilitaryBase);
WR_red.push(MilitaryBase);
WR_red.push(MilitaryBase);
for (var i = 0; i < 10; i++) {
    console.log(guerra1.avaliar(WR_Blue, WR_red));
}
