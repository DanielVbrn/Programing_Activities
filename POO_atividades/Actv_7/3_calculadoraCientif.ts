import { Calculadora2 } from "./2_calculadora";


/* Foi necessário criar dois métodos que usam get para retornar os 
atributos privados da classe Calculadora2 */


class CalculadoraCientifica extends Calculadora2{
    exponenciar():number{
        return (this.oper1**(this.oper2))
    }


}

let testar_Calc_Cientifica = (): void => {
    let numbers = new CalculadoraCientifica(4,2);
    console.log(numbers.exponenciar());
}
testar_Calc_Cientifica();



