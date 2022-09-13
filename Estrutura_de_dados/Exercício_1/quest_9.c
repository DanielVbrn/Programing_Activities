#include <stdio.h>
#include <stdlib.h>

int main(){
    int b;
    int h;
    int area;

    printf("Insira o valor da base do triângulo: ");
    scanf("%d", &b);
    printf("Insira o valor da altura do triângulo: ");
    scanf("%d", &h);

    area = (b * h)/2;

    printf("-------------------------//////////////////-----------------------\n\n\n");
    printf("O valor da área do triângulo é: %d", area);

    return 0;
}