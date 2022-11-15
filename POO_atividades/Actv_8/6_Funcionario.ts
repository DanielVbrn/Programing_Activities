abstract class Funcionario{
    protected salario:number;
    constructor(salario:number){
        this.salario = salario;
    }
    abstract getBonificacao():number
}

class Gerente extends Funcionario{
    getBonificacao(): number {
        return this.salario * 0.4;
    }
}

class Diretor extends Funcionario{
    getBonificacao(): number {
        return this.salario * 0.6;
    }
}



class Presidente extends Funcionario{
    getBonificacao(): number {
        return this.salario + 1000.00;
    }
}