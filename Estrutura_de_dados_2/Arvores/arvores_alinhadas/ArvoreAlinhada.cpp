#include <stdio.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

#ifndef THREADED_TREE
#define THREADED_TREE

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

        if(prev->el > el) {
            prev->left = newNode;
            newNode->successor = 1;
            newNode->right = prev;
            
        } else if (prev->successor == 1) {
            newNode->successor = 1;
            prev->successor = 0;
            newNode->right = prev->right;
            prev->right = newNode;
            
        } else {
            prev->right = newNode;
        }
    }

     void preorder() {
        ArvoreNo<T>* p = root;
    
        while (p != 0) {
            cout << p->el << endl;
    
            if (p->left != 0) {
                p = p->left;
            } else if (p->successor == 0) {
                p = p->right;
            } else {
                while (p != 0 && p->successor == 1) {
                    p = p->right;
                }
    
                if (p != 0) {
                    p = p->right;
                }
            }
        }
    }


    
    void inorder() {
        ArvoreNo<T>* p = root, * prev;
    
        if(p != 0) {
            while(p->left != 0) {
                p = p->left;
            };

            while (p != 0) {
                cout << p->el << endl;
                prev = p;
                p = p->right;

                if( prev->successor == 0 && p != 0  ) {
                    while(p->left != 0) {
                        p = p->left;
                    };
                }
            };
        }
    }

    protected:
        ArvoreNo<T>* root;
};

#endif


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
    
    
    cout << "Arvore preorder" << endl;
    a->preorder();
    cout << "Arvore inorder" << endl;
    a->inorder();
	
};