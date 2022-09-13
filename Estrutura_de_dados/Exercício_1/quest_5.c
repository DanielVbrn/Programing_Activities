#include <stdio.h>
#include <stdlib.h>

int main(){
    int num[3];
    int num_invertido;
    int i;
    int j;
    i = num;
    j = 0;
    printf("Insira um número de 3 dígitos: ");
    scanf("%d", &num);
    while(i > 0){
        num_invertido = num[i];
        while(j < num){
            num_invertido = num[j];
            i--;
            j++;

        }
    }

    printf("Número invertido: %d", num_invertido);

    return 0;
}