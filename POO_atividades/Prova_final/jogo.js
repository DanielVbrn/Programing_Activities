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
exports.Jogador = exports.Tabuleiro = void 0;
var excessoes_1 = require("./excessoes");
var MatrizDoJogo = /** @class */ (function () {
    function MatrizDoJogo() {
        this.casas = [];
    }
    return MatrizDoJogo;
}());
var Tabuleiro = /** @class */ (function (_super) {
    __extends(Tabuleiro, _super);
    function Tabuleiro(jogador1, jogador2) {
        var _this = _super.call(this) || this;
        _this.jogador1 = jogador1;
        _this.jogador2 = jogador2;
        _this.casas = [
            ['0', '0', '0'],
            ['0', '0', '0'],
            ['0', '0', '0'],
        ];
        return _this;
    }
    Tabuleiro.prototype.zerarTabuleiro = function () {
        for (var i = 0; i < this.casas.length; i++) {
            for (var j = 0; j < this.casas.length; j++) {
                if (this.casas[i][j] !== "0") {
                    this.casas[i][j] = '0';
                }
            }
        }
    };
    Tabuleiro.prototype.exibetabuleiro = function () {
        return this.casas;
    };
    Tabuleiro.prototype.verificarLinha = function () {
        for (var i = 0; i < this.casas.length; i++) {
            if (this.casas[i][0] === this.casas[i][1] && this.casas[i][1] === this.casas[i][2]) {
                throw new excessoes_1.VitoriaObtida("Partida finalizada - linha");
            }
        }
    };
    Tabuleiro.prototype.verificarColuna = function () {
        for (var j = 0; j < this.casas.length; j++) {
            if (this.casas[0][j] === this.casas[1][j] && this.casas[1][j] === this.casas[2][j]) {
                throw new excessoes_1.VitoriaObtida("Partida finalizada - coluna");
            }
        }
    };
    Tabuleiro.prototype.verificarDiagonal = function () {
        if (this.casas[0][0] === this.casas[1][1] && this.casas[1][1] === this.casas[2][2]) {
            throw new excessoes_1.VitoriaObtida("Partida finalizada - diagonal1");
        }
        if (this.casas[2][0] === this.casas[1][1] && this.casas[1][1] === this.casas[0][2]) {
            throw new excessoes_1.VitoriaObtida("Partida finalizada - diagonal2");
        }
    };
    Tabuleiro.prototype.verificarEmpate = function () {
        for (var i = 0; i < this.casas.length; i++) {
            for (var j = 0; j < this.casas.length; j++) {
                if (this.casas[i][j] === "0") {
                    return;
                }
            }
        }
        throw new excessoes_1.EmpateObitido("A partida terminou com empate entre os jogadores.");
    };
    Tabuleiro.prototype.verificarVitoria = function () {
        try {
            this.verificarLinha();
            this.verificarColuna();
            this.verificarDiagonal();
            this.verificarEmpate();
        }
        catch (error) {
            if (error instanceof excessoes_1.VitoriaObtida) {
                throw new excessoes_1.VitoriaObtida("Jogo encerrado.");
            }
            if (error instanceof excessoes_1.EmpateObitido) {
                throw new excessoes_1.EmpateObitido("Parrtida encerrada em um empate.");
            }
        }
    };
    return Tabuleiro;
}(MatrizDoJogo));
exports.Tabuleiro = Tabuleiro;
var Jogador = /** @class */ (function () {
    function Jogador(valor) {
        this.valor = valor;
        this.pontosjogaodor = 0;
    }
    Jogador.prototype.localizarPosicao = function (posicao) {
        var linha = Number(posicao[0]);
        var coluna = Number(posicao[1]);
        return [linha, coluna];
    };
    Jogador.prototype.inserir = function (posicao, tabuleiro) {
        var localizar = this.localizarPosicao(posicao);
        tabuleiro.casas[localizar[0]][localizar[1]] = this.valor;
    };
    return Jogador;
}());
exports.Jogador = Jogador;
;
// let player1:Jogador = new Jogador("x");
// let player2:Jogador = new Jogador("o");
// let tabuleiro:Tabuleiro = new Tabuleiro(player1,player2);
// player1.inserir('11',tabuleiro);
// player2.inserir("00", tabuleiro);
// player1.inserir('02',tabuleiro);
// player2.inserir('20',tabuleiro);
// player1.inserir("01", tabuleiro);
// player1.inserir('10',tabuleiro);
// player2.inserir("21", tabuleiro);
// player2.inserir("12", tabuleiro);
// player1.inserir("22", tabuleiro);
// console.table(tabuleiro.exibetabuleiro());
// tabuleiro.verificarVitoria();
