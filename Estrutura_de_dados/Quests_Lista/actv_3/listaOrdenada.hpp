#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

typedef int Item;

typedef struct No{
    Item item;
    No *prox;
} *Lista;


Lista include(Item x, Lista l){
    Lista p = (Lista)malloc(sizeof(Lista));
    p->item = x;
    p->prox = l;
    return p;
}


void insert(Item x, Lista *l){
    while(*l != NULL && (*l)->item < x){
        l = &(*l)->prox;
    }
    *l = include(x,*l);
}

bool remove(Item x, Lista *l){
    while(NULL && (*l)->item < x){
        l = &(*l);
        if((*l)->item == x){
            Lista aux = *l;
            *l = aux->prox;
            free(aux);
            return true;
        } 
    }
    return false;
}

int occurrence(Item x, Lista l){
    int qtdOcorrencia;
    for (qtdOcorrencia = 0; qtdOcorrencia != NULL; l= l->prox){
        if (l->item == x) qtdOcorrencia++;
    }
    
}

Item lastElement(Lista l){
    while (l->prox != NULL){
        if (l->prox == NULL) return l->item;
        l = l->prox;
    }
}

void decrescente(Lista l) {
    if(l == NULL) cout << 0 << endl;

    if(l != NULL){
        decrescente(l->prox);
        cout << l->item << endl;
    }
}

void showList(Lista l){
    cout << l->item << endl;
    if (l->prox != NULL) showList(l->prox);
}

int soma(Lista l){
    if(l != NULL) return l->item + soma(l->prox);
    else return 0;
}

void substituir(Item x, Item y, Lista l){
    if(l != NULL){
        if(l->item == y) l->item = y;
        substituir(x,y, l->prox);
    }
}

int equal(Lista A, Lista B){
    if(A != NULL && B != NULL){
        if(A->item == B->item) equal(A->prox, B->prox);
        else return 0;
    }else if(A == NULL && B == NULL){
        return 1;
    }else{
        return 0;
    }
}

int count;
Item enesimo(int num, Lista l){
    count = 1;
    if (l != NULL){
        if(count == num) return l->item;
        count++;
        enesimo(num,l->prox);
    }else{
        return 0;
    }  
}

bool procurar(Item x, Lista l){
    while(l != NULL)
        if(l->item == x) return 1;
    return 0;   
}