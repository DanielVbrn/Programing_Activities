"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Diretor = exports.Aluno = exports.Professor = exports.User = void 0;
var shared_1 = require("@vue/shared");
var excecoes_1 = require("./excecoes");
var User = /** @class */ (function () {
    function User(nome, id_user) {
        this.id_user = id_user;
        this.nome = nome;
    }
    Object.defineProperty(User.prototype, "idUser", {
        get: function () {
            return this.idUser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "nameUser", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(cod_prof, codMateria, nome, id_user) {
        var _this = _super.call(this, nome, id_user) || this;
        /* CONSULTAR NOTA TEM Q MUDAR SEUS ATRIBUTOS,TENDO EM VISTA QUE NO "APP" PARA ACESSAR ESSE METODO EU PRECISARIA DE UM ALUNO DO TIPO ALUNO E PARA ISSO EU DEVERIA PERGUNTAR QUAL A NOTA DELE(NÃO TENHO CERTEZA SE SERÁ ASSIM MESMO Q FAZ)
        
        ACHO QUE SERIA UMA BOA DEIXAR DE UTILIZAR O TIPO "ALUNO" E BUSCAR FORMAS DE USAR APENAS O "TIPO" USER OU USAR OS ATRIBUTOS QUE PROF POSSUI*/
        _this.alunos = [];
        _this.atividade = [];
        _this.cod_prof = cod_prof;
        _this.codMateria = codMateria;
        return _this;
    }
    Object.defineProperty(Professor.prototype, "codProfessor", {
        get: function () {
            return this.cod_prof;
        },
        enumerable: false,
        configurable: true
    });
    Professor.prototype.inserirNota = function (idAluno, nota) {
        for (var i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].idUser == idAluno) {
                if (this.alunos[i].notas == null) {
                    this.alunos[i].notas[i] = nota;
                }
                else {
                    throw new excecoes_1.NotaJaCadastradaError("Aluno já possui nota");
                }
            }
            else {
                throw new excecoes_1.AlunoNaoEncontradoError("Aluno não consta no sistema...");
            }
        }
    };
    Professor.prototype.alterarNota = function (id_Aluno, newNota) { };
    ;
    Professor.prototype.excluirNota = function (id_Aluno) { };
    ;
    /* consultarNota(aluno:Aluno):number{
        return aluno.nota
    } */
    /* alterarNotaAluno(aluno:Aluno,novaNota:number):void{
        aluno.nota = novaNota;
    }
    */
    Professor.prototype.addAtividades = function (nomeAtividade) {
        this.atividade.push(nomeAtividade);
    };
    return Professor;
}(User));
exports.Professor = Professor;
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    /*  public turma: string; */
    function Aluno(nome, id_user) {
        var _this = _super.call(this, nome, id_user) || this;
        _this.notas = [];
        return _this;
    }
    Aluno.prototype.EhValido = function (id_user) {
        if (!(0, shared_1.isString)(id_user)) {
            throw new excecoes_1.id_userError("id_user Invalida: " + id_user);
        }
        return true;
    };
    return Aluno;
}(User));
exports.Aluno = Aluno;
var Diretor /* extends User <-- Não é necessario*/ = /** @class */ (function () {
    function Diretor() {
        this.turma = [];
        this.professores = [];
        /* APARENTEMENTE DIRETOR ESTÁ OK! */
    }
    Diretor.prototype.consultar = function (id_user) {
        var id_userProcurada;
        for (var _i = 0, _a = this.turma; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.idUser == id_user) {
                id_userProcurada = i;
            }
        }
        if (!id_userProcurada) {
            throw new excecoes_1.AlunoNaoEncontradoError("Aluno não encontrado!");
        }
        return id_userProcurada;
    };
    Diretor.prototype.inserir = function (aluno) {
        try {
            this.consultar(aluno.idUser);
            throw new excecoes_1.AlunoJaCadastradoError("Aluno já cadastrado!");
        }
        catch (e) {
            if (e instanceof excecoes_1.AlunoJaCadastradoError) {
                throw e;
            }
            this.turma.push(aluno);
        }
    };
    Diretor.prototype.addProfessor = function (prof) {
        try {
            this.consultar(prof.idUser);
            throw new excecoes_1.ProfessorJaCadastradoErrror("Professor já cadastrado!");
        }
        catch (e) {
            if (e instanceof excecoes_1.ProfessorJaCadastradoErrror) {
                throw e;
            }
            this.professores.push(prof);
        }
    };
    Diretor.prototype.consultarPorIndice = function (id_user) {
        var indiceIdProcurado = -1;
        for (var i = 0; i < this.turma.length; i++) {
            if (this.turma[i].idUser == id_user) {
                indiceIdProcurado = i;
            }
        }
        if (indiceIdProcurado == -1) {
            throw new excecoes_1.id_userError("Id do usuario não encontrado!");
        }
        return indiceIdProcurado;
    };
    Diretor.prototype.alterar = function (estudante) {
        var indice = this.consultarPorIndice(estudante.idUser);
        this.turma[indice] = estudante;
    };
    Diretor.prototype.excluir = function (id_user) {
        var indice = this.consultarPorIndice(id_user);
        for (var i = indice; i < this.turma.length; i++) {
            this.turma[i] = this.turma[i + 1];
        }
        this.turma.pop();
    };
    return Diretor;
}());
exports.Diretor = Diretor;
var usuario1 = new User("Daniel", "004");
var usuario2 = new User("Marcos", "044");
var Aluno1 = new Aluno("Jorge", "044");
var Aluno2 = new Aluno("Davi", "002");
var Aluno3 = new Aluno("Marcos", "039");
var Prof1 = new Professor('01', '034', "João", "044");
var Prof2 = new Professor('08', '035', "Miguel", "002");
var direcao = new Diretor();
direcao.inserir(Aluno1);
direcao.inserir(Aluno2);
direcao.inserir(Aluno3);
direcao.addProfessor(Prof1);
direcao.addProfessor(Prof2);
console.table(direcao.turma);
Prof1.inserirNota('044', 10);
Prof1.inserirNota('002', 8);
Prof1.inserirNota('039', 7);
Prof2.inserirNota('044', 8);
Prof2.inserirNota('002', 9);
Prof2.inserirNota('039', 7);
console.table(direcao.professores);
