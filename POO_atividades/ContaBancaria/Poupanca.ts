import {Banco} from "./Banco"
import {Conta} from "./ContaBank"

export class Poupanca extends Conta{
    jurosPercentual: number;
    constructor (JurosPercentual: number, numero: string, saldo: number, nomeTitular:string) {
        super(numero,nomeTitular,saldo);
        this.jurosPercentual = JurosPercentual;
    }
    renderJuros():void{
        return this.depositar(this.consultarSaldo*(this.jurosPercentual/100));
    }
}