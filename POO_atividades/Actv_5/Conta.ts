// import { Banco } from "./1_banco";

export class Conta {
    private numero: string;
    nomeTitular:string
    private saldo: number = 500;
    constructor(numero: string, nomeTitular: string, saldo:number= 0){
        this.numero = numero;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;

        try {
            if(saldo < 0){
                throw new Error("Saldo negativo");  
            }
        } catch (a:any) {
            console.log(saldo)
        }
        
    }

    sacar(valor:number):boolean{
        try {
            if(valor < 0){
                throw new Error("Saldo negativo");  
            }
        } catch (a:any) {
            console.log(valor)
        }
        if(this.consultarSaldo < valor) {
            return false;
        }else{
            this.saldo = this.saldo-valor;
            return true;
        }
    }
    
    
    
    depositar(valor:number):void{
        try {
            if(valor < 0){
                throw new Error("Saldo negativo");  
            }
        } catch (a:any) {
            console.log(this.consultarSaldo)
        }
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