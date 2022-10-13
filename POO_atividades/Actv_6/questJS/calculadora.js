"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
    multiplica() {
        return this.operando1 * this.operando2;
    }
}
let valuesCalculater = () => {
    let teste = new Calculadora(3, 5);
    console.log(teste.soma());
    console.log(teste.multiplica());
};
valuesCalculater();
