import java.util.Arrays;
import java.util.Random;

public class Utilitarios {
    int[] array;
    String texto;

    public Utilitarios(int[] array) {
        this.array = array;
    }

    public void ordenar() {
        Arrays.sort(this.array);
        System.out.print("Itens ordenados: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }

    public void embaralhar() {
        Random random = new Random();

        for (int i = this.array.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }

        System.out.print("Itens embaralhados: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }

    public void removerEspaco() {
        String texto = "Este é um exemplo de texto com espaços.";
        RemoverEspaco manipulator = new RemoverEspaco(texto);

        System.out.println("Texto original: ");
        System.out.println(texto);

        manipulator.removerEspaco();

        System.out.println("Texto após a remoção dos espaços: ");
        System.out.println(manipulator.getTexto());
    }

    public void quebrarEmPalavras() {
        String texto = "Este é um exemplo de texto com espaços.";
        QuebradorDePalavras quebraPalavras = new QuebradorDePalavras(texto);
        String[] palavras = quebraPalavras.getPalavras();

        System.out.println("Palavras: " + Arrays.toString(palavras));
    }

    public void calcularMedia() {
        double[] numeros = {1.0, 2.0, 3.0, 4.0, 5.0};
        CalculadoraMedia mediaCalculator = new CalculadoraMedia(numeros);
        double media = mediaCalculator.calcularMedia();

        System.out.println("Média: " + media);
    }

    public void calcularDesvioPadrao() {
        double[] numeros = {1.0, 2.0, 3.0, 4.0, 5.0};
        CalculadoraDesvioPadrao desvioPadrao = new CalculadoraDesvioPadrao(numeros);
        double desvioPadraoCalcular = desvioPadrao.calcularDesvioPadrao();

        System.out.println("Desvio Padrão: " + desvioPadraoCalcular);
    }

    public static void main(String[] args) {
        int[] array = new int[]{4, 6, 8, 9, 5, 7};
        Utilitarios utilitarios = new Utilitarios(array);
        utilitarios.ordenar();
        utilitarios.embaralhar();
        utilitarios.removerEspaco();
        utilitarios.quebrarEmPalavras();
        utilitarios.calcularMedia();
        utilitarios.calcularDesvioPadrao();
    }
}

class RemoverEspaco {
    String texto;

    public RemoverEspaco(String texto) {
        this.texto = texto;
    }

    public void removerEspaco() {
        if (texto != null) {
            texto = texto.replace(" ", "");
        }
    }

    public String getTexto() {
        return texto;
    }
}

class QuebradorDePalavras {
    private String[] palavras;

    public QuebradorDePalavras(String texto) {
        this.palavras = texto.split(" ");
    }

    public String[] getPalavras() {
        return palavras;
    }
}

class CalculadoraMedia {
    private double[] numeros;

    public CalculadoraMedia(double[] numeros) {
        this.numeros = numeros;
    }

    public double calcularMedia() {
        if (numeros.length == 0) {
            return 0.0;
        }

        double soma = 0.0;
        for (double numero : numeros) {
            soma += numero;
        }

        return soma / numeros.length;
    }
}

class CalculadoraDesvioPadrao {
    private double[] numeros;

    public CalculadoraDesvioPadrao(double[] numeros) {
        this.numeros = numeros;
    }

    public double calcularDesvioPadrao() {
        if (numeros.length == 0) {
            return 0.0; // Tratamento para evitar cálculo inválido
        }

        double media = new CalculadoraMedia(numeros).calcularMedia();
        double somaDiferencasQuadradas = 0.0;

        for (double numero : numeros) {
            double diferenca = numero - media;
            somaDiferencasQuadradas += diferenca * diferenca;
        }

        double variancia = somaDiferencasQuadradas / numeros.length;
        return Math.sqrt(variancia);
    }
}
