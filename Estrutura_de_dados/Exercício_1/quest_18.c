#include <stdio.h>
#include <stdlib.h>

int main(){
    int m;
    int cm;
    printf("Insira um valor em metros: ");
    scanf("%d", &m);
    cm = m * 100;

    printf("O valor em centimetros é = %dcm", cm);
    return 0;
}