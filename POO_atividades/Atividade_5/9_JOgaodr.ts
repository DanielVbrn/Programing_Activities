class Jogador{
    forca:number;
    nivel: number;
    pontosAtuais: number;
    constructor(forca:number, nivel: number, pontosAtuais: number){
        this.forca = forca;
        this. nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    calcularAtaque():number{
      return this.forca*this.nivel;
        
    }

    atacar(atacado:Jogador):void{
        if(atacado.estaVivo() == true){
            atacado.pontosAtuais -= this.calcularAtaque()
        }
    }

    estaVivo():boolean{
        if (this.pontosAtuais > 0) {
            return true;
        }else{
            return false;
        }
    }

    toString(){
        return `força: ${this.forca} \nnivel: ${this.nivel} \npontos: ${this.pontosAtuais}`
    }



}

let j1: Jogador =  new Jogador(40, 25, 100);
let j2: Jogador =  new Jogador(30, 20, 300);


console.log(j1.calcularAtaque())
console.log(j2.calcularAtaque())


j2.atacar(j1)
j2.atacar(j1)
j2.atacar(j1)
j2.atacar(j1)
j1.atacar(j2)
j1.atacar(j2)
j1.atacar(j2)

console.log(j1.estaVivo())
console.log(j2.estaVivo())



