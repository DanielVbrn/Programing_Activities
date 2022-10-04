class Saudacoes{
    texto:string;
    destinario:string;
    constructor( texto:string, destinario:string){
        this.texto = texto;
        this.destinario =destinario;
    }
    obterSaudacao(){
        return `${this.texto} ${this.destinario}`
    }

}


let a =   new Saudacoes("Bom dia", "João");
console.log(a.obterSaudacao());
