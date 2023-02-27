#include "iostream"
#include "stdlib.h"

using namespace std;



struct noArv{
    char info;
    struct noArv* esq;
    struct noArv* dir;
};

typedef struct noArv NoArv;

NoArv* arv_vazia(){
    return NULL;
}

NoArv* arv_cria(char c, NoArv* sae, NoArv* sad){
    NoArv* p = (NoArv*)malloc(sizeof(NoArv));
    p->info = c;
    p->esq = sae;
    p->dir = sad;
    return p;
};


void arv_imprime(NoArv* a){
    if(!arv_vazia()){
        cout << a->info << endl;
        arv_imprime(a->esq);
        arv_imprime(a->dir);
    }
}

// class No{
//     public:
//         char nome;
//         No *left;
//         No *right;
//         No(char n){
//             nome=n;
//             left =NULL;
//             right =NULL;
//         };

// };

// class Arvore{
//     public:
//         No *raiz;
//         Arvore(){
//             raiz = NULL;
//         };
//         // int isEmpty(){
//         //     if(raiz == NULL) return;
//         // };
//         int arv_vazia(No* a){
//             return a== NULL;
//         }
//         void cria_No(char nov, int lado, char pai){
//             No *novo = new No(nov);
//             insere(raiz, novo, lado, pai);
//         };

//         void insere(No *arv, No *novo, int lado, char pai){
//             if(arv != NULL){
//                 if(arv->nome == pai){
//                     if(lado ==1){
//                         if(arv->left == NULL){
//                             arv->left = novo;
//                         }else{
//                             cout << "\n Erro - posicao ocupada!" << endl ;
//                         }
//                     }
//                     if(lado ==2){
//                         if(arv->right == NULL){
//                             arv->right = novo;
//                         }else{
//                             cout << "\n Erro - posicao ocupada!" << endl ;
                            
//                         }
//                     }
//                 }else{
//                     insere(arv->right,novo,lado,pai);
//                     insere(arv->left,novo,lado,pai);
//                 }
//             }
//         }

//         void imprime(No *n){
//             if(raiz == NULL){
//                 cout << "\n Vazio!";
//             }else{
//                 if(n!= NULL) {
//                     cout << "<" << n->nome;
//                     imprime(n->left);
//                     imprime(n->right);
//                     cout << ">";
//                 }else{
//                     cout << "<>";
//                 }
//             }
//         }
// };

main(){
    NoArv* a1 = arv_cria('d', arv_vazia(),arv_vazia());
    NoArv* a2 = arv_cria('b', arv_vazia(),a1);
    NoArv* a3 = arv_cria('e', arv_vazia(),arv_vazia());
    NoArv* a4 = arv_cria('f', arv_vazia(),arv_vazia());
    arv_imprime(a1->dir);
    arv_imprime(a1->esq);
    // arv_imprime(a1->info)

}
