package src.PackageInvestimento;


import java.util.ArrayList;
import java.util.List;

enum TipoInvestimento {
    RENDA_FIXA, RENDA_VARIAVEL
}


public class ContaCorrente implements  Auditavel{
    private String numero;
    private double saldo;
    private List<Transacao> transacoes;

    public ContaCorrente(String numero, double saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getNumero() {
        return numero;
    }

    @Override
    public void realizarAuditoria() {
        if(this.saldo < 0) {
            System.out.println("Auditoria para Conta Corrente:");
            System.out.println("Número da Conta: " + this.numero);
            System.out.println("Saldo Negativo: " + this.saldo);
        }
    }
}

class ContaCorrenteService{
    public List<Transacao> filtrarTransacaoInvalidas(List<Transacao> transacoes) {
        List<Transacao> transacoesInvalidas = new ArrayList<>();
        for(Transacao transacao: transacoes) {
            TransacaoService transacaoService = new TransacaoService();
            if(transacaoService.verificarFraude(transacao)){
                transacoesInvalidas.add(transacao);
            }
        }
        return transacoesInvalidas;
    }


}

