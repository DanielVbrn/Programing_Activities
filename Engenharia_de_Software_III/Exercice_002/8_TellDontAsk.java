//Por que dizemos que o princípio ”Tell, don’t ask” mitiga problema de acoplamento. Demonstre.
//R: princípio enfatiza que objetos devem comunicar suas intenções uns aos outros, em vez de solicitar
//informações sobre o estado de outros objetos para tomar decisões.

class Pessoa {
    private int idade;

    public Pessoa(int idade) {
        this.idade = idade;
    }

    public int getIdade() {
        return idade;
    }

    public boolean podeAdotarGato() {
        return idade >= 18;
    }
}

class Gato {
    private String nome;

    public Gato(String nome) {
        this.nome = nome;
    }

    public void serAdotado(Pessoa pessoa) {
        if (pessoa.podeAdotarGato()) {
            System.out.println(pessoa.getIdade() + "-year-old pessoa adotou o gato " + nome + ".");
        } else {
            System.out.println(pessoa.getIdade() + "-year-old pessoa não pode adotar o gato " + nome + ".");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Pessoa pessoa1 = new Pessoa(25);
        Pessoa pessoa2 = new Pessoa(15);

        Gato gato1 = new Gato("Bobby");
        Gato gato2 = new Gato("Rex");

        gato1.serAdotado(pessoa1);
        gato2.serAdotado(pessoa2);
    }
}
