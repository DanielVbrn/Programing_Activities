package src.package_rede_social;

import java.util.Date;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Autor autor01 = new Autor(2,"Emanuel Santos Brito", "emanuel@gmail.com");
        Post post01 = new Post(10, "Olá Mundo!", autor01, new Date());
        Post post02 = new Post(11, "Testes Automatizados",autor01, new Date());

        RepositorioPosts repositore = new RepositorioPosts();

        repositore.saveData(post01);
        repositore.saveData(post02);

        List<Post> postsLidos = repositore.readFromFile();

        for (Post post : postsLidos) {
            System.out.println("ID: " + post.getId());
            System.out.println("Texto: " + post.getTexto());
            System.out.println("Autor" + post.getAutor());
            System.out.println("Data de publicação: " + post.getData());

        }
    }
}
