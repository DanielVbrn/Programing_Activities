package src.PackageInvestimento;

enum Status {
    ALTO,
    BAIXO
}

public class Investimento implements Auditavel{
    private int id;
    private double valor;
    private TipoInvestimento tipo;

    private Status statusRisco;

    public Investimento(int id, double valor, TipoInvestimento tipo) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }

    public int getId() {
        return id;
    }

    public double getValor() {
        return valor;
    }

    public Status getStatusRisco() {
        return statusRisco;
    }

    public TipoInvestimento getTipo() {
        return tipo;
    }

    public void setStatusRisco(Status statusRisco) {
        this.statusRisco = statusRisco;
    }

    @Override
    public void realizarAuditoria() {
        if (this.statusRisco == Status.ALTO) {
            System.out.println("Conta possui alto risco.");
        }
    }
}

class InvestimentoService {
    public Status avaliarRisco(Investimento investimento) {
        if (investimento.getTipo() == TipoInvestimento.RENDA_FIXA) {
            investimento.setStatusRisco(Status.BAIXO);
        }
        if (investimento.getTipo() == TipoInvestimento.RENDA_VARIAVEL) {
            investimento.setStatusRisco(Status.ALTO);
        }
        return investimento.getStatusRisco();
    }
}



