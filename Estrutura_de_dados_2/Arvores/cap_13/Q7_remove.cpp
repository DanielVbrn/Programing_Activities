#include "iostream"
#include "stdio.h"
#include "stdlib.h"
#include "./first_arvore.hpp"
using namespace std;

void printTreeFormated(NoArv* raiz_No){
    if(raiz_No != NULL){
        cout << "<" << raiz_No->info;

        printTreeFormated(raiz_No->esq);
        printTreeFormated(raiz_No->dir);
        cout << ">";
    }
}

void moveNo(NoArv* raiz_No){
    if(arv_vazia()) return;
    moveNo(raiz_No->dir);
    moveNo(raiz_No->esq);
    free(raiz_No);
    raiz_No = NULL;
}


int remove_No(NoArv* raiz_no, int value){
    if(arv_vazia()) return 0;
    if(raiz_no->info == value){
        moveNo(raiz_no);
        raiz_no = NULL;
        return 1;
    }  

    if(raiz_no->dir != NULL && raiz_no->dir->info == value){
        moveNo(raiz_no->dir); 
        raiz_no->dir = NULL; 
        return 1;
    }

    if(raiz_no->esq != NULL && raiz_no->esq->info == value){
        moveNo(raiz_no->esq);    
        raiz_no->esq = NULL;   
        return 1;

    }

    return remove_No(raiz_no->esq, value) + remove_No(raiz_no->dir, value);
}


main(){
     NoArv* arv = arv_cria(
                    1,
                    arv_cria(
                        2,
                        arv_cria(4,NULL,NULL),
                        arv_cria(5,NULL,NULL)
                    ),
                    arv_cria(
                        3,NULL,arv_cria(6,NULL,NULL)
                    )
                );
    // arv_imprime(arv);
   
    printTreeFormated(arv);
    remove_No(arv, 4);
    printTreeFormated(arv);
    // arv_imprime(arv);
}


