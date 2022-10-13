export class Conta {
    private numero: string;
    private nomeTitular:string
    private saldo: number;
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

    get verificarNumero(){
        return this.numero;
    }
    get verificarNome(){
        return this.nomeTitular;
    }
    get verificarsaldo(){
        return this.saldo;
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
