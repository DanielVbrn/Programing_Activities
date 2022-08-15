#include <stdio.h>
#include <stdlib.h>

int main(){
    float salario;
    float aumento;
    float diminuicao;
    int opcao;
    printf("Insira o salário: ");
    scanf("%f", &salario);
    
    printf("Insira uma das opções: \n1- aumento \n2- diminuicao \n>");
    scanf("%d", &opcao);
    switch (opcao)
    {
    case 1:
        aumento =  (salario + (salario*0.25));
        printf("Salário antes do aumento: R$%.2f", salario);
        printf("Salário após o aumento: R$%.2f", aumento);
        break;
    case 2: 
        diminuicao =  (salario - (salario*0.25));
        printf("Salário antes do aumento: R$%.2f", salario);
        printf("Salário após a diminuicao: R$%.2f", diminuicao);

        break;
    default:
        break;
    }


    return 0;
}