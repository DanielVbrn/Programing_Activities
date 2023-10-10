package src.PackageInvestimento;


enum TipoTransacao {
    CREDITO, DEBITO
}

public class Transacao implements Auditavel{
    private int id;
    private double valor;
    private  TipoTransacao tipo;


    public Transacao(int id, double valor, TipoTransacao tipo) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }

    public double getValor() {
        return valor;
    }

    public int getId() {
        return id;
    }

    @Override
    public void realizarAuditoria() {
        TransacaoService transacaoService = new TransacaoService();
        boolean fraude = transacaoService.verificarFraude(this);
        if(fraude){
            System.out.println("Fraude detectada na transacao de ID: " + this.id);
        } else {
            System.out.println("A transação é segura.");
        }
    }
}


class TransacaoService {
    public boolean verificarFraude(Transacao transacao) {
        if(transacao.getValor() < 0) {
            return true;
        }

        if(transacao.getValor() > 10000.00) {
            return true;
        }
        return false;
    }
}