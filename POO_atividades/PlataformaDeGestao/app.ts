import prompt from "prompt-sync"
import { Professor, Diretoria, User, Aluno } from "./trabalhoTeste"
import  * as exe  from  "./excecoes"
import * as fs from "fs"
let input = fs.readFileSync('BasedeDadosDoSistema.txt', "utf-8").split('\n')
const value = require('prompt-sync')({sigint: true});



// console.log(input)

let i = 0
// for (let dados of input) {    
//     dadosProf = dados.split('-');
// }
// console.log(professorUser);
let d:Diretoria = new Diretoria(); 
let p:Professor;
let a: Aluno;
// let a:Aluno;




let opcao:String = '';

function receberDadosProf(){
    

    
}


do{
    try{
        console.log('\n Bem vindo \n\n Digite sua categoria:');
        let opcao = value("Insira uma das opções de usuario(P-Professor, A-Aluno, D-Diretor): ")
            
        // opcao = value("Opção: ");
        switch(opcao)
        {
            case "P":
                CategoriaProf();
                break
                case "A":
                    CategoriaAluno();
                    break
                    case "D":
                        CategoriaDiretor();
                        break
                    }
    }catch(e:any){
        if(e instanceof exe.AplicacaoError){
            console.log(e.message)
        }/* else {
            console.log("Erro não esperado.");
        } */
    }
    value("Operação finalizada!")
} while (opcao != "0");


function CategoriaProf():void{ 
    let i
    let professor = input.filter((user) => user[i] === 'P');

    for(i = 0; i < d.professores.length; i++){
        professor = input.filter((user) => JSON.parse(professor) === d.professores[i]);
    }
    // p = new Professor(professorUser)

    let menu:string = ""
    menu += "1-ADICIONAR ATIVIDADE";
    menu += "2-ADICIONAR NOTA";
    menu += "2-ALTERAR NOTA";
    menu += "3-VIZUALIZAR ATIVIDADES";
    console.log(menu);
    let op: string = value("Digite sua opção: ").toLowerCase();
    if(op == "1"){
        let nomeAtiv = value("Digite o nome da atividade a ser inserida: ");
        p.addAtividades(nomeAtiv);
    
    }if(op == "2"){
        let nota:number[] = value("Digite a atual nota do aluno: ")
        let id = value("Digite o id do aluno: ");
        p.inserirNota(d,id,nota);
        /*  p.alterarNotaAluno(aluno, novaNota) <-PRECISA REVER*/
        
    }/* if(op == "3"){
        let novaNota:number = Number(value("Digite a nova nota do aluno:"));
        p.
    } */
}

function CategoriaAluno():void{
    console.log("Digite a opção desejada:")
    console.log("1-CONSULTAR NOTA");
    let op: string = value("Digite sua opção: ").toLowerCase();
    if(op == "1"){
        let id = value("Digite seu id: ")
        a.consultarnotas(d,id);
    }
    

}

function CategoriaDiretor():void{
    console.log("Digite a opção desejada(A,P): ")
    console.log("1-CONSULTAR \n 2- INSERIR ALUNO \n 3-EXCLUIR \n 4 -INSERIR PROFESSOR");
    let o:number = Number(value("Digite sua opção:"));
    if(o == 1){
        let id = value("Digite o id do usuario que vc gostaria de consultar: ")
        d.consultar(id)
        Exibir(id)
    }if(o == 2){
        let nota = Number(value("Digite a nota do aluno: "))
        let nome = value("Digite o nome do aluno: ")
        let id = value("Digite o id do aluno: ")
        let carga_horaria:number = Number(value("Digite a carga horária do aluno: "))
        let novo_aluno:Aluno = new Aluno(nome,id,carga_horaria);
        d.inserir(novo_aluno)
    }if(o == 3){
        let id = value("Digite o id do aluno: ")
        d.excluir(id)
    }if(o == 4){
        let nome = value("Digite o nome do professor: ")
        let id = value("Digite o id do professor: ")
        let cod_prof:string = value("Digite o codigo do professor")
        let carga_horaria:number = Number(value("Insira a carga horaria do professor:"));
        let novo_prof:Professor = new Professor(cod_prof,nome,id,carga_horaria);
        d.addProfessor(novo_prof)
}
}

function Exibir(id_user:string):void{
    console.log(` Id: ${d.consultar(id_user).idUser}\n Nome: ${d.consultar(id_user).nameUser }\n Nota:${d.consultar(id_user)} `)
}
