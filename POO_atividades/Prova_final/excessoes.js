"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VitoriaJogador2 = exports.VitoriaJogador1 = exports.EmpateObitido = exports.VitoriaObtida = void 0;
class VitoriaObtida extends Error {
    constructor(message) {
        super(message);
    }
}
exports.VitoriaObtida = VitoriaObtida;
class EmpateObitido extends Error {
    constructor(message) {
        super(message);
    }
}
exports.EmpateObitido = EmpateObitido;
class VitoriaJogador1 extends Error {
    constructor(message) {
        super(message);
    }
}
exports.VitoriaJogador1 = VitoriaJogador1;
class VitoriaJogador2 extends Error {
    constructor(message) {
        super(message);
    }
}
exports.VitoriaJogador2 = VitoriaJogador2;
