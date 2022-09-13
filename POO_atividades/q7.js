"use strict";
/* (7).Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.
Resposta: */
class Retangulo {
    constructor() {
        this.l1 = 0;
        this.l2 = 0;
    }
    calcularArea() {
        return this.l1 * this.l2;
    }
    calcularPerimetro() {
        return (2 * (this.l1 + this.l2));
    }
}
function Area_retangulo() {
    let retang = new Retangulo();
    retang.l1 = 5;
    retang.l2 = 8;
    let area_RET = retang.calcularArea();
    let perimetro_RET = retang.calcularPerimetro();
    console.log(area_RET);
    console.log(perimetro_RET);
}
Area_retangulo();
