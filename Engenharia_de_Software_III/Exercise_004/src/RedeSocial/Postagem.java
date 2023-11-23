package RedeSocial;
interface Publicavel {
    void exibir();
    Perfil getAutor();
}

public class Postagem implements Publicavel{
    private String id;
    private Perfil autor;
    private String conteudo;
    public Postagem(String id, Perfil autor, String conteudo) {
        this.id = id;
        this.autor = autor;
        this.conteudo = conteudo;
    }
    public void exibir() {
        System.out.println("Postagem [" + id + "] de " + autor.getNomeUsuario() +
                ": " + conteudo);
    }

    public String getId() {
        return id;
    }

    public Perfil getAutor() {
        return autor;
    }

    public String getConteudo() {
        return conteudo;
    }

}
