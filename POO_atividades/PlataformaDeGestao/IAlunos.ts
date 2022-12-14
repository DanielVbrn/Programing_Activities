import { Diretoria,Aluno } from "./trabalhoTeste";

export interface IAlunos{
    verificarAtividades():void;
    consultarnotas(direcao:Diretoria,idAluno:string): number[];
    verificarturma(direcao:Diretoria): Aluno[] ;
}