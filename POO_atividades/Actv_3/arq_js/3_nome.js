"use strict";
class Pessoa {
    constructor(nome, Pnome) {
        this.nome = "John";
        this.Pnome = "Sena";
        this.nome = nome;
        this.Pnome = Pnome;
    }
    Pronome() {
        if (this.nome == "") {
            return "Vazio";
        }
        if (this.nome == "John" && this.Pnome == "Sena") {
            console.log(`${this.nome + this.Pnome}`);
        }
        if (this.nome == "John" && this.Pnome == "") {
            console.log(`Sr.${this.nome}`);
        }
    }
}
function readName() {
    let ler = new Pessoa("Marcos", "Alves");
    let stringName = ler.Pronome();
    console.log(`${stringName}`);
}
