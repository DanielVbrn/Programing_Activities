import { Banco } from "./BancoValidacoes";
import { Conta } from "./ContaValidacoes";

let conta_a: Conta = new Conta("10", -450);
let conta_b: Conta = new Conta("20", -100);
let conta_c: Conta = new Conta("20", -50);

let conta:Banco = new Banco()
conta.inserir(conta_a);
conta.inserir(conta_b);
conta.inserir(conta_c);
conta.consultarPorIndice("10");

conta_a.transferencia(conta_b,400);
conta_b.consultarSaldo;