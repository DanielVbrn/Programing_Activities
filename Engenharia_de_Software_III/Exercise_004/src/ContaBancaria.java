// 1 - A herança entre as classes ContaBancaria e ContaPoupanca pode ser questionável devido ao fato de que a classe
// derivada (ContaPoupanca) adiciona uma restrição ao método sacar que não está presente na classe base (ContaBancaria).
// Isso pode levar a uma quebra do princípio de substituição de Liskov, que afirma que os objetos de uma classe derivada
// devem ser capazes de substituir objetos da classe base sem afetar a corretude do programa.

// Resposta - A herança é apropriada quando há uma relação de "é um" entre as classes envolvidas, ou seja, quando a
// classe derivada é uma especialização da classe base. Uma solução alternativa seria usar a composição, onde a classe
// ContaPoupanca contém uma instância de ContaBancaria em vez de estender diretamente.



public class ContaBancaria {
    private double saldo;
    public ContaBancaria(double saldoInicial) {
        this.saldo = saldoInicial;
    }
    public void depositar(double valor) { saldo += valor; }
    public void sacar(double valor) { saldo -= valor; }
}


class ContaPoupanca {
    private ContaBancaria contaBancaria;

    public ContaPoupanca(ContaBancaria contaBancaria) {
        this.contaBancaria = contaBancaria;
    }

    public ContaBancaria getContaBancaria() {
        return contaBancaria;
    }

    public void sacar(double valor) {
        if (valor > 1000) {
            throw new RuntimeException("Não pode sacar mais de 1000 em uma poupança");
        }
        contaBancaria.sacar(valor);
    }
}