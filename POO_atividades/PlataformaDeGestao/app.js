"use strict";
exports.__esModule = true;
var trabalhoTeste_1 = require("./trabalhoTeste");
var exe = require("./excecoes");
var fs = require("fs");
var input = fs.readFileSync('BasedeDadosDoSistema.txt', "utf-8").split('\n');
var value = require('prompt-sync')({ sigint: true });
// console.log(input)
var i = 0;
// for (let dados of input) {    
//     dadosProf = dados.split('-');
// }
// console.log(professorUser);
var d = new trabalhoTeste_1.Diretoria();
var p;
var a;
// let a:Aluno;
var opcao = '';
function receberDadosProf() {
}
do {
    try {
        console.log('\n Bem vindo \n\n Digite sua categoria:');
        var opcao_1 = value("Insira uma das opções de usuario(P-Professor, A-Aluno, D-Diretor): ");
        // opcao = value("Opção: ");
        switch (opcao_1) {
            case "P":
                CategoriaProf();
                break;
            case "A":
                CategoriaAluno();
                break;
            case "D":
                CategoriaDiretor();
                break;
        }
    }
    catch (e) {
        if (e instanceof exe.AplicacaoError) {
            console.log(e.message);
        } /* else {
            console.log("Erro não esperado.");
        } */
    }
    value("Operação finalizada!");
} while (opcao != "0");
function CategoriaProf() {
    var i;
    var professor = input.filter(function (user) { return user[i] === 'P'; });
    for (i = 0; i < d.professores.length; i++) {
        professor = input.filter(function (user) { return JSON.parse(professor) === d.professores[i]; });
    }
    // p = new Professor(professorUser)
    var menu = "";
    menu += "1-ADICIONAR ATIVIDADE";
    menu += "2-ADICIONAR NOTA";
    menu += "2-ALTERAR NOTA";
    menu += "3-VIZUALIZAR ATIVIDADES";
    console.log(menu);
    var op = value("Digite sua opção: ").toLowerCase();
    if (op == "1") {
        var nomeAtiv = value("Digite o nome da atividade a ser inserida: ");
        p.addAtividades(nomeAtiv);
    }
    if (op == "2") {
        var nota = value("Digite a atual nota do aluno: ");
        var id = value("Digite o id do aluno: ");
        p.inserirNota(d, id, nota);
        /*  p.alterarNotaAluno(aluno, novaNota) <-PRECISA REVER*/
    } /* if(op == "3"){
        let novaNota:number = Number(value("Digite a nova nota do aluno:"));
        p.
    } */
}
function CategoriaAluno() {
    console.log("Digite a opção desejada:");
    console.log("1-CONSULTAR NOTA");
    var op = value("Digite sua opção: ").toLowerCase();
    if (op == "1") {
        var id = value("Digite seu id: ");
        a.consultarnotas(d, id);
    }
}
function CategoriaDiretor() {
    console.log("Digite a opção desejada(A,P): ");
    console.log("1-CONSULTAR \n 2- INSERIR ALUNO \n 3-EXCLUIR \n 4 -INSERIR PROFESSOR");
    var o = Number(value("Digite sua opção:"));
    if (o == 1) {
        var id = value("Digite o id do usuario que vc gostaria de consultar: ");
        d.consultar(id);
        Exibir(id);
    }
    if (o == 2) {
        var nota = Number(value("Digite a nota do aluno: "));
        var nome = value("Digite o nome do aluno: ");
        var id = value("Digite o id do aluno: ");
        var carga_horaria = Number(value("Digite a carga horária do aluno: "));
        var novo_aluno = new trabalhoTeste_1.Aluno(nome, id, carga_horaria);
        d.inserir(novo_aluno);
    }
    if (o == 3) {
        var id = value("Digite o id do aluno: ");
        d.excluir(id);
    }
    if (o == 4) {
        var nome = value("Digite o nome do professor: ");
        var id = value("Digite o id do professor: ");
        var cod_prof = value("Digite o codigo do professor");
        var carga_horaria = Number(value("Insira a carga horaria do professor:"));
        var novo_prof = new trabalhoTeste_1.Professor(cod_prof, nome, id, carga_horaria);
        d.addProfessor(novo_prof);
    }
}
function Exibir(id_user) {
    console.log(" Id: ".concat(d.consultar(id_user).idUser, "\n Nome: ").concat(d.consultar(id_user).nameUser, "\n Nota:").concat(d.consultar(id_user), " "));
}
