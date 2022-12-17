const input = require('prompt-sync')({sigint: true});
import { Jogador, Tabuleiro, } from "./jogo";
import { EmpateObitido, VitoriaJogador1, VitoriaJogador2} from "./excessoes";
let opcao:number;
let telaDeRegras:string;
try {
    
    do { 
        let jogoDavelha = "---------------------------------   # JOGO DA VELHA #   -------------------------------------";
        jogoDavelha += "\n\n"
        jogoDavelha += "1 - INICIAR PARTIDA.";
        jogoDavelha += "\n\n"
        jogoDavelha += "2 - VISUALIZAR REGRAS DO JOGO";
        jogoDavelha += "\n\n"
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
} catch (error:any) {
    if(error instanceof VitoriaJogador1){
        console.log("O jogador 1 saiu vencedor.");
    }
    if(error instanceof VitoriaJogador2){
        console.log("O jogador 2 saiu vencedor.");
    }
    if(error instanceof EmpateObitido){
        console.log("O jogador 1 e o jogador 2 empataram.");
    }
    
}


function partidaJogoDaVelha(){
    console.log("(Player 1) ");
    console.log("Deseja O ou X?");
    let OpcaoPlayer1 = input("> ");
    let player1:Jogador = new Jogador(OpcaoPlayer1);
    console.log("(Player 2) ");
    console.log("Deseja O ou X?")
    let OpcaoPlayer2 = input("> ");
    let player2:Jogador = new Jogador(OpcaoPlayer2);
    let tabuleiro:Tabuleiro = new Tabuleiro(player1,player2);
    console.table(tabuleiro.exibetabuleiro());
    jogadasNapartida(tabuleiro);

     
}

function verRegrasDojogo(){
    let regras:string = "--------------- # Regras do jogo # ----------------"
    regras += "\n\n\n";
    regras += "1 - Para inserir a linha e a coluna no tabuleiro digite o formato [LC].";
    regras += "\n\n";
    regras += "2 - O primeiro digito será a linha e o segundo será a coluna no qual você vai inseir o valor.";
    regras += "\n\n";
    console.log(regras);
    telaDeRegras = input("Continuar mostrando a tela de regras(1 - sim || 2 - não)?")
    switch (telaDeRegras) {
        case '1':
            verRegrasDojogo();
        case '2':

            break;
    }
}

function jogadasNapartida(tabuleiro:Tabuleiro){
    for(let i:number = 0; i < 5; i++){
        console.log("(Player 1)");
        let jogadaPlayer1:string = input("Digite a posição que deseja inserir o valor no formato[LC]: ")
        tabuleiro.jogador1.inserir(jogadaPlayer1,tabuleiro);
        console.table(tabuleiro.casas)
        tabuleiro.verificarVitoria();
        
        console.log("(Player 2)");
        let jogadaPlayer2:string = input("Digite a posição que deseja inserir o valor no formato[LC]: ")
        tabuleiro.jogador2.inserir(jogadaPlayer2,tabuleiro);
        console.table(tabuleiro.casas);
        tabuleiro.verificarVitoria();

    }
    
}


