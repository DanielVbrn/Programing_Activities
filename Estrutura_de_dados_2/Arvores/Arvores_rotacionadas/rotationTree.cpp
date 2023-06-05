#include <queue>
#include <iostream>

using namespace std;


template<class T>
class ArvoreNo {
	public:
		T el;
		ArvoreNo<T> *left,*right;
		ArvoreNo(){
			left=right=0;			
		}
		ArvoreNo(T e,ArvoreNo<T> *l=0,ArvoreNo<T> *r=0){
			el=e;
			left=l;
			right=r;
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
		~Arvore(){
			clear();
		}
		void clear(){
			root=0;
		}
		
		ArvoreNo<T>* getRoot(){
			return root;
		}
		bool isEmpty() const {
		   return root=0;
		   }
		   
		void visit(ArvoreNo<T> *p){
			cout<<p->el<<" ";
		} 
		
		T search(T el) {
			ArvoreNo<T> *p=root;
			while (p!=0){
				
				if (el==p->el)		
					return p->el;								    
				else{					
					if (el < p->el)
				       p=p->left;
				   else p=p->right;
			 	}
		    }
			return 0;			
			
		}
		 //obs: pg 209 figura 6.23
		void insert(T el){
			ArvoreNo<T> *p=root,*prev=0;
			while (p!=0){
				prev=p;
				if (el<p->el)
					p=p->left;
				else p=p->right;
			}
			if (root==0) //a arvore esta vazia
			   root=new ArvoreNo<T>(el);
			else if (el < prev->el)
				prev->left=new ArvoreNo<T>(el);
			else prev->right=new ArvoreNo<T>(el);
					
			}
		
		void percusoExtensao(){
			queue<ArvoreNo<T>*> f;
			ArvoreNo<T> *p=root;
			if (p!=NULL){
				f.push(p);
				while (!f.empty()){
					p=f.front();					
					visit(p);
					f.pop();
					if (p->left!=0)
						f.push(p->left);
					if (p->right!=0)
						f.push(p->right);
				}	}
		}
				
		void preorder(ArvoreNo<T> *p){
			if (p!=0) {
				visit(p);
				preorder(p->left);
				preorder(p->right);
			}
			
		}
		

		void backboneRight(){
			ArvoreNo<T> *tmp=root;
			ArvoreNo<T> *par;
			ArvoreNo<T> *prox; /* => tmp->left  => prox->right => tmp*/
			ArvoreNo<T> *subD; 
			
			while (tmp != nullptr) {
				if (tmp->left != nullptr) {
					prox = tmp->left;
					tmp->left = prox->right;
					prox->right = tmp;
					if (par != nullptr) {
						par->right = prox;
					} else {
						root = prox;
					}
					par = prox;
					tmp = tmp->left;
				} else {
					par = tmp;
					tmp = tmp->right;
				}
        	}	
		}

		void backboneLeft() {
			ArvoreNo<T>* tmp = root;
			ArvoreNo<T>* par = nullptr;
			ArvoreNo<T>* prox = nullptr;
			ArvoreNo<T>* subD = nullptr;

			while (tmp != nullptr) {
				if (tmp->right != nullptr) {
					prox = tmp->right;
					tmp->right = prox->left;
					prox->left = tmp;
					if (par != nullptr) {
						par->left = prox;
					} else {
						root = prox;
					}
					par = prox;
					tmp = tmp->right;
				} else {
					par = tmp;
					tmp = tmp->left;
				}
			}
		}
	};
	
	
main(){
	
	Arvore<int> *a=new Arvore<int>();

	a->insert(7);
	a->insert(22);
	a->insert(14);
	a->insert(40);
	a->insert(30);
	a->insert(63);
	a->insert(80);
	
	a->preorder(a->getRoot());

	cout<<"---Apos as rotacoes -----"<<endl;
	a->backboneLeft();
	a->preorder(a->getRoot());
		
	delete a;
	return 0;
	
}

