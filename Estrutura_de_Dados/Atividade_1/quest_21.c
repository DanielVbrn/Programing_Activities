#include <stdio.h>
#include <stdlib.h>


int main(){
    int meses;
    int anos;
    printf("Insira a quantidade de meses que deseja: ");
    scanf("%d", &meses);
    anos = meses / 12;
    meses = meses%12;

    printf("o Valor correponde a %d anos e %d meses", anos, meses);

    return 0;
}