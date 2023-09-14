interface ICatalogo {
    void adicionarLivro(Livro livro);
}

public class Biblioteca {
    private ICatalogo catalogo;

    public Biblioteca(ICatalogo catalogo) {
        this.catalogo = catalogo;
    }

    public void adicionarLivro(Livro livro) {
        catalogo.adicionarLivro(livro);
        atualizarRegistro(livro);
    }

    private void atualizarRegistro(Livro livro) {
        System.out.println("Registrando livro: " + livro.getTitulo());
    }
}

class CatalogoImpl implements ICatalogo {
    private List<Livro> livros;

    public CatalogoImpl() {
        livros = new ArrayList<>();
    }

    public void adicionarLivro(Livro livro) {
        livros.add(livro);
    }
}

class Livro {
    private String titulo;

    public Livro(String titulo) {
        this.titulo = titulo;
    }

    public String getTitulo() {
        return titulo;
    }
}

public class TesteBiblioteca {
    public static void main(String[] args) {
        ICatalogo catalogo = new CatalogoImpl();
        Biblioteca biblioteca = new Biblioteca(catalogo);

        Livro livro1 = new Livro("Crônicas de nárnia");
        Livro livro2 = new Livro("Game of Thrones");

        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
    }
}
