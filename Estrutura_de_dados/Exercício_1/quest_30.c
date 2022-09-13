#include <stdlib.h>
#include <stdio.h>

int main(){
    int value, pretacoes, rest, value_f;

    printf("Insira um valor qualquer: ");
    scanf("%d", &value);

    pretacoes = value / 3;
    rest = value%3;
    value_f = value - (pretacoes*2);

    printf("O valor da entrada será %d e o valor da pretacao sera %d", value_f, pretacoes);


    return 0;
}