import { Conta } from "./4_privateConta";
import { Poupanca } from "../Actv_7/4_renderJuros";

export class Banco{
    private contas : Array<Conta> = [];
    constructor (contas: Array<Conta> = []){
        this.contas = contas;
    }
    public inserir(conta: Conta):void{
        if(this.verificContas(conta.verificarNumero) == 0){
            this.contas.push(conta);
        }
    }

    public verificContas(num:String):number{
        let a: number = 0;    
        for (let i:number = 1; i <= this.contas.length; i++) {
            if(this.contas[i].verificarNumero == num){
                a = i;
                break;
            }    
        }
        return a;
    }

    private consultarSaldo(num:String): Conta{
        let contaP!: Conta;
        for (let i of this.contas) {
            if(i.verificarNumero == num){
                contaP = i;
                break
            }
        }
        return contaP;
    }

    set consultSaldo(num:string){
        this.consultarSaldo(num)
    }

    public alterar(conta: Conta):void{
        let o = this.verificContas(conta.verificarNumero)
        if (o != 0) {
            this.contas[o] = conta;
        }
    }


    public excluir(numero: String): void {
        let indice: number = this.verificContas(numero);

        this.contas.splice(indice, 1);
    }

    public sacar(numeroCredito:string, valor:number){
        let verifica:Conta = this.consultarSaldo(numeroCredito);
        if(verifica != null){
            verifica.sacar(valor);
        }

    }

    public depositar(numero:string, valor:number):void{
        let conta:Conta = this.consultarSaldo(numero);
        if(conta != null){
            conta.depositar(valor)
        }
    }

    public transferir(numeroCredito:string,numeroDebito:string, valor:number):void{
        let a:Conta = this.consultarSaldo(numeroDebito);
        let b:Conta = this.consultarSaldo(numeroCredito);
        
        a.transferencia(b,valor);
    }

    public qtdContas(): number{
        return this.contas.length
    }

    public depositoTotal():number{
        let a:number = 0;
        if(this.qtdContas() != 0){
            let saldo:number[] = this.contas.map((c) => c.consultarSaldo())
            a = saldo.reduce((anterior, valoratual) => anterior += valoratual);
        }
        return a;
    }

    public MediaSaldo(): number{
        let media:number = this.depositoTotal()/this.qtdContas()
        return media;
    }
    renderJuros(numero:string){
        let i = this.verificContas(numero);
        if(i != 0){
            if (this.contas[i] instanceof Banco) {
                (<Poupanca>this.contas[i]).renderJuros()
                
            }
        }
        
    }

}