package PackageImpostoDeRenda;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;




public class Main {
    public static void main(String[] args) {
        List<Double> rendimentos = new ArrayList<>(Arrays.asList(5000.0, 3000.0, 2000.0));
        List<Double> despesas = new ArrayList<>(Arrays.asList(1000.0, 500.0, 800.0));
        List<ValidacaoImpostodeRenda> validar = new ArrayList<>();
        ImpostoDeRenda impostoDeRenda = new ImpostoDeRenda("06745678965", rendimentos, despesas);
        impostoDeRenda.processar(validar);
    }
}


