#include <iostream>
#include "listaOrdenada.hpp"
using namespace std;

typedef struct poli {
    float coeficiente = NULL;
    int expoente = NULL;
    struct poli *prox = nullptr;
} *Polinomio;

Polinomio termo(float coef, int exp, Polinomio x){
    Polinomio p = (Polinomio)(malloc(sizeof(struct poli)));
    p->coeficiente = coef;
    p->expoente = exp;
    p->prox = x;
    return p;

}

void adt(float coef, int exp, Polinomio *p){
    if (*p == NULL || (*p)->expoente < exp){
        *p = termo(coef, exp, *p);
    } else if ((*p)->expoente == exp){
        (*p)->expoente = (*p)->coeficiente + coef;
        if((*p)->coeficiente == 0){
            Polinomio aux = *p;
            *p = aux->prox;
            free(aux);
        }
    } else {
        adt(coef, exp, &(*p)->prox);
    }
}

Polinomio soma(Polinomio A, Polinomio B){
    Polinomio somaP = termo(A->coeficiente, B->expoente,NULL);
    adt(B->coeficiente, B->expoente, &somaP);
    return somaP;
}

void mostraPoli(Polinomio poli){
    if(poli == NULL) return ;
    cout << "+" << poli->expoente;
    if(poli->expoente != 0) cout << "*x^" << poli->expoente;
    mostraPoli(poli->prox); 
}

main(){
    Polinomio poli_A;
    Polinomio poli_B;
    Polinomio soma_A_B;
    poli_A = termo(4, 7, NULL);
    poli_B = termo(9, 2, NULL);
    soma_A_B = soma(poli_A, poli_B);
    mostraPoli(soma_A_B);
}