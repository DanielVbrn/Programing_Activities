#include <stdio.h>
#include <stdlib.h>



typedef char  Item;                    // tipo de itens da pilha

typedef struct pilha {					
	int max;							//capacidade da pilha									
	int topo;							//posicao topo
	Item *item;							//itens da pilha			
} *Pilha;


Pilha pilha(int n){
	Pilha P = (Pilha)malloc(sizeof(struct pilha));
	P->max = n;
	P->topo = -1;
	P->item = (Item*)malloc(n*sizeof(Item));
	return P;
}

int pilhaVazia(Pilha p){
	if(p->topo == -1) return 1;
	else return 0;
}



int pilhaCheia(Pilha p){
	if(p->topo == p->max-1) return 1;
	else return 0;
}

void empilha(Item x, Pilha p){
	if(pilhaCheia(p)) {puts("pilha cheia!"); abort();}
	p->topo++;
	p->item[p->topo] = x;
}


Item desempilha(Pilha p){
	if(pilhaVazia(p)) {puts("pilha vazia!"); abort();}
	Item x = p->item[p->topo];
	p->topo--;
	return x;
}

Item top(Pilha p){
	if(pilhaVazia(p)){puts("pilha vazia!"); abort();}
	return p->item[p->topo];
}

void destroiP(Pilha *Q){
	free((*Q)->item);
	free(*Q);
	*Q = NULL;
}