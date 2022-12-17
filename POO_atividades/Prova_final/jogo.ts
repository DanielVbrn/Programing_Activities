import { VitoriaObtida,EmpateObitido,VitoriaJogador1, VitoriaJogador2 } from "./excessoes";

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
            if(this.casas[i][0] === this.jogador1.valor && this.casas[i][1] === this.jogador1.valor && this.casas[i][2] === this.jogador1.valor){
                throw new VitoriaJogador1("Jogador 1 venceu");
            }
            if(this.casas[i][0] === this.jogador2.valor && this.casas[i][1] === this.jogador2.valor && this.casas[i][2] === this.jogador2.valor){
                throw new VitoriaJogador2("Jogador 2 venceu");
            }
        }
    }
    
    
    private verificarColuna():void{
        for(let j = 0; j < this.casas.length; j++){
            if(this.casas[0][j] === this.jogador1.valor && this.casas[1][j] === this.jogador1.valor && this.casas[2][j] === this.jogador1.valor){
                throw new VitoriaJogador1("Jogador 1 venceu.");
            }
            if(this.casas[0][j] === this.jogador2.valor && this.casas[1][j] === this.jogador2.valor && this.casas[2][j] === this.jogador2.valor){
                throw new VitoriaJogador2("Jogador 2 venceu.");
            }
        }
    }
    
    
    private verificarDiagonal(){
        
        if(this.casas[0][0] === this.jogador1.valor && this.casas[1][1] === this.jogador1.valor && this.casas[2][2] === this.jogador1.valor){
            throw new VitoriaJogador1("Jogador 1 venceu.");
        }
        if(this.casas[2][0] === this.jogador2.valor && this.casas[1][1] === this.jogador2.valor && this.casas[0][2] === this.jogador2.valor){
            throw new VitoriaJogador2("Jogador 2 venceu.");
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
                throw new EmpateObitido("Partida encerrada em um empate.");
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
