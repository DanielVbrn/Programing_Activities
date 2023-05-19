#include "stdio.h"
#include "stdlib.h"
#include "iostream"
#include "./first_arvore.hpp"
using namespace std;

main(){
    NoArv* arv = arv_cria(
                    1,
                    arv_cria(
                        2,
                        arv_cria(4,NULL,NULL),
                        arv_cria(5,NULL,NULL)
                    ),
                    arv_cria(
                        3,NULL,arv_cria(6,NULL,NULL)
                    )
                );
    exibe_A_dec(arv);
}