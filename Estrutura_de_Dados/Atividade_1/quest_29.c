#include <stdlib.h>
#include <stdio.h>

int main(){
    int valor, notas, nota_50,nota_20, nota_10, nota_5, nota_2;
    printf("Insira um valor em reias qualquer:");
    scanf("%d", &valor);

    nota_50 = valor / 50;
    notas = valor%50;
    nota_20 = notas/20;
    notas = notas%20;
    nota_10 = notas/10;
    notas = notas%10;
    nota_5 = notas/5;
    notas = notas%5;
    nota_2 = notas/2;


    printf("Os valor digitado corresponde a %d cedulas de 50.\n", nota_50);
    printf("Os valor digitado corresponde a %d cedulas de 20.\n", nota_20);
    printf("Os valor digitado corresponde a %d cedulas de 10.\n", nota_10);
    printf("Os valor digitado corresponde a %d cedulas de 5.\n", nota_5);
    printf("Os valor digitado corresponde a %d cedulas de 2.\n", nota_2);


    return 0;
}