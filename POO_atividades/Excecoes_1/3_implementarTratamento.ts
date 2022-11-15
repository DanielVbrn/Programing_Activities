class ContaSaque {
    saldo:number;
    constructor(saldo:number){
        this.saldo = saldo;

    }

    sacar (valor: number): void {
        if (this.saldo >= valor){
            this.saldo = this.saldo - valor;
        }else{
            console.log("Saldo insuficiente.");
        }
    }    
}


let conta:ContaSaque = new ContaSaque(1000);
conta.sacar(100000);

