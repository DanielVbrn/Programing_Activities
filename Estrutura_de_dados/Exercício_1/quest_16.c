#include <stdio.h>
#include <stdlib.h>

int main(){
    int km;
    int m;
    printf("Insira um valor em Km: ");
    scanf("%d", &km);
    m = km * 1000;

    printf("O valor em metros é = %dm", m);
    return 0;
}