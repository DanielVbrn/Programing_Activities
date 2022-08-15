#include <stdio.h>
#include <stdlib.h>

int main(){
    int r;
    int v;
    float pi;
    pi = 3.14;
    printf("Insira o raio da circunferencia: ");
    scanf("%d", &r);

    v = (4 * (r*r*r) * pi)/3;
    printf("Volume da esfera = %dm cubicos. ", v);

    return 0;
}