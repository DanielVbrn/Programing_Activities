import { Conta, ContaCorrente, SeguroDeVida, Tributavel } from "./10_diagrama";

class AuditoriaInterna{
    tributaveis:Tributavel[] = [];
    adicionar(tributavel:Tributavel){
        this.tributaveis.push(tributavel);
    }

    calcularTributos(){
        let soma = 0;
        for(let i = 0; i < this.tributaveis.length; i++){
            soma += this.tributaveis[i].calculaTributos();
        }
        return soma;
    }
}

class TesteContasCorrentes{
    conta1:ContaCorrente = new ContaCorrente();
    conta2:ContaCorrente = new ContaCorrente();
    conta3:ContaCorrente = new ContaCorrente();
    
    contaSeguro1:SeguroDeVida = new SeguroDeVida();
    contaSeguro2:SeguroDeVida = new SeguroDeVida();
    contaSeguro3:SeguroDeVida = new SeguroDeVida();

    
}


let testeConta = () => {
    let testar:TesteContasCorrentes = new TesteContasCorrentes();
    testar.conta1.setSaldo = 500;
    testar.conta2.setSaldo = 500;
    testar.conta3.setSaldo = 500;
    
    
    testar.conta1.setNome = "Daniel";
    testar.conta2.setNome = "Marcos";
    testar.conta3.setNome = "João";

    
    let addContas:AuditoriaInterna = new AuditoriaInterna();
    addContas.adicionar(testar.conta1);
    addContas.adicionar(testar.conta2);
    addContas.adicionar(testar.conta3);
    
    addContas.adicionar(testar.contaSeguro1);
    addContas.adicionar(testar.contaSeguro2);
    addContas.adicionar(testar.contaSeguro3);

    console.log(addContas.calcularTributos());
    
}

testeConta()