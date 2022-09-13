#include <stdio.h>
#include "pilha1.h"


int main(void){
    Pilha P = pilha(3);
    push(1,P);
    push(2,P);
    printf("%d\n", pop(P));
    printf("%d\n", pop(P));
    printf("%d\n", pop(P));
    
    
    return 0;
}