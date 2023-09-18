//Coesão Funcional
import java.util.ArrayList;
import java.util.List;

public class Banco {
    private List<Conta> contas = new ArrayList<>();

    public Banco(List<Conta> contas) {
        this.contas = contas;
    }

    public void inserir(Conta conta) {
        if (verificarConta(conta.consultarNumero()) == null) {
            contas.add(conta);
        }
    }

    public Conta verificarConta(String numero) {
        for (Conta conta : contas) {
            if (conta.consultarNumero().equals(numero)) {
                return conta;
            }
        }
        return null;
    }

    public int qtdContas() {
        return contas.size();
    }
}

public class OperacoesBancarias {
    public static void sacar(Conta conta, double valor) {
        conta.sacar(valor);
    }

    public static void depositar(Conta conta, double valor) {
        conta.depositar(valor);
    }

    public static void transferir(Conta contaDebito, Conta contaCredito, double valor) {
        if (contaDebito.consultarSaldo() >= valor) {
            contaDebito.transferencia(contaCredito, valor);
        } else {
            System.out.println("Saldo insuficiente para a transferência!");
        }
    }
}

public class EstatisticasBancarias {
    public static double depositoTotal(List<Conta> contas) {
        double total = 0;
        for (Conta conta : contas) {
            total += conta.consultarSaldo();
        }
        return total;
    }

    public static double mediaSaldo(List<Conta> contas) {
        if (!contas.isEmpty()) {
            return depositoTotal(contas) / contas.size();
        } else {
            return 0;
        }
    }
}

