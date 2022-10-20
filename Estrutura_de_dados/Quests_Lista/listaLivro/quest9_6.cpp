#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


int substitui(Item x, Item y, Lista l){
    if (l != NULL){
       if (l->item == x){
            l->item = y;
        }
        return substitui(x, y, l->prox);
        
    }
    
    return 0;
    
}



main(){
    Lista l = include(45, include(32, include(25, include(67, NULL))));
    exibe(l);
    cout << "-------------------" << endl;
    substitui(45, 47, l);
    exibe(l);
}