#include <stdio.h>
#include "../Pilha/pilha1.h"


//

int main(void){
    Pilha p = pilha(100);
    empilha(8, p);
    while(top(p)>0) empilha(top(p)/2, p);
    while(!pilhaVazia(p)) printf("%f\n", desempilha(p));
    return 0;
}