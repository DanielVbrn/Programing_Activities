
export interface Calcular{
    area():number;
    perimetro():number;

}


export class Quadrado implements Calcular{
    base:number;
    altura:number; 
    constructor(altura:number, base:number){
        this.base = base;
        this.altura = altura;
    }
    public area(): number{
        return this.base ** 2;
    }
    
    public perimetro(): number {
        return this.base * 4;
    }

  
}

export class Retangulo implements Calcular{
    base:number;
    altura:number; 
    constructor(altura:number, base:number){
        this.base = base;
        this.altura = altura;
    }
    
    public area(): number {
        return this.base * this.altura;
    }

    public perimetro(): number {
        return ((this.base * 2) + (this.altura * 2));
    }

  
}

export class Triangulo implements Calcular{
    base:number;
    altura:number; 
    l1:number;
    l2:number;
    l3:number;
    constructor(altura:number, base:number, l1:number,l2:number){
        this.base = base;
        this.altura = altura;
        this.l1 = l1
        this.l2 = l2
    }
    public area(): number {
        return ((this.base * this.altura)/2);   
    }
    public perimetro(): number {
        return (this.l1 + this.l2 + this.base);
    }
}


// let testeFiguras: FiguraGeometrica =new FiguraGeometrica()//ERRO!!


export class TesteFiguras{
    quadrado:Quadrado = new Quadrado(10, 10);
    retangulo:Retangulo = new Retangulo(10, 20);
    triangulo:Triangulo = new Triangulo(10, 10, 13, 13);
    
    mostrarClassQuadrado(){
        console.log("Quadrado")
        console.log(this.quadrado.area());
        console.log(this.quadrado.perimetro());

    }
    mostrarClassRetangulo(){
        console.log("Retângulo")
        console.log(this.retangulo.area());
        console.log(this.retangulo.perimetro());

    }
    mostrarClassTriangulo(){
        console.log("Triângulo")
        console.log(this.triangulo.area());
        console.log(this.triangulo.perimetro());

    }

}

function mostrarCalculos(){
    let show:TesteFiguras = new TesteFiguras();
    show.mostrarClassQuadrado();
    show.mostrarClassRetangulo();
    show.mostrarClassTriangulo();
}
mostrarCalculos()
