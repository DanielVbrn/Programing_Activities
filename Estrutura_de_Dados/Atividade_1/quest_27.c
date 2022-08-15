#include <stdlib.h>
#include <stdio.h>

int main(){
    float C_fabrica,V_impostos, C_carroNovo;
    float P_distribuidor;
    printf("Insira o custo de fabrica: ");
    scanf("%f", &C_fabrica);
    
    P_distribuidor = C_fabrica+(C_fabrica * 0.28);
    V_impostos = C_fabrica+(C_fabrica*0.45);
    C_carroNovo = P_distribuidor+V_impostos;

    printf("O valor do carro para o consumidor será %.2f R$ e o custo do distribuidor será de %.2f R$", C_carroNovo, P_distribuidor);
    return 0;
}