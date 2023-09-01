package ContaBancariaDepois;
import java.util.ArrayList;


public class Banco {
    int numero;
    String nomeTitular;
    double saldo;
    ArrayList<Conta> contas;

    public Banco() {
        this.numero = 0;
        this.nomeTitular = "";
        this.saldo = 0;
        this.contas = new ArrayList<>();
    }

    public void createConta(int numero, String nomeTitular, double saldo) {
        Conta conta = new Conta(numero, nomeTitular, saldo);
        contas.add(conta);
    }

    public void depositar(double value, int numeroConta) {
        Conta conta = findConta(numeroConta);
        if (conta != null) {
            conta.depositar(value);
        }
    }

    public void sacar(double value, int numeroConta) {
        Conta conta = findConta(numeroConta);
        if (conta != null) {
            conta.sacar(value);
        }
    }

    public void transferir(int numeroConta, int numeroContaDestino, double value) {
        Conta conta = findConta(numeroConta);
        Conta conta2 = findConta(numeroContaDestino);
        if(conta != null && conta2 != null) {
            conta.sacar(value);
            conta2.depositar(value);
        }
    }


    public void mostrarContas() {
        for (Conta conta : contas) {
            System.out.println(conta.getInfoConta());
        }
    }

    public Conta findConta(int numero) {
        for(Conta conta: contas) {
            if (conta.getNumber() == numero){
                return conta;
            }
        }
        return null;
    }
}
