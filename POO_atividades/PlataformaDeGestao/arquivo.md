# h1 **Sistema de Gestão Escolar**


## h2 1.Classe Usuário:
    -nome;
    -id_user;
    -login;
    -senha;

## h2 2.Classe Professor extende de Usuário implements IMatriculas:
    -cod_Prof;
    -nomeMateria;


## h2 3.Classe Aluno extende de Usuário:
    -matricula;
    -nota;
    -turma;
    -consultarNota();

## h2 4.Classe Diretor extende de Usuário:
    cod_Diretor;
    cadastrarAluno();
    cadastrarProfessor();

## h2 5.Interface IRepositorioDeUsuarios:
    inserir(c-(mat: string): Usuario;
    alterar(mat: Usuario): void;
    
## h2 6.Classe Turma:
    repositorio:IRepositorioDeUsuarios ;
    inserir(matricula: Aluno): void{...};
    consultar(matricula: string): Aluno{...};
    alterar(matricula: Aluno): void{...}; 

## h2 7.Classe RepositorioAlunos implementa IRepositorioDeUsuarios:
    alunos: Aluno[] = [];
    inserir(matricula: Aluno): void{...};
    consultar(matricula: string): Aluno{...};
    alterar(matricula: Aluno): void{...};
    