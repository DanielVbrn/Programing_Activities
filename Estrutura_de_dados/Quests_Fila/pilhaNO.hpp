#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

typedef char Itemp;


// class No{
// 	public:
// 		char nome;
// 		No *prox;
// 		No(char n){
// 			nome = n;
// 			prox = NULL;
// 		}
// };

class Stack {
	public:
		No *topo;
		
		Stack(){
			topo = NULL;
		}
		
		void empilha(Itemp n){
			No *itemPush = new No(n);
			itemPush ->prox = topo;

			topo = itemPush;
		}
		
		Itemp desempilha(){
			Itemp content = topo ->nome;
			No *itemPop = topo;
			topo = itemPop->prox;
			free(itemPop);
			return content;
		}
		
		int pilhaVazia(){
			return (topo == NULL);
		}

		void deletPilha(Pilha *p){
			while (!(p->pilhaVazia()))
			{
				p->desempilha();
			}
			free(p);
			free(topo);
			cout << "Stack deleted";
		}
	
	
};

// int main(){
// 	int option;
// 	Pilha *p = new Pilha();
// 	p ->empilha('d');
// 	p ->empilha('a');
// 	p ->empilha('n');
// 	p ->empilha('i');
// 	p ->empilha('e');
// 	p ->empilha('l');

	
// 	cin >> option;
// 	p ->deletPilha(p);
// 	p->empilha('l');
// 	cout << p ->pilhaVazia() << endl;

	
// }
