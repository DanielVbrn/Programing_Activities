#include <stdio.h>
#include <stdlib.h>

int main(){
    float nota1, nota2, nota3;
    float peso1, peso2, peso3; 
    float media_aritmetica, media_ponderada;  
    int opcao;
    printf("Insira qual opção deseja: \n1-Média aritmética\n2-Média ponderada\n> ");
    scanf("%d", &opcao);

    switch (opcao)
    {
    case 1:
        printf("Insira a nota 1: ");
        scanf("%f", &nota1);
        printf("Insira a nota 2: ");
        scanf("%f", &nota2);
        printf("Insira a nota 3: ");
        scanf("%f", &nota3);
    
        media_aritmetica = ((nota1+nota2+nota3)/3);
        printf("A média aritmética das notas será: %.2f", media_aritmetica);
        
        
        break;
    case 2:
        printf("Insira a nota 1: ");
        scanf("%f", &nota1);
        printf("Insira a nota 2: ");
        scanf("%f", &nota2);
        printf("Insira a nota 3: ");
        scanf("%f", &nota3);

        printf("Insira o peso da nota 1: ");
        scanf("%f", &peso1);
        printf("Insira o peso da nota 2: ");
        scanf("%f", &peso2);
        printf("Insira o peso da nota 3: ");
        scanf("%f", &peso3);
        

        media_ponderada = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/(peso1+peso2+peso3);
        printf("A média ponderada das notas será: %.2f", media_ponderada);
        break;

    default:

        break;
    }



    



    return 0;
}