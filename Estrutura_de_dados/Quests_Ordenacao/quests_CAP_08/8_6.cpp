#include <iostream>
#include <stdio.h>
#include "./ordenacoes.hpp"

main(){
    int v[] = {3, 10, 4, 5, 1, 11, -9};
    if(linearSearch(20 ,v, 7)) cout << "O elemento está no vetor" << endl;
    else cout << "Elemento não encontrado" << endl;   
}