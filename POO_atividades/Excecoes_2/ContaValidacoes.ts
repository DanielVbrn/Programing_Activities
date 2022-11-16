// import { Banco } from "./1_banco";

import { ValorInvalidoError } from "./4_valorinvalido";

export class Conta {
    private numero: string;
    private saldo: number;
    constructor(numero: string, saldo:number= 0){
        if(saldo < 0){
            throw new ValorInvalidoError("Valor inválido.")
        }
        this.numero = numero;
        this.saldo = saldo;
        
    }

    public sacar(valor:number):void{
        
        this.validarValor(valor)
        if(this.saldo < valor){
            throw new Error('Saldo insuficiente.');
        }
        this.saldo = this.saldo-valor;
        
    }
    
    
    
    public depositar(valor:number):void{
        this.validarValor(valor)
        this.saldo = this.saldo+valor;
    }

    get consultarSaldo():number{  
        return this.saldo;
    }
    get consultarNumero():string{  
        return this.numero;
    }


    transferencia(contaDestinada: Conta, valor:number){
        this.sacar(valor);
        contaDestinada.depositar(valor);
    }

    validarValor(valor:number){
        if(valor <= 0){
            throw new ValorInvalidoError("Valor negado.")
        }
    }

}
















// class Banco{
//     contas : Conta = [];
//     inserir(conta: Conta):void{
//         this.contas = conta
//     }
//     alterar(conta: Conta):void{}
//     excluir(numero: string):void{}

//     sacar(numero:string, valor:number):void{}
//     depositar(numero:string, valor:number):void{}
//     transferir(numeroOrigem:string,numeroDestino:string, valor:number):void{}

// }