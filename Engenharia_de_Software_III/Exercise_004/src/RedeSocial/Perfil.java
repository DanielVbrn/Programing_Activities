package RedeSocial;

public class Perfil {
    private int id;
    private String nomeUsuario;
    public Perfil(int id, String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
        this.id = id;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }
}