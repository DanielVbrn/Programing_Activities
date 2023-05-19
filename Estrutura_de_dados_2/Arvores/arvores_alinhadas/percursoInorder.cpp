#include <stdio.h>
#include <stdlib.h>
#include <iostream>
#include "./Arvore01Incompleta.cpp"


using namespace std;




int main () {
    Arvore<int> *a = new Arvore<int>();

    a->insert(13);        
    a->insert(12);
    a->insert(25);
    a->insert(5);
    a->insert(9);
    a->insert(17);
    a->insert(22);
    a->insert(4);
    a->insert(7);
    a->insert(14);
    
    cout << "Arvore inorder" << endl;
    a->inorder();
	
};