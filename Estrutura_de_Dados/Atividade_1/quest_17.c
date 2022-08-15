#include <stdio.h>
#include <stdlib.h>

int main(){
    int kg;
    int g;
    printf("Insira uma quantidade em Kg: ");
    scanf("%d", &kg);
    g = kg * 1000;

    printf("O quantidade de gramas é = %dg", g);
    return 0;
}