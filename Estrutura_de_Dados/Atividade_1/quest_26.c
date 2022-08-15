#include <stdlib.h>
#include <stdio.h>

int main(){
    int Anos_Fumando, N_cigarros;
    float P_carteira;
    float D_gasto;
    printf("Quantidade anos que a pessoa fuma: ");
    scanf("%d", &Anos_Fumando);
    printf("Quantidade cigarros consumidos por dia: ");
    scanf("%d", &N_cigarros);
    printf("Preço da carteira de cigarro: ");
    scanf("%f", &P_carteira);

    D_gasto = (365 * Anos_Fumando) * N_cigarros * (P_carteira/20);
    printf("Dinheiro gasto : %.2f R$", D_gasto);
    return 0;
}