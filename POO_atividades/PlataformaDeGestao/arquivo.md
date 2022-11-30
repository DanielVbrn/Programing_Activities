*Sistema de


1.Classe Usuário:
    -nome;
    -id_user;
    -login;
    -senha;

2.Classe Professor extende de Usuário implements IMatriculas:
    -cod_Prof;
    -nomeMateria;


3.Classe Aluno extende de Usuário:
    -matricula;
    -nota;
    -turma;
    -consultarNota();

4.Classe Diretor extende de Usuário:
    cod_Diretor;
    cadastrarAluno();
    cadastrarProfessor();

5.Interface IRepositorioDeUsuarios:
    inserir(conta: Usuario): void;
    consultar(mat: string): Usuario;
    alterar(mat: Usuario): void;
    
6.Classe Turma:
    repositorio:IRepositorioDeUsuarios ;
    inserir(matricula: Aluno): void{...};
    consultar(matricula: string): Aluno{...};
    alterar(matricula: Aluno): void{...}; 

7.Classe RepositorioAlunos implementa IRepositorioDeUsuarios:
    alunos: Aluno[] = [];
    inserir(matricula: Aluno): void{...};
    consultar(matricula: string): Aluno{...};
    alterar(matricula: Aluno): void{...};






