import { isString } from "@vue/shared";
import {  AlunoNaoEncontradoError, AlunoJaCadastradoError, id_userError } from "./excecoes";

class User {
    private nome: string;
    private id_user: string;
    public login: string;
    public senha: string;


    constructor(nome: string, id_user: string, login: string, senha: string) {
        this.id_user = id_user;
        this.login = login;
        this.nome = nome;
        this.senha = senha;

    }

    public get idUser():string{
        return this.id_user;
    }
    public get nameUser():string{
        return this.nome;
    }    
}


interface IRepositoriaid_users{
    inserir(aluno: Aluno): void;
    consultar(id_user: String): Aluno
    alterar(estudante: Aluno): void;
    excluir(idUser:string, posicao:number): void;
}


interface INotasDeAlunos{
    consultarNota(aluno:Aluno):void;
    alterarNotaAluno(aluno:Aluno):void;
}

class Professor extends User implements INotasDeAlunos{
    private cod_prof: string;
    public nomeMateria: number;
    
    constructor(cod_prof:string, nomeMateria:number, nome: string, id_user: string, login: string, senha: string){
        super(nome,id_user,login,senha);
        this.cod_prof = cod_prof;
        this.nomeMateria = nomeMateria;
    }

    public get codProfessor():string{
        return this.cod_prof;
    }

    consultarNota(aluno:Aluno):void{
        aluno.nota
    }

    alterarNotaAluno(aluno:Aluno):void{
        this.consultarNota(aluno);
    }
}


class Aluno extends User {    
    public nota: number;
    public turma: string;

    constructor( nota: number, turma: string, nome: string, id_user: string, login: string, senha: string) {
        super(nome, id_user, login, senha);
        this.nota = nota;
        this.turma = turma;
    }

    EhValido(aluno:Aluno):boolean{
        if (!isString(aluno.idUser)){ 
            throw new id_userError("id_user Invalida: " + aluno.idUser);
        }

        return true;
    }


    consultarNota(aluno:Aluno):number{
        if(this.EhValido(aluno)){
            return aluno.nota;
        }else{
            return 0;
        }
    }
}


class Diretor extends User implements IRepositoriaid_users{
    turma: Aluno[] = [];

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
            if(e instanceof AlunoNaoEncontradoError){
                throw e;
            }
            this.turma.push(aluno);
        }
    }


    consultarPorIndice(id_user: string): number {
        let indiceIdProcurado: number = -1;
        for(let i = 0; i < this.turma.length; i++){
            if(this.turma[i].idUser == id_user){
                indiceIdProcurado = i;
            }
        }
        if(indiceIdProcurado = -1){
            throw new id_userError("Id do usuario não encontrado!" );
        }
        return indiceIdProcurado;
    }

    alterar(estudante: Aluno): void {
        let indice: number = this.consultarPorIndice(estudante.idUser);
        this.turma[indice] = estudante;
    } 

    excluir(idUser:string, posicao:number): void{
        let indiceUser:number = this.consultarPorIndice(idUser);
        this.turma.splice(indiceUser, posicao);
    }
    /* alterar(estudante:Aluno,nota: number ): void {
        let indice: number = this.consultarPorIndice(estudante.id_user);
        estudante.nota[indice] = nota
    }
 */

}











 

/* class Turma extends Aluno {
    alunos: Aluno[] = []


    
    EhValido(id_user:number): number {
        let id_userProcurada!: number
        for (let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].id_user == id_user) {
                id_userProcurada = this.id_user
            }
        }
        if (!id_userProcurada) {
            throw new id_userNaoEncontradaError("id_user não encontrada!")
        }
        
        return id_userProcurada
    }
    
    
    consultarNota(id_user): void {
        if (this.EhValido(id_user)) {
            console.log(this.nota)

        } else {
            throw new id_userError("id_user invalida!")
        }

    }

} */