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
exports.Diretoria = exports.Professor = exports.Aluno = exports.User = void 0;
var shared_1 = require("@vue/shared");
var excecoes_1 = require("./excecoes");
var User = /** @class */ (function () {
    function User() {
        this.atividades = [];
        this.alunos = [];
        this.professores = [];
        this.notas = [];
    }
    Object.defineProperty(User.prototype, "nameUser", {
        // constructor(nome: string,  id_user: string) {
        //     this.id_user = id_user;
        //     this.nome = nome;
        //     this.carga_horaria_min = 0;
        // }
        // public get idUser():string{
        //     return this.id_user;
        // }
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Notas", {
        get: function () {
            return this.notas;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.TempoDePermanencia = function (horario_entrada, horario_saida) {
        this.validarValor(horario_entrada);
        this.validarValor(horario_saida);
        this.VerificarHorario(horario_entrada, horario_saida);
        var total = horario_saida - horario_entrada;
        this.carga_horaria_min = total;
        return total;
    };
    User.prototype.qttAulasDia = function (horario_entrada, horario_saida) {
        this.validarValor(horario_entrada);
        this.validarValor(horario_saida);
        this.VerificarHorario(horario_entrada, horario_saida);
        var total = horario_saida - horario_entrada;
        this.carga_horaria_min = total / 60;
    };
    User.prototype.validarValor = function (valor) {
        if (isNaN(valor) || valor <= 0) {
            throw new excecoes_1.ValorInvalidoError("Valor inválido: + " + valor);
        }
        return true;
    };
    User.prototype.VerificarHorario = function (horario_entrada, horario_saida) {
        if (horario_entrada > horario_saida) {
            throw new excecoes_1.HorarioInvalidoError("Horario entrada maior que horario saída");
        }
    };
    return User;
}());
exports.User = User;
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, id_user, carga_horaria_min) {
        var _this = _super.call(this) || this;
        _this.notas = [];
        carga_horaria_min = 0;
        return _this;
    }
    Aluno.prototype.EhValido = function (id_user) {
        if (!(0, shared_1.isString)(id_user)) {
            throw new excecoes_1.id_userError("id_user Invalida: " + id_user);
        }
        return true;
    };
    Aluno.prototype.verificarNotas = function (id_aluno) {
        for (var i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].id_user == id_aluno) {
                return this.alunos[i].notas[i];
            }
        }
        return 0;
    };
    Aluno.prototype.verificarAtividades = function () {
        for (var i = 0; this.atividades.length; i++) {
            console.log(this.atividades[i]);
        }
    };
    Aluno.prototype.FrequenciadeAulas = function (qttAulasDiaria) {
        var minutosTotais = qttAulasDiaria * 60;
        var qttAulasAssistidas = minutosTotais - this.carga_horaria_min;
        var qttfaltas = qttAulasAssistidas / 60;
        return Math.ceil(qttfaltas);
    };
    return Aluno;
}(User));
exports.Aluno = Aluno;
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(cod_prof, nome, id_user, carga_horaria_min) {
        var _this = _super.call(this) || this;
        _this.cod_prof = cod_prof;
        _this.alunos = [];
        carga_horaria_min = 0;
        return _this;
    }
    Professor.prototype.inserirNota = function (id_aluno, nota) {
        for (var i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].id_user = id_aluno) {
                this.alunos[i].notas[i] = nota[i];
            }
        }
    };
    Professor.prototype.addAtividades = function (nomeAtividade) {
        this.atividades.push(nomeAtividade);
    };
    Object.defineProperty(Professor.prototype, "codProfessor", {
        get: function () {
            return this.cod_prof;
        },
        enumerable: false,
        configurable: true
    });
    Professor.prototype.AulasMinistradas = function () {
        return this.carga_horaria_min / 60;
    };
    return Professor;
}(User));
exports.Professor = Professor;
var Diretoria = /** @class */ (function (_super) {
    __extends(Diretoria, _super);
    function Diretoria() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turma = [];
        _this.professores = [];
        return _this;
    }
    Diretoria.prototype.inserir = function (aluno) {
        try {
            this.consultar(aluno.id_user);
            throw new excecoes_1.AlunoJaCadastradoError("Aluno já cadastrado!");
        }
        catch (e) {
            if (e instanceof excecoes_1.AlunoJaCadastradoError) {
                throw e;
            }
            this.turma.push(aluno);
        }
    };
    Diretoria.prototype.consultar = function (id_user) {
        var id_userProcurada;
        for (var _i = 0, _a = this.turma; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.id_user == id_user) {
                id_userProcurada = i;
            }
        }
        if (!id_userProcurada) {
            throw new excecoes_1.AlunoNaoEncontradoError("Aluno não encontrado!");
        }
        return id_userProcurada;
    };
    Diretoria.prototype.addProfessor = function (prof) {
        try {
            this.consultar(prof.codProfessor);
            throw new excecoes_1.ProfessorJaCadastradoErrror("Professor já cadastrado!");
        }
        catch (e) {
            if (e instanceof excecoes_1.ProfessorJaCadastradoErrror) {
                throw e;
            }
            this.professores.push(prof);
        }
    };
    Diretoria.prototype.consultarPorIndice = function (id_user) {
        var indiceIdProcurado = -1;
        for (var i = 0; i < this.turma.length; i++) {
            if (this.turma[i].id_user == id_user) {
                indiceIdProcurado = i;
            }
        }
        if (indiceIdProcurado == -1) {
            throw new excecoes_1.id_userError("Id do usuario não encontrado!");
        }
        return indiceIdProcurado;
    };
    Diretoria.prototype.EhValido = function (cod_prof) {
        for (var i = 0; i < this.professores.length; i++) {
            if (cod_prof == this.professores[i].codProfessor) {
                return true;
            }
        }
        throw new excecoes_1.codProfessorError("Professor não encontrado");
    };
    Diretoria.prototype.alterar = function (estudante) {
        var indice = this.consultarPorIndice(estudante.id_user);
        this.turma[indice] = estudante;
    };
    Diretoria.prototype.excluir = function (id_user) {
        var indice = this.consultarPorIndice(id_user);
        for (var i = indice; i < this.turma.length; i++) {
            this.turma[i] = this.turma[i + 1];
        }
        this.turma.pop();
    };
    return Diretoria;
}(User));
exports.Diretoria = Diretoria;
// addAtividades(nomeAtividade:string, codProfessor:string):void { 
//     if(this.EhValido(codProfessor)){    
//     this.atividade.push(`Nome atividade:${nomeAtividade}`)
//     }else{
//         throw new codProfessorError("Codigo invalido!")
//     } 
// }
// let usuario1:User = new User("Daniel", "004",200);
// let usuario2:User = new User("Marcos", "044",360);
var Aluno1 = new Aluno("Jorge", "044", 200);
var Aluno2 = new Aluno("Davi", "002", 300);
var Aluno3 = new Aluno("Marcos", "039", 400);
var Prof1 = new Professor('001', "Marcos Aurelio", "2022001", 300);
var Prof2 = new Professor('002', "Vinicius Junior", "2022002", 400);
var user = new User();
var direcao = new Diretoria();
direcao.inserir(Aluno1);
direcao.inserir(Aluno2);
direcao.inserir(Aluno3);
direcao.addProfessor(Prof1);
direcao.addProfessor(Prof2);
Prof1.inserirNota('044', [10, 8, 9]);
console.log(Aluno1.alunos);
