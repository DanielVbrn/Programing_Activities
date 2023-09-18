import java.util.List;
import java.util.ArrayList;

public class Relacionamento {
    Usuario usuario;

    public Relacionamento(Usuario usuario) {
        this.usuario = usuario;
    }
}

public class Usuario {
    private int id_user;
    String name;
    private List<Relacionamento> amigos = new ArrayList<>();

    public Usuario(int id_user, String name) {
        this.id_user = id_user;
        this.name = name;
    }

    public void adicionarAmigo(Usuario amigo) {
        Relacionamento relacionamento = new Relacionamento(amigo);
        amigos.add(relacionamento);
    }

    public String getName() {
        return this.name;
    }

    public List<Relacionamento> getListFriends() {
        return this.amigos;
    }

    public String getFriends() {
        StringBuilder listaAmizades = new StringBuilder();
        for (Relacionamento relacionamento : amigos) {
            listaAmizades.append(r  elacionamento.usuario.getName()).append(", ");
        }
        if (!amigos.isEmpty()) {
            listaAmizades.setLength(listaAmizades.length() - 2); // Remove a vírgula e o espaço extras no final
        }
        return listaAmizades.toString();
    }

    public static void Main(String[] args) {
        Usuario usuario = new Usuario(1, "Daniel");
        Usuario usuario = new Usuario(2, "Marcos");
        Relacionamento amigos = new Relacionamento(usuario);

    }
}
