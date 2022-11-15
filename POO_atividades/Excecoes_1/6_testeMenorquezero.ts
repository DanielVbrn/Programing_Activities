import {Banco} from "../Actv_5/1_banco"
import {Conta} from "../Actv_5/Conta"


let c1:Conta = new Conta("10", "Daniel",2000);
let c2:Conta = new Conta("15", "Marcos",1500);




let banco = ():void =>{
    let banco:Banco = new Banco();
    banco.sacar("10", -1000);
    banco.sacar("15", 500);
    banco.transferir("10", "15", 300);
    c1.consultarSaldo;
    c2.consultarSaldo;
    // banco.sacar("10", -1000); // ERRO
    // banco.transferir("10", "15", 300); // ERRO
}
banco()