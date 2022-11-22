#include <iostream>
#include <stdio.h>
#include "./ordenacoes.hpp"


main(){
    int v[] = {3, 10, 4, 5, 1, 11, -9};
    if(binarySearch(4, v, 0, 3)) cout << "Numero encontrado";
    else cout << "Numero não encontrado";
}