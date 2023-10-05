package package_rede_social;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class RepositorioPosts {
    private String filePath;

    public RepositorioPosts(String filePath) {
        this.filePath = filePath;
    }

    public void saveData( Post post ) {
        try (FileWriter data = new FileWriter(filePath)){
            data.write("ID: " + post.getId()+ "\n");
            data.write("texto: " + post.getTexto()+ "\n");
            data.write("Autor: " + post.getAutor()+ "\n");
            data.write("Data: " + post.getData()+ "\n");
            data.write("Quantidade de likes: " + post.getQuantidadeDeLikes()+ "\n");
            data.write("\n" + "\n");
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
    }


    public List<Post> readFromFile() {
        List<Post> posts = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
            String line;
            Post post = null;
            while ((line = reader.readLine()) != null) {
                if (line.startsWith("ID: ")) {
                    int id = Integer.parseInt(line.substring(4));
                    String texto = reader.readLine().substring(7);
                    String nameAutor = reader.readLine().substring(10);
                    String datePost = reader.readLine().substring(10);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println(e.getMessage());
        }
        return posts;
    }
}
