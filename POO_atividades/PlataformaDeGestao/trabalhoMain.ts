import { isString } from "@vue/shared";
import {  AlunoNaoEncontradoError, AlunoJaCadastradoError,ProfessorJaCadastradoErrror, id_userError,NotaJaCadastradaError,AlunoSemNota } from "./excecoes";

export class User {
    private nome: string;
    private id_user: string;
    
    constructor(nome: string,  id_user: string, ) {
        this.id_user = id_user;
        this.nome = nome;
        
    }

    public get idUser():string{
        return this.idUser;
    }
    public get nameUser():string{
        return this.nome;
    }    
}



interface IRepositoriaid_users{
    inserir(usuario: User): void;
    consultar(id_user: String): Aluno
    alterar(estudante: Aluno): void;
    excluir(idUser:string, posicao:number): void;
}

interface IRepositoriode_Notas{
    inserirNota(idAluno: string, nota: number): void;
    alterarNota(idAluno:string, newNota:number): void;
    excluirNota(aluno: Aluno): void;
}

/* interface INotasDeAlunos{
    consultarNota(aluno:Aluno):void;
    alterarNotaAluno(aluno:Aluno,novaNota:number):void;
}
 */

interface IAtividade{
    addAtividades(nomeAtividade:string):void;
    /* alterarNotaAluno(aluno:Aluno,novaNota:number):void; */
}
export class Professor  extends User  implements IAtividade,IRepositoriode_Notas{
    /* CONSULTAR NOTA TEM Q MUDAR SEUS ATRIBUTOS,TENDO EM VISTA QUE NO "APP" PARA ACESSAR ESSE METODO EU PRECISARIA DE UM ALUNO DO TIPO ALUNO E PARA ISSO EU DEVERIA PERGUNTAR QUAL A NOTA DELE(NÃO TENHO CERTEZA SE SERÁ ASSIM MESMO Q FAZ) 
    
    ACHO QUE SERIA UMA BOA DEIXAR DE UTILIZAR O TIPO "ALUNO" E BUSCAR FORMAS DE USAR APENAS O "TIPO" USER OU USAR OS ATRIBUTOS QUE PROF POSSUI*/
    alunos: Aluno[] = [];
    atividade:string[] = [];
    
    private cod_prof: string;
    public codMateria: string;
    
    constructor(cod_prof:string, codMateria:string, nome: string, id_user: string){
        super(nome,id_user);
        this.cod_prof = cod_prof;
        this.codMateria = codMateria;
    }

    public get codProfessor():string{
        return this.cod_prof;
    } 
    
    inserirNota(idAluno: string, nota: number): void {
        for (let i = 0; i < this.alunos.length; i++) {
            if(this.alunos[i].idUser == idAluno){
                if(this.alunos[i].notas == null){
                    this.alunos[i].notas[i] = nota
                } else {
                    throw new NotaJaCadastradaError("Aluno já possui nota");
                }   
            }else{
                throw new AlunoNaoEncontradoError("Aluno não consta no sistema...");
            }
        }
    }


    alterarNota(id_Aluno:string, newNota:number): void{};
    excluirNota(id_Aluno): void{};



    /* consultarNota(aluno:Aluno):number{
        return aluno.nota
    } */

    /* alterarNotaAluno(aluno:Aluno,novaNota:number):void{
        aluno.nota = novaNota;
    }
    */
   
   
   addAtividades(nomeAtividade:string) {
       this.atividade.push(nomeAtividade); 
    }
    
    /* SERIA BOM CRIAR UM METODO VIZUALIZAR ATIVIDADES */

    
}


export class Aluno extends User {    
    notas: number[] = [];
   /*  public turma: string; */
    constructor(nome: string, id_user: string) {
        super(nome, id_user);

    } 

    EhValido(id_user:string):boolean{
        if (!isString(id_user)){ 
            throw new id_userError("id_user Invalida: " + id_user);
        }

        return true;
    }


    // consultarNota(professor:Professor):number{
        
    // }

}


export class Diretor  /* extends User <-- Não é necessario*/  implements IRepositoriaid_users{
    turma: Aluno[] = [];
    professores: Professor[] = []

    consultar(id_user: string): Aluno {
        let id_userProcurada!: Aluno;
        for (let i of this.turma) {
            if (i.idUser == id_user) {
                id_userProcurada = i;
            }
        }
        if (!id_userProcurada) {
           throw new AlunoNaoEncontradoError("Aluno não encontrado!");
        }
        
        return id_userProcurada;
    }



    inserir(aluno:Aluno): void {
        try {
            this.consultar(aluno.idUser);
            throw new AlunoJaCadastradoError("Aluno já cadastrado!");

        } catch(e:any) {
            if(e instanceof AlunoJaCadastradoError){
                throw e;
            }
            this.turma.push(aluno);
        }
    }

    addProfessor(prof:Professor):void{
        try {
            this.consultar(prof.idUser);
            throw new ProfessorJaCadastradoErrror("Professor já cadastrado!");

        } catch(e:any) {
            if(e instanceof ProfessorJaCadastradoErrror){
                throw e;
            }
            this.professores.push(prof);
        }


    }


    consultarPorIndice(id_user: string): number {
        let indiceIdProcurado: number = -1;
        for(let i = 0; i < this.turma.length; i++){
            if(this.turma[i].idUser == id_user){
                indiceIdProcurado = i;
            }
        }
        if(indiceIdProcurado == -1){
            throw new id_userError("Id do usuario não encontrado!" );
        }
        return indiceIdProcurado;
    }

    alterar(estudante: Aluno): void {
        let indice: number = this.consultarPorIndice(estudante.idUser);
        this.turma[indice] = estudante;
    } 



    excluir(id_user: string): void {
        let indice: number = this.consultarPorIndice(id_user);
        for (var i = indice; i < this.turma.length; i++) {
            this.turma[i] = this.turma[i + 1];
        }
        this.turma.pop();
    }
    
/* APARENTEMENTE DIRETOR ESTÁ OK! */
}

let usuario1:User = new User("Daniel", "004");
let usuario2:User = new User("Marcos", "044");

let Aluno1:Aluno = new Aluno("Jorge", "044");
let Aluno2:Aluno = new Aluno("Davi", "002");
let Aluno3:Aluno = new Aluno("Marcos", "039");

let Prof1:Professor = new Professor('01','034',"João", "044");
let Prof2:Professor = new Professor('08', '035',"Miguel", "002");




let direcao:Diretor = new Diretor();
direcao.inserir(Aluno1);
direcao.inserir(Aluno2);
direcao.inserir(Aluno3);
direcao.addProfessor(Prof1);
direcao.addProfessor(Prof2);
console.table(direcao.turma);

Prof1.inserirNota('044',10);
Prof1.inserirNota('002',8);
Prof1.inserirNota('039',7);
Prof2.inserirNota('044',8);
Prof2.inserirNota('002',9);
Prof2.inserirNota('039',7);

console.table(direcao.professores);
