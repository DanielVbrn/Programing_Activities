"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var trabalhoTeste_1 = require("./trabalhoTeste");
var exe = require("./excecoes");
var input = (0, prompt_sync_1["default"])();
var t = new trabalhoTeste_1.Diretoria();
var p;
var a;
var opcao = '';
do {
    try {
        console.log('\n Bem vindo \n\n Digite sua categoria:');
        console.log('1-PROFESSOR\n 2-ALUNO\n 3-DIRETOR ');
        opcao = input("Opção: ");
        switch (opcao) {
            case "1":
                CategoriaProf();
                break;
            case "2":
                CategoriaAluno();
                break;
            case "3":
                CategoriaDiretor();
                break;
        }
    }
    catch (e) {
        if (e instanceof exe.AplicacaoError) {
            console.log(e.message);
        }
        else {
            console.log("Erro não esperado.");
        }
    }
    input("Operção finalizada!");
} while (opcao != "0");
function CategoriaProf() {
    console.log("Digite a opção desejada:");
    console.log("1-ADICIONAR ATIVIDADE \n 2-ALTERAR NOTA \n 3-VIZUALIZAR ATIVIDADES");
    var op = input("Digite sua opção: ").toLowerCase();
    if (op == "1") {
        var nomeAtiv = input("Digite o nome da atividade a ser inserida: ");
        var cod_professor = input("Insira o código do professor: ");
        p.addAtividades(nomeAtiv, cod_professor);
    }
    if (op == "2") {
        var nota = Number(input("Digite a atual nota do aluno: "));
        var nome = input("Digite o nome do aluno: ");
        var id = input("Digite o id do aluno: ");
        var aluno = new trabalhoTeste_1.Aluno(nome, id, 200);
        var novaNota = Number(input("Digite a nova nota do aluno:"));
        /*  p.alterarNotaAluno(aluno, novaNota) <-PRECISA REVER*/
    }
    if (op == "3") {
        /*---------------- FALTA VIZUALIZAR ATIVIDADES----------------- */
    }
}
function CategoriaAluno() {
    console.log("Digite a opção desejada:");
    console.log("1-CONSULTAR NOTA");
    var op = input("Digite sua opção: ").toLowerCase();
    if (op == "1") {
        var id = input("Digite seu id: ");
        var nome = input("Digite seu nome: ");
        /* a.consultarNota() ,-PRECISA REVER*/
    }
}
function CategoriaDiretor() {
    console.log("Digite a opção desejada:");
    console.log("1-CONSULTAR \n 2- INSERIR ALUNO \n 3-EXCLUIR ");
    var o = Number(input("Digite sua opção:"));
    if (o == 1) {
        var id = input("Digite o id do usuario que vc gostaria de consultar: ");
        t.consultar(id);
        Exibir(id);
    }
    if (o == 2) {
        var nota = Number(input("Digite a nota do aluno: "));
        var nome = input("Digite o nome do aluno: ");
        var id = input("Digite o id do aluno: ");
        var carga_horaria = Number(input("Digite a carga horária do aluno: "));
        var novo_aluno = new trabalhoTeste_1.Aluno(nome, id, carga_horaria);
        t.inserir(novo_aluno);
    }
    if (o == 3) {
        var id = input("Digite o id do aluno: ");
        t.excluir(id);
    }
    if (o == 4) {
        var nome = input("Digite o nome do professor: ");
        var id = input("Digite o id do professor: ");
        var cod_prof = input("Digite o codigo do professor");
        var cod_mat = input("Digite o codigo da materia:");
        var novo_prof = new trabalhoTeste_1.Professor(cod_prof, cod_mat, nome, id);
        t.addProfessor(novo_prof);
    }
}
function Exibir(id_user) {
    console.log(" Id: ".concat(t.consultar(id_user).idUser, "\n Nome: ").concat(t.consultar(id_user).nameUser, "\n Nota:").concat(t.consultar(id_user), " "));
}
