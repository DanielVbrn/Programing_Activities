#include <stdio.h>
#include <stdlib.h>

int main(){
    int minutos;
    int dias;
    int horas;

    printf("Insira o valor em minutos: ");
    scanf("%d", &minutos);

    dias = minutos/ 1440;
    horas = minutos%1440;
    horas = minutos/60;
    minutos = minutos/60;


    printf("O valor digitado corresponde a %d dias, %d horas e %d minutos .", dias, horas, minutos);

    return 0;
}