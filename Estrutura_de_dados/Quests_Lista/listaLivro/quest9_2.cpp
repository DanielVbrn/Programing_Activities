#include <stdio.h>
#include <iostream>
#include "quest9_1.hpp"
using namespace std;


void ocorrencia(Item a, Lista l){
int b = 0;
    while (l != NULL){
        if (l->item == a)
        {            
            b++;
        }        
        l = l->prox;
    }
    cout << "O numero " << a << " ocorre " << b << " vezes " << endl; 

}


main(){
    Lista l = include(45, include(20,NULL));
    exibe(l);
    cout << "--------------------" << endl;
    Lista m = include(22, include(15, include(48, NULL)));
    m = include(22,m);
    m = include(15,m);
    m = include(48,m);
    m = include(48,m);
    exibe(m);

    // destroi(&l);
    cout << "-------------------------" << endl;
    ocorrencia(48, m);
    
    

    
}
