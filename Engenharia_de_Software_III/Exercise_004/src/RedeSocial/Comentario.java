package RedeSocial;



public class Comentario implements Publicavel{
    private Postagem postagemOriginal;
    public Comentario(String id, Perfil autor, String conteudo, Postagem
            postagemOriginal) {

        this.postagemOriginal = new Postagem(id, autor, conteudo);
    }

    public void exibir() {
        System.out.println("Comentário de " + postagemOriginal.getAutor().getNomeUsuario() + " em resposta a " +
                "postagem [" + postagemOriginal.getId() + "]: " + postagemOriginal.getConteudo());
    }


}