#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
#include "listaOrdenada.hpp"
using namespace std;



main(){
    int num,value;
    int count = 0;
    cout << "Insira quantos números deseja: " << endl;
    cin >> value;
    Lista list = NULL;
    Lista *l;
    l = &list;
    
    while (count < value){
        cout << "Valor: " << endl;
        cin >> num;
        insert(num,l);
        count++;
    }
    cout << "Lista invertida: " << endl;
    decrescente(l);    
    
    // showList(l);
    // cout << "----------------" << endl;
    
}

