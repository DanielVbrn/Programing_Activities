#include "iostream"
#include "stdlib.h"
#include "queue"

using namespace std;



struct noArv{
    int info;
    struct noArv* esq;
    struct noArv* dir;
};

typedef struct noArv NoArv;

NoArv* arv_vazia(){
    return NULL;
};

NoArv* arv_cria(int c, NoArv* sae, NoArv* sad){
    NoArv* p = (NoArv*)malloc(sizeof(NoArv));
    p->info = c;
    p->esq = sae;
    p->dir = sad;
    return p;
};


void arv_imprime(NoArv* raiz){
    if(!arv_vazia()){
        cout << raiz->info << endl;
        arv_imprime(raiz->esq);
        arv_imprime(raiz->dir);
        cout << '>';
    };
};

void amplitude(NoArv* raiz){
    queue<NoArv*> fila;
    fila.push(raiz);
    NoArv* node;

    while(!fila.empty()){
        node = fila.front();
        fila.pop();
        cout << node->info;
        if(node->esq != NULL){
            fila.push(node->esq);

        }
        if(node->dir != NULL){
            fila.push(node->dir);
        };
    }
}

int qtdNos(NoArv* raiz){
    if(raiz == NULL)return 0;
    return qtdNos(raiz->esq) + qtdNos(raiz->dir) + 1;
}

int qtdfolhas(NoArv* raiz){
    if(raiz == NULL)return 0;
    if(raiz->esq == NULL && raiz->dir == NULL){
        return 1;
    }

    return qtdfolhas(raiz->esq) + qtdfolhas(raiz->dir);
}

int alturaArv(NoArv* raiz){
    if(raiz == NULL)return 0;
    int left = alturaArv(raiz->esq);
    int right = alturaArv(raiz->dir);

    if(left > right){
        return left + 1;
    }
    return right + 1;

}

bool treeContain(NoArv* raiz, int Item){
    if(raiz == NULL){
        return false;
    }
    if(raiz->info == Item){
        return true;
    }

    return treeContain(raiz->esq, Item) || treeContain(raiz->dir, Item);
}


