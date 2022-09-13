#include <stdio.h>
#include <stdlib.h>

int main(){
    int num1;
    int num2;
    int div;
    int rest;

    printf("Insira um valor: ");
    scanf("%d", &num1);
    printf("Insira um valor: ");
    scanf("%d", &num2);
    div = (num1/num2);
    rest = (num1%num2);
    printf("O quociente da divisão é: %d", div);
    printf("O resto da divisão é: %d", rest);
    

    return 0;
}