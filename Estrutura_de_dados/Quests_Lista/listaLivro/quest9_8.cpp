#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


int enesimo(int posicao, Lista l){
    if (l->prox == NULL || posicao < 1){
        return -1;
        
    }
    if (posicao == 1){
        return l->item;
    }else{        
        return enesimo(posicao - 1,l->prox);
    }
    
    return 0;
    
    
}


main(){
    Lista l = include(45, include(32, include(25, include(67, NULL))));
    exibe(l);
    cout << "-------------------" << endl;
    cout << "Enésimo termo: " << enesimo(2,l) << endl;
}