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
    private localizacao_X:number;
    private localizacao_Y:number;
    private percentual_de_danos:number;

    constructor (id:string, localizacao_X:number, localizacao_Y:number) {
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

    public get percentualDeDano(){
        return this.percentualDeDano;
    }

}

class CenarioDeBatalha{
    public avaliar(defensivel1:Array<Defensivel>, defensivel2:Array<Defensivel>){
        let indexD1: number = 0;
        let indexD2: number = 0;
        for (let i = 0; i < defensivel1.length; i++) {
            if(defensivel1 instanceof Guerreiros){
                if(defensivel1[i].estaEliminado() == false){
                indexD1 += 3;
                }
            }
            
            if(defensivel1 instanceof BasesMilitares){
                if(defensivel1[i].estaEliminado() == false){
                    indexD1 += 5;
                }
            }
            
        }
    
    for (let i = 0; i < defensivel2.length; i++) {
        if(defensivel1 instanceof BasesMilitares){
            if(defensivel2[i].estaEliminado() == false){
                indexD2 += 7;
            }
        }

        if(defensivel1 instanceof BasesMilitares){
            if(defensivel1[i].estaEliminado() == false){
                indexD1 += 5;
            }
        }
    }    
        

    if (indexD1 > indexD2) {
        console.log("O Exército 1 saiu vencedor!")
    } else if (indexD1 < indexD2){
        console.log("O Exército 2 saiu vencedor!")
    } else {
        console.log("Houve um empate!")

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


let Warrior_1:Guerreiros = new Guerreiros("12", "Guerreiro", 5);
let Warrior_2:Guerreiros = new Guerreiros("10", "Mago", 4);

let MilitaryBase:BasesMilitares = new BasesMilitares("10", 4, 5);

Warrior_1.atacar(MilitaryBase);
Warrior_2.atacar(MilitaryBase);
Warrior_2.atacar(Warrior_1);
MilitaryBase.defenderAtaque(1);

let guerra1:CenarioDeBatalha = new CenarioDeBatalha();
let WR_Blue:Defensivel[] = [];
let WR_red:Defensivel[] = [];

for (let i = 0; i < 8; i++) {
    WR_Blue.push(Warrior_1);
    WR_Blue.push(Warrior_1);
    WR_Blue.push(Warrior_1);
    WR_red.push(Warrior_2);
}

WR_Blue.push(MilitaryBase);
WR_Blue.push(MilitaryBase);
WR_red.push(MilitaryBase);
WR_red.push(MilitaryBase);

for(let i = 0; i < 10; i++){
    console.log(guerra1.avaliar(WR_Blue, WR_red));
}