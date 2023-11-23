//3. Aplique o princípio LSP à implementação abaixo de forma que persistência seja um atributo da segunda classe.
// Crie um exemplo real com o resultado da refatoração.

import java.io.*;

public class Persistencia {
    public void salvar(String dados, String arquivo, PersistenciaStrategy persistencia) throws IOException {
        persistencia.salvarDados(dados, arquivo);
    }
}

interface PersistenciaStrategy {
    void salvarDados(String dados, String arquivo) throws IOException;
}

class PersistenciaJSON implements PersistenciaStrategy {
    @Override
    public void salvarDados(String dados, String arquivo) throws IOException {
        if (!dados.startsWith("{")) {
            throw new IllegalArgumentException("Os dados não estão no formato JSON.");
        }
        try (FileWriter writer = new FileWriter(arquivo)) {
            writer.write(dados);
        }
    }
}
