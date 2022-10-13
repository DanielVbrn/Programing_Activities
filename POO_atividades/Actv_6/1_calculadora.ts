class Calculadora{
    private operando1: number;
    private operando2: number;
    constructor(operando1:number, operando2:number){
        this.operando1 = operando1
        this.operando2 = operando2
    }

    public soma(){
        return this.operando1+this.operando2;
    }
    public multiplica(){
        return this.operando1*this.operando2;
    }

}

let valuesCalculater = () => {
    let teste = new Calculadora(3,5);
    console.log(teste.soma())
    console.log(teste.multiplica())
}
valuesCalculater()
