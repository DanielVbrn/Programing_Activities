export abstract class FiguraGeometrica{
    altura:number = 5;
    base:number = 10;

    abstract area():number;
    abstract perimetro():number;
    
}


export class Quadrado extends FiguraGeometrica{

    public area(): number {
        return this.base ** 2;
    }

    public perimetro(): number {
        return this.base * 4;
    }
}

export class Retangulo extends FiguraGeometrica{

    public area(): number {
        return this.base ** this.altura;
    }

    public perimetro(): number {
        return ((this.base * 2) + (this.altura * 2));
    }
}

export class Tringulo extends FiguraGeometrica{
    l1:number;
    l2:number;
    l3:number;
    public area(): number {
        return ((this.base * this.altura)/2);   
    }
    public perimetro(): number {
        return (this.l1 + this.l2 + this.l3);
    }

}


// let testeFiguras: FiguraGeometrica =new FiguraGeometrica()//ERRO!!
let functionQuadrado = (quadrado:Quadrado) => {
    quadrado = new Quadrado();
    console.log(quadrado.area);
}


