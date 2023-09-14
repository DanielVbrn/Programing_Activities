
class Cliente {
    private int id;
    private String nome;
    private String endereco;

    public Cliente(int id, String nome, String endereco) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }
    public String exibirInformacoes() {
        return
                "ID: " + this.id + "\n" +
                "Nome: " + this.nome + "\n" +
                "Endereço: " + this.endereco;
    }

}

class Conta {
    private int numeroConta;
    private double saldo;
    public Cliente cliente;

    public Conta (int numeroConta, Cliente cliente){
        this.cliente = cliente;
        this.numeroConta = numeroConta;
        this.saldo = 1000;
    }


    public  void atualizarSaldo(double valor) {
        this.saldo -= valor;
    }

    public double getSaldo() {
        return this.saldo;
    }

}


class Compra {

    public static void main(String[] args) {
        Cliente cliente = new Cliente(10, "Daniel Vitor", "Osasco, São Paulo.");
        Conta conta = new Conta(1, cliente);

        conta.atualizarSaldo(200);
        System.out.println("Cliente: " + "\n" + cliente.exibirInformacoes() + "\n" +  "Saldo: " + conta.getSaldo());
        System.out.print("Compra realizada com sucesso!");
    }

}


