#include <iostream>
#include <stdio.h>
#include "./ordenacoes.hpp"

main(){
    int v[] = {3, 10, 4, 5, 1, 11, -9};
    int i = 0;
    selecionaSort(v, 7);
    do{
        cout << v[i] << " "<< endl;
        i++;
    } while (i < 7);
    
}