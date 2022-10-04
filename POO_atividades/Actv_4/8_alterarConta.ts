class Conta {
    numero: string;
    saldo: number;
    constructor(numero: string, saldo: number){
        this.numero = numero;
        this.saldo = saldo;

    }

    sacar(valor:number){
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

    consultarSaldo(){
   
        return this.saldo;

    }
  
    transferencia(contaDestinada: Conta, valor:number){
        if(this.sacar(valor) == false){
            contaDestinada.depositar(valor)
            
        }else{
            return false;
        }
    }

   
}

let c1 = new Conta("1", 100);
console.log(c1.sacar(50))
console.log(c1.depositar(50))

let c2 = new Conta("2", 100);
console.log(c1.transferencia(c2,35))