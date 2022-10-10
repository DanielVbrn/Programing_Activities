
export class Conta {
    numero: string;
    nomeTitular:string
    saldo: number;
    constructor(numero: string, nomeTitular: string, saldo:number= 0){
        this.numero = numero;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }

    sacar(valor:number):boolean{
        if(this.saldo < valor) {
            return false;
        }else{
            this.saldo = this.saldo-valor;
            return true;
        }
    }

    depositar(valor:number):void{
        this.saldo = this.saldo+valor;
    }

    consultarSaldo():number{
   
        return this.saldo;

    }

    transferencia(contaDestinada: Conta, valor:number){
        this.sacar(valor);
        contaDestinada.depositar(valor)
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