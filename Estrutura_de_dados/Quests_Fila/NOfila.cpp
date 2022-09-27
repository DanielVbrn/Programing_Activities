#include <iostream>
#include <stdlib.h>
#include <string.h>
#include "../Pilha/pilhaChar.h"
#include <queue>

using namespace std;

typedef char Item;                             //Tipos de itens da pilha

class No{
	public:                          //torna publico os elementos contidos na estrutura
		Item nome;
		No *prox;
		No(Item n){
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
		
		void empilha(Item n){
			No *structF = new No(n);
			if(emptyQueue()){
				inicio = structF;    //->recebe endereço
			}else{
				fim ->prox = structF;
				//altera o prox do valor anterior do fim
			}
			fim = structF;
		}
		
		Item desempilha(){
			Item f = inicio -> nome;
			No *i = inicio;            /* Se refere ao primeiro elemento da fila */
			inicio = inicio -> prox;
		
		}
		
		
	bool emptyQueue(){
		return (inicio == NULL);
	}
	
	
};



int main(){
	Fila *f1 = new Fila();
	f1->empilha('D');
	f1->empilha('A');
	f1->empilha('N');
	f1->empilha('I');
	f1->empilha('E');
	f1->empilha('L');

	do{
		cout << f1 ->desempilha();
	} while (!(f1 -> emptyQueue()));
	
	
}
