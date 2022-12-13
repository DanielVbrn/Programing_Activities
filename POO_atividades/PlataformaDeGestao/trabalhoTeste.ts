import { isString } from "@vue/shared";
import {  AlunoNaoEncontradoError, AlunoJaCadastradoError,ProfessorJaCadastradoErrror, id_userError,ValorInvalidoError,HorarioInvalidoError,AtividadeJaCadastradaError,AtividadeNaoEncontradaError,codProfessorError } from "./excecoes";
import { IAlunos } from "./IAlunos";
import { IRepositoriaid_users } from "./IDiretoria";


export class User {
    private nome: string;
    public id_user: string;
    public carga_horaria_min: number;
    public atividades:string[] = [];
    private alunos:Aluno[] = [];
    private professores: Professor[] = [];
    private notas:number[] = [];
    
    // constructor(nome: string,  id_user: string) {
    //     this.id_user = id_user;
    //     this.nome = nome;
    //     this.carga_horaria_min = 0;
        
    // }

    // public get idUser():string{
    //     return this.id_user;
    // }
    public get nameUser():string{
        return this.nome;
    }  
    public get Notas():number[]{
        return this.notas;
    }  
    
    public set Professores(a:any){
        a = this.professores;
    }

    public set Alunos(a:any){
        a = this.alunos;
    }
    TempoDePermanencia(horario_entrada:number,horario_saida:number):number{
        this.validarValor(horario_entrada);
        this.validarValor(horario_saida);
        this.VerificarHorario(horario_entrada,horario_saida)
        let total = horario_saida - horario_entrada
        this.carga_horaria_min = total
        return total
    }

    qttAulasDia(horario_entrada:number,horario_saida:number):void{
        this.validarValor(horario_entrada);
        this.validarValor(horario_saida);
        this.VerificarHorario(horario_entrada,horario_saida)
        let total = horario_saida - horario_entrada
        this.carga_horaria_min = total/60
    }


    private validarValor(valor: number): boolean {
        if (isNaN(valor) || valor <= 0) {
            throw new ValorInvalidoError("Valor inválido: + " + valor);
        }

        return true;
    }

    private VerificarHorario(horario_entrada:number,horario_saida:number){
        if(horario_entrada>horario_saida){
            throw new HorarioInvalidoError("Horario entrada maior que horario saída")
        }
    }
    
}


export class Aluno extends User implements IAlunos{  
    cod_aluno:string  
    constructor(nome: string, id_user: string,carga_horaria_min:number) {
        super();
        carga_horaria_min = 0;
    } 

    private EhValido(id_user:string):boolean{
        if (!isString(id_user)){ 
        throw new id_userError("id_user Invalida: " + id_user);
    }

        return true;
    }

    verificarNotas(id_aluno: string): number {
        for (let i = 0; i < this.Alunos.length; i++) {
            if (this.Alunos[i].id_user == id_aluno) {
                return this.Alunos[i].notas[i];
            }
            
        }
        return 0;
    }

    verificarAtividades():void{
        for (let i = 0; this.atividades.length; i++) {
            console.log(this.atividades[i]);
        }
    }

    public FrequenciadeAulas(qttAulasDiaria:number):number{
        let minutosTotais = qttAulasDiaria *60;
        let qttAulasAssistidas = minutosTotais - this.carga_horaria_min;
        let qttfaltas = qttAulasAssistidas/60;
        return Math.ceil(qttfaltas);
        
    }

}


export class Professor extends User{
    private cod_prof: string;
    
    constructor(cod_prof:string,  nome: string, id_user: string, carga_horaria_min: number){
        super();
        this.cod_prof = cod_prof;
        this.Alunos = [];
        carga_horaria_min = 0;
    }

    inserirNota(id_aluno:string, nota:number[]):void{
        for (let i = 0; i < this.Alunos.length; i++) {
            if(this.Alunos[i].id_user = id_aluno){

                this.Alunos[i].notas[i] = nota[i];
            }
            
        }
    }

    addAtividades(nomeAtividade:string):void {
        this.atividades.push(nomeAtividade) ;
    }



    public get codProfessor():string{
        return this.cod_prof;
    } 


    

    AulasMinistradas(){
        return this.carga_horaria_min/60
    }

}


export class Diretoria  extends User implements IRepositoriaid_users{
    turma: Aluno[] = [];
    // professores: Professor[] = []
    

    inserir(aluno:Aluno): void {
        try {
            this.consultar(aluno.id_user);
            throw new AlunoJaCadastradoError("Aluno já cadastrado!");

        } catch(e:any) {
            if(e instanceof AlunoJaCadastradoError){
                throw e;
            }
            this.turma.push(aluno);
        }
    }
    
    consultar(id_user: string): User {
        let id_userProcurada!: User;
        for (let i of this.turma) {
            if (i.id_user == id_user) {
                id_userProcurada = i;
            }
        }
        if (!id_userProcurada) {
           throw new AlunoNaoEncontradoError("Aluno não encontrado!");
        }
        
        return id_userProcurada;
    }


    addProfessor(prof:Professor):void{
        try {
            this.consultar(prof.codProfessor);
            throw new ProfessorJaCadastradoErrror("Professor já cadastrado!");
            
        } catch(e:any) {
            if(e instanceof ProfessorJaCadastradoErrror){
                throw e;
            }
            this.Professores.push(prof);
        }
        
        
    }
    
    
    consultarPorIndice(id_user: string): number {
        let indiceIdProcurado: number = -1;
        for(let i = 0; i < this.turma.length; i++){
            if(this.turma[i].id_user == id_user){
                indiceIdProcurado = i;
            }
        }
        if(indiceIdProcurado == -1){
            throw new id_userError("Id do usuario não encontrado!" );
        }
        return indiceIdProcurado;
    }

    EhValido(cod_prof:string):boolean{
        for(let i = 0; i<this.professores.length; i++){
            if(cod_prof == this.professores[i].codProfessor ){
                return true
             
            }
        } 
        throw new codProfessorError("Professor não encontrado")
        
    }
    alterar(estudante: Aluno): void {
        let indice: number = this.consultarPorIndice(estudante.id_user);
        this.turma[indice] = estudante;
    } 

    

    excluir(id_user: string): void {
        let indice: number = this.consultarPorIndice(id_user);
        for (var i = indice; i < this.turma.length; i++) {
            this.turma[i] = this.turma[i + 1];
        }
        this.turma.pop();
    }
    
   

    
    
}



// addAtividades(nomeAtividade:string, codProfessor:string):void { 
//     if(this.EhValido(codProfessor)){    
//     this.atividade.push(`Nome atividade:${nomeAtividade}`)
//     }else{
//         throw new codProfessorError("Codigo invalido!")
//     } 
// }


// let usuario1:User = new User("Daniel", "004",200);
// let usuario2:User = new User("Marcos", "044",360);

let Aluno1:Aluno = new Aluno("Jorge", "044", 200);
let Aluno2:Aluno = new Aluno("Davi", "002", 300);
let Aluno3:Aluno = new Aluno("Marcos", "039", 400);

let Prof1:Professor = new Professor('001',"Marcos Aurelio", "2022001",300);
let Prof2:Professor = new Professor('002',"Vinicius Junior", "2022002",400);



let user:User = new User()

let direcao:Diretoria = new Diretoria();
direcao.inserir(Aluno1);
direcao.inserir(Aluno2);
direcao.inserir(Aluno3);
direcao.addProfessor(Prof1);
direcao.addProfessor(Prof2);


Prof1.inserirNota('044',[10, 8, 9]);

console.log(user.Alunos);

