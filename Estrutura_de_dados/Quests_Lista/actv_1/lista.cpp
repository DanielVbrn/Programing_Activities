#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct aluno
{
	int mat;
	string nome;
} Aluno;

Aluno lista[30];
int b = 0;

void incluirDesordenado(Aluno e)
{
	lista[b] = e;
	cout << e.nome << endl;
	cout << e.mat << endl;
	b++;
}

// retorna a posicao do elemento procurado
int procura(int mat)
{	
	int p;
	for (int i = 0; i < b; i++)
	{
		if(lista[i].mat == mat){
			p = i;
			break;
		}/* else{
			cout << "Matricula não encontrada..." << endl;
		} */
	}
	return p;
}

// recebe a posicao e imprime o elemento na tela
void mostrar(int pos)
{
	cout << lista[pos].nome << endl;
	cout << lista[pos].mat << endl;
	
}

// procura o elemento e depois mostra o elemento encontrado (se nao for encontrado informa q ele nao existe)
void consultar(int mat)
{
	for (int i = 0; i < b; i++)
	{
		
		if(lista[i].mat == mat){
			cout << lista[i].mat << endl;
			cout << lista[i].nome << endl;

		}else{
			cout << "nao foi encontrado" << endl;
		}
		
		
	}
	
}

// estrat�gia 1: colocar o ultimo elemento da lista na posi��o do elemento removido
void remover00(int mat)
{
	int i = procura(mat);
	lista[i] = lista[b-1];
	free(&lista[b--]);
	b--;
	
}

// estrat�gia 2: mover TODOS os elementos que est�o AP�S  o elemento que deve ser removido UMA POSI��O A FRENTE.
void remover01(int mat)
{
	int a = procura(mat);
	for (int i = a; i < b; i++)
	{
		lista[i] = lista[i+1];

	}
	free(&lista[b]);
	b--;
	

}

main()
{	
	int j;
	int d;
	int i;
	Aluno a;
	Aluno b;
	Aluno c;
	a.nome = "Daniel";
	a.mat = 22;

	b.nome = "Marcos";
	b.mat = 45;

	c.nome = "João";
	c.mat = 233;

	incluirDesordenado(a);
	incluirDesordenado(b);
	incluirDesordenado(c);

	procura(22);
	
	
	
	mostrar(22);
	
	consultar(45);
	remover00(45);
	remover01(22);

	return 0;
}
