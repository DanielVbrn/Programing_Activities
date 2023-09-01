package ContaBancariaDepois;

import java.util.ArrayList;
// import java.util.Scanner;

public class Execucao {
    public static void main(String[] args) {
        // Scanner scanner = new Scanner(System.in);

        // System.out.println("Digite um número para sua conta: ");
        // int numero = scanner.nextInt();

        // System.out.println("Digite seu nome: ");
        // String nomeTitular = scanner.next();
        ArrayList<Conta> contas = new ArrayList<>();
        Banco banco = new Banco();
        banco.createConta(4, "Daniel Vitor", 0 );
        banco.createConta(5, "Marcos Araújo", 0 );
        banco.depositar(300.0, 4);
        banco.depositar(200.0, 5);
        banco.transferir(5, 4, 100.0);
        banco.mostrarContas();

        // scanner.close();
    }
}
