#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Grafo {
private:
    int numVertices;
    vector<vector<int>> adjacencias;

public:
    Grafo(int numVertices) : numVertices(numVertices), adjacencias(numVertices) {}

    void adicionarAresta(int origem, int destino) {
        adjacencias[origem].push_back(destino);
    }

    vector<int> ordenacaoTopologica() {
        vector<int> grauEntrada(numVertices, 0);
        for (int i = 0; i < numVertices; i++) {
            for (int vizinho : adjacencias[i]) {
                grauEntrada[vizinho]++;
            }
        }

        vector<int> ordem;
        queue<int> fila;

        for (int i = 0; i < numVertices; i++) {
            if (grauEntrada[i] == 0) {
                fila.push(i);
            }
        }

        while (!fila.empty()) {
            int no = fila.front();
            fila.pop();
            ordem.push_back(no);

            for (int vizinho : adjacencias[no]) {
                grauEntrada[vizinho]--;
                if (grauEntrada[vizinho] == 0) {
                    fila.push(vizinho);
                }
            }
        }

        if (ordem.size() != numVertices) {
            cout << "O grafo contém um ciclo!" << endl;
            return vector<int>();
        }

        return ordem;
    }
};

int main() {
    Grafo grafo(6);
    grafo.adicionarAresta(0, 1);
    grafo.adicionarAresta(0, 2);
    grafo.adicionarAresta(1, 3);
    grafo.adicionarAresta(2, 3);
    grafo.adicionarAresta(2, 4);
    grafo.adicionarAresta(3, 5);
    grafo.adicionarAresta(4, 5);

    vector<int> ordem = grafo.ordenacaoTopologica();

    if (!ordem.empty()) {
        cout << "Ordem topológica: ";
        for (int no : ordem) {
            cout << no << " ";
        }
        cout << endl;
    }

    return 0;
}
