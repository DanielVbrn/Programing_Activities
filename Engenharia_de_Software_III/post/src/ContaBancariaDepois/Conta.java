package ContaBancariaDepois;


public class Conta {
    int numero;
    String nomeTitular;
    double saldo;

    public Conta(int numero, String nomeTitular, double saldo) {
        this.numero = numero;
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }

    public int getNumber(){
        return this.numero;
    }

    public String getName(){
        return this.nomeTitular;
    }

    public double getSaldo(){
        return this.saldo;
    }

    public String getInfoConta(){
        return
            "Nome do Titular: " + this.nomeTitular + "\n"+
            "Número da Conta: " + this.numero + "\n" +
            "Saldo: " + this.saldo + " R$";
    }

    public void depositar(double value) {
        this.saldo += value;
    }

    public void sacar(double value) {
        this.saldo -= value;
    }

}


