#include "stdio.h"
#include "stdlib.h"
#include "iostream"
#include "./first_arvore.hpp"
using namespace std;

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
    NoArv* arv2 = arv_cria(
                    1,
                    arv_cria(
                        2,
                        arv_cria(4,NULL,NULL),
                        arv_cria(5,NULL,NULL)
                    ),
                        arv_cria(3,NULL,arv_cria(8,NULL,NULL)
                    )
                );
    cout << igual(arv, arv2) << endl;

}