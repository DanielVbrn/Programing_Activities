#include "iostream"
#include "stdlib.h"
#include "./first_arvore.hpp"


int main(){
    NoArv* arv = arv_cria(
                    'd',
                    arv_cria(
                        'a',
                        arv_cria('i',NULL,NULL),
                        arv_cria('e',NULL,NULL)
                    ),
                        arv_cria('n',NULL,arv_cria('l',NULL,NULL)
                    )
                );
    NoArv* arv2 = NULL;

    cout << qtdNos(arv) << endl;   //quandtidade de nós
    cout << alturaArv(arv) << endl; // altura da arvore
    cout << alturaArv(arv2) << endl;  //altura da avore vazia
    
    cout << treeContain(arv, 'd') << endl;    //item presente na arvore
    // cout << treeContain(arv1, 'a') << endl;
    // cout << treeContain(arv1, 'n') << endl;
    // cout << treeContain(arv1, 'l') << endl;
    // cout << treeContain(arv1, 'j') << endl;
 
}