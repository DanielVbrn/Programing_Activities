import java.util.Scanner;

public class User {
    private int id;
    private String nome;
    private int idade;
    public User(int id, String nome,int idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade
    }

    public getName () {
        return this.nome;
    }

    public getAge () {
        return this.idade;
    }
    public getId () {
        return this.id;
    }

}

