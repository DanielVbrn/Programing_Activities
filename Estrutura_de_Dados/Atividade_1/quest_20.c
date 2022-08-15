#include <stdio.h>
#include <stdlib.h>

int main(){
    int horas;
    int semanas;
    int dias;

    printf("Insira a quantidade em horas: ");
    scanf("%d", &horas);

    semanas = horas/168;
    dias = horas/24;

    printf("%d Semanas, %d dias e %d horas.", semanas, dias, horas);

    return 0;
}