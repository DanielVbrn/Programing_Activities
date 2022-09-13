#include <stdio.h>
#include <stdlib.h>

int main(){
    int F;
    int C;
    printf("Insira um valor em graus F: ");
    scanf("%d", &F);
    C = ((5*F)-160)/9;
    printf("O valor em gruas Celsius é = %d", C);

    return 0;
}