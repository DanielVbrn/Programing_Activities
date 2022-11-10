#include <iostream>
#include <stdio.h>
#include <string.h>
#include "./ordenacoes.hpp"


main(){
    int vetor[6] = {7, 6, 8, 13, 2, 5} ;
    bubbleSort(6, vetor);
    mostrarInsertion(vetor,6);
}