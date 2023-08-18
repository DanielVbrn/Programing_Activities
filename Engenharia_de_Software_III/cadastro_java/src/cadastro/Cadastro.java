package cadastro;
import java.util.ArrayList;
import java.util.Scanner;
public class Cadastro {
    public ArrayList<User> users = new ArrayList<>();
    Scanner scanner = new Scanner(System.in);

    public void addUser(User user) {
        users.add(user);
    }

    public void register() {
        System.out.print("Digite seu id: ");
        int id = scanner.nextInt();

        System.out.print("Digite sua idade: ");
        int age = scanner.nextInt();

        System.out.print("Digite seu nome: ");
        String nome = scanner.next();

        System.out.print("Digite seu nome: ");
        String email = scanner.next();

        User usuario = new User(id, nome, age, email);
        addUser(usuario);
        System.out.println("Cadastro realizado com sucesso");
    }

    public void getUsers() {
        System.out.println("Lista de Usuários:");
        for (User user : users) {
            System.out.println("\nID: " + user.getId()
                    + "\n Nome: " + user.getName()
                    + "\n Email: " + user.getEmail()
                    + "\n Idade: " + user.getAge());
        }
    }

    public boolean getUsersById(int userId) {
        for (User user: users) {
            if(user.getId() == userId) {
                return true;
            }

        }
        return false;
    }



}