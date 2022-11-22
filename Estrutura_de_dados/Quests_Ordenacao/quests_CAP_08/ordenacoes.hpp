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

void insertion_sort(int v[], int n){
    if(n == 1) return ;
    n--;
    insertion_sort(v, n);
    insere(v[n], v, n); 
}

bool linearSearch(int x, int v[], int n){
    if(n == 0) return 0;
    if(v[n] == x) return 1;
    n--;
    return linearSearch(x, v, n);
}

bool binarySearch(int x, int v[], int p, int u){
    int a = (u+p)/2;

    if(x == v[a]) return true;

    if(x < v[a]) p = a-1;
    else u = a+1;

    if(p < u) return false;
    
    return binarySearch(x, v, p, u);
}

int particiona (int v[], int p, int u) {
    int x = v[p];
    p--;
    u++;
    while(p<u){
        do u--; while(v[u] > x);
        do p++; while(v[p] < x);
        if (p < u) troca(v[p], v[u]);
    }
    return u;
}

void quick_Sort(int v[], int p, int u){
    if(p >= u) return;
    int m = particiona(v, p, u);
    quick_Sort(v, p, m);
    quick_Sort(v, m+1, u);
}


void insereChar(char x, char v[], int n){
    while (n > 0 && x < v[n-1]){
        v[n] = v[n-1];
        n--;
    }
    v[n] = x;
}

void insertion_sort_Char(char v[], int n){
    for (int i = 0; i < n; i++){
        insereChar(v[i], v, i);
    }
    
}

void empurra(int v[], int n) {
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

int seleciona(int v[], int n){
    int i = 0;
    for (int j = 0; i < j; i++){
        if(v[i] < v[j]) i = j;
    }
    return i;
    
}

void selecionaSort(int v[], int n){
    if(n == 0) return;
    troca(v[seleciona(v, n)], v[n-1]);
    n--;
    selecionaSort(v, n);
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