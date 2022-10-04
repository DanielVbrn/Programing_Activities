import {Conta} from "./../Conta_banc/banco"







let c1:Conta = new Conta("1", 100);
let c2:Conta = new Conta("2", 100);
let c3:Conta;
c1 = c2;
c3 = c1;
c1.sacar(10);

c1.transferencia(c2,50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());


/* A) Todas as variáveis apontam pro mesmo objeto */
/* B) FOi perdido após a atribuição dos outros valores*/