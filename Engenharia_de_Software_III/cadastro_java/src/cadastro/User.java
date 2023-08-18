package cadastro;
public class User {
    private final int id;
    private final String nome;
    private final int age;

    private final String email;

    public User(int id, String nome,int age, String email) {
        this.id = id;
        this.nome = nome;
        this.age = age;
        this.email = email;
    }

    public String getName () {
        return this.nome;
    }

    public int getAge () {
        return this.age;
    }
    public int getId () {
        return this.id;
    }

    public String getEmail() { return this.email; }

}

