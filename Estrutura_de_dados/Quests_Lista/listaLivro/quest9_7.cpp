#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;



bool igual(Lista a, Lista b){
    if (a != NULL && b != NULL)
        if ( a->item == b->item) return igual(a->prox,b->prox);
        else return false;

        if (a == NULL && b == NULL) return true;
        else return false;
        
    
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