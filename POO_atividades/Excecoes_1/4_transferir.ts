import {Banco} from "../Actv_5/1_banco"
import {Conta} from "../Actv_5/Conta"


let conta_b:Conta = new Conta("12","João",800);
let conta_c:Conta = new Conta("4","Marcos",1000);

let a:Banco = new Banco();
a.transferir("12", "4", 400);
console.log(conta_b.consultarSaldo);
console.log(conta_c.consultarSaldo);