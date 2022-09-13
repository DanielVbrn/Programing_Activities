#include <stdio.h>
#include <stdlib.h>

int main(){
    int m;
    int km;
    printf("Insira um valor em metros: ");
    scanf("%i", &m);
    

    km = m / 1000;
    printf("O valor digitado corresponde a %i metros e a %i kilometros", m,  km);

    return 0;
}