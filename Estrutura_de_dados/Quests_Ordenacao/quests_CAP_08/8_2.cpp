#include <iostream>
#include <stdio.h>
#include "./ordenacoes.hpp"

main(){
    int vetor[5] = {8, 4, 3, 9, 10} ;
    insertion_sort(vetor,5);
    mostrarInsertion(vetor);
}