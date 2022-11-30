# **Sistema de Gestão Escolar**


## 1.Classe Usuário.
### Atributos:
    -nome;
    -id_user;
    -login;
    -senha;
    <!-- Ainda verificando o uso ou não de login e senha na classe Usuário. -->

## 2.Classe Professor estende de Usuário e implementa IRepositorioDeUsuarios.
### Atributos:
    -cod_Prof;
    -nomeMateria;


## 3.Classe Aluno estende de Usuário.
### Atributos:
    -matricula;
    -nota;
    -turma;

### Métodos:
    -consultarNota();

## 4.Classe Diretor estende de Usuário.
### Atributos:
    cod_Diretor;

### Métodos:
    cadastrarAluno();
    cadastrarProfessor();

## 5.Interface IRepositorioDeUsuarios.
### Métodos:
    inserir(mat: string): Usuario;
    alterar(mat: Usuario): void;
    consultar(matricula: string): Aluno

## 6.Classe Turma:
### Atributos:
    repositorio:IRepositorioDeUsuarios ;

### Métodos:
    inserir(matricula: Aluno): void{...};
    consultar(matricula: string): Aluno{...};
    alterar(matricula: Aluno): void{...}; 

## 7.Classe RepositorioAlunos implementa IRepositorioDeUsuarios:
### Atributos:
    alunos: Aluno[] = [];

### Métodos:
    inserir(matricula: Aluno): void{...};
    consultar(matricula: string): Aluno{...};
    alterar(matricula: Aluno): void{...};

## 8.Classe ValidacaoIdUser estende de Error:
    -Lançar a exceção no método consultar caso o id de algum usuário já exista;
    
