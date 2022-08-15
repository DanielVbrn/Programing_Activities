#include <stdio.h>
#include <stdlib.h>

int main(){
    float real;
    float perccentual;
    printf("Insira um valor em real: ");
    scanf("%f", &real);
    perccentual = (real * 0.70);
    printf("O valor percnetual será de: R$ %.2f", perccentual);

    return 0;
}