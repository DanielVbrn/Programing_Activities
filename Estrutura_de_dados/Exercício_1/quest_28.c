#include <stdlib.h>
#include <stdio.h>

int main(){
    float Kg_latao, cobre, zinco;
    printf("Insira o valor em kg do latao: ");
    scanf("%f", &Kg_latao);

    cobre = Kg_latao * 0.7;
    zinco = Kg_latao * 0.3;

    printf("O valor em kilograma do cobre é %.2fkg e do zinco é %.2fkg", cobre, zinco);

    



    return 0;
}