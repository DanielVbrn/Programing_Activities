"use strict";
exports.__esModule = true;
var _1_banco_1 = require("../Actv_5/1_banco");
var Conta_1 = require("../Actv_5/Conta");
var conta_b = new Conta_1.Conta("12", 800);
var conta_c = new Conta_1.Conta("4", 1000);
var a = new _1_banco_1.Banco();
a.transferir("12", "4", 400);
console.log(conta_b.consultarSaldo);
console.log(conta_c.consultarSaldo);
