import prompt from "prompt-sync"
import { Aluno, Professor, Diretoria, User } from "./trabalhoTeste"
import  * as exe  from  "./excecoes"
import * as fs from "fs"
const input = fs.readFileSync("BasedeDadosDoSistema.txt", "utf-8")

let i = 0


let t:Diretoria = new Diretoria(); 
let p:Professor
let a:Aluno

let opcao: String = '';

do{
    try{
        console.log('\n Bem vindo \n\n Digite sua categoria:');
        console.log('1-PROFESSOR\n 2-ALUNO\n 3-DIRETOR ');
        
        opcao = input("Opção: ");
        switch(opcao)
        {
            case "1":
                CategoriaProf();
                break
            case "2":
                CategoriaAluno();
                break
            case "3":
                CategoriaDiretor();
                break
        }
    }catch(e:any){
        if(e instanceof exe.AplicacaoError){
            console.log(e.message)
        }else {
            console.log("Erro não esperado.");
        }
    }
    input("Operção finalizada!")
} while (opcao != "0");


function CategoriaProf():void{ 
    
    console.log("Digite a opção desejada:");
    let menu:string = ""
    menu += "1-ADICIONAR ATIVIDADE";
    menu += "1-ADICIONAR NOTA";
    menu += "2-ALTERAR NOTA";
    menu += "3-VIZUALIZAR ATIVIDADES";
    let op: string = input("Digite sua opção: ").toLowerCase();
    if(op == "1"){
        let nomeAtiv = input("Digite o nome da atividade a ser inserida: ");
        p.addAtividades(nomeAtiv);
    
    }if(op == "2"){
        let nota = Number(input("Digite a atual nota do aluno: "))
        let direcao:Diretoria = new Diretoria();
        let nome = input("Digite o nome do aluno: ");
        let id = input("Digite o id do aluno: ");
        let aluno:Aluno = new Aluno(nome,id,200);
        let novaNota = Number(input("Digite a nova nota do aluno:"))
        


       /*  p.alterarNotaAluno(aluno, novaNota) <-PRECISA REVER*/
        
    }if(op == "3"){
      /*---------------- FALTA VIZUALIZAR ATIVIDADES----------------- */
    }
}


function CategoriaAluno():void{
    console.log("Digite a opção desejada:")
    console.log("1-CONSULTAR NOTA");
    let op: string = input("Digite sua opção: ").toLowerCase();
    if(op == "1"){
        let id = input("Digite seu id: ")
        let nome = input("Digite seu nome: ")
        /* a.consultarNota() ,-PRECISA REVER*/
    }
    

}

function CategoriaDiretor():void{
    console.log("Digite a opção desejada:")
    console.log("1-CONSULTAR \n 2- INSERIR ALUNO \n 3-EXCLUIR \n 4 - PROFESSOR");
    let o:number = Number(input("Digite sua opção:"));
    if(o == 1){
        let id = input("Digite o id do usuario que vc gostaria de consultar: ")
        t.consultar(id)
        Exibir(id)
    }if(o == 2){
        let nota = Number(input("Digite a nota do aluno: "))
        let nome = input("Digite o nome do aluno: ")
        let id = input("Digite o id do aluno: ")
        let carga_horaria:number = Number(input("Digite a carga horária do aluno: "))
        let novo_aluno:Aluno = new Aluno(nome,id,carga_horaria);
        t.inserir(novo_aluno)
    }if(o == 3){
        let id = input("Digite o id do aluno: ")
        t.excluir(id)
    }if(o == 4){
        let nome = input("Digite o nome do professor: ")
        let id = input("Digite o id do professor: ")
        let cod_prof:string = input("Digite o codigo do professor")
        let carga_horaria:number = Number(input("Insira a carga horaria do professor:"));
        let novo_prof:Professor = new Professor(cod_prof,nome,id,carga_horaria);
        t.addProfessor(novo_prof)
}
}

function Exibir(id_user:string):void{
    console.log(` Id: ${t.consultar(id_user).idUser}\n Nome: ${t.consultar(id_user).nameUser }\n Nota:${t.consultar(id_user)} `)
}
