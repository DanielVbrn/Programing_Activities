import { Banco } from "./BancoValidacoes";
import { Conta } from "./ContaValidacoes";

let conta_a: Conta = new Conta("10", 1000);
let conta_b: Conta = new Conta("20", 1000);

let conta:Banco = new Banco()
conta.inserir(conta_a);
conta.inserir(conta_b);
conta.consultarPorIndice("10");


