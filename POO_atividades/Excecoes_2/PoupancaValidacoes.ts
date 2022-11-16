
import {Conta} from "./ContaValidacoes"

export class ContaPoupanca extends Conta{
    private jurosPercentual: number;
    constructor (JurosPercentual: number, numero: string, saldo: number) {
        super(numero,saldo);
        this.jurosPercentual = JurosPercentual;
    }
    public renderJuros():void{
        return this.depositar(this.consultarSaldo*(this.jurosPercentual/100));
    }
}