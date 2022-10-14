#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <cctype>

#include <iostream>
#include <vector>
using namespace std;

class No{
	public:
		int mat;
		char nome[23];
		No *prox;
		No(int m,char n[23]){
			mat=m;
			strcpy(nome,n);			
			prox = NULL;
		}
};

class Lista{
	public:
		No *inicio;
		No *fim;
	
	    Lista(){
	    	inicio = NULL;
	    	fim = NULL;
		}	
		void addToInicio(int m, char n[23]){
			No *novo= new No(m,n);
			if (inicio==NULL){
				inicio = novo;
				fim = novo;
				
			}else{
				novo->prox = inicio;
				inicio=novo;
			}
		}

		void addToFinal(int m, char n[23]){
			No *novo = new No(m,n);
			if (fim == NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox = novo;
				fim = novo;
			}
		}
		
			
		int list_vazia(){
			return (inicio == NULL);
		}
		
		void consultar(int mat){

			No *atual = inicio;

			if (list_vazia()){
				cout<<"\nLista vazia!!!";
			}
			while (atual!=NULL){

				if(atual->mat == mat){
					cout << atual->nome << endl;
					cout << atual->mat << endl;
					break;
				}
				atual = atual->prox;

			};
			cout << "Aluno não existe." << endl;

	
						
		}
		
		int remove(int mat){
			No *anterior,*atual;
			anterior = NULL;
			atual = inicio;
			if (list_vazia()) {
				cout<<"Lista vazia!!!" << endl;
			} else {
				while (atual != NULL) {
					if (atual->mat == mat) {
						
						if (atual == fim) {
							fim = anterior;	
							fim->prox = NULL;	
							free(atual);
						}	else if (atual == inicio) {
							inicio = inicio->prox;
							free(atual);
						} else {
							anterior->prox = atual->prox;
							free(atual);

						}
						return 1;						
											
					}
					anterior = atual;					
					atual = atual->prox;
				}
				
			}
			return 0;
			

		}


		int listElements(){
			No *elementos = inicio;
			if (list_vazia()){
				cout<<"Lista vazia!!!" << endl;
			}else{
				while (elementos != NULL)
				{
					cout << elementos->nome << endl;
					cout << elementos->mat << endl;
					elementos = elementos->prox;
				}

			}
			
			
			
			return 0;
			
		}	
		
		// auxiliar no metodo remove, vai 
		//retornar o endereco do anterior
		No *busca(int mat){
			No *busca =  inicio;
			while (busca != NULL && busca->mat != mat)
			{
				busca = busca->prox;

			}
			if (busca != NULL){
				return busca;
			}else{
				cout << "Não está na lista" << endl;
			}
			
			
		}
		
		void removeTodos(){
			No *atual=inicio;
			No *proximo=NULL;
			while (atual!=NULL){
					proximo=atual->prox;
					cout<<"\n Apaga:"<<atual->nome;
					free(atual);
					atual=proximo;						
			}
			inicio=atual;
		}
		
		// criar uma nova lista que seja o inverso da primeira
		Lista*  crialistainversa(){
			Lista *lista = new Lista();
			No *atual = inicio ;
			if (list_vazia()){
				cout<<"Lista vazia!!!" << endl;
			}else{
				while (atual != NULL){
					lista->addToInicio(atual->mat, atual->nome)	;
					atual = atual->prox;
				}
			}
			return lista;
		}
		
		//inverter a propria lista
		void listainvertida(){
			No *aux = inicio;
			No *proximo = aux->prox;
			if (list_vazia()){
				cout<<"Lista vazia!!!" << endl;
			}else{
				while (proximo!= NULL) {
					addToInicio(proximo->mat, proximo->nome);
					proximo = proximo->prox;
					
				}
				fim = aux;
				proximo = aux->prox;
				aux = NULL;

				while (proximo != NULL) {
					aux = proximo;
					proximo = proximo->prox;
					free(aux);
					
				}
				
			}
			

		}
};

int main(){
	Lista *lista = new Lista();
	lista->addToFinal(1,"Joao");
	lista->addToFinal(2,"Gabriela");
	lista->addToFinal(3,"Fabiola");
	lista->addToInicio(4,"Joana");
	lista->addToInicio(5,"Cristiano");
	lista->listElements();
	cout << "==========================" << endl;
	lista->listainvertida();
	lista->listElements();
	cout << "==========================" << endl;
	// cout << lista->fim->mat << " -> " << lista->fim->nome << endl;
	// Lista* lista2 = lista->crialistainversa();
	// lista2->listElements();
	// l->remove(4);
	// No *achar = l->busca(4);
	// cout << achar->mat << endl;
	// cout << achar->nome << endl;
	// l->listElements();
	// l->busca(5);
 
 


   return 0;
}


