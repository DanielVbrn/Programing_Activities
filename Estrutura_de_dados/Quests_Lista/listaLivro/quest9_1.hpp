#include <stdio.h>
#include <iostream>


using namespace std;

typedef int Item;
typedef struct no {
    Item item;
    struct no *prox;
} * Lista;

Lista include(Item x, Lista p){
    Lista n = (Lista)malloc(sizeof(Lista));
    n->item = x;
    n->prox = p;
    return n;
    
    
}
void anexa(Lista a, Lista b){
    if (b == NULL) return ;
    while (a->prox != NULL)
    {
        a = a->prox;
        a->prox = b;
    }

    
}


void exibe(Lista l){
    while (l != NULL)
    {
        cout << l->item << endl;
        l = l->prox;
    }
    
}

void destroi(Lista *l){
    while (*l != NULL)
    {
        Lista n = *l;
        *l = n->prox;
        free(n);
    }
    
}

