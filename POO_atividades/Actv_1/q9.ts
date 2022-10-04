/* (9).Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().
 */

class SistemaBancario{
    valorSALDO: number;
    valorCREDITO: number;
    valorEMPRESTIMO: number;
    constructor(){
        this.valorSALDO = 1500;
        this.valorCREDITO = 1200;
        this.valorEMPRESTIMO = 8000;

    }
    calcularSaldo_comBonus(){
        return 
    }

}




class SituacaoFinanceira{
    valorCreditos:number
    valorDebitos:number
    constructor(valorCreditos:number, valorDebitos:number){
        this.valorCreditos = valorCreditos
        this.valorDebitos = valorDebitos
    }
    
    saldo(){
        return this.valorCreditos - this.valorDebitos

    }
}


function financas(){
    let situacao_financas = new SituacaoFinanceira(200, 345)
    console.log(situacao_financas)

}