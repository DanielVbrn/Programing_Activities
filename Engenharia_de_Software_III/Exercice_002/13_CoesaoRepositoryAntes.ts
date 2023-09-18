//Coesão Funcional

import { Conta } from "./Conta";

export class Banco{
    contas : Array<Conta> = [];
    constructor (contas: Array<Conta> = []){
        this.contas = contas;
    }
    inserir(conta: Conta):void{
        if(this.verificContas(conta.consultarNumero) == 0){
            this.contas.push(conta);
        }
    }

    verificContas(num:String):number{
        let a: number = 0;
        for (let i:number = 1; i <= this.contas.length; i++) {
            if(this.contas[i].consultarNumero == num){
                a = i;
                break
            }
        }
        return a;
    }

    consultarSaldo(num:String): Conta{
        let contaP!: Conta;
        for (const i of this.contas) {
            if(i.consultarNumero == num){
                contaP = i;
                break
            }
        }
        return contaP;
    }

    alterar(conta: Conta):void{
        let o = this.verificContas(conta.consultarNumero)
        if (o != 0) {
            this.contas[o] = conta;
        }
    }


    excluir(numero: String): void {
        let indice: number = this.verificContas(numero);

        this.contas.splice(indice, 1);
    }

    sacar(numeroCredito:string, valor:number){
        let verifica:Conta = this.consultarSaldo(numeroCredito);
        if(verifica != null){
            verifica.sacar(valor);
        }

    }

    depositar(numero:string, valor:number):void{
        let conta:Conta = this.consultarSaldo(numero);
        if(conta != null){
            conta.depositar(valor)
        }
    }

    public transferir(numeroCredito:string,numeroDebito:string, valor:number):void{
        let a:Conta = this.consultarSaldo(numeroDebito);
        let b:Conta = this.consultarSaldo(numeroCredito);
        if(a.consultarSaldo < valor){
            console.log("Saldo insuficiente para a transferência!")
        }
        a.transferencia(b,valor);
    }

    qtdContas(): number{
        return this.contas.length
    }

    depositoTotal():number{
        let a:number = 0;
        if(this.qtdContas() != 0){
            let saldo:number[] = this.contas.map((c) => c.consultarSaldo)
            a = saldo.reduce((anterior, valoratual) => anterior += valoratual);
        }
        return a;
    }

    MediaSaldo(): number{
        let media:number = this.depositoTotal()/this.qtdContas()
        return media;
    }

}

