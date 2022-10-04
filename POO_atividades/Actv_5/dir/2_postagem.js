"use strict";
class Postagem {
    constructor(id, texto) {
        this.id = id;
        this.texto = texto;
        this.Curtidas = 0;
    }
    curti() {
        this.Curtidas++;
    }
    toString() {
        return `id:${this.id}\nCurtidas: ${this.Curtidas} \ntexto: ${this.texto}`;
    }
}
class Microblog {
    constructor() {
        this.postagens = new Array;
    }
    incluirPostagens(...postagens) {
        this.postagens.push(...postagens);
    }
    excluirPostagem(idPostagem) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == idPostagem) {
                this.postagens.splice(i, 1);
            }
        }
    }
    postMaiscurtido() {
        let post = this.postagens.reduce((postAnt, postAtual) => {
            if (postAnt.Curtidas > postAtual.Curtidas) {
                return postAnt = postAtual;
            }
            else {
                return postAnt = postAnt;
            }
        });
        return [post];
    }
    curtir(idPostagem) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == idPostagem) {
                this.postagens[i].curti();
            }
        }
    }
    toString() {
        let string = "";
        this.postagens.forEach((postagem) => string += postagem.toString());
        return string;
    }
}
let microblog = new Microblog();
let blog1 = new Postagem(1, "como beber água...");
let blog2 = new Postagem(2, "o mistério da área 51...");
blog1.curti();
blog2.curti();
blog1.curti();
blog1.curti();
microblog.incluirPostagens(blog1, blog2);
microblog.incluirPostagens(new Postagem(3, "Como tomar banho sem se molhar"));
microblog.excluirPostagem(2);
console.log(`Post mais curtido: ${microblog.postMaiscurtido()}`);
console.log(`${microblog.toString()}`);
