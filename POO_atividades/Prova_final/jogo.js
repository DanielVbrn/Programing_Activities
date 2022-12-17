"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = exports.Tabuleiro = void 0;
const excessoes_1 = require("./excessoes");
class MatrizDoJogo {
    constructor() {
        this.casas = [];
    }
}
class Tabuleiro extends MatrizDoJogo {
    constructor(jogador1, jogador2) {
        super();
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.casas = [
            ['0', '0', '0'],
            ['0', '0', '0'],
            ['0', '0', '0'],
        ];
    }
    zerarTabuleiro() {
        for (let i = 0; i < this.casas.length; i++) {
            for (let j = 0; j < this.casas.length; j++) {
                if (this.casas[i][j] !== "0") {
                    this.casas[i][j] = '0';
                }
            }
        }
    }
    exibetabuleiro() {
        return this.casas;
    }
    verificarLinha() {
        for (let i = 0; i < this.casas.length; i++) {
            if (this.casas[i][0] === this.jogador1.valor && this.casas[i][1] === this.jogador1.valor && this.casas[i][2] === this.jogador1.valor) {
                throw new excessoes_1.VitoriaJogador1("Jogador 1 venceu");
            }
            if (this.casas[i][0] === this.jogador2.valor && this.casas[i][1] === this.jogador2.valor && this.casas[i][2] === this.jogador2.valor) {
                throw new excessoes_1.VitoriaJogador2("Jogador 2 venceu");
            }
        }
    }
    verificarColuna() {
        for (let j = 0; j < this.casas.length; j++) {
            if (this.casas[0][j] === this.jogador1.valor && this.casas[1][j] === this.jogador1.valor && this.casas[2][j] === this.jogador1.valor) {
                throw new excessoes_1.VitoriaJogador1("Jogador 1 venceu.");
            }
            if (this.casas[0][j] === this.jogador2.valor && this.casas[1][j] === this.jogador2.valor && this.casas[2][j] === this.jogador2.valor) {
                throw new excessoes_1.VitoriaJogador2("Jogador 2 venceu.");
            }
        }
    }
    verificarDiagonal() {
        if (this.casas[0][0] === this.jogador1.valor && this.casas[1][1] === this.jogador1.valor && this.casas[2][2] === this.jogador1.valor) {
            throw new excessoes_1.VitoriaJogador1("Jogador 1 venceu.");
        }
        if (this.casas[2][0] === this.jogador2.valor && this.casas[1][1] === this.jogador2.valor && this.casas[0][2] === this.jogador2.valor) {
            throw new excessoes_1.VitoriaJogador2("Jogador 2 venceu.");
        }
    }
    verificarEmpate() {
        for (let i = 0; i < this.casas.length; i++) {
            for (let j = 0; j < this.casas.length; j++) {
                if (this.casas[i][j] === "0") {
                    return;
                }
            }
        }
        throw new excessoes_1.EmpateObitido("A partida terminou com empate entre os jogadores.");
    }
    verificarVitoria() {
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
                throw new excessoes_1.EmpateObitido("Partida encerrada em um empate.");
            }
        }
    }
}
exports.Tabuleiro = Tabuleiro;
class Jogador {
    constructor(valor) {
        this.valor = valor;
        this.pontosjogaodor = 0;
    }
    localizarPosicao(posicao) {
        let linha = Number(posicao[0]);
        let coluna = Number(posicao[1]);
        return [linha, coluna];
    }
    inserir(posicao, tabuleiro) {
        let localizar = this.localizarPosicao(posicao);
        tabuleiro.casas[localizar[0]][localizar[1]] = this.valor;
    }
}
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
