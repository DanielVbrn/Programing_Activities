

export abstract class FiguraGeometrica{
    altura:number = 5;
    base:number = 10;
    constructor(altura:number, base:number){
        this.altura = altura;
        this.base = base;
    }
    abstract area():number;
    abstract perimetro():number;
    
}

interface Comparavel{
    comparar(formaGeometrica:FiguraGeometrica):number;
}

export interface Calcular{
    area():number;
    perimetro():number;

}


export class Quadrado extends FiguraGeometrica implements Comparavel{
    base:number;
    altura:number; 
    constructor(altura:number, base:number){
       super(altura,base)
    }
    public area(): number{
        return this.base ** 2;
    }
    
    public perimetro(): number {
        return this.base * 4;
    }

    comparar(formaGeometrica: FiguraGeometrica): number {
        let num:number = 0;
        if(formaGeometrica.area > this.area){
            num = -1
        }else if(formaGeometrica.area < this.area){
            num = 1;
        } 
    

        return num;
    }
}

export class Retangulo extends FiguraGeometrica implements Comparavel{
    base:number;
    altura:number; 
    constructor(altura:number, base:number){
        super(altura, base);
    }
    
    public area(): number {
        return this.base * this.altura;
    }

    public perimetro(): number {
        return ((this.base * 2) + (this.altura * 2));
    }

    comparar(formaGeometrica: FiguraGeometrica): number {
        let num:number = 0;
        if(formaGeometrica.area > this.area){
            num = -1
        }else if(formaGeometrica.area < this.area){
            num = 1;
        } 
    

        return num;
    }
}

export class Triangulo extends FiguraGeometrica implements Comparavel{
    base:number;
    altura:number; 
    l1:number;
    l2:number;
    l3:number;
    constructor(altura:number, base:number, l1:number,l2:number){
       super(altura,base);
       this.l1 = l1;
       this.l2 = l2;
    }
    public area(): number {
        return ((this.base * this.altura)/2);   
    }
    public perimetro(): number {
        return (this.l1 + this.l2 + this.base);
    }

    comparar(formaGeometrica: FiguraGeometrica): number {
        let num:number = 0;
        if(formaGeometrica.area > this.area){
            num = -1
        }else if(formaGeometrica.area < this.area){
            num = 1;
        } 
    

        return num;
    }

}

