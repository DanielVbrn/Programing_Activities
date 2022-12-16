import { VitoriaObtida,EmpateObitido } from "./excessoes";

abstract class MatrizDoJogo{
    public casas:Array<Array<string>> = [];
    abstract exibetabuleiro():string[][];
}


export class Tabuleiro extends MatrizDoJogo implements StatusDaPartida{
    jogador1:Jogador;
    jogador2:Jogador;
    constructor(jogador1:Jogador,jogador2:Jogador){
        super();
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;
        this.casas = [
            ['0','0','0'],
            ['0','0','0'],
            ['0','0','0'],
        ];

    }

    zerarTabuleiro():void{
        for(let i = 0; i < this.casas.length; i++){
            for (let j = 0; j < this.casas.length; j++) {
                if(this.casas[i][j] !== "0"){
                    this.casas[i][j] = '0';
                }
               
            }
        }
    }
            
    exibetabuleiro():string[][]{
        return this.casas;
    }
    
    private verificarLinha():void{
        for(let i = 0; i < this.casas.length; i++) {
            if(this.casas[i][0] === this.casas[i][1] && this.casas[i][1] === this.casas[i][2]){
                throw new VitoriaObtida("Partida finalizada - linha");
            }
        }
    }
    
    
    private verificarColuna():void{
        for(let j = 0; j < this.casas.length; j++){
            if(this.casas[0][j] === this.casas[1][j] && this.casas[1][j] === this.casas[2][j]){
                throw new VitoriaObtida("Partida finalizada - coluna");
            }
        }
    }
    
    
    private verificarDiagonal(){
        if(this.casas[0][0] === this.casas[1][1] && this.casas[1][1] === this.casas[2][2]){
            throw new VitoriaObtida("Partida finalizada - diagonal1");
        }
        if(this.casas[2][0] === this.casas[1][1] && this.casas[1][1] === this.casas[0][2]){
            throw new VitoriaObtida("Partida finalizada - diagonal2");   
        }
    }

    private verificarEmpate():void{
        for(let i = 0; i < this.casas.length; i++){
            for (let j = 0; j < this.casas.length; j++) {
                if(this.casas[i][j] === "0"){
                    return
                }
               
            }
        }
        throw new EmpateObitido("A partida terminou com empate entre os jogadores.");

    }

    verificarVitoria():void{
        try { 
            this.verificarLinha();       
            this.verificarColuna();           
            this.verificarDiagonal();
            this.verificarEmpate();
        }catch(error:any) {
            if(error instanceof VitoriaObtida){
                throw new VitoriaObtida("Jogo encerrado.");
            }
            if(error instanceof EmpateObitido){
                throw new EmpateObitido("Parrtida encerrada em um empate.");
            }
        }
    }

}

interface StatusDaPartida{
    verificarVitoria():void;
}


interface Jogadas{
    inserir(posicao:string,tabuleiro:Tabuleiro):void;
}

export class Jogador implements Jogadas{
    public valor:string;
    public pontosjogaodor:number;
    constructor(valor:string){
        this.valor = valor;
        this.pontosjogaodor = 0;
    }


    private localizarPosicao(posicao:string):number[]{
        let linha:number = Number(posicao[0]);
        let coluna:number = Number(posicao[1]);
        return [linha,coluna];
    }

    public inserir(posicao:string,tabuleiro:Tabuleiro):void{
        let localizar = this.localizarPosicao(posicao);
        tabuleiro.casas[localizar[0]][localizar[1]] = this.valor; 
    }


};


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
