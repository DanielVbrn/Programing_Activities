class Postagem{
    id:number;
    texto:string;
    Curtidas:number;
    constructor(id:number, texto:string){
        this.id = id;
        this.texto = texto;
        this.Curtidas = 0;
    }
    curti():void{
        this.Curtidas++;
    }

    toString():string{
        return `id:${this.id}\nCurtidas: ${this.Curtidas} \ntexto: ${this.texto}`
    }

}

class Microblog{
    postagens: Array<Postagem>;

    constructor(){
        this.postagens = new Array<Postagem>;
    }
    incluirPostagens(...postagens:Array<Postagem>):void{
        this.postagens.push(...postagens);
    }

    excluirPostagem(idPostagem:number){
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == idPostagem) {
                this.postagens.splice(i, 1);
            }   
        }
    }
    postMaiscurtido(): Array<Postagem>{
        let post: Postagem = this.postagens.reduce((postAnt, postAtual) =>
        {  if(postAnt.Curtidas > postAtual.Curtidas)  {
             return  postAnt = postAtual
              
            }else{
                return postAnt = postAnt;
            }}
            )
            return [post]
    }

    curtir(idPostagem:number):void{
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == idPostagem) {
                this.postagens[i].curti();
            }            
        }
    }

    toString():string{
        let string:string = "";
        this.postagens.forEach((postagem) => string += postagem.toString());
        return string;
    }
}

let microblog:Microblog = new Microblog();

let blog1:Postagem = new Postagem(1, "como beber água...")
let blog2:Postagem = new Postagem(2, "o mistério da área 51...")
blog1.curti();
blog2.curti();
blog1.curti();
blog1.curti();

microblog.incluirPostagens(blog1,blog2);
microblog.incluirPostagens(new Postagem(3, "Como tomar banho sem se molhar"));



microblog.excluirPostagem(2)

console.log(`Post mais curtido: ${microblog.postMaiscurtido()}`)
console.log(`${microblog.toString()}`)
