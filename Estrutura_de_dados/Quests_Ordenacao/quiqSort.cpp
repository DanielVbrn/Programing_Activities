#include <iostream>
#include <stdio.h>

using namespace std;

void Quick(int vetor[10], int inicio, int fim){
    int pivo, aux, i, j, meio;
    i = inicio;
    j = fim;
    meio = (int)((i + j) / 2);
    pivo = vetor[meio];
    do {
      while (vetor[i] < pivo) i = i + 1;
      while (vetor[j] > pivo) j = j + 1;
      if(i <= j){
        aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        i = i + 1;
        j = j - 1;
      }
      
    } while (j > i);
    if (inicio < j) {
        Quick(vetor, inicio, j);
    }
    if(i < fim) {
        Quick(vetor, i, fim);
    }
};


main(){
    int vetor[6] = {7, 9, 4, 3, 6, 1};
    int i;
    Quick(vetor, 0, 5);
    cout << "Vetor ordenado: " << endl;
    for ( i = 0; i <= 5; i++){
        cout << vetor[i] << endl;
    }
}