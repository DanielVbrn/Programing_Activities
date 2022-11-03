#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;
class No{
	public:
		int mat;
		char nome[50];
		No *prox;
		No *ant;
		No(int m,char n[50]){
			mat=m;
			strcpy(nome,n);
			prox=NULL;
			ant=NULL;
		}
};

class Lista{
	public:
		No *ant;
		No *inicio;
		No *fim;
	
	    Lista(){
			ant = NULL;
	    	inicio = NULL;
	    	fim = NULL;
		};	
		void addToFinal(int m, char n[50]){
			No *novo = new No(m, n);
			if(fim == NULL){
				inicio = novo;
				fim = novo;
			}else{
				ant = fim;
				fim->prox = novo;
				fim = novo;
			}
		};
		
		void addToIni(int m, char n[50]){
			No *novo = new No(m,n);
			if (inicio == NULL) {
				inicio = novo; 
				fim = novo;
			} else {

				novo->prox = inicio;
				inicio->ant = novo;
				inicio = novo;
			}
		};
		
		void addOrd(int m, char n[50]){
			No *novo = new No(m, n);
			No *atual = inicio;
			while (atual->prox != NULL && atual->prox->mat < m ){	
				atual = atual->prox;
				
			}

			novo->prox = atual->prox;
			atual->prox->ant = novo;
			novo->ant = atual;
			atual->prox = novo;
			
		};
		
		//mostra todos os elementos do inicio ao final da lista
		void mostraIniFim(){
			No *elements = inicio;
			if (elements == NULL){
				cout << -1 << endl;
			}else{
				while (elements != NULL){
					cout << elements->mat << " " << elements->nome << endl;
					elements = elements->prox;
				}

			}
			
		};
		
		// mostra todos os elementos do final ao inicio da lista
		void mostraFimIni(){
			No *elements = fim;
			if (elements == NULL) {
				cout << -1 << endl;
			} else {
				while (elements != NULL){
					cout << elements->mat << " " << elements->nome << endl;
					elements = elements->ant;					
				}	
			}		
		};
		
		int removerFinal(){			
			No *ultimo = fim;
			fim = fim->ant;
			free(ultimo);
			return ultimo->mat;
			
	
		};
		
		int removerInicio(){
			No *primeiro = inicio;
			inicio = inicio->prox;
			free(primeiro);
			return primeiro->mat;
		};


		int remover(int m){
			No *elemento ;
			if (inicio->mat == m){
				removerInicio();
			}else if(fim->mat == m){
				removerFinal();
			}else{
				
				for (elemento = inicio->prox; elemento->mat != m; elemento = elemento->prox){
					if (elemento->mat > m  || elemento == NULL){
						return 0;
					}
					
				}
				elemento->ant->prox = elemento->prox;
				elemento->prox->ant = elemento->ant;
				free(elemento);
    		};
			return 1;
		}		
};
// main(){
// 	Lista *l = new Lista();
// 	l->addToIni(12,"Daniel");
// 	l->addToIni(4,"Marcos");
// 	l->addToIni(43,"João");
// 	l->addToIni(32,"Fabio");

// 	// l->addToFinal(12,"Daniel");
// 	// l->addToFinal(4,"Marcos");
// 	// l->addToFinal(43,"João");
// 	// l->addToFinal(32,"Fabio");
	


// 	// l->addOrd(12,"Daniel");
// 	// l->addOrd(4,"Marcos");
// 	// l->addOrd(43,"João");
// 	// l->addOrd(32,"Fabio");
	

// 	cout << "----------------------------------------------------" << endl;
// 	// l->mostraFimIni(); 
// 	// cout << "----------------------------------------------------" << endl;
// 	l->removerFinal();
// 	l->mostraIniFim(); 

// 	// l->removerInicio();
// 	// cout << "----------------------------------------------------" << endl;	

// //    if (l->remover(4)==1)
// //        cout<<"Elemento removido!!";
// //    else
// //        cout<<"Elemento nao encontrado!!";    
// //    l->mostraIniFim(); 
	
// // l->mostra();
// }
