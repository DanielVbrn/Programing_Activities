import { Diretoria,Aluno } from "./trabalhoTeste";

export interface IAlunos{
    consultarnotas(direcao:Diretoria,idAluno:string): number[];
    verificarturma(direcao:Diretoria): Aluno[] ;
}