#include <stdio.h>
#include <stdlib.h>

int main(){
    int lado;
    int quadrado;
    printf("Insira o valor para o lado do quadrado: ");
    scanf("%d", &lado);
    quadrado = lado * lado;

    printf("Area = %dm quadrados", quadrado);
    return 0;


}