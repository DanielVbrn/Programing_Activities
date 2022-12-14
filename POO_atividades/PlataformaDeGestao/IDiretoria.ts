import { User,Aluno, Professor} from "./trabalhoTeste";

export interface IRepositoriaid_users{
    inserir(usuario: User): void;
    addProfessor(prof:Professor):void;
    consultar(id_user: String): User
    alterar(estudante: Aluno): void;
    excluir(idUser:string, posicao:number): void;
} 