package package_rede_social;

import java.util.Date;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Autor autor01 = new Autor(1,"Daniel Vitor", "dnvt@gmail.com");
        Post post01 = new Post(10, "Olá Mundo!", autor01, new Date());


        RepositorioPosts repositore = new RepositorioPosts("./filePosts.txt");

        repositore.saveData(post01);


        List<Post> postsLidos = repositore.readFromFile();

        for (Post post : postsLidos) {
            System.out.println("ID: " + post.getId());
            System.out.println("Texto: " + post.getTexto());
            System.out.println("Autor" + post.getAutor());
            System.out.println("Data de publicação: " + post.getData());

        }
    }
}
