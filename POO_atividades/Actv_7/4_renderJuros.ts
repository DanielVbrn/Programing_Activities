import {Banco} from "../Actv_6/3_privateBanco"
import {Conta} from "../Actv_6/4_privateConta"

export class Poupanca extends Conta{
    jurosPercentual: number;
    constructor (JurosPercentual: number, numero: string, saldo: number, nomeTitular:string) {
        super(numero,nomeTitular,saldo);
        this.jurosPercentual = JurosPercentual;
    }
    renderJuros():void{
        return this.depositar(this.verificarsaldo*(this.jurosPercentual/100));
    }
}



// function juros(){
//     let renderJ = new Poupanca(34, "12",1000, "Marcos");

//     renderJ.depositar(1000);
//     console.log(renderJ.consultarSaldo());
//     console.log("-------------------");
//     renderJ.renderJuros();
//     console.log(renderJ.consultarSaldo());

// }
// juros()