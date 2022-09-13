#include <stdio.h>
#include <stdlib.h>

int main(){
    int b;
    int h;
    int area;
    printf("Insira a base do retangulo: ");
    scanf("%d", &b);
    printf("Insira a altura do retangulo: ");
    scanf("%d", &h);

    area = b*h;
    printf("Area = %dm quadrados", area);

    return 0;
}