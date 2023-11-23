package RedeSocial;

public class Reacao implements  Publicavel{
    private String tipoReacao;
    private  Postagem postagem;
    
    
    public Reacao(String id, Perfil autor, String tipoReacao) {
        this.tipoReacao = tipoReacao;
        this.postagem = new Postagem(id, autor, tipoReacao);
    }


    public void exibir() {
        System.out.println("Reação [" + tipoReacao + "] de " + postagem.getAutor().getNomeUsuario() + " na postagem " + postagem.getId());
    }



}