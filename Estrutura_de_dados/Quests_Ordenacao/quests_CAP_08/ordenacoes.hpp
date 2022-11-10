#include <iostream>
#include <stdio.h>
using namespace std;


#define troca(a,b) {int x = a; a = b; b = x;}

void insere(int x, int v[], int n){
    while (n > 0 && x < v[n-1]){
        v[n] = v[n-1];
        n--;
    }
    v[n] = x;
}

void insereChar(char x, char v[], int n){
    while (n > 0 && x < v[n-1]){
        v[n] = v[n-1];
        n--;
    }
    v[n] = x;
}

void empurra(int v[], int n){
    for (int i = 0; i < n; i++){
        if(v[i] > v[i+1]) troca(v[i], v[i+1]);
    }
    
}

void bubbleSort(int quant, int *vetor){
    int i = quant;
    if (i >= 1) {
        empurra(vetor, vetor[i+1]);
        bubbleSort(i-1, vetor);
    } else {
        return;
    }
    
}



void insertion_sort_Char(char v[], int n){
    for (int i = 0; i < n; i++){
        insereChar(v[i], v, i);
    }
    
}



void mostrarInsertionCHar(char v[], int n){
    int i = 1;
    for (int i = 0; i < n; i++)
    {
        cout << v[i] << endl;
    }
    
    
}
void mostrarInsertion(int v[], int n){
    for (int i = 0; i < n; i++){
        cout << v[i] << endl;
    }
    
    
}