#include <stdio.h>
#include <stdlib.h>

int main(){
    int r;
    int c;
    float pi;
    pi = 3.14;
    printf("Insira o raio da circunferencia: ");
    scanf("%d", &r);

    c = (2 * r * pi);
    printf("Comprimento da circunferencia = %d ", c);

    return 0;
}