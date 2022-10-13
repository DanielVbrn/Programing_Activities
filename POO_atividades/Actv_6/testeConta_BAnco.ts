import { Banco } from "./3_privateBanco";
import { Conta } from "./4_privateConta"

let c1:Conta, c2:Conta, c3:Conta;

c1= new Conta("12", "Marcos", 1000);
c2= new Conta("04", "João", 1000);
c3 = new Conta("08", "Danilo", 1000);


let banco = () =>{
    let banco = new Banco();
    banco.inserir(c1)
    banco.inserir(c2)
    banco.inserir(c3)
    
    banco.transferir('12', '08',500);
    banco.sacar('04', 256);
    banco.verificContas('04');
    banco.depositar('08',5045);
    
    
    console.log(c1.verificarNumero);
    console.log(c1.verificarNome);
    console.log(c1.verificarsaldo);
    
    console.log(banco.MediaSaldo());
    console.log(banco.depositoTotal());
    console.log(banco.qtdContas());
    
    
    
    
    console.log(c1)

}
banco()