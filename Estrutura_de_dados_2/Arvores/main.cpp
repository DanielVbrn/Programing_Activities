#include "iostream"
#include "stdlib.h"
#include "./first_arvore.hpp"


int main(){
    NoArv* arv = arv_cria(
                    1,
                    arv_cria(
                        2,
                        arv_cria(4,NULL,NULL),
                        arv_cria(5,NULL,NULL)
                    ),
                        arv_cria(3,NULL,arv_cria(6,NULL,NULL)
                    )
                );
    NoArv* arv2 = NULL;

    cout << qtdNos(arv) << endl;   //quandtidade de nós
    cout << alturaArv(arv) << endl; // altura da arvore
    cout << alturaArv(arv2) << endl;  //altura da avore vazia
    
    cout << treeContain(arv, 1) << endl;    //item presente na arvore
    // cout << treeContain(arv1, 'a') << endl;
    // cout << treeContain(arv1, 'n') << endl;
    // cout << treeContain(arv1, 'l') << endl;
    // cout << treeContain(arv1, 'j') << endl;
 
}