import { Banco } from "../ContaBancaria/Banco";
import { Conta } from "../ContaBancaria/ContaBank";

let conta_a: Conta = new Conta("10", "Daniel", 1000);
let conta_b: Conta = new Conta("20", "Vitor", 1000);

let conta:Banco = new Banco()
conta.inserir(conta_a);
conta.inserir(conta_b);
conta.consultarPorIndice("10");


