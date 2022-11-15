import { Quadrado, Retangulo, Triangulo } from "./8_Imcomparavel";

class TestarComparavel{
    quadrado:Quadrado = new Quadrado(4, 4);
    retangulo:Retangulo = new Retangulo(4, 6);
    triangulo:Triangulo = new Triangulo(4, 2, 5, 5);
    
    comparacao_Triangulo_X_Quadrado():void{
        console.log(this.triangulo.comparar(this.quadrado));
    }
    comparacao_Retangulo_X_Quadrado():void{
        console.log(this.retangulo.comparar(this.quadrado));
    }
    comparacao_Triangulo_X_Retangulo():void{
        console.log(this.triangulo.comparar(this.retangulo));
    }
}

function testarComparacoes(){
    let teste:TestarComparavel = new TestarComparavel();
    teste.comparacao_Retangulo_X_Quadrado();
    teste.comparacao_Triangulo_X_Quadrado();
    teste.comparacao_Triangulo_X_Retangulo();
}

testarComparacoes();