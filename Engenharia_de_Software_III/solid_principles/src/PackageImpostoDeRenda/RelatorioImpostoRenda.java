package src.PackageImpostoDeRenda;

public class RelatorioImpostoRenda {
    public void gerarRelatorio(ImpostoDeRenda impostoDeRenda, double impostoDevido) {
        System.out.println("CPF: " + impostoDeRenda.getCpfContribuinte());
        System.out.println("Rendimentos: " + impostoDeRenda.getRendimentos());
        System.out.println("Despesas: " + impostoDeRenda.getDespesas());
        System.out.println("Imposto Devido: " + impostoDevido);
    }
}