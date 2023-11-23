public class Conta {
    private double saldo;
    private String numeroConta;
    private  ContaCliente cliente;

    public Conta(String numeroConta, double saldoInicial, String nome, String cpf, String endereco) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
        this.cliente = new ContaCliente(numeroConta,saldoInicial,nome, cpf, endereco);
    }
    public void depositar(double valor) {
        saldo += valor;
    }
    public void sacar(double valor) {
        if (valor > saldo) {
            throw new IllegalArgumentException("Saldo insuficiente.");
        }
        saldo -= valor;
    }
// Outros métodos relevantes...
}
class ContaCliente {
    private String nome;
    private String cpf;
    private String endereco;

    public ContaCliente(String numeroConta, double saldoInicial,
                        String nome, String cpf, String endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
    }

    public String getNome() {
        return nome;
    }
    public String getCpf() {
        return cpf;
    }
    public String getEndereco() {
        return endereco;
    }
}