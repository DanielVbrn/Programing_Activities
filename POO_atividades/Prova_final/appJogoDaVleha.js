"use strict";
exports.__esModule = true;
var input = require('prompt-sync')({ sigint: true });
var jogo_1 = require("./jogo");
var opcao;
var telaDeRegras;
do {
    var jogoDavelha = "---------------------------------   # JOGO DA VELHA #   -------------------------------------";
    jogoDavelha += "\n\n";
    jogoDavelha += "1 - INICIAR PARTIDA.";
    jogoDavelha += "\n\n";
    jogoDavelha += "2 - VISUALIZAR REGRAS DO JOGO";
    jogoDavelha += "\n\n";
    jogoDavelha += "0 - FINALIZAR PROGRAMA.";
    jogoDavelha += "\n\n";
    jogoDavelha += "-----> (RECOMENDA-SE QUE O USUÁRIO VISUALIZE AS REGRAS DO JOGO ANTES DE INICIAR UMA PARTIDA!) <------";
    jogoDavelha += "\n\n";
    console.log(jogoDavelha);
    opcao = Number(input("Opção: "));
    switch (opcao) {
        case 1:
            partidaJogoDaVelha();
            break;
        case 2:
            verRegrasDojogo();
            break;
        case 0:
            break;
        default:
            break;
    }
} while (opcao !== 0);
function partidaJogoDaVelha() {
    console.log("(Player 1) ");
    console.log("Deseja O ou X?");
    var OpcaoPlayer1 = input("> ");
    var player1 = new jogo_1.Jogador(OpcaoPlayer1);
    console.log("(Player 2) ");
    console.log("Deseja O ou X?");
    var OpcaoPlayer2 = input("> ");
    var player2 = new jogo_1.Jogador(OpcaoPlayer2);
    var tabuleiro = new jogo_1.Tabuleiro(player1, player2);
    console.table(tabuleiro.exibetabuleiro());
    jogadasNapartida(tabuleiro);
}
partidaJogoDaVelha();
function verRegrasDojogo() {
    var regras = "--------------- # Regras do jogo # ----------------";
    regras += "\n\n\n";
    regras += "1 - Para inserir a linha e a coluna no tabuleiro digite o formato [LC].";
    regras += "\n\n";
    regras += "2 - O primeiro digito será a linha e o segundo será a coluna no qual você vai inseir o valor.";
    regras += "\n\n";
    console.log(regras);
    telaDeRegras = input("Continuar mostrando a tela de regras(1 - sim || 2 - não)?");
    switch (telaDeRegras) {
        case '1':
            verRegrasDojogo();
        case '2':
            break;
    }
}
function jogadasNapartida(tabuleiro) {
    console.log("(Player 1)");
    var jogadaPlayer1 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador1.inserir(jogadaPlayer1, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 2)");
    var jogadaPlayer2 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador2.inserir(jogadaPlayer2, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 1)");
    jogadaPlayer1 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador1.inserir(jogadaPlayer1, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 2)");
    jogadaPlayer2 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador2.inserir(jogadaPlayer2, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 1)");
    jogadaPlayer1 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador1.inserir(jogadaPlayer1, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 2)");
    jogadaPlayer2 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador2.inserir(jogadaPlayer2, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 1)");
    jogadaPlayer1 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador1.inserir(jogadaPlayer1, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 2)");
    jogadaPlayer2 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador2.inserir(jogadaPlayer2, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
    console.log("(Player 1)");
    jogadaPlayer1 = input("Digite a posição que deseja inserir o valor no formato[LC]: ");
    tabuleiro.jogador1.inserir(jogadaPlayer1, tabuleiro);
    console.table(tabuleiro.casas);
    tabuleiro.verificarVitoria();
}
