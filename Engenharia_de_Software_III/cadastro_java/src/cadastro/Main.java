package cadastro;
import java.util.Scanner;

public class Main {
    Cadastro cadastro;

    // O construtor foi removido, pois não é necessário

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Main main = new Main(); // Criar uma instância de Main
        main.cadastro = new Cadastro(); // Inicializar a instância de Cadastro

        while (true) {
            String menu = "\n\n<<<<<<<<< CADASTRO >>>>>>>>>\n\n";
            menu += "\n1 - Cadastro";
            menu += "\n2 - Listar usuários";
            menu += "\n0 - Sair";
            System.out.print(menu);
            System.out.print("\nEscolha uma opção: ");
            int option = scanner.nextInt();

            if (option == 1) {
                main.cadastro.register();
            }
            if (option == 2) {
                main.cadastro.getUsers();
            }
            if (option == 0) {
                break;
            }
        }
    }
}
