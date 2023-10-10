package src.PackageImpostoDeRenda;

public class ValidacaoImpostodeRenda {
    public static boolean validarImpostoDeRenda(ImpostoDeRenda impostoDeRenda) {
        if (impostoDeRenda.getCpfContribuinte() == null || impostoDeRenda.getCpfContribuinte().isEmpty()) {
            System.out.println("CPF não pode ser vazio.");
            return false;
        }


        if (impostoDeRenda.getCpfContribuinte().length() != 11) {
            System.out.println("CPF deve ter 11 caracteres.");
            return false;
        }

        if (impostoDeRenda.getRendimentos().stream().anyMatch(r -> r < 0) ||
                impostoDeRenda.getDespesas().stream().anyMatch(d -> d < 0)) {
            System.out.println("Rendimentos e despesas não podem ser negativos.");
            return false;
        }

        if (impostoDeRenda.getRendimentos().size() > 5) {
            System.out.println("Não podem existir mais que 5 rendimentos.");
            return false;
        }

        return true;
    }
}
