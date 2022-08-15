#include <stdio.h>
#include <stdlib.h>

int main(){
    float velocidade;
    float ms;
    float r;
    ms = 3.6; 
    printf("Insira a velocidadee em m/s: ");
    scanf("%f", &velocidade);
    r = (ms * velocidade);
    
    printf("%.2f em m/s = %.2f em km/h ", velocidade, r);
    return 0;

}