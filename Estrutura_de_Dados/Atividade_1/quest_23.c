#include <stdio.h>
#include <stdlib.h>

int main(){
    float num1, num2, num3;
    float media;
    printf("Insira um número: ");
    scanf("%f", &num1);
    printf("Insira um número: ");
    scanf("%f", &num2);
    printf("Insira um número: ");
    scanf("%f", &num3);

    media = (num1+num2+num3)/3;

    printf("A média da soma seá: %.2f", media);


    return 0;
}