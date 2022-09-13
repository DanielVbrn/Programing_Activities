/* (7).Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.
Resposta: */
    class Retangulo {
        l1: number = 0;
        l2: number = 0;
        calcularArea(): number {
            return this.l1 * this.l2;
        }

        calcularPerimetro():number{
            return ( 2 * (this.l1 + this.l2) ) 
        }
        
    }

function Ret(){
    let retang = new Retangulo()
    retang.l1 = 5
    retang.l2 = 8

    let area_RET: number = retang.calcularArea()
    let perimetro_RET: number = retang.calcularPerimetro()

    console.log(area_RET)
    console.log(perimetro_RET)

}
Ret()