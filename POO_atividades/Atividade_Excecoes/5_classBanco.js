"use strict";
exports.__esModule = true;
var banco_1 = require("../Conta_banc/banco");
var c1 = new banco_1.Conta("10", 2000);
var c2 = new banco_1.Conta("15", 1500);
var banco = function () {
    var banco = new banco_1.Banco();
    banco.inserir(c1);
    banco.inserir(c2);
    banco.transferir("10", "15", 300);
    c1.verificarsaldo;
    c2.verificarsaldo;
};
banco();
