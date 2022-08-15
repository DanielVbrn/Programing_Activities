#include <stdio.h>
#include <stdlib.h>

int main(){
    float valor;
    float real;
    float V_real;
    int opcao;
    
    printf("Insira o um valor: ");
    scanf("%f", &valor);

    printf("Insira qual opcao deseja para converter: \n1- Dolar para real\n2- Real para dolar\n>");
    scanf("%d", &opcao);
    switch (opcao)
    {
    case 1:
        printf("Insira o valor em dolar: ");
        scanf("%f", &valor);
        V_real = valor * 5.08;

        break;
    
    case 2:
        V_real = (valor/5.08);
        break;
    default:
        printf("Valor inválido!");
    }

    printf("O valor do dolar em reais é: R$%.2f", V_real);
    return 0;
}