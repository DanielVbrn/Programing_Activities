#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


int soma(Lista l){
    if (l == NULL) return 0;
      
    return l->item + soma(l->prox); 
}


main(){
    int a;
    Lista l = include(45, include(32, include(25, include(67, NULL))));
    exibe(l);
    cout << "-------------------" << endl;
     
    a = soma(l);
    cout <<"Soma: " << a << endl;
}