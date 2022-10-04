#include <iostream>
#include <stdlib.h>
#include <string.h>
#include "../Pilha/pilhaChar.h"
#include <queue>


using namespace std;

typedef char Itemf;         //tipo dos itens


typedef struct fila{
    int maximo;         //capacidade da fila
    int total;            // total de itens guardados na fila
    int inicio;           // posicao inicio
    int fim;               // posicao final
    Itemf *item;
}*Fila;

Fila fila(int a){
    Fila f = malloc (sizeof(struct fila));         //malloc aloca a área de memória onde a estrutura de fila será criada, cujo tamanho em bytes

    f->maximo = 0;
    f->total = 0;
    f->inicio = 0;
    f->fim = 0;
    f->item = malloc(a*sizeof(Itemf));
    return f;
}



int empytF(Fila f){
    return (f->total == 0);
}


int fullF(Fila f){
    return (f->total == f->maximo);
}

void enfileira(Itemf b, Fila f){
    if(fullF(f)){
        cout << "fila cheia!";
    }
    f->item[f->final];
    a
}



void desenfileia(Itemf b, Fila f){
    if(empytF(f)){
        cout << "fila cheia!";
    }
    
}




