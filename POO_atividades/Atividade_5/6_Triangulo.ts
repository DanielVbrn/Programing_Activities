class Triangulo{
    a:number;
    b:number;
    c:number;
    constructor(a:number,b:number, c:number){
        this.a = a;
        this.b = b;
        this.c = c;

    }
    ladosTrinagulo():boolean{
       return ((this.b-this.c) < this.a && this.a < (this.b+this.c))
           
        
    }

    ehIsoceles():boolean{
        
        return(this.a == this.b && this.b != this.c)
        
    }
    ehEquilatero():boolean{
        
        return (this.a == this.b && this.b == this.c)
    }
    ehEscaleno():boolean{
        
        return (this.a != this.b && this.b != this.c && this.a != this.c)
        
    }
}



let lados = new Triangulo(10,30, 40);
console.log(lados.ehEquilatero());
console.log(lados.ehIsoceles());
console.log(lados.ehEscaleno());
console.log("///////////////");