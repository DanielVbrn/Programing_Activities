import { Conta } from "./ContaBank";
import { ContaInexistenteError } from "../Excecoes_2/1_error";
import {Poupanca} from "./Poupanca"
export class Banco{
    private contas : Array<Conta> = [];
    constructor (contas: Array<Conta> = []){
        this.contas = contas;
    }
    public inserir(conta: Conta):void{
        if(this.consultarPorIndice(conta.consultarNumero) == 0){
            this.contas.push(conta);
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

    private consultar(num:String): Conta{
        let contaP!: Conta;
        for (let i of this.contas){
            if(i.consultarNumero != num){
                throw new ContaInexistenteError("Conta não existe!")
            } else if(i.consultarNumero == num){
                contaP = i;
                break;
            }
        }
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
        let verifica:Conta = this.consultar(numeroCredito);
        verifica.sacar(valor);
        

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
        if (this.contas[i] instanceof Banco) {
            (<Poupanca>this.contas[i]).renderJuros()   
        } 
    }



}



