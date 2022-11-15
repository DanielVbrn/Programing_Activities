export abstract class Conta{
    protected nome:string;
    protected saldo:number;

    abstract get getNome():string;
    abstract get getSaldo():number;

    abstract set setNome(nome:string);
    abstract set setSaldo(saldo:number);

}

export interface Tributavel{
    calculaTributos():number;
}

export class ContaCorrente extends Conta implements Tributavel{
    get getNome():string{
        return this.nome;
    };

    get getSaldo():number{
        return this.saldo;
    }

    set setNome(nome:string){
        this.nome = nome
    }

    set setSaldo(saldo:number){
        this.saldo = saldo;
    }

    calculaTributos():number{
        return this.getSaldo * 0.1;
    }
}

export class SeguroDeVida implements Tributavel{
    calculaTributos(): number {
        return 50.00;
    }
}

let testeConta = ()=> {
    let contaCorrente:ContaCorrente = new ContaCorrente();
    contaCorrente.setNome = "Conta_A";
    contaCorrente.setSaldo = 800;
    console.log(`Nome: ${contaCorrente.getNome} \nSaldo: ${contaCorrente.getSaldo}`)
}

testeConta()