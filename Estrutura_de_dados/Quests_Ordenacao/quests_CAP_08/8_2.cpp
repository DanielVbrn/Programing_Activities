#include <iostream>
#include <stdio.h>
#include <string.h>
#include "./ordenacoes.hpp"

main(){
    char vetor[7] = {'D', 'A', 'N', 'I', 'E', 'L'} ;
    insertion_sort_Char(vetor,6);
    mostrarInsertion(vetor, 6);
}

