#include <stdio.h>
#include <stdlib.h>

int main(){
    float C;
    float F;
    printf("Insira uma temperatura em graus Celsius: ");
    scanf("%f", &C);

    F = ((9*C)+160)/5;
    printf("O valor em graus F = %f", F);

    return 0;
}