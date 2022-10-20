#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


int igual(Lista a, Lista b){
    if (a != NULL && b != NULL){
        while (a->prox != NULL){
            while (b->prox != NULL){
               if ( a->item != b->item){
                    return 0;
               }
               a = a->prox;
               b = b->prox;
            }
            return 1;
            
        }
        
        
    }
    
    
}


main(){
    Lista l = include(45, include(32, include(25, include(67, NULL))));
    Lista m = include(45, include(32, include(25, include(67, NULL))));
    Lista k = include(45, include(32, include(90, include(67, NULL))));
    exibe(l);
    cout << "-------------------" << endl;
    cout << igual(l, m) << endl;
    cout << igual(l, k) << endl;
}