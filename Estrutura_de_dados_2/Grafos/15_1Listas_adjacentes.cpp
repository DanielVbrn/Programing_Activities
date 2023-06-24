#include "iostream"
#include "list"

using namespace std;


// Classe para representar um grafo direcionado usando listas de adjacências

class Grafo {
    int qtdVertices;

    list<int> *adj;
    public:
        Grafo(int qtdVertices){
            this->qtdVertices = qtdVertices;
            adj = new list<int>[qtdVertices];
        }

        void addAresta(int v1, int v2) {
            adj[v1].push_back(v2);
        }

        void imprimeGrafo() {
            for(int i = 0; i < qtdVertices; i++){
                cout << "Vértice " << i << ": ";
                for( auto it = adj[i].begin(); it != adj[i].end(); ++it){
                    cout << *it <<  " ";

                }
                cout << endl;
            }
        }


};

int main(){
    Grafo grafo(7);

    grafo.addAresta(0, 1);
    grafo.addAresta(0, 4);
    grafo.addAresta(1, 2);
    grafo.addAresta(1, 3);
    grafo.addAresta(1, 4);
    grafo.addAresta(2, 3);
    grafo.addAresta(3, 4);

    grafo.imprimeGrafo();     
    
    return 0;
}