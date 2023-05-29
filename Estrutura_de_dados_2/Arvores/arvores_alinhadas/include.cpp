#include "iostream"
#include "stdio.h"
#include <stdlib.h>
 
template<class T>

class ArvoreNo {
    public:
        ArvoreNo() {
            left = right = 0;
        }

        ArvoreNo (const T& e, ArvoreNo *l = 0, ArvoreNo *r = 0) {
            el = e, left = l, right = r, successor = 0;
        };
        T el;
        ArvoreNo *left, *right;
        unsigned int successor: 1;
};


template<class T>

class Arvore {
    public: 
    Arvore() {
        root = 0;
    }



    void insert(const T& el) {
        ArvoreNo<T>* p;
        ArvoreNo <T>* prev;
        ArvoreNo<T>* newNode = new ArvoreNo<T>(el);

        if(root == 0) {
            root = newNode;
            return;
        }
        p = root;
        
        while(p != 0) {
            prev = p;
            if(p->el > el) {
                p = p->left;
            } else if (p->successor == 0) {
                p = p->right;
            } else{
                break;
            }
        }   
    }


    void balancear(T vetor[], int first, int last){
        if( first <= last ) {
            int middle = (first + last) / 2;
            insert(vetor[middle]);
            balancear(vetor,first,middle-1);
            balancear(vetor,first,middle-1);
        }
    }

    
};


main(){

}