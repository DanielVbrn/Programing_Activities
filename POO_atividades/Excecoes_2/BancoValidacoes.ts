import { Conta } from "./ContaValidacoes";
import { ContaExistenteError, ContaInexistenteError } from "./1_error";
import {ContaPoupanca} from "./PoupancaValidacoes"
import { PoupancaInvalidaError } from "./6_poupancaInvalida";
export class Banco{
    private contas : Array<Conta> = [];
    constructor (contas: Array<Conta> = []){
        this.contas = contas;
    }
    public inserir(conta: Conta):void{
        try {
            this.consultarPorIndice(conta.consultarNumero);
            throw new ContaExistenteError("Conta já cadastrada...")
        } catch (a:any) {
            if(conta instanceof ContaPoupanca){
                this.contas.push(conta);
            }
        }
    }

    public consultarPorIndice(num:String):number{
        let a: number = 0;   
           
        for (let i:number = 1; i <= this.contas.length; i++) {
            if(this.contas[i].consultarNumero != num){
                throw new ContaInexistenteError("Conta não encontrada...") 
            } else if (this.contas[i].consultarNumero == num){
                a = i;
                break
            }    
        }
        return a;
    }

    public consultar(num:String): Conta{
        let contaP!: Conta;
        let i = this.consultarPorIndice(num);
        contaP = this.contas[i];
        return contaP;
    }

    set consultSaldo(num:string){
        this.consultar(num)
    }

    public alterar(conta: Conta):void{
        let o = this.consultarPorIndice(conta.consultarNumero);
        this.contas[o] = conta;   
    }


    public excluir(numero: String): void {
        let indice: number = this.consultarPorIndice(numero);
        this.contas.splice(indice, 1);
    }



    public sacar(numeroCredito:string, valor:number){
        let i = this.consultarPorIndice(numeroCredito);
        let contaP:Conta = this.contas[i];
        contaP.sacar(valor);
    }



    public depositar(numero:string, valor:number):void{
        let conta:Conta = this.consultar(numero);
        conta.depositar(valor)
    }

    public transferir(numeroCredito:string,numeroDebito:string, valor:number):void{
        let a:Conta = this.consultar(numeroDebito);
        let b:Conta = this.consultar(numeroCredito);
        a.transferencia(b,valor);
    }

    public qtdContas(): number{
        return this.contas.length
    }

    public depositoTotal():number{
        let a:number = 0;
        if(this.qtdContas() != 0){
            let saldo:number[] = this.contas.map((c) => c.consultarSaldo)
            a = saldo.reduce((anterior, valoratual) => anterior += valoratual);
        }
        return a;
    }

    public MediaSaldo(): number{
        let media:number = this.depositoTotal()/this.qtdContas()
        return media;
    }

    renderJuros(numero:string){
        let i = this.consultarPorIndice(numero);
        if(this.contas[i] instanceof ContaPoupanca){
            (<ContaPoupanca>this.contas[i]).renderJuros()   

        }else{
            throw new PoupancaInvalidaError("Não é conta poupança.")
        } 
    }
}



