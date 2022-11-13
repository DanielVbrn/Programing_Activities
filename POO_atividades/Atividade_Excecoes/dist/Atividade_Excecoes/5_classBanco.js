"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("../Conta_banc/banco");
let c1 = new banco_1.Conta("10", 2000);
let c2 = new banco_1.Conta("15", 1500);
let banco = () => {
    let banco = new banco_1.Banco();
    banco.inserir(c1);
    banco.inserir(c2);
    banco.transferir("10", "15", 300);
    c1.verificarsaldo;
    c2.verificarsaldo;
};
banco();
