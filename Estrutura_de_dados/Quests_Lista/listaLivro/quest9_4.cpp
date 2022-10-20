#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


void inversa(Lista l){
    Lista atual = l;
    Lista proximo = atual->prox;
    Lista newList;
    while (proximo != NULL)
    {
        include(proximo->item,newList);
        proximo = proximo->prox;
    }
    
    
    
}

main(){
    Lista l = include(45, include(32, include(25, include(67, NULL))));
    exibe(l);
    cout << "-------------------" << endl;
    inversa(l);
}