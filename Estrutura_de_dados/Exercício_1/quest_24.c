#include <stdio.h>
#include <stdlib.h>


int main(){
    int idade;
    int anos;
    int meses;
    int dias;


    printf("Insira sua idade(anos,meses e dias): \n\n");

    printf("Anos: ");
    scanf("%d", &anos);
    printf("Meses: ");
    scanf("%d", &meses);
    printf("Dias: ");
    scanf("%d", &dias);

    idade = (anos * 365) + (meses * 30) + dias;

    printf("A quantidade de dias correspondentes a idade do usuário é: %d", idade);

    


    return 0;
}