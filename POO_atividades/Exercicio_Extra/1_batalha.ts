class Guerreiros implements Defensivel{
    private id:string; 
    private descricao:string;
    private forca_de_ataque:number;
    private life:number;

    constructor (id:string, descricao:string, forca_de_ataque:number) {
        this.id =  id;
        this.descricao = descricao;
        this.forca_de_ataque = forca_de_ataque;
        this.life = 10;
    }

    public defenderAtaque(valorAtaque: number):void {
        this.life -= valorAtaque;
    }

    public estaEliminado(): boolean {
        if(this.life <= 0){
            return true;
        }else{
            return false;
        }
    }
    
    public atacar(defensivel:Defensivel):any{
        if(defensivel.estaEliminado() == true){
            throw new JaEliminadoException("Já está eliminado!!!");
        }
        defensivel.defenderAtaque(this.forca_de_ataque);
    }

}



class BasesMilitares implements Defensivel{
    private id:string; 
    private localizacao_X:string;
    private localizacao_Y:string;
    private percentual_de_danos:number;

    constructor (id:string, localizacao_X:string, localizacao_Y:string) {
        this.id =  id;
        this.localizacao_X = localizacao_X;
        this.localizacao_Y = localizacao_Y;
        this.percentual_de_danos = 0;
    }

    public defenderAtaque(valorAtaque: number):void {
        this.percentual_de_danos += valorAtaque;
    }

    public estaEliminado(): boolean {
        if(this.percentual_de_danos >= 90){
            return true;
        }else{
            return false;
        }
    }

}

class CenarioDeBatalha{
    public avaliar(defensivel1:Array<Defensivel>, defensivel2:Array<Defensivel>){
        let indexD1: number = 0;
        let indexD2: number = 0;
        let defensivel: Defensivel;
        for (let i = 0; i < defensivel1.length; i++) {
            defensivel = defensivel1[i];
            if(defensivel instanceof Guerreiros){
                if(defensivel[i].estaEliminado() == false){
                indexD1 += 3;
            }
            
            if(defensivel instanceof BasesMilitares){
                if(defensivel[i].estaEliminado() == false){
                indexD1 += 5;
                }
            }
        
    }
    
    for (let i = 0; i < defensivel2.length; i++) {
        if(defensivel2[i].estaEliminado() == false){
                indexD2 += 7;
                
            }
        }

        if (indexD1 > indexD2) {
            console.log("O Exército 1 saiu vencedor!")
        } else {
            console.log("O Exército 2 saiu vencedor!")

        }

    }


}

class JaEliminadoException extends Error{
    constructor(message:string){
        super(message);
    }
}

interface Defensivel{
    estaEliminado():boolean;
    defenderAtaque(valorAtaque:number):void;
}


let Warrior:Guerreiros = new Guerreiros("12", "Guerreiro habilidoso com mais de mil batalhas", 100);

let MilitaryBase:BasesMilitares = new BasesMilitares("10", "Teresina", "Guadalupe");

Warrior.atacar(MilitaryBase);
MilitaryBase.defenderAtaque(9);
console.log(Warrior.estaEliminado());