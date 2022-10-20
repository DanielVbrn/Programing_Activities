#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


int ultimo(Lista m){   
    while (m->prox != NULL){  
        m = m->prox;
    } 
    return m->item;
}



main(){
    int a;
    Lista l = include(45, include(32, include(25, include(67, NULL))));
    
    exibe(l);
    cout << "-------------------" << endl;
    a = ultimo(l);
    cout << a << endl;
}