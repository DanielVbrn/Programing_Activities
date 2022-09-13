#include <stdio.h>
#include <stdlib.h>



struct TipoCelula{
	int item;
	TipoCelula *prox;
};


int Pilha_count;
TipoCelula *top;




void Cronstruct(){
	top = NULL;
	Pilha_count=0;
}

void Destruct(){
	if(top == NULL){
		return true;
	}else{
		return false;
	}
}

void pilha_length(){
	
}


void pilha_empty(){
	if(top == NULL){
		return true;
	}else{
		return false;
	}
}


void pilha_push(int valor){
	TipoCelula *Nova_celula = (TipoCelula*)malloc(sizeof(TipoCelula))

	if(Nova_celula == NULL){
		return false;
	}else{
		Nova_celula->item=valor;
		Nova_celula->prox=top;

		top = Nova_celula;

		count++;
		return true;
	}
}


void pilha_pop(int &valor){
	TipoCelula *Temp;
	if(pilha_empty()){
		return false;
	}else{
		valor = top->item;
		Temp = top;
		top = top->prox;

		free(Temp);
		count--;
		return true
	}
}


void top_pilha(int &valor){
	if (pilha_empty())
	{
		return false;
	}else{
		valor=top->item;
	}
	
}




