#include <stdlib.h>
#include <stdio.h>


int main(){
    int idade;
    int anos;
    int meses;
    int dias;
    int rest;

    printf("Insira sua idade em dias: \n");
    scanf("%d", &dias);
    rest = dias;
    anos = rest / 365 ;
    rest = rest%365;
    meses = rest / 30;
    rest = rest % 30;
    dias = rest;


    printf("A idade do usuário corresponde a %d anos, %d meses e %d dias.", anos, meses, dias);

    return 0;
}
