package packageCalculator;

import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        Calculadora calculadora = new Calculadora(10.0, 5.0);

        List<Operacao> operacoes = new ArrayList<>();
        operacoes.add(new Soma());
        operacoes.add(new Subtracao());

        List<Double> resultados = calculadora.calcular(operacoes);

        for (Double resultado : resultados) {
            System.out.println("Resultado: " + resultado);
        }
    }
}
