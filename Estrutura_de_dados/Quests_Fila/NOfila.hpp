#include <iostream>
#include <stdlib.h>
#include <string.h>
#include "../Pilha/pilhaChar.h"
#include <queue>

using namespace std;

typedef char ItemX;                             //Tipos de itens da pilha

class No{
	public:                          //torna publico os elementos contidos na estrutura
		ItemX nome;
		No *prox;
		No(ItemX n){
			nome = n;
			prox = NULL;
		}
};

class Fila{
	public:
		No *inicio;
		No *fim;

		Fila(){
			inicio = NULL;
			fim = NULL;
		}
		
		void enfileira(ItemX n){
			No *structF = new No(n);
			if(emptyQueue()){
				inicio = structF;    //->recebe endereço
			}else{
				fim ->prox = structF;
				//altera o prox do valor anterior do fim
			}
			fim = structF;
		}
		
		ItemX desenfileira(){
			ItemX f = inicio -> nome;
			No *i = inicio;            /* Se refere ao primeiro elemento da fila */
			inicio = inicio -> prox;
			free(i);
			return f;
		}
		
		
	bool emptyQueue(){
		return (inicio == NULL);
	}
	
	
};



// int main(){
// 	Fila *f1 = new Fila();
// 	f1->enfileira('D');
// 	f1->enfileira('A');
// 	f1->enfileira('N');
// 	f1->enfileira('I');
// 	f1->enfileira('E');
// 	f1->enfileira('L');

// 	do{
// 		cout << f1 ->desenfileira();
// 	} while (!(f1 -> emptyQueue()));
	
	
// }
