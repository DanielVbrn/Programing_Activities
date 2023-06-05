#include <iostream>
#include <queue>
using namespace std;

template<class T>
class ArvoreNo {
	public:
		T el;
		ArvoreNo<T> *left, *right;

		ArvoreNo(){
			left = right = 0;			
		}

		ArvoreNo(T e, ArvoreNo<T> *l = 0, ArvoreNo<T> *r = 0){
			el = e;
			left = l;
			right = r;
		}
};

template<class T>
class Arvore {
	protected:
		ArvoreNo<T> *root;
	public:
		Arvore(){
			root = 0;			
		}
		
		
		ArvoreNo<T>* getRoot(){
			return root;
		}

		bool isEmpty() {
		   return root=0;
		}
		   
		void visit(ArvoreNo<T> *p){
			cout<<p->el<<" ";
		} 
		
		 //obs: pg 209 figura 6.23
		void insert(T el){
			ArvoreNo<T> *p=root,*prev=0;
			while (p!=0){
				prev=p;
				if (el<p->el){
					p=p->left;
                } else {
                    p=p->right;
                } 
			}
			if (root==0){
			   root=new ArvoreNo<T>(el);        //->arvore vazia
            } else if (el < prev->el){
				prev->left=new ArvoreNo<T>(el);

            } else {
                prev->right = new ArvoreNo<T>(el);
            }
		}
		
		void MorrisInOrder() {
		    ArvoreNo<T> *p = root, *tmp;
		    
		    while(p != 0) {
		        if(p->left == 0) {
		            visit(p);
		            p = p->right;
		        }
		        else {
		            tmp = p->left;
		        
		            while(tmp->right != 0 && tmp->right != p){
		                tmp = tmp->right;
		            }

		            if(tmp->right == 0) {
                        tmp->right = p;
                        p = p->left;
                    } else {
		                visit(p);
		                tmp->right = 0;
		                p = p->right;
		            }  
		        }
		    }
		}

        void morrisPreOrder() {
            ArvoreNo<T> *p = root, *tmp;
            
            while (p != 0) {
                if (p->left == 0) {
                    visit(p);
                    p = p->right;
                } else {
                    tmp = p->left;
                    
                    while (tmp->right != 0 && tmp->right != p) {
                        tmp = tmp->right;
                    }
                    
                    if (tmp->right == 0) {
                        visit(p);
                        tmp->right = p;
                        p = p->left;
                    } else {
                        tmp->right = 0;
                        p = p->right;
                    }
                }
            }
        }

        void morrisPreorder2(){
            ArvoreNo<T> *p=root, *tmp;
            while (p!=0){
                if (p->left==0){
                    visit(p);
                    p=p->right;
                } else {
                    tmp = p->left;
                    while (tmp->right!=0 && tmp->right!=p)
                        tmp=tmp->right;
                        if (tmp->right==0){
                               visit(p);                    
                            tmp->right=p;
                            p=p->left;
                        } else {                    
                            tmp->right=0;
                            p=p->right;    
                        } 
                }
            }   
        }
};

main(){
	
	Arvore<int> *a = new Arvore<int>();
    a->insert(10);        
    a->insert(5);
    a->insert(7);        
    a->insert(3);        
    a->insert(15);
    a->insert(20);        
    a->insert(24);

   
    
    cout << "Morris InOrder: " << endl;
    a->MorrisInOrder();

    

    /*
        Sem uso de pilha explícita: Ao contrário dos algoritmos tradicionais de percurso em ordem que utilizam uma pilha para armazenar os nós a serem visitados, o algoritmo de Morris InOrder utiliza os ponteiros left e right existentes nos nós da árvore para rastrear a travessia.

        Espaço adicional constante: O algoritmo não requer espaço adicional além da estrutura da própria árvore. Ele utiliza os ponteiros left e right dos nós para criar as conexões necessárias durante o percurso.

        Preserva a estrutura original da árvore: Durante a execução do algoritmo, a estrutura original da árvore não é modificada. Os ponteiros left e right dos nós são temporariamente alterados para realizar as conexões necessárias, mas são restaurados ao final do percurso.
    
    
    */
}