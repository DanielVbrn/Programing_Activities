export class Calculadora2{
    private operando1: number;
    private operando2: number;
    constructor (operando1: number,operando2: number) {
        this.operando1 = operando1;
        this.operando2 = operando2;

    }
    get oper1(){
        return this.operando1;
    }
    get oper2(){
        return this.operando2;
    }
    soma():number{
        return this.operando1 + this.operando2;
    }

}

let testarCalculo = (): void => {
    let numbers = new Calculadora2(4,6);
    console.log(numbers.soma());
}
testarCalculo();