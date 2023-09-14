import java.util.ArrayList;
import java.util.List;

interface IConteudo {
    String getConteudo();
}

class Post implements IConteudo {
    private String conteudo;

    public Post(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getConteudo() {
        return conteudo;
    }
}

class Comentario implements IConteudo {
    private String conteudo;

    public Comentario(String conteudo) {
        this.conteudo = conteudo;
    }

    public String getConteudo() {
        return conteudo;
    }
}

class Usuario {
    private List<IConteudo> conteudos;

    public Usuario() {
        conteudos = new ArrayList<>();
    }

    public void criarConteudo(String conteudo, Class<? extends IConteudo> tipoConteudo) {
        if (tipoConteudo.equals(Post.class)) {
            Post novoPost = new Post(conteudo);
            conteudos.add(novoPost);
        } else if (tipoConteudo.equals(Comentario.class)) {
            Comentario novoComentario = new Comentario(conteudo);
            conteudos.add(novoComentario);
        } else {
            throw new IllegalArgumentException("Tipo de conteúdo não suportado");
        }
    }

    public void listConteudos() {
        for (IConteudo conteudo : conteudos) {
            System.out.println(conteudo.getConteudo());
        }
    }
}
