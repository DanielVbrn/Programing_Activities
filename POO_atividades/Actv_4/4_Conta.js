"use strict";
exports.__esModule = true;
var banco_1 = require("./../Conta_banc/banco");
var c1 = new banco_1.Conta("1", 100);
var c2 = new banco_1.Conta("2", 100);
var c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferencia(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
/* A) Todas as variáveis apontam pro mesmo objeto */
/* B) FOi perdido após a atribuição dos outros valores*/ 
