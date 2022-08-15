#include <stdio.h>
#include <stdlib.h>

int main(){
    float velocidade_kmh;
    float velocidade_ms;
    printf("Insira a velocidade em kmh: ");
    scanf("%f", &velocidade_kmh);
    velocidade_ms = velocidade_kmh/3.6;
    printf("O valor em ms será: %.2f", velocidade_ms);



    return 0;
}