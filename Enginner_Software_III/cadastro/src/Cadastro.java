package src.User;
import java.util.ArrayList;
import java.util.Scanner;
public class Cadastro {
    private ArrayList<User> users;

    private Cadastro() {
       users = new ArrayList<>();
    }

    public void addUser(User user) {
        users.add(user);
    }

    public void register () {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu id: ");
        String id = scanner.nextInt();
        if (id == null) {
            System.out.println("Campo obrigatório");
            return register();
        }

        System.out.print("Digite sua nome: ");
        String nome = scanner.nextLine();

        System.out.print("Digite seu idade: ");
        String idade = scanner.nextInt();


        User usuario = new User(id, nome, idade);
        cadastro.addUser(usuario);

    }

    public User getUsers () {
        return users;
    }

    public static void Main (String[] args) {
        Cadastro cadastro = new Cadastro();
        cadastro.register();

    }

}