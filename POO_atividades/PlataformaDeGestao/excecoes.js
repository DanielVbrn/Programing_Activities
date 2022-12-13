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
exports.AlunoSemNota = exports.NotaJaCadastradaError = exports.HorarioInvalidoError = exports.ValorInvalidoError = exports.CodProfessorError = exports.AplicacaoError = exports.id_userError = exports.ProfessorJaCadastradoErrror = exports.AlunoJaCadastradoError = exports.AlunoNaoEncontradoError = exports.MatriculaError = void 0;
var MatriculaError = /** @class */ (function (_super) {
    __extends(MatriculaError, _super);
    function MatriculaError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return MatriculaError;
}(Error));
exports.MatriculaError = MatriculaError;
var AlunoNaoEncontradoError = /** @class */ (function (_super) {
    __extends(AlunoNaoEncontradoError, _super);
    function AlunoNaoEncontradoError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return AlunoNaoEncontradoError;
}(Error));
exports.AlunoNaoEncontradoError = AlunoNaoEncontradoError;
var AlunoJaCadastradoError = /** @class */ (function (_super) {
    __extends(AlunoJaCadastradoError, _super);
    function AlunoJaCadastradoError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return AlunoJaCadastradoError;
}(Error));
exports.AlunoJaCadastradoError = AlunoJaCadastradoError;
var ProfessorJaCadastradoErrror = /** @class */ (function (_super) {
    __extends(ProfessorJaCadastradoErrror, _super);
    function ProfessorJaCadastradoErrror(mensage) {
        return _super.call(this, mensage) || this;
    }
    return ProfessorJaCadastradoErrror;
}(Error));
exports.ProfessorJaCadastradoErrror = ProfessorJaCadastradoErrror;
var id_userError = /** @class */ (function (_super) {
    __extends(id_userError, _super);
    function id_userError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return id_userError;
}(Error));
exports.id_userError = id_userError;
var AplicacaoError = /** @class */ (function (_super) {
    __extends(AplicacaoError, _super);
    function AplicacaoError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return AplicacaoError;
}(Error));
exports.AplicacaoError = AplicacaoError;
var CodProfessorError = /** @class */ (function (_super) {
    __extends(CodProfessorError, _super);
    function CodProfessorError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return CodProfessorError;
}(Error));
exports.CodProfessorError = CodProfessorError;
var ValorInvalidoError = /** @class */ (function (_super) {
    __extends(ValorInvalidoError, _super);
    function ValorInvalidoError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return ValorInvalidoError;
}(Error));
exports.ValorInvalidoError = ValorInvalidoError;
var HorarioInvalidoError = /** @class */ (function (_super) {
    __extends(HorarioInvalidoError, _super);
    function HorarioInvalidoError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return HorarioInvalidoError;
}(Error));
exports.HorarioInvalidoError = HorarioInvalidoError;
var NotaJaCadastradaError = /** @class */ (function (_super) {
    __extends(NotaJaCadastradaError, _super);
    function NotaJaCadastradaError(mensage) {
        return _super.call(this, mensage) || this;
    }
    return NotaJaCadastradaError;
}(Error));
exports.NotaJaCadastradaError = NotaJaCadastradaError;
var AlunoSemNota = /** @class */ (function (_super) {
    __extends(AlunoSemNota, _super);
    function AlunoSemNota(mensage) {
        return _super.call(this, mensage) || this;
    }
    return AlunoSemNota;
}(Error));
exports.AlunoSemNota = AlunoSemNota;
